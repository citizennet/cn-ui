(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnToggleSwitch', function() {
        return {
          restrict: 'E',
          replace: true,
          template: '\
                  <div class="cn-toggle" ng-class="currentCssState()" ng-click="toggle($event)">\
                    <i class="icn-toggle" ng-class="currentCssState()"></i>\
                  </div>',
          scope: {
            'enabled': '=',     // property used to determine on / off state
            'onValue': '=?',
            'offValue': '=?',
            'onChange': '&'     // callback when toggle changes
          },
          link: function($scope) {
            //console.log('$scope:', $scope.onValue, $scope.offValue);
            $scope.onValue = _.isUndefined($scope.onValue) ? true : $scope.onValue;
            $scope.offValue = _.isUndefined($scope.offValue) ? false : $scope.offValue;

            $scope.currentCssState = function() {
              return $scope.enabled == $scope.onValue ? null : 'disabled';
            };

            $scope.toggle = function($event) {
              $event.preventDefault();
              $event.stopImmediatePropagation();

              // Using evil twins to do string to number type conversion comparison
              if($scope.enabled == $scope.onValue) {
                $scope.enabled = $scope.offValue;
              }
              else {
                $scope.enabled = $scope.onValue;
              }

              if($scope.onChange) {
                $scope.onChange();
              }
            };
          }
        };
      });
})();