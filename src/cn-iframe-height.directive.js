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
      var insurance;

      $scope.$watch(function(){ return attrs.ngSrc; }, function() {
        if(attrs.ngSrc) {
          insurance = 0;
          $timeout(activate, 100);
        }
      });

      ////////

      function activate() {
        body = getBody();
        $body = $(body);
        if(body) {
          var h = $body.height();
          console.log('h:', h);
          elem.height(h + 20);
          $body.find('img').on('load', activate);
          //console.log('insurance:', insurance);
          if(!insurance) {
            ++insurance;
            $timeout(activate, 200);
            $timeout(activate, 500);
            $timeout(activate, 1000);
            $timeout(activate, 1500);
            $timeout(activate, 3500);
            $timeout(activate, 5000);
            $timeout(activate, 10000);
          }
          return
        }
        $timeout(activate, 100);
      }

      function getBody() {
        return elem.get(0).contentDocument && elem.get(0).contentDocument.body;
      }
    }
  }
})();