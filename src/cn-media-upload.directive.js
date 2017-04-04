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
        cnPreviewPath: '=',
        cnModelValueKey: '=',
        ngModel: '=',
        cnDisabled: '=',
        cnExistingPreview: '=',
        cnData: '='
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
                     cn-disabled="vm.cnDisabled"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar', '$scope'];
  function Upload($q, $http, $sce, cfpLoadingBar, $scope) {
    var vm = this;

    vm.uploadFile = uploadFile;

    activate();

    function activate() {
      if (vm.cnExistingPreview) {
        vm.filePath = $sce.trustAsResourceUrl(`/uploads/facebook/${vm.cnExistingPreview}`);
      } else if (vm.cnFileType === 'image' && vm.ngModel) {
        vm.filePath = $sce.trustAsResourceUrl(vm.ngModel);
      } else if (vm.cnFileType === 'video' && vm.ngModel) {
        vm.filePath = $sce.trustAsResourceUrl(vm.ngModel.media);
      }
    }

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setFilePath).catch(handleError);

      var formData = new FormData();
      formData.append(vm.cnFileType, $files[0]);

      _.each(vm.cnData, function(value, key) {
        if(value) formData.append(key, value);
      });

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

    function setFilePath(response) {
      cfpLoadingBar.complete();
      vm.ngModel = response[vm.cnModelValueKey || 'media_id_string'];
      vm.filePath = $sce.trustAsResourceUrl(response[vm.cnPreviewPath || 'cn_preview_url']);
      let ngModelController = getNgModelController($scope);
      if (ngModelController) {
        _.each(ngModelController.$error, (v, e) => {
          ngModelController.$setValidity(e, true);
        });
      }
    }

    function handleError(err) {
      cfpLoadingBar.complete();
      let error = JSON.parse(err.responseText).error;
      $scope.$emit("citizenNet:toastEvent", { directiveData: { type: 'error', body: error } });
    }

    function getNgModelController(scope) {
      if (scope.ngModel) {
        return scope.ngModel;
      } else if (scope.$parent) {
        return getNgModelController(scope.$parent);
      } else {
        return null;
      }
    }
  }
})();
