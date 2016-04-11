(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnToggleSwitch', function() {
        return {
          restrict: 'E',
          replace: true,
          template: '\
                  <div class="cn-toggle"\
                       ng-class="currentCssState()"\
                       ng-click="toggle($event)">\
                    <i class="icn-toggle"\
                       ng-class="currentCssState()"></i>\
                  </div>',
          require: 'ngModel',
          scope: {
            'ngModel': '=enabled',     // property used to determine on / off state
            'onValue': '=?',
            'offValue': '=?',
            'undefinedClass': '=?',
            'onChange': '&'     // callback when toggle changes
          },
          link: function($scope, elem, attrs, ctrl) {
            //console.log('$scope:', $scope.onValue, $scope.offValue);
            $scope.onValue = _.isUndefined($scope.onValue) ? true : $scope.onValue;
            $scope.offValue = _.isUndefined($scope.offValue) ? false : $scope.offValue;
            $scope.undefinedClass = $scope.undefinedClass || 'schrodinger';

            $scope.currentCssState = function() {
              if($scope.ngModel == $scope.onValue) return null;
              if($scope.ngModel == $scope.offValue) return 'disabled';
              return $scope.undefinedClass;
            };

            $scope.toggle = function($event) {
              console.log('toggle:', $scope);
              $event.preventDefault();
              $event.stopImmediatePropagation();

              // Using evil twins to do string to number type conversion comparison
              if($scope.ngModel == $scope.onValue) {
                $scope.ngModel = $scope.offValue;
              }
              else {
                $scope.ngModel = $scope.onValue;
              }

              ctrl.$setDirty();

              if($scope.onChange) {
                $scope.onChange();
              }
            };
          }
        };
      });
})();