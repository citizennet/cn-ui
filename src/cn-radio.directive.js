(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('radio', function() {
        return {
          restrict: 'C',
          link: function($scope, elem) {
            function radioTag() {}
            $scope.__tag = radioTag();

            if(elem.prop('tagName') === 'INPUT') {
              elem.after('<span></span>');
            }
            else {
              elem.find('input[type=radio]').after('<span></span>');
            }
          }
        };
      });
})();
