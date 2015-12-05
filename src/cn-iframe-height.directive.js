(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnIframeHeight', cnIframeHeight);

  cnIframeHeight.$inject = ['$window', '$timeout'];
  function cnIframeHeight($window, $timeout) {
    return {
      restrict: 'A',
      link: Link
    };

    function Link(scope, elem) {
      var body, $body;
      var window = elem.get(0).contentWindow;

      activate();

      ////////

      function activate() {
        body = getBody();
        $body = $(body);
        if(body && $body.height()) {
          elem.height($body.height() + 2);
          $body.find('img').on('load', activate);
        }
        else {
          $timeout(activate, 100);
        }
      }

      function getBody() {
        return elem.get(0).contentDocument.body;
      }
    }
  }
})();