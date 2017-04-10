(function() {
  'use strict';

  angular
    .module('cn.ui')
    .directive('cnParentWidth', cnParentWidth);

  cnParentWidth.$inject = ['$window', '$timeout'];
  function cnParentWidth($window, $timeout) {
    return {
      restrict: 'A',
      link
    };

    function link(scope, elem) {
      function cnParentWidthTag() {}
      scope.__tag = new cnParentWidthTag();

      var w = angular.element($window);
      var parent = elem.parent();

      // Clean up event handlers and closure references
      scope.$on('$destroy', function() {
        w.off('resize', activate);
        w = null;
        parent = null;
      });

      w.on('resize', activate);
      activate();
      $timeout(activate, 250);

      function activate() {
        elem.width(parent.width());
      }
    }
  }
})();
