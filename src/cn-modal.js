(function() {
  'use strict';

  angular
    .module('cn.ui')
    .factory('cnModal', cnModal);

  cnModal.$inject = ['$modal', '$rootScope'];
  function cnModal($modal, $rootScope) {
    var vm = {
      onChangeState: null,
      open
    };

    return vm;

    ////////

    function open(options) {
      vm.onChangeState = $rootScope.$on('$stateChangeStart', () => {
        vm.onChangeState();
        if(vm.modal) {
          vm.modal.close();
        }
      });
      vm.modal = $modal.open(options);
      return vm.modal;
    }
  }
})();
