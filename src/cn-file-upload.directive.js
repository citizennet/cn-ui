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
            cnDisabled: '=',
            iconStyle: '@',
            callback: '&onFileSelect',
            inputId: '@',
            btnText: '@',
            accept: '@'
          },
          template: '<div class="file-wrapper">\
                       <button class="btn btn-file {{btnStyle}}" ng-disabled="cnDisabled">\
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
            if (attrs.cnDisabled) {
              attrs.disabled = true;
            }

            return function link($scope, elem) {
              var btn = elem.find('button'),
                  file = elem.find('input');

              btn.click(function() {
                file.click();
              });

              $scope.onFileSelect = function($files) {
                $scope.callback({$files: $files});
              };
            };
          }
        };
      });
})();
