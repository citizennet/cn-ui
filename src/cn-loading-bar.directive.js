(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnLoadingBar', function() {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            run: '='
          },
          template: '<div><cn-progress-bar cn-limit="1" cn-progress="progress"></cn-progress-bar></div>',
          controller: ['$scope', '$interval', function($scope, $interval) {
            function cnLoadingBarTag() {}
            $scope.__tag = new cnLoadingBarTag();

            $scope.progress = 0;
            $scope.counter = 1;
            $scope.numerator = 1;
            $scope.denominator = 3;

            $scope.$watch('run', function(newVal, oldVal) {
              if(newVal === oldVal) return;
              if($scope.run) {
                start();
              }
              else {
                stop();
              }
            });

            function start() {
              $scope.interval = $interval(function() {
                $scope.progress = $scope.progress + ($scope.numerator / $scope.denominator);
                $scope.denominator = $scope.denominator + (2 / $scope.counter);
                $scope.counter = $scope.counter * 0.66;
              }, 500);
            }

            function stop() {
              $interval.cancel($scope.interval);
              $scope.progress = 100;
            }

            $scope.$on('$destroy', function() {
              stop();
            });
          }]
        };
      });
})();
