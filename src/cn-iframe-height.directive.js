(function() {
  'use strict';

  angular
    .module('cn.ui')
    .directive('cnIframeHeight', cnIframeHeight);

  cnIframeHeight.$inject = ['$timeout'];
  function cnIframeHeight($timeout) {
    return {
      restrict: 'A',
      link: Link
    };

    function Link($scope, elem, attrs) {
      function cnIFrameHeightTag() {}
      $scope.__tag = new cnIFrameHeightTag();

      var body, $body, h;
      var insurance;
      var timers = [];

      $scope.$watch(function(){ return attrs.ngSrc; }, function() {
        if(attrs.ngSrc) {
          insurance = 0;
          timers = timers.concat($timeout(activate, 100));
        }
      });

      // Clean up event listeners, timers, and closure references
      $scope.$on('$destroy', function() {
        angular
          .element(body)
          .find('img')
          .off('load', activate);

        body = null;

        _.each(timers, t => $timeout.cancel(t));
        _.empty(timers);
        timers = null;
      });

      ////////

      function activate() {
        console.log(':: activate called ::');

        body = getBody();
        if(body) {
          elem.height('');
          h = body.scrollHeight;
          elem.height(h);
          angular.element(body).find('img').on('load', activate);
          if(!insurance) {
            ++insurance;

            var t = [
              $timeout(activate, 200),
              $timeout(activate, 500),
              $timeout(activate, 1000),
              $timeout(activate, 1500),
              $timeout(activate, 3500),
              $timeout(activate, 5000),
              $timeout(activate, 7500),
              $timeout(activate, 10000)
            ];

            timers = timers.concat(t);
          }

          return;
        }

        timers = timers.concat([$timeout(activate, 100)]);
      }

      function getBody() {
        return elem.get(0).contentDocument && elem.get(0).contentDocument.body;
      }
    }
  }
})();
