(function() {
  'use strict';

  angular
    .module('cn.ui')
    .directive('cnParentWidth', cnParentWidth);

  cnParentWidth.$inject = ['$window', '$timeout'];
  function cnParentWidth($window, $timeout) {
    return {
      restrict: 'A',
      link: Link
    };

    function Link(scope, elem) {
      var w = angular.element($window);
      var parent = elem.parent();

      w.bind('resize', activate);
      activate();
      $timeout(activate, 250);

      function activate() {
        elem.width(parent.width());
      }
    }
  }
})();