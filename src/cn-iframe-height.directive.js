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
      var body, $body;
      var insurance = 0;

      $scope.$watch(function(){ return attrs.ngSrc; }, function() {
        insurance = 0;
        activate();
      });

      ////////

      function activate() {
        body = getBody();
        $body = $(body);
        if(body && $body.height()) {
          elem.height($body.height() + 2);
          $body.find('img').on('load', activate);
          if(!insurance) {
            ++insurance;
            $timeout(activate, 200);
            $timeout(activate, 500);
          }
        }
        else {
          $timeout(activate, 100);
        }
      }

      function getBody() {
        return elem.get(0).contentDocument && elem.get(0).contentDocument.body;
      }
    }
  }
})();