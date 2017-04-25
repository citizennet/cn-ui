(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnProgressBar', function() {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            limit: '=cnLimit',
            projected: '=cnProjected',
            progress: '=cnProgress',
            flexWidth: '=cnProgressBarFlexWidth'
          },
          template: '<div class="cn-progress-container {{flexWidth ? \'flex-width\' : \'\'}}">\
                       <div class="cn-projected-bar" \
                            ng-class="{\'cn-progress-over\': limit && projected > limit}">\
                         <div class="cn-progress-bar" \
                              ng-class="{\'cn-progress-over\': limit && progress > limit}"></div>\
                       </div>\
                     </div>',
          link: function($scope, elem) {
            function cnProgressBarTag() {}
            $scope.__tag = new cnProgressBarTag();

            var projectedBar = elem.find('.cn-projected-bar'),
                progressBar = elem.find('.cn-progress-bar');

            // Clean up closure references
            $scope.$on('$destroy', function() {
              projectedBar = null;
              progressBar = null;
            });

            $scope.$watch(function() {
              return '' + $scope.limit + $scope.projected + $scope.progress;
            }, function() {
              projectedBar.css('width', calculateWidth($scope.projected || $scope.progress, $scope.limit));
              progressBar.css('width', calculateWidth($scope.progress, $scope.projected));
            });

            function calculateWidth(numerator, denominator) {
              return (denominator ? _.percentage(numerator, denominator) : 100) + '%';
            }
          }
        };
      });
})();
