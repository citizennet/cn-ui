(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('truncate', function() {
        return {
          restrict: 'AE',
          scope: {
            text: '=truncateText',
            size: '=truncateSize',
            show: '@truncateShow'
          },
          link: function($scope, elem) {
            function truncateTag() {}
            $scope.__tag = new truncateTag();

            $scope.$on('$destroy', () => {
              if ($scope.show) {
                elem.off($scope.show, truncate);
              }
            });

            var ogText = $scope.text || '',
                shortText = ogText.length > $scope.size ?
                  ogText.substr(0, $scope.size) + '\u2026' : ogText,
                truncated = false;

            function truncate() {
              elem.text(truncated ? ogText : shortText);
              truncated = !truncated;
            }

            truncate();

            if($scope.show) {
              elem.on($scope.show, truncate);
            }
          }
        };
      });
})();
