(function() {
  'use strict';

  angular.module('cn.ui')
      .controller('toastController', [
        '$rootScope', 'toaster',
        function($rootScope, toaster) {
          const defaults = {
            timeout: 5000,
            toasterId: 'simple',
            body: 'simple-toast',
            bodyOutputType: 'directive',
            tapToDismiss: false,
            closeHtml: '<a>Dismiss</a>',
            directiveData: {
              type: 'success'
            }
          };

          $rootScope.$on("citizenNet:toastEvent", function(event, options) {
            let toastOptions = _.cloneDeep(defaults);
            if (_.isObject(options)) {
              _.extend(toastOptions, options);
            } else {
              toastOptions.directiveData.body = options;
            }
            
            toaster.pop(toastOptions);
          });
        }
      ])
      .directive("simpleToast", [function() {
        return {
          template: "<div class='row'>" +
                    "<div class='col-sm-1'>" +
                      "<i ng-class=\"directiveData.type === 'success' ? 'icn-info' : 'icn-error'\"></i>" +
                    "</div><div class='col-sm-9'>" +
                      "<span ng-bind-html='directiveData.body'>{{directiveData.body}}</span>" +
                    "</div></div>"
        };
      }])
      .directive("actionToast", [function() {
        return {
          template: "<div class='row'>" +
                    "<div class='col-sm-1'>" +
                      "<i class='icn-info'></i>" +
                    "</div><div class='col-sm-9'>" +
                      "<span>{{directiveData.body}}</span>" +
                    "</div><div class='col-sm-2 btn-options'>" +
                      "<span ng-repeat='action in directiveData.actions'>" +
                        "<a class='btn btn-primary' ng-click='action.click()'>{{action.text}}</a>" +
                      "</span>" +
                    "</div></div>"
        };
      }]);
})();
