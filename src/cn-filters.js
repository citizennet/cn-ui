(function() {
  'use strict';

  angular
  .module('cn.ui')
  .filter('cnFilter', cnFilter)
  .filter('titleCase', titleCase)
  .filter('range', range)
  .filter('toDateObject', toDateObject)
  .filter('trustAs', trustAs)
  .filter('trustAsHtml', trustAsHtml)
  .filter('selectedItems', selectedItems)
  .filter('momentjs', momentjs)
  .filter('percent', percent)
  .filter('camelCase', camelCase)
  .filter('sortBy', sortBy)
  .filter('truncate', truncate)
  .filter('toNumber', toNumber)
  .filter('toDecimal', toDecimal)
  .filter('stripHtml', stripHtml);

  cnFilter.$inject = ['$filter'];
  function cnFilter($filter) {
    return function(array, expression) {
      return $filter('filter')(array, expression, function(actual, expected) {
        if (angular.isUndefined(actual)) {
          // No substring matching against `undefined`
          return false;
        }
        if (actual.toString().startsWith('_uniqueid')) {
          return false;
        }
        if ((actual === null) || (expected === null)) {
          // No substring matching against `null`; only match against `null`
          return actual === expected;
        }
        if (angular.isObject(expected) || (angular.isObject(actual) && !hasCustomToString(actual))) {
          // Should not compare primitives against objects, unless they have custom `toString` method
          return false;
        }

        actual = angular.lowercase('' + actual);
        expected = angular.lowercase('' + expected).split(' ');
        var match = true;
        _.each(expected, function(str) {
          if(actual.indexOf(str) === -1) match = false;
        });
        return match;
      });

      function hasCustomToString(obj) {
        return angular.isFunction(obj.toString) && obj.toString !== Object.prototype.toString;
      }
    };
  }

  function titleCase() {
    return function(s) {
      s = (s === undefined || s === null) ? '' : s;
      return s.toString().toLowerCase().replace(/_|-/g, ' ').replace(/\b([a-z])/g, function(ch) {
        return ch.toUpperCase();
      });
    };
  }

  function range() {
    return function(input, start, end) {
      return input = _.range(start, end);
    };
  }

  function toDateObject() {
    return function(dateString) {
      return new Date(moment(dateString).toISOString());
    };
  }

  trustAs.$inject = ['$sce'];
  function trustAs($sce) {
    return function(val) {
      return $sce.trustAs(val);
    };
  }

  trustAsHtml.$inject = ['$sce'];
  function trustAsHtml($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }

  function selectedItems() {
    return function(list, selected) {
      if(!selected || !selected.length) return list;

      return list.filter(function(item) {
        var match = false;
        selected.forEach(function(filter) {
          var compare = item[filter.key];
          if(_.isObject(compare)) {
            var tmp = {};
            tmp[filter.childKey || filter.key] = filter.value;
            if(_.find(compare, tmp)) {
              return match = true;
            }
          }
          else {
            if(compare == filter.value) {
              return match = true;
            }
          }
        });
        return match;
      });
    };
  }

  function momentjs() {
    return function(input, formatString) {
      formatString = formatString || '';
      var m = moment(input),
          out = '';

      if(m && m.isValid()) {
        if(formatString == 'calendar') {
          out = m.calendar();
        } else {
          out = m.format(formatString);
        }
      }

      return out;
    };
  }

  function percent() {
    return function(input, multiplier) {
      // defaults to 10000 to preserve previous logic
      multiplier = multiplier || 10000;
      var numericInput = parseFloat(input);
      var percent;

      if(typeof numericInput === 'number') {
        // old logic
        //percent = Math.round(numericInput * 10000) / 100;
        percent = Math.round(numericInput * multiplier) / 100;

        return percent + '%';
      }
    };
  }

  function camelCase() {
    var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
    var MOZ_HACK_REGEXP = /^moz([A-Z])/;

    return function(input) {
      return input.
        replace(SPECIAL_CHARS_REGEXP,function(_, separator, letter, offset) {
          return offset ? letter.toUpperCase() : letter;
        }).
        replace(MOZ_HACK_REGEXP, 'Moz$1');
    };
  }

  function sortBy() {
    return function(obj, sortKey, direction) {

      direction = direction || 'asc';
      sortKey = sortKey;

      var array = [];
      Object.keys(obj).forEach(function(key) {
        array.push(obj[key]);
      });

      var getBySortKey = function(obj) {
        return obj[sortKey];
      };

      if(direction == 'asc') {
        array.sort(function(a, b) {

          if(getBySortKey(a) > getBySortKey(b)) {
            return 1;
          }
          if(getBySortKey(a) < getBySortKey(b)) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        array.sort(function(a, b) {
          return getBySortKey(b) - getBySortKey(a);
        });
      }

      return array;
    };
  }

  function truncate() {
    return function(input, chars, breakOnWord) {
      if(isNaN(chars)) return input;
      if(chars <= 0) return '';
      if(input && input.length >= chars) {
        input = input.substring(0, chars);

        if(!breakOnWord) {
          var lastspace = input.lastIndexOf(' ');
          //get last space
          if(lastspace !== -1) {
            input = input.substr(0, lastspace);
          }
        } else {
          while(input.charAt(input.length - 1) == ' ') {
            input = input.substr(0, input.length - 1);
          }
        }
        return input + '...';
      }
      return input;
    };
  }

  function toNumber() {
    return function(string){
      var num = Number(string);
      return isNaN(num) ? 0: num;
    };
  }

  function toDecimal() {
    return function(number, places){
      var string, position, whole, decimal, float;

      if(!number) {
        return;
      }

      string  = number.toString();

      if(string.length - places >= 0){
        position = string.length - places > 0? string.length - places: 0;
        whole = string.substring(0, position);
        decimal = string.substring(position);
        float = whole + '.' + decimal;
      }else{
        return number;
      }
      return Number(float);
    };
  }

  function stripHtml() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
})();
