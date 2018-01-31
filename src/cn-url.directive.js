(function() {
  'use strict';

  angular
    .module('cn.ui')
    .directive('cnUrlFormat', cnUrlFormat);

  function cnUrlFormat() {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      if(!vm) return;

      // Clean up event handlers
      $scope.$on('$destroy', function() {
        elem.off('input', handleChange);
      });

      activate();

      //////////

      function activate() {
        elem.placeholder = "https://...";
        elem.on('input', handleChange);
      }

      function handleChange(el) {
        if(el.target.value.length < 5) { }
        else if (!el.target.value.startsWith("http")) {
          el.target.value = "https://" + el.target.value;
        }
      }
    }
  }
})();
