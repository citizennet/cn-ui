(function() {
  'use strict';

  toastController.$inject = ['$rootScope', 'toaster'];

  function toastController($rootScope, toaster) {
    const defaults = {
      timeout: 5000,
      toasterId: 'simple',
      body: 'simple-toast',
      bodyOutputType: 'directive',
      tapToDismiss: false,
      closeHtml: '<a>Dismiss</a>'
    };

    $rootScope.$on("citizenNet:toastEvent", function(event, options) {
      if (_.isObject(options)) {
        options.directiveData.type = mapType(options.directiveData.type);
        toaster.pop({ ...defaults, ...options });
      } else {
        toaster.pop({ ...defaults, directiveData: { body: options } });
      }
    });

    function mapType(type) {
      switch (type) {
        case "success": return "icn-thumbsup";
        case "warning": return "icn-error";
        case "danger": return "icn-error";
        case "error": return "icn-error";
        default: return "icn-info";
      }
    }
  }

  const simpleToast = () => ({
    template: `
      <div class='row'>
        <div class='col-sm-1'>
          <i ng-class="directiveData.type || 'icn-info'"></i>
        </div>
        <div class='col-sm-9'>
          <span ng-bind-html='directiveData.body'>{{directiveData.body}}</span>
        </div>
      </div>
    `
  });

  const actionToast = () => ({
    template: `
      <div class='row'>
        <div class='col-sm-1'>
          <i ng-class='directiveData.type || "icn-info"'></i>
        </div>
        <div class='col-sm-9'>
          <span>{{directiveData.body}}</span>
        </div>
        <div class='col-sm-2 btn-options'>
          <span ng-repeat='action in directiveData.actions'>
            <a class='btn btn-primary' ng-click='action.click()'>{{action.text}}</a>
          </span>
        </div>
      </div>
    `
  });

  angular
    .module('cn.ui')
    .controller('toastController', toastController) 
    .directive("simpleToast", simpleToast)
    .directive("actionToast", actionToast);
})();
