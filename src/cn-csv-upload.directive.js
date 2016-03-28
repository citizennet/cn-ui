(function() {
  "use strict";

  angular
      .module('cn.ui')
      .directive('csvUpload', csvUpload);

  function csvUpload() {
    return {
      restrict: 'E',
      scope: {
        cnUploadPath: '=',
        ngModel: '=',
      },
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <file-upload class="col-sm-6"\
                     btn-text="Upload CSV"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar'];
  function Upload($q, $http, $sce, cfpLoadingBar) {
    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setModelValue, cfpLoadingBar.complete);

      var formData = new FormData();
      formData.append('csv', $files[0]);

      $.ajax({
        url: vm.cnUploadPath,
        headers: $http.defaults.headers.common,
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: dfr.resolve,
        error: dfr.reject
      });

      cfpLoadingBar.start();
    }

    function setModelValue(response) {
      cfpLoadingBar.complete();
      vm.ngModel = response;
    }
  }
})();