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
        cnImagePreviews: '=',
        cnTextButton: '='
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
                     btn-text="{{ vm.cnTextButton != undefined ? vm.cnTextButton : (\'Upload \' +  (vm.cnFileType | titleCase))}}"\
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
      if (vm.cnUploadPath.includes('api/v2/media/upload') && vm.ngModel) {
        const videoExtensions = ['mkv', 'flv', 'gif', 'avi', 'mov', 'mp4', 'm4p', 'mpeg', 'mpg'];
        const imgExtensions = ['jpg', 'jpeg', 'png', 'webp', 'tiff', 'raw', 'heic', 'svg', 'eps'];
        const url = new URL(vm.ngModel);
        const extension = url.pathname.split(".")[1].toLowerCase();
        vm.cnFileType = imgExtensions.includes(extension) ? 'image' : 'video';
      }

      if (vm.cnExistingPreview) {
        vm.filePath = $sce.trustAsResourceUrl(`/uploads/facebook/${vm.cnExistingPreview}`);
      } else if (vm.cnFileType === 'image' && vm.ngModel) {
        vm.filePath = $sce.trustAsResourceUrl(vm.ngModel);
      } else if (vm.cnFileType === 'video' && vm.ngModel) {
        if (vm.ngModel.media) {
          vm.filePath = $sce.trustAsResourceUrl(vm.ngModel.media);
        } else if (vm.ngModel.video_url) {
          vm.filePath = $sce.trustAsResourceUrl(vm.ngModel.video_url);
        } else {
          vm.filePath = $sce.trustAsResourceUrl(vm.ngModel);
        }
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
      var file = $files[0];
      if (file.type.includes("image")) {
        vm.cnFileType = "image";
      }
      else if (file.type.includes("video")) {
        vm.cnFileType = "video";
      }
      else {
        vm.cnFileType = file.type.slice(0, file.type.indexOf('/'));
      }
      if (!vm.cnUploadPath.includes('twitter') && file.type.includes("image")) {
        var step = file.size;
        if (step > 1024 * 1024 * 50) {
          let msg = 'The image you are trying to upload is too big. The max size is 50 MB';
          dfr.reject({ responseText: JSON.stringify({ error: msg }) });
        }
      }
      else {
        var step = 1024 * 1024 * 2;
      }
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function(e) {
        var fileHash = SparkMD5.ArrayBuffer.hash(e.target.result);
        uploadFile_(file, 0, step, dfr, uuid4.generate(), fileHash)
      }
      cfpLoadingBar.start();
    }

    function uploadFile_(file, start, step, dfr, uuid, fileHash) {
      var size = file.size
      var blob = file.slice(start, start + step)
      var formData = new FormData();
      formData.append("mediaType", file.type)
      if (vm.cnUploadPath.includes('api/v2/media/upload')) {
        formData.append("content_hash", fileHash)
        formData.append("file", blob);
      } else {
        formData.append("fileHash", fileHash)
        formData.append("filename", file.name)
        formData.append("uuid", uuid)
        formData.append(vm.cnFileType, blob);
      }

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
	        if (response.media_object || response.cn_preview_url || response.media_url || response.path)  {
            dfr.resolve(response)
          } else if (start + step < size) {
            uploadFile_(file, start + step, step, dfr, uuid, fileHash)
          }
        },
        error: dfr.reject
      })
    }

    function setFilePath(response) {
      cfpLoadingBar.complete();
      if (vm.cnImagePreviews) {
        delete vm.cnImagePreviews[vm.cnKey];
      }
      vm.cnModelValueKey = vm.cnModelValueKey || vm.cnForm.valueProperty;
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
