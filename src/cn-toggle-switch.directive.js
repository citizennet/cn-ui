(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnToggleSwitch', function() {
        return {
          restrict: 'E',
          replace: true,
          template: `
            <div class="cn-toggle"
                  ng-class="currentCssState()"
                  ng-click="toggle($event)">
              <i class="icn-toggle"
                  ng-class="currentCssState()"></i>
            </div>
          `,
          require: '^ngModel',
          scope: {
            'ngModel': '=',     // property used to determine on / off state
            'onValue': '=?',
            'offValue': '=?',
            'undefinedClass': '=?',
            'readOnly': '=',
            'required': '=',
            'onChange': '&'     // callback when toggle changes
          },
          link: function($scope, elem, attrs, ctrl) {
            function cnToggleSwitchTag() {}
            $scope.__tag = new cnToggleSwitchTag();

            $scope.onValue = _.isUndefined($scope.onValue) ? true : $scope.onValue;
            $scope.offValue = _.isUndefined($scope.offValue) ? false : $scope.offValue;
            $scope.undefinedClass = $scope.undefinedClass || 'schrodinger';

            $scope.currentCssState = function() {
              let classes = [];
              if($scope.readOnly) classes.push('readonly');
              if($scope.ngModel == $scope.onValue) { }
              else if($scope.ngModel == $scope.offValue) classes.push('disabled');
              else classes.push($scope.undefinedClass);
              return classes.join(' ');
            };

            $scope.toggle = function($event) {
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

            $scope.$watch('ngModel', (val, pre) => {
              ctrl.$setValidity('schemaForm', true);
              ctrl.$setValidity('tv4-302', !$scope.required || !(angular.isUndefined(val)));
            })
          }
        };
      });
})();
