(function() {
  'use strict';

  angular.module('cn.ui')
      .directive('cnCurrencyFormat', cnCurrencyFormat);

  function cnCurrencyFormat() {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      if(!vm) return;

      var format = attrs.cnCurrencyFormat;

      elem.on('blur', function(el) {
        if(/\.\d$/.test(elem[0].value)) return elem[0].value += '0';

        var overflow = elem[0].value.match(/(\d*\.\d{2})(.+)/);
        if(overflow) elem[0].value = overflow[1];
      });

      vm.$parsers.unshift(function(val) {
        //console.log('parser:', val, elem[0].value, vm);
        if(!val) return 0;
        return format === 'dollars' ? parseFloat(val) : _.multiply(val, 100);
      });

      vm.$formatters.unshift(function(val) {
        //console.log('formatter:', vm.$modelValue, val, vm);
        if(!val) val = '';
        else if(format === 'dollars') {
          val = _.floor(val, 2) || '';
        }
        else {
          val = _.floor(val / 100, 2) || '';
        }
        //return elem[0].value = val;
        vm.$setDirty();
        return /\.\d$/.test(val) ? val + '0' : val;
      });
    }
  }

})();