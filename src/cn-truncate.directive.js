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
                truncatable = ogText.length > $scope.size,
                shortText = truncatable ?
                  ogText.substr(0, $scope.size) + '\u2026' : ogText,
                truncated = false;

            function truncate() {
              elem.text(truncated ? ogText : shortText);
              truncated = !truncated;
              if (truncatable) {
                truncateToggleButton.show();
                truncateToggleButton.text(truncated ? 'Show more' : 'Show less');
              } else {
                truncateToggleButton.hide();
              }
            }
            var truncateToggleButton = angular.element(
              '<a class="truncate-expand-toggle"></a>'
            );
            truncateToggleButton.on('click', truncate);
            elem.after(truncateToggleButton);

            truncate();

            if($scope.show) {
              elem.on($scope.show, truncate);
            }
          }
        };
      });
})();
