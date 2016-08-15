(function() {
  'use strict';

  angular.module('cn.ui')
      .directive('cnCurrencyFormat', cnCurrencyFormat);

  cnCurrencyFormat.$inject = ['$compile'];
  function cnCurrencyFormat($compile) {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      if(!vm) return;

      var format = attrs.cnCurrencyFormat;
      var placeholder = attrs.cnCurrencyPlaceholder;

      activate();

      //////////

      function activate() {
        if(placeholder) {
          placeholder = formatVal(placeholder);
          elem.attr('placeholder', placeholder);
        }

        elem.on('blur', function(el) {
          if(/\.\d$/.test(elem[0].value)) return elem[0].value += '0';

          var overflow = elem[0].value.match(/(\d*\.\d{2})(.+)/);
          if(overflow) elem[0].value = overflow[1];
        });

        vm.$parsers.unshift(parseVal);
        vm.$formatters.unshift(function(val) {
          //console.log('val:', val);
          vm.$setDirty();
          return formatVal(val);
        });
      }


      function parseVal(val) {
        if(!parseInt(val)) return undefined;
        if(format === 'cents') {
          return _.multiply(val, 100);
        }
        if(format === 'microcents') {
          return _.multiply(val, 1000000);
        }
        return parseFloat(val);
      }

      function formatVal(val) {
        if(!val) val = '';
        else if(format === 'cents') {
          val = _.floor(val / 100, 2) || '';
        }
        else if(format === 'microcents') {
          val = _.floor(val / 1000000, 2) || '';
        }
        else {
          val = _.floor(val, 2) || '';
        }
        return /\.\d$/.test(val) ? val + '0' : val;
      }
    }
  }

})();
