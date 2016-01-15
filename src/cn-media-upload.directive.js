(function() {
  "use strict";

  angular
      .module('cn.ui')
      .directive('mediaUpload', mediaUpload);

  function mediaUpload() {
    return {
      restrict: 'E',
      scope: {
        cnUploadPath: '=',
        cnFileType: '=',
        ngModel: '='
      },
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <div class="img-placeholder col-sm-6" ng-class="{ empty: !vm.filePath }">\
          <img ng-if="vm.cnFileType === \'image\'" ng-src="{{vm.filePath}}"/>\
          <video ng-if="vm.cnFileType === \'video\' && vm.filePath"\
                 ng-src="{{vm.filePath}}"\
                 controls="controls"/>\
        </div>\
        <file-upload class="col-sm-6"\
                     btn-text="Upload {{vm.cnFileType | titleCase}}"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    }
  }

  Upload.$inject = ['$q', '$http', '$sce'];
  function Upload($q, $http, $sce) {
    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setFilePath);

      var formData = new FormData();
      formData.append(vm.cnFileType, $files[0]);

      $.ajax({
        url: vm.cnUploadPath,
        headers: $http.defaults.headers.common,
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: dfr.resolve
      });
    }

    function setFilePath(response) {
      vm.ngModel = response[vm.cnFileType];
      vm.filePath = $sce.trustAsResourceUrl(response.path);
    }
  }
})();