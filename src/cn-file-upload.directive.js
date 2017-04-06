(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('fileUpload', function() {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            btnStyle: '@',
            iconStyle: '@',
            callback: '&onFileSelect',
            inputId: '@',
            btnText: '@',
            accept: '@'
          },
          template: '<div class="file-wrapper">\
                       <button class="btn btn-file {{btnStyle}}">\
                         <i ng-if="iconStyle" class="{{iconStyle}}"></i> {{btnText}}\
                       </button>\
                       <input type="file" id="{{inputId}}" class="form-control" accept="{{accept}}"\
                              ng-file-select="onFileSelect($files)"/>\
                     </div>',
          compile: function(elem, attrs) {
            attrs.btnStyle = /btn-(primary|success|info|warning|danger|link)/.test(attrs.btnStyle) ?
                attrs.btnStyle : attrs.btnStyle + ' btn-default';
            attrs.inputId = attrs.inputId || ('file-' + _.uniqueId());
            attrs.btnText = attrs.btnText || 'Choose a file...';

            return function link($scope, elem) {
              function fileUploadTag() {}
              $scope.__tag = new fileUploadTag();

              var btn = elem.find('button'),
                  file = elem.find('input');

              btn.on('click', handleClick);

              // Clean up event handlers and closure variables
              $scope.$on('$destroy', function() {
                btn.off('click', handleClick);
                btn = null;
                file = null;
              });

              function handleClick() {
                file.click();
              }

              $scope.onFileSelect = function($files) {
                $scope.callback({$files: $files});
              };
            };
          }
        };
      });
})();
