(function() {
  'use strict';

  toastController.$inject = ['$rootScope', 'toaster', '$scope'];

  function toastController($rootScope, toaster, $scope) {
    function toastTag() {}
    $scope.__tag = new toastTag();

    const defaults = {
      timeout: 5000,
      toasterId: 'simple',
      body: 'simple-toast',
      bodyOutputType: 'directive',
      tapToDismiss: false,
      closeHtml: '<a>Dismiss</a>'
    };

    const rslistener = $rootScope.$on("citizenNet:toastEvent", function(event, options) {
      if (_.isObject(options)) {
        options.directiveData.icon = mapType(options.directiveData.type);
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

    $scope.$on('$destroy', () => {
      rslistener();
    });
  }

  const simpleToast = () => ({
    template: `
      <div class='flex-box align-items-center'>
        <div class="padding-right-20">
          <i ng-class="directiveData.icon || 'icn-info'"></i>
        </div>
        <div class="padding-right-20 flex-1">
          <span ng-bind-html='directiveData.body'>{{directiveData.body}}</span>
        </div>
      </div>
    `
  });

  const actionToast = () => ({
    template: `
      <div class='flex-box align-items-center'>
        <div class='padding-right-20'>
          <i ng-class='directiveData.icon || "icn-info"'></i>
        </div>
        <div class='padding-right-20 flex-1'>
          <span>{{directiveData.body}}</span>
        </div>
        <div class='btn-group'>
          <span ng-repeat='action in directiveData.actions'>
            <a class='btn btn-primary' ng-click='action.click()'>{{action.text}}</a>
          </span>
        </div>
      </div>
    `
  });

  const listToast = () => ({
    template: `
      <div class="flex-box align-items-center">
        <div class="padding-right-40">
          <span class="label">{{directiveData.selected.length}}</span>
          {{directiveData.type}} Selected
        </div>
        <div class="padding-right-20 flex-5 btn-group">
          <span ng-repeat="action in directiveData.actions">
            <a
              class="btn btn-default margin-right-10"
              ng-click="action.click()"
              ng-disabled="action.disabled && action.disabled()"
            >{{action.text}}</a>
            <i class="fa fa-question"
               style="color:lightgrey; cursor:pointer;padding:5px;"
               ng-if="action.tooltip && action.disabled && action.disabled()"
               tooltip="{{action.tooltip}}"
            ></i>
          </span>
          <span>
            <a class="btn btn-transparent" ng-click="directiveData.deselect()">Deselect All</a>
          </span>
        </div>
      </div>
    `
  });

  angular
    .module('cn.ui')
    .controller('toastController', toastController)
    .directive("simpleToast", simpleToast)
    .directive("actionToast", actionToast)
    .directive("listToast", listToast);
})();
