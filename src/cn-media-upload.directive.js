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
        cnForm: '=',
        cnData: '=',
        cnKey: '=',
        cnImagePreviews: '='
      },
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <div class="img-placeholder col-sm-6" ng-class="{ empty: !vm.filePath }">\
          <img ng-if="vm.cnFileType === \'image\'" ng-src="{{vm.filePath}}"/>\
          <video ng-if="vm.cnFileType === \'video\' && vm.filePath"\
                 ng-src="{{vm.filePath}}"\
                 controls="controls" preload="none"/>\
        </div>\
        <file-upload class="col-sm-6"\
                     btn-text="Upload {{vm.cnFileType | titleCase}}"\
                     cn-disabled="vm.cnDisabled"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar', '$scope', 'md5', 'uuid4'];
  function Upload($q, $http, $sce, cfpLoadingBar, $scope, md5, uuid4) {
    function mediaUploadTag() {}
    $scope.__tag = new mediaUploadTag();

    var vm = this;

    vm.uploadFile = uploadFile;
    $scope.$watch('vm.ngModel', updatePreview);
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

    function updatePreview() {
      if (vm.cnFileType === 'image' && vm.ngModel && vm.ngModel.includes && vm.ngModel.includes("/")) {
        vm.filePath = $sce.trustAsResourceUrl(vm.ngModel);
      }
      else if (_.get(vm.cnImagePreviews, vm.cnKey)) {
        vm.filePath = $sce.trustAsResourceUrl(_.get(vm.cnImagePreviews, vm.cnKey));
      }
    }

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setFilePath).catch(handleError);
      var file = $files[0]
      if (file.type.includes("image")) {
        var step = file.size
      }
      else {
        var step = 1024 * 1024 * 8
      }
      var blob = file.slice()
      var reader = new FileReader()
      reader.readAsBinaryString(blob)
      reader.onload = function(e) {
        var fileHash = md5.createHash(reader.result)
        uploadFile_(file, 0, step, dfr, uuid4.generate(), fileHash)
      }
      cfpLoadingBar.start();
    }

    function uploadFile_(file, start, step, dfr, uuid, fileHash) {
      var size = file.size
      var blob = file.slice(start, start + step)
      var formData = new FormData();
      formData.append("fileHash", fileHash)
      formData.append("filename", file.name)
      formData.append("uuid", uuid)
      formData.append(vm.cnFileType, blob);
      _.each(vm.cnData, function(value, key) {
        if (value) formData.append(key, value);
      });
      var end = Math.min((start + step), size)
      var headers = {
        "Content-Range": `bytes ${start}-${end}/${size}`,
        ...$http.defaults.headers.common
      }
      $.ajax({
        url: vm.cnUploadPath,
        headers,
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: (response) => {
	  if (response.media_object) dfr.resolve(response)
	  else if (response.filename) dfr.resolve(response)
	   else if (start + step < size) uploadFile_(file, start + step, step, dfr, uuid, fileHash)
        },
        error: dfr.reject
      })
    }

    function setFilePath(response) {
      cfpLoadingBar.complete();
      if (vm.cnImagePreviews) {
        delete vm.cnImagePreviews[vm.cnKey];
      }
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
