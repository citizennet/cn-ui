(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnResponsiveHeight', cnResponsiveHeight);

  cnResponsiveHeight.$inject = ['$window', '$timeout'];

  function cnResponsiveHeight($window, $timeout) {
    var directive = {
      restrict: 'EA',
      scope: {
        breakpoint: '@cnResponsiveBreak'
      },
      link: linkFunction
    };

    return directive;

    function linkFunction($scope, elem, attrs) {
      var w = angular.element($window);
      var breakpoint = {
            sm: 768,
            md: 992,
            lg: 1200
          }[$scope.breakpoint] || 0;

      w.bind('resize', activate);
      /* give page elements a chance to render before calculation */
      $timeout(activate, 250);
      $timeout(activate, 500); // twice for good measure

      function activate() {
        if($window.innerWidth > breakpoint) {
          var topOffset = elem.offset().top;
          //console.log('elem:topOffset:', elem, topOffset);

          if(topOffset < 0) {
            // calculate again after any animations have completed
            $timeout(activate, 500);
            //$timeout(activate, 800); // twice for good measure
          }
          else {
            var bottomOffset = attrs.cnResponsiveHeight || 0;
            var height = w.height() - topOffset - bottomOffset;
            height = height ? height + 'px' : 'auto';
            //console.log('attrs.cnSetMaxHeight:', attrs.cnSetMaxHeight);
            if (_.has(attrs, 'cnSetMaxHeight')) {
              elem.css({
              'max-height': height,
              'overflow': 'auto'
            });
            } else {
              elem.css({
              'height': height,
              'overflow': 'auto'
            });
            }

          }
        }
        else {
          elem.css({ 'height': '' });
        }
      }
    }
  }
})();