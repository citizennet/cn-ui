(function() {
  'use strict';

  angular
    .module('cn.ui')
    .directive('cnCurrencyFormat', cnCurrencyFormat);

  function cnCurrencyFormat() {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      function cnCurrencyFormatTag() {}
      $scope.__tag = new cnCurrencyFormatTag();

      if(!vm) return;

      var format = attrs.cnCurrencyFormat;
      var placeholder = attrs.cnCurrencyPlaceholder;

      // Clean up event handlers
      $scope.$on('$destroy', function() {
        elem.off('blur', handleBlur);
      });

      activate();

      //////////

      function activate() {
        if(placeholder) {
          placeholder = formatVal(placeholder);
          elem.attr('placeholder', placeholder);
        }

        elem.on('blur', handleBlur);

        vm.$parsers.unshift(parseVal);
        vm.$formatters.unshift(function(val) {
          vm.$setDirty();
          return formatVal(val);
        });
      }

      function handleBlur(el) {
        if(/\.\d$/.test(elem[0].value)) return elem[0].value += '0';

        var overflow = elem[0].value.match(/(\d*\.\d{2})(.+)/);
        if(overflow) elem[0].value = overflow[1];
      }

      function parseVal(val) {
        if(!val) return val;
        const parsed = parseFloat(val.replace(/\,/g, ''));
        if(format === 'cents') {
          return _.multiply(parsed, 100);
        }
        if(format === 'microcents') {
          return _.multiply(parsed, 1000000);
        }
        return parsed;
      }

      function formatVal(val) {
        if(!val) val = '';
        else if(format === 'cents') {
          val = _.round(val / 100, 2) || '';
        }
        else if(format === 'microcents') {
          val = _.round(val / 1000000, 2) || '';
        }
        else {
          val = _.round(val, 2) || '';
        }
        return /\.\d$/.test(val) ? val + '0' : val;
      }
    }
  }

})();
