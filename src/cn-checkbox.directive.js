(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('checkbox', function() {
        return {
          restrict: 'C',
          link: function($scope, elem) {
            function cnCheckboxTag() {}
            $scope.__tag = new cnCheckboxTag();

            if(elem.prop('tagName') === 'INPUT') {
              elem.after('<span></span>');
            }
            else {
              elem.find('input[type=checkbox]').after('<span></span>');
            }
          }
        };
      });
})();
