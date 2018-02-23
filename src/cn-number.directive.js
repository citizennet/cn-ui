(function() {
  'use strict';

  angular
    .module('cn.ui')
    .directive('cnNumber', cnNumber);

  function cnNumber($filter) {
    'ngInject';

    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      function cnNumberTag() {}
      $scope.__tag = new cnNumberTag();

      if(!vm) return;

      activate();

      //////////

      function activate() {
        vm.$parsers.unshift(parseVal);
        vm.$formatters.unshift(function(val) {
          vm.$setDirty();
          return formatVal(val);
        });
      }

      function parseVal(val) {
        console.log('parseNum', val);
        return parseFloat(val.replace(/\D*/g, ''), 10);
      }

      function formatVal(val) {
        console.log('formatNum', val);
        return $filter('number')(val);
      }
    }
  }

})();
