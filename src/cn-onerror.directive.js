(function() {
  "use strict";

  angular
    .module('cn.ui')
    .directive('cnOnerror', cnOnerror);

  function cnOnerror($parse) {
    '$inject';

    return {
      restrict: 'A',
      link: (scope, elem, attrs) => {
        function cnOnerrorTag() {}
        scope.__tag = new cnOnerrorTag();

        const handler = $parse(attrs.cnOnerror);
        elem[0].onerror = (e, param) => handler(scope, { param: param });
      }
    };
  }
})();
