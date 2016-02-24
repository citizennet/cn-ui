(function() {
  'use strict';

  angular.module('cn.ui')
      .directive('cnPercentageFormat', cnPercentageFormat);

  function cnPercentageFormat() {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      if(!vm) return;

      vm.$parsers.unshift(function() {
        return _.divide(elem[0].value, 100);
      });

      vm.$formatters.unshift(function() {
        elem[0].value = vm.$modelValue * 100;
        return elem[0].value;
      });
    }
  }

})();