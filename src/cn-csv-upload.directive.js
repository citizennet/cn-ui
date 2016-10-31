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
      link: Link,
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <file-upload class="col-sm-6"\
                     btn-text="Upload CSV"\
                     accept=".csv"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  function Link($scope, elem, attrs, ctrl) {
    $scope.$watch('vm.ngModel', function(newVal, prevVal) {
        if($scope.onChange) {
          $scope.onChange({$value: newVal});
        }
        $scope.$parent.$parent.ngModel.$setValidity('schemaForm', true);
        if($scope.$parent.$parent.form.required){
          $scope.$parent.$parent.ngModel.$setValidity('tv4-302', !_.isEmpty($scope.vm.ngModel));
        }
        if(!angular.equals(newVal, prevVal)) {
          $scope.$parent.$parent.ngModel.$setDirty();
        }
      });
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar', '$rootScope', 'EVENTS'];
  function Upload($q, $http, $sce, cfpLoadingBar, $rootScope, EVENTS) {
    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setModelValue, setError);

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

    function setError(rawResp) {
      var response = JSON.parse(rawResp.responseText);

      $rootScope.$broadcast(EVENTS.httpError, {
        status: response.status,
        errors: [{data: response.error}]
      });

      cfpLoadingBar.complete();
    }
  }
})();