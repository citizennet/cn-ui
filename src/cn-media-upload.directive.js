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
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    }
  }

  Upload.$inject = ['$q', '$http', '$sce', 'socketFactory', 'cnSession'];
  function Upload($q, $http, $sce, socketFactory, cnSession) {
    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile($files) {
      var resolve = vm.cnFileType === 'image' ? setFilePath : processVideoUpload;
      var dfr = $q.defer();
      dfr.promise.then(resolve);

      var formData = new FormData();
      formData.append("file", $files[0]);

      _.each(vm.cnData, function(value, key) {
        formData.append(key, value);
      });

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
      vm.ngModel = response[vm.cnModelValueKey || 'media_id_string'];
      vm.filePath = $sce.trustAsResourceUrl(response[vm.cnPreviewPath || 'cn_preview_url']);
    }

    function processVideoUpload(response) {
      vm.filePath = $sce.trustAsResourceUrl(response[vm.cnPreviewPath || 'cn_preview_url']);
      var socket = socketFactory({
        ioSocket: io.connect('', {query: "access_token=" + cnSession.getUser().accessToken})
      });

      socket.on('connect', function() {
        socket.emit('uploadmedia', {
          campaignId: '111334',
          media: response.cn_preview_url
        });
      });
      socket.on('status', function(message) {
        if (message.media_id_string) {
          vm.ngModel = message.media_id_string;
          //socket.disconnect();
        }
      });
    }
  }
})();