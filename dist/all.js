'use strict';

(function () {
  'use strict';

  angular.module('cn.ui', ['angularFileUpload', 'toaster', 'ngAnimate', 'angular-md5', 'uuid4']);
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('checkbox', function () {
    return {
      restrict: 'C',
      link: function link($scope, elem) {
        function cnCheckboxTag() {}
        $scope.__tag = new cnCheckboxTag();

        if (elem.prop('tagName') === 'INPUT') {
          elem.after('<span></span>');
        } else {
          elem.find('input[type=checkbox]').after('<span></span>');
        }
      }
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('countrySelect', function () {
    return {
      link: function link(scope) {
        function countrySelectTag() {}
        scope.__tag = new countrySelectTag();
      },
      restrict: 'E',
      template: '<label for="{{id || \'country\'}}">Country</label>\
                     <select id="{{id || \'country\'}}" ng-model="ngModel" class="form-control">\
                       <option value="US">United States</option>\
                       <option value="AF">Afghanistan</option>\
                       <option value="AL">Albania</option>\
                       <option value="DZ">Algeria</option>\
                       <option value="AS">American Samoa</option>\
                       <option value="AD">Andorra</option>\
                       <option value="AO">Angola</option>\
                       <option value="AI">Anguilla</option>\
                       <option value="AQ">Antarctica</option>\
                       <option value="AG">Antigua And Barbuda</option>\
                       <option value="AR">Argentina</option>\
                       <option value="AM">Armenia</option>\
                       <option value="AW">Aruba</option>\
                       <option value="AU">Australia</option>\
                       <option value="AT">Austria</option>\
                       <option value="AZ">Azerbaijan</option>\
                       <option value="BS">Bahamas</option>\
                       <option value="BH">Bahrain</option>\
                       <option value="BD">Bangladesh</option>\
                       <option value="BB">Barbados</option>\
                       <option value="BY">Belarus</option>\
                       <option value="BE">Belgium</option>\
                       <option value="BZ">Belize</option>\
                       <option value="BJ">Benin</option>\
                       <option value="BM">Bermuda</option>\
                       <option value="BT">Bhutan</option>\
                       <option value="BO">Bolivia</option>\
                       <option value="BA">Bosnia And Herzegovina</option>\
                       <option value="BW">Botswana</option>\
                       <option value="BV">Bouvet Island</option>\
                       <option value="BR">Brazil</option>\
                       <option value="IO">British Indian Ocean Territory</option>\
                       <option value="BN">Brunei Darussalam</option>\
                       <option value="BG">Bulgaria</option>\
                       <option value="BF">Burkina Faso</option>\
                       <option value="BI">Burundi</option>\
                       <option value="KH">Cambodia</option>\
                       <option value="CM">Cameroon</option>\
                       <option value="CA">Canada</option>\
                       <option value="CV">Cape Verde</option>\
                       <option value="KY">Cayman Islands</option>\
                       <option value="CF">Central African Republic</option>\
                       <option value="TD">Chad</option>\
                       <option value="CL">Chile</option>\
                       <option value="CN">China</option>\
                       <option value="CX">Christmas Island</option>\
                       <option value="CC">Cocos (keeling) Islands</option>\
                       <option value="CO">Colombia</option>\
                       <option value="KM">Comoros</option>\
                       <option value="CG">Congo</option>\
                       <option value="CK">Cook Islands</option>\
                       <option value="CR">Costa Rica</option>\
                       <option value="CI">Cote D Ivoire</option>\
                       <option value="HR">Croatia</option>\
                       <option value="CU">Cuba</option>\
                       <option value="CY">Cyprus</option>\
                       <option value="CZ">Czech Republic</option>\
                       <option value="DK">Denmark</option>\
                       <option value="DJ">Djibouti</option>\
                       <option value="DM">Dominica</option>\
                       <option value="DO">Dominican Republic</option>\
                       <option value="TP">East Timor</option>\
                       <option value="EC">Ecuador</option>\
                       <option value="EG">Egypt</option>\
                       <option value="SV">El Salvador</option>\
                       <option value="GQ">Equatorial Guinea</option>\
                       <option value="ER">Eritrea</option>\
                       <option value="EE">Estonia</option>\
                       <option value="ET">Ethiopia</option>\
                       <option value="FK">Falkland Islands (malvinas)</option>\
                       <option value="FO">Faroe Islands</option>\
                       <option value="FJ">Fiji</option>\
                       <option value="FI">Finland</option>\
                       <option value="FR">France</option>\
                       <option value="GF">French Guiana</option>\
                       <option value="PF">French Polynesia</option>\
                       <option value="TF">French Southern Territories</option>\
                       <option value="GA">Gabon</option>\
                       <option value="GM">Gambia</option>\
                       <option value="GE">Georgia</option>\
                       <option value="DE">Germany</option>\
                       <option value="GH">Ghana</option>\
                       <option value="GI">Gibraltar</option>\
                       <option value="GR">Greece</option>\
                       <option value="GL">Greenland</option>\
                       <option value="GD">Grenada</option>\
                       <option value="GP">Guadeloupe</option>\
                       <option value="GU">Guam</option>\
                       <option value="GT">Guatemala</option>\
                       <option value="GN">Guinea</option>\
                       <option value="GW">Guinea-bissau</option>\
                       <option value="GY">Guyana</option>\
                       <option value="HT">Haiti</option>\
                       <option value="VA">Holy See (vatican City State)</option>\
                       <option value="HN">Honduras</option>\
                       <option value="HK">Hong Kong</option>\
                       <option value="HU">Hungary</option>\
                       <option value="IS">Iceland</option>\
                       <option value="IN">India</option>\
                       <option value="ID">Indonesia</option>\
                       <option value="IR">Iran, Islamic Republic Of</option>\
                       <option value="IQ">Iraq</option>\
                       <option value="IE">Ireland</option>\
                       <option value="IL">Israel</option>\
                       <option value="IT">Italy</option>\
                       <option value="JM">Jamaica</option>\
                       <option value="JP">Japan</option>\
                       <option value="JO">Jordan</option>\
                       <option value="KZ">Kazakstan</option>\
                       <option value="KE">Kenya</option>\
                       <option value="KI">Kiribati</option>\
                       <option value="KP">Korea Democratic Peoples Republic Of</option>\
                       <option value="KR">Korea Republic Of</option>\
                       <option value="KW">Kuwait</option>\
                       <option value="KG">Kyrgyzstan</option>\
                       <option value="LA">Lao Peoples Democratic Republic</option>\
                       <option value="LV">Latvia</option>\
                       <option value="LB">Lebanon</option>\
                       <option value="LS">Lesotho</option>\
                       <option value="LR">Liberia</option>\
                       <option value="LY">Libyan Arab Jamahiriya</option>\
                       <option value="LI">Liechtenstein</option>\
                       <option value="LT">Lithuania</option>\
                       <option value="LU">Luxembourg</option>\
                       <option value="MO">Macau</option>\
                       <option value="MK">Macedonia</option>\
                       <option value="MG">Madagascar</option>\
                       <option value="MW">Malawi</option>\
                       <option value="MY">Malaysia</option>\
                       <option value="MV">Maldives</option>\
                       <option value="ML">Mali</option>\
                       <option value="MT">Malta</option>\
                       <option value="MH">Marshall Islands</option>\
                       <option value="MQ">Martinique</option>\
                       <option value="MR">Mauritania</option>\
                       <option value="MU">Mauritius</option>\
                       <option value="YT">Mayotte</option>\
                       <option value="MX">Mexico</option>\
                       <option value="FM">Micronesia, Federated States Of</option>\
                       <option value="MD">Moldova, Republic Of</option>\
                       <option value="MC">Monaco</option>\
                       <option value="MN">Mongolia</option>\
                       <option value="MS">Montserrat</option>\
                       <option value="MA">Morocco</option>\
                       <option value="MZ">Mozambique</option>\
                       <option value="MM">Myanmar</option>\
                       <option value="NA">Namibia</option>\
                       <option value="NR">Nauru</option>\
                       <option value="NP">Nepal</option>\
                       <option value="NL">Netherlands</option>\
                       <option value="AN">Netherlands Antilles</option>\
                       <option value="NC">New Caledonia</option>\
                       <option value="NZ">New Zealand</option>\
                       <option value="NI">Nicaragua</option>\
                       <option value="NE">Niger</option>\
                       <option value="NG">Nigeria</option>\
                       <option value="NU">Niue</option>\
                       <option value="NF">Norfolk Island</option>\
                       <option value="MP">Northern Mariana Islands</option>\
                       <option value="NO">Norway</option>\
                       <option value="OM">Oman</option>\
                       <option value="PK">Pakistan</option>\
                       <option value="PW">Palau</option>\
                       <option value="PS">Palestinian Territory, Occupied</option>\
                       <option value="PA">Panama</option>\
                       <option value="PG">Papua New Guinea</option>\
                       <option value="PY">Paraguay</option>\
                       <option value="PE">Peru</option>\
                       <option value="PH">Philippines</option>\
                       <option value="PN">Pitcairn</option>\
                       <option value="PL">Poland</option>\
                       <option value="PT">Portugal</option>\
                       <option value="PR">Puerto Rico</option>\
                       <option value="QA">Qatar</option>\
                       <option value="RE">Reunion</option>\
                       <option value="RO">Romania</option>\
                       <option value="RU">Russian Federation</option>\
                       <option value="RW">Rwanda</option>\
                       <option value="SH">Saint Helena</option>\
                       <option value="KN">Saint Kitts And Nevis</option>\
                       <option value="LC">Saint Lucia</option>\
                       <option value="PM">Saint Pierre And Miquelon</option>\
                       <option value="VC">Saint Vincent And The Grenadines</option>\
                       <option value="WS">Samoa</option>\
                       <option value="SM">San Marino</option>\
                       <option value="ST">Sao Tome And Principe</option>\
                       <option value="SA">Saudi Arabia</option>\
                       <option value="SN">Senegal</option>\
                       <option value="SC">Seychelles</option>\
                       <option value="SL">Sierra Leone</option>\
                       <option value="SG">Singapore</option>\
                       <option value="SK">Slovakia</option>\
                       <option value="SI">Slovenia</option>\
                       <option value="SB">Solomon Islands</option>\
                       <option value="SO">Somalia</option>\
                       <option value="ZA">South Africa</option>\
                       <option value="GS">South Georgia</option>\
                       <option value="ES">Spain</option>\
                       <option value="LK">Sri Lanka</option>\
                       <option value="SD">Sudan</option>\
                       <option value="SR">Suriname</option>\
                       <option value="SJ">Svalbard And Jan Mayen</option>\
                       <option value="SZ">Swaziland</option>\
                       <option value="SE">Sweden</option>\
                       <option value="CH">Switzerland</option>\
                       <option value="SY">Syrian Arab Republic</option>\
                       <option value="TW">Taiwan, Province Of China</option>\
                       <option value="TJ">Tajikistan</option>\
                       <option value="TZ">Tanzania, United Republic Of</option>\
                       <option value="TH">Thailand</option>\
                       <option value="TG">Togo</option>\
                       <option value="TK">Tokelau</option>\
                       <option value="TO">Tonga</option>\
                       <option value="TT">Trinidad And Tobago</option>\
                       <option value="TN">Tunisia</option>\
                       <option value="TR">Turkey</option>\
                       <option value="TM">Turkmenistan</option>\
                       <option value="TC">Turks And Caicos Islands</option>\
                       <option value="TV">Tuvalu</option>\
                       <option value="UG">Uganda</option>\
                       <option value="UA">Ukraine</option>\
                       <option value="AE">United Arab Emirates</option>\
                       <option value="GB">United Kingdom</option>\
                       <option value="UM">United States Minor Outlying Islands</option>\
                       <option value="UY">Uruguay</option>\
                       <option value="UZ">Uzbekistan</option>\
                       <option value="VU">Vanuatu</option>\
                       <option value="VE">Venezuela</option>\
                       <option value="VN">Viet Nam</option>\
                       <option value="VG">Virgin Islands, British</option>\
                       <option value="VI">Virgin Islands, U.s.</option>\
                       <option value="WF">Wallis And Futuna</option>\
                       <option value="EH">Western Sahara</option>\
                       <option value="YE">Yemen</option>\
                       <option value="YU">Yugoslavia</option>\
                       <option value="ZM">Zambia</option>\
                       <option value="ZW">Zimbabwe</option>\
                     </select>',
      scope: {
        id: '&?',
        ngModel: '='
      }
    };
  });
})();
'use strict';

(function () {
  "use strict";

  angular.module('cn.ui').directive('csvUpload', csvUpload);

  function csvUpload() {
    return {
      restrict: 'E',
      scope: {
        cnUploadPath: '=',
        ngModel: '='
      },
      link: Link,
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <file-upload class="col-sm-6"\
                     btn-text="Upload CSV"\
                     accept=".csv"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  function Link($scope, elem, attrs, ctrl) {
    function csvUploadTag() {}
    $scope.__tag = new csvUploadTag();

    $scope.$watch('vm.ngModel', function (newVal, prevVal) {
      if ($scope.onChange) {
        $scope.onChange({ $value: newVal });
      }
      if ($scope.$parent.$parent.ngModel) {
        $scope.$parent.$parent.ngModel.$setValidity('schemaForm', true);
      }
      if ($scope.$parent.$parent.form.required) {
        $scope.$parent.$parent.ngModel.$setValidity('tv4-302', !_.isEmpty($scope.vm.ngModel));
      }
      if (!angular.equals(newVal, prevVal)) {
        $scope.$parent.$parent.ngModel.$setDirty();
      }
    });
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar', '$rootScope', 'EVENTS'];
  function Upload($q, $http, $sce, cfpLoadingBar, $rootScope, EVENTS) {
    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setModelValue, setError);

      var formData = new FormData();
      formData.append('csv', $files[0]);

      $.ajax({
        url: vm.cnUploadPath,
        headers: $http.defaults.headers.common,
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: dfr.resolve,
        error: dfr.reject
      });

      cfpLoadingBar.start();
    }

    function setModelValue(response) {
      cfpLoadingBar.complete();
      vm.ngModel = response;
    }

    function setError(rawResp) {
      var response = JSON.parse(rawResp.responseText);

      $rootScope.$broadcast(EVENTS.httpError, {
        status: response.status,
        errors: [{ data: response.error }]
      });

      cfpLoadingBar.complete();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnCurrencyFormat', cnCurrencyFormat);

  function cnCurrencyFormat() {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      function cnCurrencyFormatTag() {}
      $scope.__tag = new cnCurrencyFormatTag();

      if (!vm) return;

      var format = attrs.cnCurrencyFormat;
      var placeholder = attrs.cnCurrencyPlaceholder;

      // Clean up event handlers
      $scope.$on('$destroy', function () {
        elem.off('blur', handleBlur);
      });

      activate();

      //////////

      function activate() {
        if (placeholder) {
          placeholder = formatVal(placeholder);
          elem.attr('placeholder', placeholder);
        }

        elem.on('blur', handleBlur);

        vm.$parsers.unshift(parseVal);
        vm.$formatters.unshift(function (val) {
          vm.$setDirty();
          return formatVal(val);
        });
      }

      function handleBlur(el) {
        if (/\.\d$/.test(elem[0].value)) return elem[0].value += '0';

        var overflow = elem[0].value.match(/(\d*\.\d{2})(.+)/);
        if (overflow) elem[0].value = overflow[1];
      }

      function parseVal(val) {
        if (!val) return val;
        var parsed = parseFloat(val.replace(/\,/g, ''));
        if (format === 'cents') {
          return _.multiply(parsed, 100);
        }
        if (format === 'microcents') {
          return _.multiply(parsed, 1000000);
        }
        return parsed;
      }

      function formatVal(val) {
        if (!val) val = '';else if (format === 'cents') {
          val = _.floor(val / 100, 2) || '';
        } else if (format === 'microcents') {
          val = _.floor(val / 1000000, 2) || '';
        } else {
          val = _.floor(val, 2) || '';
        }
        return (/\.\d$/.test(val) ? val + '0' : val
        );
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('fileUpload', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        btnStyle: '@',
        cnDisabled: '=',
        iconStyle: '@',
        callback: '&onFileSelect',
        inputId: '@',
        btnText: '@',
        accept: '@'
      },
      template: '<div class="file-wrapper">\
                       <button class="btn btn-file {{btnStyle}}" ng-disabled="cnDisabled">\
                         <i ng-if="iconStyle" class="{{iconStyle}}"></i> {{btnText}}\
                       </button>\
                       <input type="file" id="{{inputId}}" class="form-control" accept="{{accept}}"\
                              ng-file-select="onFileSelect($files)"/>\
                     </div>',
      compile: function compile(elem, attrs) {
        attrs.btnStyle = /btn-(primary|success|info|warning|danger|link)/.test(attrs.btnStyle) ? attrs.btnStyle : attrs.btnStyle + ' btn-default';
        attrs.inputId = attrs.inputId || 'file-' + _.uniqueId();
        attrs.btnText = attrs.btnText || 'Choose a file...';
        if (attrs.cnDisabled) {
          attrs.disabled = true;
        }

        return function link($scope, elem) {
          function fileUploadTag() {}
          $scope.__tag = new fileUploadTag();

          var btn = elem.find('button'),
              file = elem.find('input');

          btn.on('click', handleClick);

          // Clean up event handlers and closure variables
          $scope.$on('$destroy', function () {
            btn.off('click', handleClick);
            btn = null;
            file = null;
          });

          function handleClick() {
            file.click();
          }

          $scope.onFileSelect = function ($files) {
            $scope.callback({ $files: $files });
          };
        };
      }
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').filter('cnFilter', cnFilter).filter('titleCase', titleCase).filter('range', range).filter('toDateObject', toDateObject).filter('trustAs', trustAs).filter('trustAsHtml', trustAsHtml).filter('selectedItems', selectedItems).filter('momentjs', momentjs).filter('percent', percent).filter('camelCase', camelCase).filter('sortBy', sortBy).filter('truncate', truncate).filter('toNumber', toNumber).filter('toDecimal', toDecimal).filter('stripHtml', stripHtml);

  cnFilter.$inject = ['$filter'];
  function cnFilter($filter) {
    return function (array, expression) {
      return $filter('filter')(array, expression, function (actual, expected) {
        if (angular.isUndefined(actual)) {
          // No substring matching against `undefined`
          return false;
        }
        if (actual === null || expected === null) {
          // No substring matching against `null`; only match against `null`
          return actual === expected;
        }
        if (angular.isObject(expected) || angular.isObject(actual) && !hasCustomToString(actual)) {
          // Should not compare primitives against objects, unless they have custom `toString` method
          return false;
        }

        actual = angular.lowercase('' + actual);
        expected = angular.lowercase('' + expected).split(' ');
        var match = true;
        _.each(expected, function (str) {
          if (actual.indexOf(str) === -1) match = false;
        });
        return match;
      });

      function hasCustomToString(obj) {
        return angular.isFunction(obj.toString) && obj.toString !== Object.prototype.toString;
      }
    };
  }

  function titleCase() {
    return function (s) {
      s = s === undefined || s === null ? '' : s;
      return s.toString().toLowerCase().replace(/_|-/g, ' ').replace(/\b([a-z])/g, function (ch) {
        return ch.toUpperCase();
      });
    };
  }

  function range() {
    return function (input, start, end) {
      return input = _.range(start, end);
    };
  }

  function toDateObject() {
    return function (dateString) {
      return new Date(moment(dateString).toISOString());
    };
  }

  trustAs.$inject = ['$sce'];
  function trustAs($sce) {
    return function (val) {
      return $sce.trustAs(val);
    };
  }

  trustAsHtml.$inject = ['$sce'];
  function trustAsHtml($sce) {
    return function (val) {
      return $sce.trustAsHtml(val);
    };
  }

  function selectedItems() {
    return function (list, selected) {
      if (!selected || !selected.length) return list;

      return list.filter(function (item) {
        var match = false;
        selected.forEach(function (filter) {
          var compare = item[filter.key];
          if (_.isObject(compare)) {
            var tmp = {};
            tmp[filter.childKey || filter.key] = filter.value;
            if (_.find(compare, tmp)) {
              return match = true;
            }
          } else {
            if (compare == filter.value) {
              return match = true;
            }
          }
        });
        return match;
      });
    };
  }

  function momentjs() {
    return function (input, formatString) {
      formatString = formatString || '';
      var m = moment(input),
          out = '';

      if (m && m.isValid()) {
        if (formatString == 'calendar') {
          out = m.calendar();
        } else {
          out = m.format(formatString);
        }
      }

      return out;
    };
  }

  function percent() {
    return function (input, multiplier) {
      // defaults to 10000 to preserve previous logic
      multiplier = multiplier || 10000;
      var numericInput = parseFloat(input);
      var percent;

      if (typeof numericInput === 'number') {
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

    return function (input) {
      return input.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).replace(MOZ_HACK_REGEXP, 'Moz$1');
    };
  }

  function sortBy() {
    return function (obj, sortKey, direction) {

      direction = direction || 'asc';
      sortKey = sortKey;

      var array = [];
      Object.keys(obj).forEach(function (key) {
        array.push(obj[key]);
      });

      var getBySortKey = function getBySortKey(obj) {
        return obj[sortKey];
      };

      if (direction == 'asc') {
        array.sort(function (a, b) {

          if (getBySortKey(a) > getBySortKey(b)) {
            return 1;
          }
          if (getBySortKey(a) < getBySortKey(b)) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        array.sort(function (a, b) {
          return getBySortKey(b) - getBySortKey(a);
        });
      }

      return array;
    };
  }

  function truncate() {
    return function (input, chars, breakOnWord) {
      if (isNaN(chars)) return input;
      if (chars <= 0) return '';
      if (input && input.length >= chars) {
        input = input.substring(0, chars);

        if (!breakOnWord) {
          var lastspace = input.lastIndexOf(' ');
          //get last space
          if (lastspace !== -1) {
            input = input.substr(0, lastspace);
          }
        } else {
          while (input.charAt(input.length - 1) == ' ') {
            input = input.substr(0, input.length - 1);
          }
        }
        return input + '...';
      }
      return input;
    };
  }

  function toNumber() {
    return function (string) {
      var num = Number(string);
      return isNaN(num) ? 0 : num;
    };
  }

  function toDecimal() {
    return function (number, places) {
      var string, position, whole, decimal, float;

      if (!number) {
        return;
      }

      string = number.toString();

      if (string.length - places >= 0) {
        position = string.length - places > 0 ? string.length - places : 0;
        whole = string.substring(0, position);
        decimal = string.substring(position);
        float = whole + '.' + decimal;
      } else {
        return number;
      }
      return Number(float);
    };
  }

  function stripHtml() {
    return function (text) {
      return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
})();
'use strict';

(function () {
  'use strict';

  MastHead.$inject = ['$scope'];
  angular.module('cn.ui').directive('cnMastHead', cnMastHead);

  function cnMastHead() {
    return {
      restrict: 'E',
      template: '\n        <div class="cn-heading cn-mast-head">\n          <div class="cn-mast-head-inner">\n            <div class="cn-mast-head-main">\n              <div class="cn-heading-title">\n                <a ng-if="vm.config.backState"\n                   class="cn-heading-back"\n                   ui-sref="{{vm.config.backState}}">\n                  <i ng-show="vm.config.backState" class="icn-back"></i>\n                </a>\n                <h1 ng-hide="vm.config.dropdown">\n                  {{vm.config.title}}\n                </h1>\n                <h1 ng-show="vm.config.dropdown" data-toggle="dropdown">\n                  <a>\n                    {{vm.config.title}}\n                    <i ng-show="vm.config.dropdown" class="icn-caret"></i>\n                  </a>\n                </h1>\n                <ul ng-if="vm.config.dropdown"\n                    class="dropdown-menu row"\n                    ng-class="vm.config.dropdown.style"\n                    style="width: {{vm.config.dropdown.lists.length * 250}}px"\n                    role="menu">\n                  <div ng-repeat="list in vm.config.dropdown.lists"\n                       style="width: 250px">\n                    <li class="{{list.style}}">\n                      <div class="input-group">\n                        <input ng-model="list.filter"\n                               class="form-control"\n                               placeholder="{{list.name}}"/>\n                        <span class="input-group-addon">\n                          <i class="icn-search"></i>\n                        </span>\n                      </div>\n                    </li>\n                    <li class="divider"></li>\n                    <li ng-repeat="item in list.items | filter:list.filter"\n                        class="{{list.style}} {{item.style}}">\n                      <a ng-show="item.name"\n                         ng-click="list.handler(item)"\n                         ng-class="{\'selected\': list.isSelected(item)}">{{item.name}}</a>\n                    </li>\n                  </div>\n                </ul>\n              </div>\n  \n              <div ng-show="vm.config.options"\n                   class="pull-right btn-options">\n                <span ng-repeat="btn in vm.config.options">\n                  <a ng-if="btn.state"\n                     class="btn btn-sm btn-transparent"\n                     ui-sref="{{btn.state}}"\n                     title="{{btn.title}}">\n                    <i class="{{btn.icon}}"/>\n                  </a>\n                  <a ng-if="btn.href"\n                     class="btn btn-sm btn-transparent"\n                     ng-href="{{btn.href}}"\n                     title="{{btn.title}}">\n                    <i class="{{btn.icon}}"/>\n                  </a>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class="cn-mast-head-sub">\n            <div class="cn-mast-head-inner">\n              <ul class="tabs" ng-if="vm.config.tabs && vm.config.tabs.length">\n                <li ng-repeat="tab in vm.config.tabs"\n                    ng-class="{active: tab.active}"\n                    class="{{tab.style}}">\n                  <a ng-if="tab.state"\n                     ui-sref="{{tab.state}}">\n                    <i ng-show="tab.active" class="{{tab.icon}}"/>\n                    {{tab.name}}\n                  </a>\n                  <span ng-if="!tab.state">\n                    {{tab.name}}\n                  </span>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class="cn-mast-actions">\n            <div class="cn-mast-head-inner">\n              <div class="cn-actions"\n                   ng-if="vm.floater"\n                   ng-mouseenter="vm.toggleFloaters(false)"\n                   ng-mouseleave="vm.toggleFloaters(true)">\n                <floating-action-button\n                  ng-mouseenter="vm.floater.showTitle = true"\n                  ng-mouseleave="vm.floater.showTitle = false">\n                  <a class="btn {{vm.hideFloaters ? \'\' : vm.floater.style}}"\n                     ui-sref="{{vm.floater.state}}">\n                     <i ng-show="vm.floater.icon && !vm.hideFloaters"\n                        class="{{vm.floater.icon}}"></i>\n                     <span ng-show="vm.floater.text && vm.hideFloaters" class="text">\n                       {{vm.floater.text}}\n                     </span>\n                     <span ng-hide="vm.floater.icon || vm.floater.text || vm.hideFloaters">\n                       {{vm.floater.symbol || \'+\'}}\n                     </span>\n                     <span ng-show="vm.hideFloaters">+</span>\n                  </a>\n                  <span class="fab-title"\n                        ng-show="vm.floater.showTitle && vm.floater.title">\n                    {{vm.floater.title}}\n                  </span>\n                </floating-action-button>\n                <div class="cn-floaters" style="height: {{vm.floatersHeight}}">\n                  <div class="cn-floaters-inner">\n                    <floating-action-button\n                      ng-repeat="btn in vm.floaters"\n                      ng-mouseenter="btn.showTitle = true"\n                      ng-mouseleave="btn.showTitle = false">\n                      <a ng-show="btn.state"\n                         class="btn {{btn.style}}"\n                         ui-sref="{{btn.state}}">\n                         <i ng-show="btn.icon" class="{{btn.icon}}"></i>\n                         <span ng-show="btn.text" class="text">{{btn.text}}</span>\n                         <span ng-show="btn.symbol">{{btn.symbol}}</span>\n                       </a>\n                      <span class="fab-title"\n                            ng-show="btn.showTitle && btn.title">\n                        {{btn.title}}\n                      </span>\n                    </floating-action-button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>',
      scope: {
        config: '='
      },
      link: function link(scope, elem) {
        scope.vm.elem = elem;
      },
      controller: MastHead,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function MastHead($scope) {
    'ngInject';

    function cnMastHeadTag() {}
    $scope.__tag = new cnMastHeadTag();

    // Aggressive destroy
    $scope.$on('$destroy', function () {
      _.forOwn(vm, function (_v, k, c) {
        return c[k] = null;
      });
      vm = null;
    });

    var vm = this;
    vm.floater = _.first(vm.config.actions);
    vm.floaters = _.rest(vm.config.actions);
    vm.floatersHeight = 0;
    vm.hideFloaters = true;
    vm.toggleFloaters = toggleFloaters;

    ////////

    function toggleFloaters(hide) {
      vm.floatersHeight = hide ? 0 : vm.elem.find('.cn-floaters-inner').outerHeight() + 'px';
      vm.hideFloaters = hide;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnIframeHeight', cnIframeHeight);

  cnIframeHeight.$inject = ['$timeout'];
  function cnIframeHeight($timeout) {
    return {
      restrict: 'A',
      link: Link
    };

    function Link($scope, elem, attrs) {
      function cnIFrameHeightTag() {}
      $scope.__tag = new cnIFrameHeightTag();

      var body, $body, h;
      var insurance;
      var timers = [];

      $scope.$watch(function () {
        return attrs.ngSrc;
      }, function () {
        if (attrs.ngSrc) {
          insurance = 0;
          timers = timers.concat($timeout(activate, 100));
        }
      });

      // Clean up event listeners, timers, and closure references
      $scope.$on('$destroy', function () {
        angular.element(body).find('img').off('load', activate);

        body = null;

        _.each(timers, function (t) {
          return $timeout.cancel(t);
        });
        _.empty(timers);
        timers = null;
      });

      ////////

      function activate() {
        console.log(':: activate called ::');

        body = getBody();
        if (body) {
          elem.height('');
          h = body.scrollHeight;
          elem.height(h);
          angular.element(body).find('img').on('load', activate);
          if (!insurance) {
            ++insurance;

            var t = [$timeout(activate, 200), $timeout(activate, 500), $timeout(activate, 1000), $timeout(activate, 1500), $timeout(activate, 3500), $timeout(activate, 5000), $timeout(activate, 7500), $timeout(activate, 10000)];

            timers = timers.concat(t);
          }

          return;
        }

        timers = timers.concat([$timeout(activate, 100)]);
      }

      function getBody() {
        return elem.get(0).contentDocument && elem.get(0).contentDocument.body;
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('linkToFacebook', function () {

    var base = 'https://www.facebook.com/ads/manage/summary/';

    return {
      restrict: 'E',
      replace: true,
      template: '<a href="{{ link }}" target="_blank" ng-show="link" ng-click="$event.stopPropagation();">\
                       {{text}}\
                       <span class="glyphicon glyphicon-new-window small"></span>\
                     </a>',
      scope: {
        'fbObject': '=',
        'text': '@?'
      },

      link: function link($scope) {
        function linkToFacebookTag() {}
        $scope.__tag = new linkToFacebookTag();

        if ($scope.fbObject.twitterLink) {
          $scope.link = $scope.fbObject.twitterLink;
        } else if (_.has($scope.fbObject, 'fbCampaignGroupId')) {
          if ($scope.fbObject.fbCampaignGroupId) {
            $scope.link = base + 'campaign/?campaign_id=' + $scope.fbObject.fbCampaignGroupId;
          }
        } else if (_.has($scope.fbObject, 'fbCampaignId')) {
          if ($scope.fbObject.fbCampaignId) {
            $scope.link = base + 'adset/?ad_set_id=' + $scope.fbObject.fbCampaignId;
          }
        } else if (_.has($scope.fbObject, 'fbAdgroupId')) {
          if ($scope.fbObject.adSet.fbCampaignId && $scope.fbObject.fbAdgroupId) {
            $scope.link = base + 'adset/?ad_set_id=' + $scope.fbObject.adSet.fbCampaignId + '&show_adgroup_id=' + $scope.fbObject.fbAdgroupId;
          }
        }
      }
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnLoadingBar', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        run: '='
      },
      template: '<div><cn-progress-bar cn-limit="1" cn-progress="progress"></cn-progress-bar></div>',
      controller: ['$scope', '$interval', function ($scope, $interval) {
        function cnLoadingBarTag() {}
        $scope.__tag = new cnLoadingBarTag();

        $scope.progress = 0;
        $scope.counter = 1;
        $scope.numerator = 1;
        $scope.denominator = 3;

        $scope.$watch('run', function (newVal, oldVal) {
          if (newVal === oldVal) return;
          if ($scope.run) {
            start();
          } else {
            stop();
          }
        });

        function start() {
          $scope.interval = $interval(function () {
            $scope.progress = $scope.progress + $scope.numerator / $scope.denominator;
            $scope.denominator = $scope.denominator + 2 / $scope.counter;
            $scope.counter = $scope.counter * 0.66;
          }, 500);
        }

        function stop() {
          $interval.cancel($scope.interval);
          $scope.progress = 100;
        }

        $scope.$on('$destroy', function () {
          stop();
        });
      }]
    };
  });
})();
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  "use strict";

  angular.module('cn.ui').directive('mediaUpload', mediaUpload);

  function mediaUpload() {
    return {
      restrict: 'E',
      scope: {
        cnUploadPath: '=',
        cnFileType: '=',
        cnPreviewPath: '=',
        cnModelValueKey: '=',
        ngModel: '=',
        cnDisabled: '=',
        cnExistingPreview: '=',
        cnForm: '=',
        cnData: '=',
        cnKey: '=',
        cnImagePreviews: '='
      },
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <div class="img-placeholder col-sm-6" ng-class="{ empty: !vm.filePath }">\
          <img ng-if="vm.cnFileType === \'image\'" ng-src="{{vm.filePath}}"/>\
          <video ng-if="vm.cnFileType === \'video\' && vm.filePath"\
                 ng-src="{{vm.filePath}}"\
                 controls="controls" preload="none"/>\
        </div>\
        <file-upload class="col-sm-6"\
                     btn-text="Upload {{vm.cnFileType | titleCase}}"\
                     cn-disabled="vm.cnDisabled"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar', '$scope', 'md5', 'uuid4'];
  function Upload($q, $http, $sce, cfpLoadingBar, $scope, md5, uuid4) {
    function mediaUploadTag() {}
    $scope.__tag = new mediaUploadTag();

    var vm = this;

    vm.uploadFile = uploadFile;
    $scope.$watch('vm.ngModel', updatePreview);
    activate();

    function activate() {
      if (vm.cnExistingPreview) {
        vm.filePath = $sce.trustAsResourceUrl('/uploads/facebook/' + vm.cnExistingPreview);
      } else if (vm.cnFileType === 'image' && vm.ngModel) {
        vm.filePath = $sce.trustAsResourceUrl(vm.ngModel);
      } else if (vm.cnFileType === 'video' && vm.ngModel) {
        vm.filePath = $sce.trustAsResourceUrl(vm.ngModel.media);
      }
    }

    function updatePreview() {
      if (vm.cnFileType === 'image' && vm.ngModel && vm.ngModel.includes && vm.ngModel.includes("/")) {
        vm.filePath = $sce.trustAsResourceUrl(vm.ngModel);
      } else if (_.get(vm.cnImagePreviews, vm.cnKey)) {
        vm.filePath = $sce.trustAsResourceUrl(_.get(vm.cnImagePreviews, vm.cnKey));
      }
    }

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setFilePath).catch(handleError);
      var file = $files[0];
      var step = 1024 * 1024 * 8;
      var blob = file.slice();
      var reader = new FileReader();
      reader.readAsBinaryString(blob);
      reader.onload = function (e) {
        var fileHash = md5.createHash(reader.result);
        uploadFile_(file, 0, step, dfr, uuid4.generate(), fileHash);
      };
      cfpLoadingBar.start();
    }

    function uploadFile_(file, start, step, dfr, uuid, fileHash) {
      var size = file.size;
      var blob = file.slice(start, start + step);
      var formData = new FormData();
      formData.append("fileHash", fileHash);
      formData.append("filename", file.name);
      formData.append("uuid", uuid);
      formData.append(vm.cnFileType, blob);
      _.each(vm.cnData, function (value, key) {
        if (value) formData.append(key, value);
      });
      var end = Math.min(start + step, size);
      var headers = _extends({
        "Content-Range": 'bytes ' + start + '-' + end + '/' + size
      }, $http.defaults.headers.common);
      $.ajax({
        url: vm.cnUploadPath,
        headers: headers,
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function success(response) {
          if (response.media_object) dfr.resolve(response);else if (start + step < size) uploadFile_(file, start + step, step, dfr, uuid, fileHash);else dfr.resolve(response);
        },
        error: dfr.reject
      });
    }

    function setFilePath(response) {
      cfpLoadingBar.complete();
      if (vm.cnImagePreviews) {
        delete vm.cnImagePreviews[vm.cnKey];
      }
      vm.ngModel = response[vm.cnModelValueKey || 'media_id_string'];
      vm.filePath = $sce.trustAsResourceUrl(response[vm.cnPreviewPath || 'cn_preview_url']);
      var ngModelController = getNgModelController($scope);
      if (ngModelController) {
        _.each(ngModelController.$error, function (v, e) {
          ngModelController.$setValidity(e, true);
        });
      }
    }

    function handleError(err) {
      cfpLoadingBar.complete();
      var error = JSON.parse(err.responseText).error;
      $scope.$emit("citizenNet:toastEvent", { directiveData: { type: 'error', body: error } });
    }

    function getNgModelController(scope) {
      if (scope.ngModel) {
        return scope.ngModel;
      } else if (scope.$parent) {
        return getNgModelController(scope.$parent);
      } else {
        return null;
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').factory('cnModal', cnModal);

  cnModal.$inject = ['$modal', '$rootScope'];
  function cnModal($modal, $rootScope) {
    var vm = {
      onChangeState: null,
      open: open
    };

    return vm;

    ////////

    function open(options) {
      vm.onChangeState = $rootScope.$on('$stateChangeStart', function () {
        vm.onChangeState();
        if (vm.modal) {
          vm.modal.close();
        }
      });
      vm.modal = $modal.open(options);
      return vm.modal;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  cnNumber.$inject = ['$filter'];
  angular.module('cn.ui').directive('cnNumber', cnNumber);

  function cnNumber($filter) {
    'ngInject';

    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      function cnNumberTag() {}
      $scope.__tag = new cnNumberTag();

      if (!vm) return;

      activate();

      //////////

      function activate() {
        vm.$parsers.unshift(parseVal);
        vm.$formatters.unshift(function (val) {
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
'use strict';

(function () {
  "use strict";

  cnOnerror.$inject = ['$parse'];
  angular.module('cn.ui').directive('cnOnerror', cnOnerror);

  function cnOnerror($parse) {
    '$inject';

    return {
      restrict: 'A',
      link: function link(scope, elem, attrs) {
        function cnOnerrorTag() {}
        scope.__tag = new cnOnerrorTag();

        var handler = $parse(attrs.cnOnerror);
        elem[0].onerror = function (e, param) {
          return handler(scope, { param: param });
        };
      }
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnPagination', cnPagination);

  function cnPagination() {
    return {
      restrict: 'E',
      replace: true,
      template: '\
          <div class="cn-pagination clearfix"><div ng-if="paging">\
            <div class="btn-group" ng-if="count">\
              <button type="button" \
                      class="btn btn-sm btn-primary dropdown-toggle" \
                      data-toggle="dropdown">\
                {{count}} Results <span class="caret"></span>\
              </button>\
              <ul class="dropdown-menu" role="menu">\
                <li><a ng-click="onClick(1, 10)">10 Results</a></li>\
                <li><a ng-click="onClick(1, 25)">25 Results</a></li>\
                <li><a ng-click="onClick(1, 50)">50 Results</a></li>\
              </ul>\
            </div>\
            <ul class="pagination" ng-if="pages.length > 1">\
              <li ng-repeat="page in pages"\
                  ng-class="{active: page.active}">\
                <a ng-if="!page.disabled"\
                   ng-click="page.skip && onClick(page.skip)">{{page.label}}</a>\
                <span ng-if="page.disabled">{{page.label}}</span>\
              </li>\
            </ul>\
          </div></div>',
      scope: {
        paging: '=',
        onClick: '=',
        count: '=?'
      },
      link: function link($scope) {
        function cnPaginationTag() {}
        $scope.__tag = new cnPaginationTag();

        $scope.$watch('paging', function () {
          if ($scope.paging) {
            $scope.pages = buildPaging($scope.paging);
          }
        });

        function buildPaging(paging) {
          var pages = [],
              i = paging.skip < 4 ? 1 : paging.skip > paging.last - 3 ? paging.last - 4 : paging.skip - 2,
              l = paging.last + 1 > i + 5 ? i + 5 : paging.last + 1;

          if (paging.skip !== 1) {
            pages.push({
              label: '\u2190',
              skip: paging.skip - 1
            });
          }

          if (1 < i) {
            pages.push({
              label: 1,
              skip: 1
            });
            pages.push({
              label: '...',
              disabled: true
            });
          }

          for (; i < l; i++) {
            pages.push({
              label: i,
              active: i === paging.skip,
              skip: i
            });
          }if (paging.last >= l) {
            pages.push({
              label: '...',
              disabled: true
            });
            pages.push({
              label: paging.last,
              skip: paging.last
            });
          }

          if (paging.skip !== paging.last) {
            pages.push({
              label: '\u2192',
              skip: paging.skip + 1
            });
          }

          return pages;
        }
      }
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnParentWidth', cnParentWidth);

  cnParentWidth.$inject = ['$window', '$timeout'];
  function cnParentWidth($window, $timeout) {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, elem) {
      function cnParentWidthTag() {}
      scope.__tag = new cnParentWidthTag();

      var w = angular.element($window);
      var parent = elem.parent();

      // Clean up event handlers and closure references
      scope.$on('$destroy', function () {
        w.off('resize', activate);
        w = null;
        parent = null;
      });

      w.on('resize', activate);
      activate();
      $timeout(activate, 250);

      function activate() {
        elem.width(parent.width());
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnPercentageFormat', cnPercentageFormat);

  function cnPercentageFormat() {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      function cnPercentageFormatTag() {}
      $scope.__tag = new cnPercentageFormatTag();

      if (!vm) return;

      vm.$parsers.unshift(function () {
        return _.divide(elem[0].value, 100);
      });

      vm.$formatters.unshift(function () {
        elem[0].value = vm.$modelValue * 100;
        return elem[0].value;
      });
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnProgressBar', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        limit: '=cnLimit',
        projected: '=cnProjected',
        progress: '=cnProgress',
        flexWidth: '=cnProgressBarFlexWidth'
      },
      template: '<div class="cn-progress-container {{flexWidth ? \'flex-width\' : \'\'}}">\
                       <div class="cn-projected-bar" \
                            ng-class="{\'cn-progress-over\': limit && projected > limit}">\
                         <div class="cn-progress-bar" \
                              ng-class="{\'cn-progress-over\': limit && progress > limit}"></div>\
                       </div>\
                     </div>',
      link: function link($scope, elem) {
        function cnProgressBarTag() {}
        $scope.__tag = new cnProgressBarTag();

        var projectedBar = elem.find('.cn-projected-bar'),
            progressBar = elem.find('.cn-progress-bar');

        // Clean up closure references
        $scope.$on('$destroy', function () {
          projectedBar = null;
          progressBar = null;
        });

        $scope.$watch(function () {
          return '' + $scope.limit + $scope.projected + $scope.progress;
        }, function () {
          projectedBar.css('width', calculateWidth($scope.projected || $scope.progress, $scope.limit));
          progressBar.css('width', calculateWidth($scope.progress, $scope.projected));
        });

        function calculateWidth(numerator, denominator) {
          return (denominator ? _.percentage(numerator, denominator) : 100) + '%';
        }
      }
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('radio', function () {
    return {
      restrict: 'C',
      link: function link($scope, elem) {
        function radioTag() {}
        $scope.__tag = radioTag();

        if (elem.prop('tagName') === 'INPUT') {
          elem.after('<span></span>');
        } else {
          elem.find('input[type=radio]').after('<span></span>');
        }
      }
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnResponsiveHeight', cnResponsiveHeight);

  cnResponsiveHeight.$inject = ['$window', '$timeout'];

  function cnResponsiveHeight($window, $timeout) {
    var directive = {
      restrict: 'EA',
      link: linkFunction
    };

    return directive;

    function linkFunction($scope, elem, attrs) {
      function cnResponsiveHeightTag() {}
      $scope.__tag = new cnResponsiveHeightTag();

      console.log('attrs.cnResponsiveHeight', attrs.cnResponsiveHeight);
      if (attrs.cnResponsiveHeight === 'false') return;

      // Clean up event handlers and closure references
      $scope.$on('$destroy', function () {
        breakpoint = null;
        w.off('resize', activate);
        w = null;
      });

      var w = angular.element($window);
      var breakpoint = {
        sm: 768,
        md: 992,
        lg: 1200
      }[attrs.cnResponsiveBreak] || 0;

      w.on('resize', activate);
      /* give page elements a chance to render before calculation */
      $timeout(activate, 250);
      $timeout(activate, 500); // twice for good measure

      function activate() {
        if ($window.innerWidth > breakpoint) {
          var topOffset = elem.offset().top;

          if (topOffset < 0) {
            // calculate again after any animations have completed
            $timeout(activate, 500);
          } else {
            var bottomOffset = attrs.cnResponsiveHeight || 0;
            var height = w.height() - topOffset - bottomOffset;
            var overflow = attrs.cnResponsiveOverflow || 'auto';
            height = height ? height + 'px' : 'auto';
            if (_.has(attrs, 'cnSetMaxHeight')) {
              elem.css({
                'max-height': height,
                'overflow': overflow
              });
            } else {
              elem.css({
                'height': height,
                'overflow': overflow
              });
            }
          }
        } else {
          elem.css({ 'height': '' });
        }
      }
    }
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  'use strict';

  var CnSchedule = function () {
    CnSchedule.$inject = ['$scope'];
    function CnSchedule($scope) {
      'ngInject';

      // https://tools.ietf.org/html/rfc5545#section-3.3.10

      var _this = this;

      _classCallCheck(this, CnSchedule);

      this.FREQ = {
        SECONDLY: "SECONDLY",
        MINUTELY: "MINUTELY",
        DAILY: 'DAILY',
        WEEKLY: 'WEEKLY',
        MONTHLY: 'MONTHLY',
        YEARLY: "YEARLY"
      };

      this.WEEKDAY = {
        MO: 'MO',
        TU: 'TU',
        WE: 'WE',
        TH: 'TH',
        FR: 'FR',
        SA: 'SA',
        SU: "SU"
      };

      this.state = {
        BIWEEKLY: {
          freq: this.FREQ.WEEKLY,
          interval: 2,
          by: [this.WEEKDAY.MO, this.WEEKDAY.FR],
          _option: 'BIWEEKLY'
        },
        BOM: {
          freq: this.FREQ.MONTHLY,
          interval: 1,
          by: [1],
          _option: 'BOM'
        },
        DAILY: {
          freq: this.FREQ.DAILY,
          interval: 1,
          _option: 'DAILY'
        },
        EOM: {
          freq: this.FREQ.MONTHLY,
          interval: 1,
          by: [-1],
          _option: 'EOM'
        },
        MONTHLY: {
          freq: this.FREQ.MONTHLY,
          interval: 1,
          by: [14],
          _option: 'MONTHLY'
        },
        WEEKLY: {
          freq: this.FREQ.WEEKLY,
          interval: 1,
          by: [this.WEEKDAY.MO],
          _option: 'WEEKLY'
        },
        WORKDAY: {
          freq: this.FREQ.DAILY,
          interval: 1,
          by: _(this.WEEKDAY).keys().reject(function (value) {
            return _.eq(value, _this.WEEKDAY.SA) || _.eq(value, _this.WEEKDAY.SU);
          }).value(),
          _option: 'WORKDAY'
        }
      };

      this.keyedWeekDays = _.map(this.WEEKDAY, function (key, value) {
        return { name: _this.showWeekDay(value), value: value };
      });

      $scope.$watch(function () {
        return _this.model;
      }, function (value) {
        return _this.ngModel.$setViewValue(value);
      });
    }

    _createClass(CnSchedule, [{
      key: '$onInit',
      value: function $onInit() {
        var _this2 = this;

        this.ngModel.$render = function () {
          var viewValue = _this2.ngModel.$viewValue;
          var _option = _.get(viewValue, '_option');

          if (_.isObject(viewValue) && _.isString(_option)) {
            _.assign(_this2.state[_option], viewValue);
            _this2.model = _this2.state[_option];
          } else {
            _this2.model = _this2.state.WEEKLY;
          }
        };
      }
    }, {
      key: 'handleChangeBiWeekly',
      value: function handleChangeBiWeekly(biweekly) {
        _.set(this.state.BIWEEKLY, 'by', biweekly);
      }
    }, {
      key: 'handleChangeWeekly',
      value: function handleChangeWeekly(weekday) {
        _.set(this.state.WEEKLY, 'by', [weekday]);
      }
    }, {
      key: 'showWeekDay',
      value: function showWeekDay(day) {
        return {
          MO: 'Monday',
          TU: 'Tuesday',
          WE: 'Wednesday',
          TH: 'Thursday',
          FR: 'Friday',
          SA: 'Saturday',
          SU: 'Sunday'
        }[day];
      }
    }]);

    return CnSchedule;
  }();

  var cnScheduleComponent = {
    bindings: {
      form: '<'
    },
    controller: CnSchedule,
    controllerAs: 'schedule',
    require: {
      ngModel: '^ngModel'
    },
    template: '\n      <div class="form-group">\n        <div class="btn-group clearfix">\n\n          <label class="radio radio-block">\n            <input type="radio"\n                   ng-model="schedule.model"\n                   ng-value="schedule.state.WEEKLY">\n              Every\n              &nbsp;\n              <div class="btn-group"\n                   uib-dropdown\n                   is-open="weeklyIsOpen">\n                <button type="button"\n                        class="btn btn-primary"\n                        uib-dropdown-toggle\n                        ng-disabled="schedule.model._option !== \'WEEKLY\'"\n                        style="background-color: #DEDEDE; color: black;">\n                  {{ schedule.showWeekDay(schedule.state.WEEKLY.by[0]) }}\n                  &nbsp;\n                  <span class="caret"></span>\n                </button>\n                <ul class="dropdown-menu"\n                    uib-dropdown-menu\n                    role="menu"\n                    aria-labelledby="single-button">\n                  <li role="menuitem"\n                      ng-click="schedule.handleChangeWeekly(wd.value)"\n                      ng-repeat="wd in schedule.keyedWeekDays track by wd.value">\n                    <a>{{ wd.name }}</a>\n                  </li>\n                </ul>\n              </div>\n            </input>\n          </label>\n\n          <label class="radio radio-block">\n            <input type="radio"\n                   ng-model="schedule.model"\n                   ng-value="schedule.state.BIWEEKLY">\n              Every\n              &nbsp;\n              <div class="btn-group"\n                   uib-dropdown\n                   is-open="biWeeklyXIsOpen">\n                <button type="button"\n                        class="btn btn-primary"\n                        uib-dropdown-toggle\n                        ng-disabled="schedule.model._option !== \'BIWEEKLY\'"\n                        style="background-color: #DEDEDE; color: black;">\n                  {{ schedule.showWeekDay(schedule.state.BIWEEKLY.by[0]) }}\n                  &nbsp;\n                  <span class="caret"></span>\n                </button>\n                <ul class="dropdown-menu"\n                    uib-dropdown-menu\n                    role="menu"\n                    aria-labelledby="single-button">\n                  <li role="menuitem"\n                      ng-hide="wd.value === schedule.state.BIWEEKLY.by[1]"\n                      ng-click="schedule.handleChangeBiWeekly([wd.value, schedule.state.BIWEEKLY.by[1]])"\n                      ng-repeat="wd in schedule.keyedWeekDays track by wd.value">\n                    <a>{{ wd.name }}</a>\n                  </li>\n                </ul>\n              </div>\n              &nbsp;\n              and\n              &nbsp;\n              <div class="btn-group"\n                   uib-dropdown\n                   is-open="biWeeklyYIsOpen">\n                <button type="button"\n                        class="btn btn-primary"\n                        uib-dropdown-toggle\n                        ng-disabled="schedule.model._option !== \'BIWEEKLY\'"\n                        style="background-color: #DEDEDE; color: black;">\n                  {{ schedule.showWeekDay(schedule.state.BIWEEKLY.by[1]) }}\n                  &nbsp;\n                  <span class="caret"></span>\n                </button>\n                <ul class="dropdown-menu"\n                    uib-dropdown-menu\n                    role="menu"\n                    aria-labelledby="single-button">\n                  <li role="menuitem"\n                      ng-hide="wd.value === schedule.state.BIWEEKLY.by[0]"\n                      ng-click="schedule.handleChangeBiWeekly([schedule.state.BIWEEKLY.by[0], wd.value])"\n                      ng-repeat="wd in schedule.keyedWeekDays track by wd.value">\n                    <a>{{ wd.name }}</a>\n                  </li>\n                </ul>\n              </div>\n            </input>\n          </label>\n\n          <label class="radio radio-block">\n            <input type="radio"\n                   ng-model="schedule.model"\n                   ng-value="schedule.state.WORKDAY">\n              Weekdays\n            </input>\n          </label>\n\n          <label class="radio radio-block">\n            <input type="radio"\n                   ng-model="schedule.model"\n                   ng-value="schedule.state.DAILY">\n              Daily\n            </input>\n          </label>\n\n          <label class="radio radio-block">\n            <input type="radio"\n                   ng-model="schedule.model"\n                   ng-value="schedule.state.BOM">\n              Beginning of Month\n            </input>\n          </label>\n\n          <label class="radio radio-block">\n            <input type="radio"\n                   ng-model="schedule.model"\n                   ng-value="schedule.state.EOM">\n              End of Month\n            </input>\n          </label>\n\n          <label class="radio radio-block">\n            <input type="radio"\n                   ng-model="schedule.model"\n                   ng-value="schedule.state.MONTHLY">\n              Every\n              &nbsp;\n              <input max="31"\n                     min="1"\n                     ng-disabled="schedule.model._option !== \'MONTHLY\'"\n                     ng-model-options="{ debounce: 300 }"\n                     ng-model="schedule.state.MONTHLY.by[0]"\n                     step="1"\n                     style="width: 50px; text-align: center;"\n                     type="number"\n                     class="form-control" />\n              &nbsp;\n              of the month\n            </input>\n          </label>\n        </div>\n      </div>\n    '
  };

  angular.module('cn.ui').component('cnSchedule', cnScheduleComponent);
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnSelectOr', cnSelectOr);

  function cnSelectOr() {
    return {
      restrict: 'E',
      template: function template(elem, attrs) {
        console.log('template:', elem, attrs);
        var tpl = '\
          <div class="cn-select-or" ng-disabled="vm.disabled">\
            <p ng-show="vm.selectFrom.length" class="toggle-view">\
              <a ng-click="vm.toggleView()">\
                {{vm.view === \'list\' ? vm.toggleText.list : vm.toggleText.new}}\
              </a>\
            </p>\
            <div ng-show="vm.form.view === \'new\'" ng-transclude/>\
            <div ng-show="vm.form.view === \'list\'" class="cn-list">\
              <table class="list-group table card-flex">\
                <tr ng-repeat="item in vm.selectFrom"\
                    selection-model\
                    selection-model-type="checkbox"\
                    selection-model-cleanup-strategy="deselect"\
                    selection-model-selected-items="vm.selected">\
                  <td class="col-sm-1 text-center">\
                    <span class="checkbox">\
                      <input type="checkbox" id="checkbox{{ item.id }}" selection-model-ignore="false"/>\
                    </span>\
                  </td>\
                  <td class="col-sm-11" ng-bind-html="vm.processTemplate(item)"></td>\
                </tr>\
              </table>\
            </div>\
          </div>\
        ';
        return tpl;
      },
      transclude: true,
      scope: {
        selectFrom: '=',
        ngModel: '=',
        form: '=ffForm',
        directiveId: '=',
        toggleText: '=',
        disabled: '=',
        itemTemplate: '='
      },
      require: 'ngModel',
      link: Link,
      controller: SelectOr,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function Link($scope, elem, attrs, ctrl) {
    function cnSelectOrTag() {}
    $scope.__tag = new cnSelectOrTag();

    var vm = $scope.vm;

    $scope.$watch('vm.ngModel', validate, true);

    //////////

    function validate(cur, prev) {
      if (!angular.equals(cur, prev)) {
        ctrl.$setDirty();

        if (vm.form.required) {
          ctrl.$setValidity('tv4-302', !!cur);
        }
      }
    }
  }

  SelectOr.$inject = ['$scope', '$sce', '$interpolate'];
  function SelectOr($scope, $sce, $interpolate) {
    var vm = this;
    vm.selected = [];
    vm.form.view = vm.form.view || 'new';
    vm.activate = activate;
    vm.onSelectionChange = onSelectionChange;
    vm.processTemplate = processTemplate;
    vm.setValue = setValue;
    vm.toggleView = toggleView;

    $scope.$watch('vm.selected.length', vm.onSelectionChange);

    vm.activate();

    ///////////

    function activate() {
      vm.form.schema._required = _.clone(vm.form.schema.required);
    }

    function processTemplate(item) {
      return $sce.trustAsHtml($interpolate(vm.itemTemplate)(item));
    }

    function onSelectionChange() {
      vm.setValue(_.first(vm.selected) || null);
    }

    function setValue(val) {
      if (val) {
        val = vm.form.schema.type === 'object' ? val : val[vm.form.valueProperty || 'value'];
      }
      vm.ngModel = val;
    }

    function toggleView() {
      vm.form.view = vm.form.view === 'new' ? 'list' : 'new';
      if (vm.selected[0]) {
        vm.selected[0].selected = false;
        vm.selected.length = 0;
      }
    }
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var CnShelf = function () {
    CnShelf.$inject = ['$element', '$timeout', '$scope'];
    function CnShelf($element, $timeout, $scope) {
      'ngInject';

      _classCallCheck(this, CnShelf);

      function cnShelfTag() {}
      $scope.__tag = new cnShelfTag();

      this.$element = $element;
      this.$timeout = $timeout;
    }

    _createClass(CnShelf, [{
      key: '$onInit',
      value: function $onInit() {
        this.$element.addClass('animated fast animated-width');
        this.toggleShow();
      }
    }, {
      key: '$onChanges',
      value: function $onChanges(changes) {
        if (changes.show) {
          this.toggleShow();
        }
      }
    }, {
      key: 'toggleShow',
      value: function toggleShow() {
        var _this = this;

        if (this.show) {
          this.$timeout(function () {
            _this.$element.removeClass(_this.hideClass).addClass(_this.showClass);
          }, this.showDelay || 0);
        } else {
          this.$timeout(function () {
            _this.$element.removeClass(_this.showClass).addClass(_this.hideClass);
          }, this.hideDelay || 0);
        }
      }
    }]);

    return CnShelf;
  }();

  var cnShelf = {
    controller: CnShelf,
    controllerAs: 'shelf',
    bindings: {
      show: '<',
      showClass: '@',
      hideClass: '@',
      showDelay: '<',
      hideDelay: '<'
    }
  };

  angular.module('cn.ui').component('cnShelf', cnShelf);
})();
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  'use strict';

  toastController.$inject = ['$rootScope', 'toaster', '$scope'];

  function toastController($rootScope, toaster, $scope) {
    function toastTag() {}
    $scope.__tag = new toastTag();

    var defaults = {
      timeout: 5000,
      toasterId: 'simple',
      body: 'simple-toast',
      bodyOutputType: 'directive',
      tapToDismiss: false,
      closeHtml: '<a>Dismiss</a>'
    };

    var rslistener = $rootScope.$on("citizenNet:toastEvent", function (event, options) {
      if (_.isObject(options)) {
        options.directiveData.icon = mapType(options.directiveData.type);
        if (Array.isArray(options.directiveData.body)) {
          options.directiveData.body = options.directiveData.body.join('<br />');
        }
        toaster.pop(_extends({}, defaults, options));
      } else {
        toaster.pop(_extends({}, defaults, { directiveData: { body: options } }));
      }
    });

    function mapType(type) {
      switch (type) {
        case "success":
          return "icn-thumbsup";
        case "warning":
          return "icn-error";
        case "danger":
          return "icn-error";
        case "error":
          return "icn-error";
        default:
          return "icn-info";
      }
    }

    $scope.$on('$destroy', function () {
      rslistener();
    });
  }

  var simpleToast = function simpleToast() {
    return {
      template: '\n      <div class=\'flex-box align-items-center\'>\n        <div class="padding-right-20">\n          <i ng-class="directiveData.icon || \'icn-info\'"></i>\n        </div>\n        <div class="padding-right-20 flex-1">\n          <span ng-bind-html=\'directiveData.body\'>{{directiveData.body}}</span>\n        </div>\n      </div>\n    '
    };
  };

  var actionToast = function actionToast() {
    return {
      template: '\n      <div class=\'flex-box align-items-center\'>\n        <div class=\'padding-right-20\'>\n          <i ng-class=\'directiveData.icon || "icn-info"\'></i>\n        </div>\n        <div class=\'padding-right-20 flex-1\'>\n          <span>{{directiveData.body}}</span>\n        </div>\n        <div class=\'btn-group\'>\n          <span ng-repeat=\'action in directiveData.actions\'>\n            <a class=\'btn btn-primary\' ng-click=\'action.click()\'>{{action.text}}</a>\n          </span>\n        </div>\n      </div>\n    '
    };
  };

  var listToast = function listToast() {
    return {
      template: '\n      <div class="flex-box align-items-center">\n        <div class="padding-right-40">\n          <span class="label">{{directiveData.selected.length}}</span>\n          {{directiveData.type}} Selected\n        </div>\n        <div class="padding-right-20 flex-5 btn-group">\n          <span ng-repeat="action in directiveData.actions">\n            <a\n              class="btn btn-default margin-right-10"\n              ng-click="action.click()"\n              ng-disabled="action.disabled && action.disabled()"\n            >{{action.text}}</a>\n            <i class="fa fa-question"\n               style="color:lightgrey; cursor:pointer;padding:5px;"\n               ng-if="action.tooltip && action.disabled && action.disabled()"\n               tooltip="{{action.tooltip}}"\n            ></i>\n          </span>\n          <span>\n            <a class="btn btn-transparent" ng-click="directiveData.deselect()">Deselect All</a>\n          </span>\n        </div>\n      </div>\n    '
    };
  };

  angular.module('cn.ui').controller('toastController', toastController).directive("simpleToast", simpleToast).directive("actionToast", actionToast).directive("listToast", listToast);
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnToggleSwitch', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '\n            <div class="cn-toggle"\n                  ng-class="currentCssState()"\n                  ng-click="toggle($event)">\n              <i class="icn-toggle"\n                  ng-class="currentCssState()"></i>\n            </div>\n          ',
      require: '^ngModel',
      scope: {
        'ngModel': '=', // property used to determine on / off state
        'onValue': '=?',
        'offValue': '=?',
        'undefinedClass': '=?',
        'readOnly': '=',
        'required': '=',
        'onChange': '&' // callback when toggle changes
      },
      link: function link($scope, elem, attrs, ctrl) {
        function cnToggleSwitchTag() {}
        $scope.__tag = new cnToggleSwitchTag();

        $scope.onValue = _.isUndefined($scope.onValue) ? true : $scope.onValue;
        $scope.offValue = _.isUndefined($scope.offValue) ? false : $scope.offValue;
        $scope.undefinedClass = $scope.undefinedClass || 'schrodinger';

        $scope.currentCssState = function () {
          var classes = [];
          if ($scope.readOnly) classes.push('readonly');
          if ($scope.ngModel == $scope.onValue) {} else if ($scope.ngModel == $scope.offValue) classes.push('disabled');else classes.push($scope.undefinedClass);
          return classes.join(' ');
        };

        $scope.toggle = function ($event) {
          $event.preventDefault();
          $event.stopImmediatePropagation();

          // Using evil twins to do string to number type conversion comparison
          if ($scope.ngModel == $scope.onValue) {
            $scope.ngModel = $scope.offValue;
          } else {
            $scope.ngModel = $scope.onValue;
          }

          ctrl.$setDirty();

          if ($scope.onChange) {
            $scope.onChange();
          }
        };

        $scope.$watch('ngModel', function (val, pre) {
          ctrl.$setValidity('schemaForm', true);
          ctrl.$setValidity('tv4-302', !$scope.required || !angular.isUndefined(val));
        });
      }
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('truncate', function () {
    return {
      restrict: 'AE',
      scope: {
        text: '=truncateText',
        size: '=truncateSize',
        show: '@truncateShow'
      },
      link: function link($scope, elem) {
        function truncateTag() {}
        $scope.__tag = new truncateTag();

        $scope.$on('$destroy', function () {
          if ($scope.show) {
            elem.off($scope.show, truncate);
          }
        });

        var ogText = $scope.text || '',
            shortText = ogText.length > $scope.size ? ogText.substr(0, $scope.size) + '\u2026' : ogText,
            truncated = false;

        function truncate() {
          elem.text(truncated ? ogText : shortText);
          truncated = !truncated;
        }

        truncate();

        if ($scope.show) {
          elem.on($scope.show, truncate);
        }
      }
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('cnUrlFormat', cnUrlFormat);

  function cnUrlFormat() {
    return {
      require: '?ngModel',
      link: link
    };

    function link($scope, elem, attrs, vm) {
      if (!vm) return;

      // Clean up event handlers
      $scope.$on('$destroy', function () {
        elem.off('input', handleChange);
      });

      activate();

      //////////

      function activate() {
        elem.on('input', handleChange);
      }

      function handleChange(el) {
        if (el.target.value.length < 5) {} else if (!el.target.value.startsWith("http")) {
          el.target.value = "https://" + el.target.value;
        }
      }
    }
  }
})();
/**!
 * AngularJS file upload/drop directive with http post and progress
 * @author  Danial  <danial.farid@gmail.com>
 * @version 1.4.0
 */
(function() {
	
var angularFileUpload = angular.module('angularFileUpload', []);

angularFileUpload.service('$upload', ['$http', '$timeout', function($http, $timeout) {
	function sendHttp(config) {
		config.method = config.method || 'POST';
		config.headers = config.headers || {};
		config.transformRequest = config.transformRequest || function(data, headersGetter) {
			if (window.ArrayBuffer && data instanceof window.ArrayBuffer) {
				return data;
			}
			return $http.defaults.transformRequest[0](data, headersGetter);
		};

		if (window.XMLHttpRequest.__isShim) {
			config.headers['__setXHR_'] = function() {
				return function(xhr) {
					if (!xhr) return;
					config.__XHR = xhr;
					config.xhrFn && config.xhrFn(xhr);
					xhr.upload.addEventListener('progress', function(e) {
						if (config.progress) {
							$timeout(function() {
								if(config.progress) config.progress(e);
							});
						}
					}, false);
					//fix for firefox not firing upload progress end, also IE8-9
					xhr.upload.addEventListener('load', function(e) {
						if (e.lengthComputable) {
							if(config.progress) config.progress(e);
						}
					}, false);
				};
			};
		}

		var promise = $http(config);

		promise.progress = function(fn) {
			config.progress = fn;
			return promise;
		};
		promise.abort = function() {
			if (config.__XHR) {
				$timeout(function() {
					config.__XHR.abort();
				});
			}
			return promise;
		};
		promise.xhr = function(fn) {
			config.xhrFn = fn;
			return promise;
		};
		promise.then = (function(promise, origThen) {
			return function(s, e, p) {
				config.progress = p || config.progress;
				var result = origThen.apply(promise, [s, e, p]);
				result.abort = promise.abort;
				result.progress = promise.progress;
				result.xhr = promise.xhr;
				result.then = promise.then;
				return result;
			};
		})(promise, promise.then);
		
		return promise;
	}

	this.upload = function(config) {
		config.headers = config.headers || {};
		config.headers['Content-Type'] = undefined;
		config.transformRequest = config.transformRequest || $http.defaults.transformRequest;
		var formData = new FormData();
		var origTransformRequest = config.transformRequest;
		var origData = config.data;
		config.transformRequest = function(formData, headerGetter) {
			if (origData) {
				if (config.formDataAppender) {
					for (var key in origData) {
						var val = origData[key];
						config.formDataAppender(formData, key, val);
					}
				} else {
					for (var key in origData) {
						var val = origData[key];
						if (typeof origTransformRequest == 'function') {
							val = origTransformRequest(val, headerGetter);
						} else {
							for (var i = 0; i < origTransformRequest.length; i++) {
								var transformFn = origTransformRequest[i];
								if (typeof transformFn == 'function') {
									val = transformFn(val, headerGetter);
								}
							}
						}
						formData.append(key, val);
					}
				}
			}

			if (config.file != null) {
				var fileFormName = config.fileFormDataName || 'file';

				if (Object.prototype.toString.call(config.file) === '[object Array]') {
					var isFileFormNameString = Object.prototype.toString.call(fileFormName) === '[object String]'; 
					for (var i = 0; i < config.file.length; i++) {
						formData.append(isFileFormNameString ? fileFormName + i : fileFormName[i], config.file[i], config.file[i].name);
					}
				} else {
					formData.append(fileFormName, config.file, config.file.name);
				}
			}
			return formData;
		};

		config.data = formData;

		return sendHttp(config);
	};

	this.http = function(config) {
		return sendHttp(config);
	}
}]);

angularFileUpload.directive('ngFileSelect', [ '$parse', '$timeout', function($parse, $timeout) {
	return function(scope, elem, attr) {
		var fn = $parse(attr['ngFileSelect']);
		elem.bind('change', function(evt) {
			var files = [], fileList, i;
			fileList = evt.target.files;
			if (fileList != null) {
				for (i = 0; i < fileList.length; i++) {
					files.push(fileList.item(i));
				}
			}
			$timeout(function() {
				fn(scope, {
					$files : files,
					$event : evt
				});
			});
		});
		// removed this since it was confusing if the user click on browse and then cancel #181
//		elem.bind('click', function(){
//			this.value = null;
//		});
		
		// touch screens
		if (('ontouchstart' in window) ||
				(navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
			elem.bind('touchend', function(e) {
				e.preventDefault();
				e.target.click();
			});
		}
	};
} ]);

angularFileUpload.directive('ngFileDropAvailable', [ '$parse', '$timeout', function($parse, $timeout) {
	return function(scope, elem, attr) {
		if ('draggable' in document.createElement('span')) {
			var fn = $parse(attr['ngFileDropAvailable']);
			$timeout(function() {
				fn(scope);
			});
		}
	};
} ]);

angularFileUpload.directive('ngFileDrop', [ '$parse', '$timeout', function($parse, $timeout) {
	return function(scope, elem, attr) {		
		if ('draggable' in document.createElement('span')) {
			var cancel = null;
			var fn = $parse(attr['ngFileDrop']);
			elem[0].addEventListener("dragover", function(evt) {
				$timeout.cancel(cancel);
				evt.stopPropagation();
				evt.preventDefault();
				elem.addClass(attr['ngFileDragOverClass'] || "dragover");
			}, false);
			elem[0].addEventListener("dragleave", function(evt) {
				cancel = $timeout(function() {
					elem.removeClass(attr['ngFileDragOverClass'] || "dragover");
				});
			}, false);
			
			var processing = 0;
			function traverseFileTree(files, item) {
				if (item.isDirectory) {
					var dirReader = item.createReader();
					processing++;
					dirReader.readEntries(function(entries) {
						for (var i = 0; i < entries.length; i++) {
							traverseFileTree(files, entries[i]);
						}
						processing--;
					});
				} else {
					processing++;
		    	    item.file(function(file) {
		    	    	processing--;
		    	    	files.push(file);
		    	    });
	    	  }
			}
			
			elem[0].addEventListener("drop", function(evt) {
				evt.stopPropagation();
				evt.preventDefault();
				elem.removeClass(attr['ngFileDragOverClass'] || "dragover");
				var files = [], items = evt.dataTransfer.items;
				if (items && items.length > 0 && items[0].webkitGetAsEntry) {
					for (var i = 0; i < items.length; i++) {
						traverseFileTree(files, items[i].webkitGetAsEntry());
					}
				} else {
					var fileList = evt.dataTransfer.files;
					if (fileList != null) {
						for (var i = 0; i < fileList.length; i++) {
							files.push(fileList.item(i));
						}
					}
				}
				(function callback(delay) {
					$timeout(function() {
						if (!processing) {
							fn(scope, {
								$files : files,
								$event : evt
							});
						} else {
							callback(10);
						}
					}, delay || 0)
				})();
			}, false);
		}
	};
} ]);

})();

/* global angular */
(function(window, document) {
    'use strict';

    /*
     * AngularJS Toaster
     * Version: 2.1.0
     *
     * Copyright 2013-2016 Jiri Kavulak.
     * All Rights Reserved.
     * Use, reproduction, distribution, and modification of this code is subject to the terms and
     * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
     *
     * Author: Jiri Kavulak
     * Related to project of John Papa, Hans Fjällemark and Nguyễn Thiện Hùng (thienhung1989)
     */

    angular.module('toaster', []).constant(
        'toasterConfig', {
            'limit': 0,                   // limits max number of toasts
            'tap-to-dismiss': true,
            'close-button': false,
            'close-html': '<button class="toast-close-button" type="button">&times;</button>',
            'newest-on-top': true,
            'time-out': 5000,
            'icon-classes': {
                error: 'toast-error',
                info: 'toast-info',
                wait: 'toast-wait',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            'body-output-type': '', // Options: '', 'trustedHtml', 'template', 'templateWithData', 'directive'
            'body-template': 'toasterBodyTmpl.html',
            'icon-class': 'toast-info',
            'position-class': 'toast-top-right', // Options (see CSS):
            // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
            // 'toast-top-left', 'toast-top-center', 'toast-top-right',
            // 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-right',
            'title-class': 'toast-title',
            'message-class': 'toast-message',
            'prevent-duplicates': false,
            'mouseover-timer-stop': true // stop timeout on mouseover and restart timer on mouseout
        }
    ).run(['$templateCache', function($templateCache) {
            $templateCache.put('angularjs-toaster/toast.html',
                '<div id="toast-container" ng-class="[config.position, config.animation]">' +
                    '<div ng-repeat="toaster in toasters" class="toast" ng-class="toaster.type" ng-click="click($event, toaster)" ng-mouseover="stopTimer(toaster)" ng-mouseout="restartTimer(toaster)">' +
                        '<div ng-if="toaster.showCloseButton" ng-click="click($event, toaster, true)" ng-bind-html="toaster.closeHtml"></div>' +
                        '<div ng-class="config.title">{{toaster.title}}</div>' +
                        '<div ng-class="config.message" ng-switch on="toaster.bodyOutputType">' +
                        '<div ng-switch-when="trustedHtml" ng-bind-html="toaster.html"></div>' +
                        '<div ng-switch-when="template"><div ng-include="toaster.bodyTemplate"></div></div>' +
                        '<div ng-switch-when="templateWithData"><div ng-include="toaster.bodyTemplate"></div></div>' +
                        '<div ng-switch-when="directive"><div directive-template directive-name="{{toaster.html}}" directive-data="toaster.directiveData"></div></div>' +
                        '<div ng-switch-default >{{toaster.body}}</div>' +
                        '</div>' +
                    '</div>' +
                '</div>');
        }
    ]).service(
        'toaster', [
            '$rootScope', 'toasterConfig', function($rootScope, toasterConfig) {
                // http://stackoverflow.com/questions/26501688/a-typescript-guid-class
                var Guid = (function() {
                    var Guid = {};
                    Guid.newGuid = function() {
                        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                            return v.toString(16);
                        });
                    };
                    return Guid;
                }());

                this.pop = function(type, title, body, timeout, bodyOutputType, clickHandler, toasterId, showCloseButton, toastId, onHideCallback) {
                    if (angular.isObject(type)) {
                        var params = type; // Enable named parameters as pop argument
                        this.toast = {
                            type: params.type,
                            title: params.title,
                            body: params.body,
                            timeout: params.timeout,
                            bodyOutputType: params.bodyOutputType,
                            clickHandler: params.clickHandler,
                            showCloseButton: params.showCloseButton,
                            closeHtml: params.closeHtml,
                            toastId: params.toastId,
                            onShowCallback: params.onShowCallback,
                            onHideCallback: params.onHideCallback,
                            directiveData: params.directiveData,
                            tapToDismiss: params.tapToDismiss
                        };
                        toasterId = params.toasterId;
                    } else {
                        this.toast = {
                            type: type,
                            title: title,
                            body: body,
                            timeout: timeout,
                            bodyOutputType: bodyOutputType,
                            clickHandler: clickHandler,
                            showCloseButton: showCloseButton,
                            toastId: toastId,
                            onHideCallback: onHideCallback
                        };
                    }

                    if (!this.toast.toastId || !this.toast.toastId.length) {
                        this.toast.toastId = Guid.newGuid();
                    }

                    $rootScope.$emit('toaster-newToast', toasterId, this.toast.toastId);
                    
                    return {
                        toasterId: toasterId,
                        toastId: this.toast.toastId
                    };
                };

                this.clear = function(toasterId, toastId) {
                    if (angular.isObject(toasterId)) {
                        $rootScope.$emit('toaster-clearToasts', toasterId.toasterId, toasterId.toastId);
                    } else {
                        $rootScope.$emit('toaster-clearToasts', toasterId, toastId);
                    }
                };

                // Create one method per icon class, to allow to call toaster.info() and similar
                for (var type in toasterConfig['icon-classes']) {
                    this[type] = createTypeMethod(type);
                }

                function createTypeMethod(toasterType) {
                    return function(title, body, timeout, bodyOutputType, clickHandler, toasterId, showCloseButton, toastId, onHideCallback) {
                        if (angular.isString(title)) {
                            return this.pop(
                                toasterType,
                                title,
                                body,
                                timeout,
                                bodyOutputType,
                                clickHandler,
                                toasterId,
                                showCloseButton,
                                toastId,
                                onHideCallback);
                        } else { // 'title' is actually an object with options
                            return this.pop(angular.extend(title, { type: toasterType }));
                        }
                    };
                }
            }]
        ).factory(
        'toasterEventRegistry', [
            '$rootScope', function($rootScope) {
                var deregisterNewToast = null, deregisterClearToasts = null, newToastEventSubscribers = [], clearToastsEventSubscribers = [], toasterFactory;

                toasterFactory = {
                    setup: function() {
                        if (!deregisterNewToast) {
                            deregisterNewToast = $rootScope.$on(
                                'toaster-newToast', function(event, toasterId, toastId) {
                                    for (var i = 0, len = newToastEventSubscribers.length; i < len; i++) {
                                        newToastEventSubscribers[i](event, toasterId, toastId);
                                    }
                                });
                        }

                        if (!deregisterClearToasts) {
                            deregisterClearToasts = $rootScope.$on(
                                'toaster-clearToasts', function(event, toasterId, toastId) {
                                    for (var i = 0, len = clearToastsEventSubscribers.length; i < len; i++) {
                                        clearToastsEventSubscribers[i](event, toasterId, toastId);
                                    }
                                });
                        }
                    },

                    subscribeToNewToastEvent: function(onNewToast) {
                        newToastEventSubscribers.push(onNewToast);
                    },
                    subscribeToClearToastsEvent: function(onClearToasts) {
                        clearToastsEventSubscribers.push(onClearToasts);
                    },
                    unsubscribeToNewToastEvent: function(onNewToast) {
                        var index = newToastEventSubscribers.indexOf(onNewToast);
                        if (index >= 0) {
                            newToastEventSubscribers.splice(index, 1);
                        }

                        if (newToastEventSubscribers.length === 0) {
                            deregisterNewToast();
                            deregisterNewToast = null;
                        }
                    },
                    unsubscribeToClearToastsEvent: function(onClearToasts) {
                        var index = clearToastsEventSubscribers.indexOf(onClearToasts);
                        if (index >= 0) {
                            clearToastsEventSubscribers.splice(index, 1);
                        }

                        if (clearToastsEventSubscribers.length === 0) {
                            deregisterClearToasts();
                            deregisterClearToasts = null;
                        }
                    }
                };
                return {
                    setup: toasterFactory.setup,
                    subscribeToNewToastEvent: toasterFactory.subscribeToNewToastEvent,
                    subscribeToClearToastsEvent: toasterFactory.subscribeToClearToastsEvent,
                    unsubscribeToNewToastEvent: toasterFactory.unsubscribeToNewToastEvent,
                    unsubscribeToClearToastsEvent: toasterFactory.unsubscribeToClearToastsEvent
                };
            }]
        )
        .directive('directiveTemplate', ['$compile', '$injector', function($compile, $injector) {
            return {
                restrict: 'A',
                scope: {
                    directiveName: '@directiveName',
                    directiveData: '=directiveData'
                },
                replace: true,
                link: function(scope, elm, attrs) {
                    scope.$watch('directiveName', function(directiveName) {
                        if (angular.isUndefined(directiveName) || directiveName.length <= 0)
                            throw new Error('A valid directive name must be provided via the toast body argument when using bodyOutputType: directive');

                        var directive;

                        try {
                            directive = $injector.get(attrs.$normalize(directiveName) + 'Directive');
                        } catch (e) {
                            throw new Error(directiveName + ' could not be found. ' +
                                'The name should appear as it exists in the markup, not camelCased as it would appear in the directive declaration,' +
                                ' e.g. directive-name not directiveName.');
                        }


                        var directiveDetails = directive[0];

                        if (directiveDetails.scope !== true && directiveDetails.scope) {
                            throw new Error('Cannot use a directive with an isolated scope. ' +
                                'The scope must be either true or falsy (e.g. false/null/undefined). ' +
                                'Occurred for directive ' + directiveName + '.');
                        }

                        if (directiveDetails.restrict.indexOf('A') < 0) {
                            throw new Error('Directives must be usable as attributes. ' +
                                'Add "A" to the restrict option (or remove the option entirely). Occurred for directive ' +
                                directiveName + '.');
                        }

                        if (scope.directiveData)
                            scope.directiveData = angular.fromJson(scope.directiveData);

                        var template = $compile('<div ' + directiveName + '></div>')(scope);

                        elm.append(template);
                    });
                }
            };
        }])
        .directive(
        'toasterContainer', [
            '$parse', '$rootScope', '$interval', '$sce', 'toasterConfig', 'toaster', 'toasterEventRegistry',
            function($parse, $rootScope, $interval, $sce, toasterConfig, toaster, toasterEventRegistry) {
                return {
                    replace: true,
                    restrict: 'EA',
                    scope: true, // creates an internal scope for this directive (one per directive instance)
                    link: function(scope, elm, attrs) {
                        var mergedConfig;

                        // Merges configuration set in directive with default one
                        mergedConfig = angular.extend({}, toasterConfig, scope.$eval(attrs.toasterOptions));

                        scope.config = {
                            toasterId: mergedConfig['toaster-id'],
                            position: mergedConfig['position-class'],
                            title: mergedConfig['title-class'],
                            message: mergedConfig['message-class'],
                            tap: mergedConfig['tap-to-dismiss'],
                            closeButton: mergedConfig['close-button'],
                            closeHtml: mergedConfig['close-html'],
                            animation: mergedConfig['animation-class'],
                            mouseoverTimer: mergedConfig['mouseover-timer-stop']
                        };

                        scope.$on(
                            "$destroy", function() {
                                toasterEventRegistry.unsubscribeToNewToastEvent(scope._onNewToast);
                                toasterEventRegistry.unsubscribeToClearToastsEvent(scope._onClearToasts);
                            }
                        );

                        function setTimeout(toast, time) {
                            toast.timeoutPromise = $interval(
                                function() {
                                    scope.removeToast(toast.toastId);
                                }, time, 1
                            );
                        }

                        scope.configureTimer = function(toast) {
                            var timeout = angular.isNumber(toast.timeout) ? toast.timeout : mergedConfig['time-out'];
                            if (typeof timeout === "object") timeout = timeout[toast.type];
                            if (timeout > 0) {
                                setTimeout(toast, timeout);
                            }
                        };

                        function addToast(toast, toastId) {
                            toast.type = mergedConfig['icon-classes'][toast.type];
                            if (!toast.type) {
                                toast.type = mergedConfig['icon-class'];
                            }

                            if (mergedConfig['prevent-duplicates'] === true && scope.toasters.length) {
                                if (scope.toasters[scope.toasters.length - 1].body === toast.body) {
                                    return;
                                } else {
                                    var i, len, dupFound = false;
                                    for (i = 0, len = scope.toasters.length; i < len; i++) {
                                        if (scope.toasters[i].toastId === toastId) {
                                            dupFound = true;
                                            break;
                                        }
                                    }
                                    
                                    if (dupFound) return;
                                }
                            }


                            // set the showCloseButton property on the toast so that
                            // each template can bind directly to the property to show/hide
                            // the close button
                            var closeButton = mergedConfig['close-button'];

                            // if toast.showCloseButton is a boolean value,
                            // it was specifically overriden in the pop arguments
                            if (typeof toast.showCloseButton === "boolean") {

                            } else if (typeof closeButton === "boolean") {
                                toast.showCloseButton = closeButton;
                            } else if (typeof closeButton === "object") {
                                var closeButtonForType = closeButton[toast.type];

                                if (typeof closeButtonForType !== "undefined" && closeButtonForType !== null) {
                                    toast.showCloseButton = closeButtonForType;
                                }
                            } else {
                                // if an option was not set, default to false.
                                toast.showCloseButton = false;
                            }

                            if (toast.showCloseButton) {
                                toast.closeHtml = $sce.trustAsHtml(toast.closeHtml || scope.config.closeHtml);
                            }

                            // Set the toast.bodyOutputType to the default if it isn't set
                            toast.bodyOutputType = toast.bodyOutputType || mergedConfig['body-output-type'];
                            switch (toast.bodyOutputType) {
                                case 'trustedHtml':
                                    toast.html = $sce.trustAsHtml(toast.body);
                                    break;
                                case 'template':
                                    toast.bodyTemplate = toast.body || mergedConfig['body-template'];
                                    break;
                                case 'templateWithData':
                                    var fcGet = $parse(toast.body || mergedConfig['body-template']);
                                    var templateWithData = fcGet(scope);
                                    toast.bodyTemplate = templateWithData.template;
                                    toast.data = templateWithData.data;
                                    break;
                                case 'directive':
                                    toast.html = toast.body;
                                    break;
                            }

                            scope.configureTimer(toast);

                            if (mergedConfig['newest-on-top'] === true) {
                                scope.toasters.unshift(toast);
                                if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
                                    scope.toasters.pop();
                                }
                            } else {
                                scope.toasters.push(toast);
                                if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
                                    scope.toasters.shift();
                                }
                            }

                            if (angular.isFunction(toast.onShowCallback)) {
                                toast.onShowCallback();
                            }
                        }

                        scope.removeToast = function(toastId) {
                            var i, len;
                            for (i = 0, len = scope.toasters.length; i < len; i++) {
                                if (scope.toasters[i].toastId === toastId) {
                                    removeToast(i);
                                    break;
                                }
                            }
                        };

                        function removeToast(toastIndex) {
                            var toast = scope.toasters[toastIndex];

                            // toast is always defined since the index always has a match
                            if (toast.timeoutPromise) {
                                $interval.cancel(toast.timeoutPromise);
                            }
                            scope.toasters.splice(toastIndex, 1);

                            if (angular.isFunction(toast.onHideCallback)) {
                                toast.onHideCallback();
                            }
                        }

                        function removeAllToasts(toastId) {
                            for (var i = scope.toasters.length - 1; i >= 0; i--) {
                                if (isUndefinedOrNull(toastId)) {
                                    removeToast(i);
                                } else {
                                    if (scope.toasters[i].toastId == toastId) {
                                        removeToast(i);
                                    }
                                }
                            }
                        }

                        scope.toasters = [];

                        function isUndefinedOrNull(val) {
                            return angular.isUndefined(val) || val === null;
                        }

                        scope._onNewToast = function(event, toasterId, toastId) {
                            // Compatibility: if toaster has no toasterId defined, and if call to display
                            // hasn't either, then the request is for us

                            if ((isUndefinedOrNull(scope.config.toasterId) && isUndefinedOrNull(toasterId)) || (!isUndefinedOrNull(scope.config.toasterId) && !isUndefinedOrNull(toasterId) && scope.config.toasterId == toasterId)) {
                                addToast(toaster.toast, toastId);
                            }
                        };
                        scope._onClearToasts = function(event, toasterId, toastId) {
                            // Compatibility: if toaster has no toasterId defined, and if call to display
                            // hasn't either, then the request is for us
                            if (toasterId == '*' || (isUndefinedOrNull(scope.config.toasterId) && isUndefinedOrNull(toasterId)) || (!isUndefinedOrNull(scope.config.toasterId) && !isUndefinedOrNull(toasterId) && scope.config.toasterId == toasterId)) {
                                removeAllToasts(toastId);
                            }
                        };

                        toasterEventRegistry.setup();

                        toasterEventRegistry.subscribeToNewToastEvent(scope._onNewToast);
                        toasterEventRegistry.subscribeToClearToastsEvent(scope._onClearToasts);
                    },
                    controller: [
                        '$scope', '$element', '$attrs', function($scope, $element, $attrs) {
                            // Called on mouseover
                            $scope.stopTimer = function(toast) {
                                if ($scope.config.mouseoverTimer === true) {
                                    if (toast.timeoutPromise) {
                                        $interval.cancel(toast.timeoutPromise);
                                        toast.timeoutPromise = null;
                                    }
                                }
                            };

                            // Called on mouseout
                            $scope.restartTimer = function(toast) {
                                if ($scope.config.mouseoverTimer === true) {
                                    if (!toast.timeoutPromise) {
                                        $scope.configureTimer(toast);
                                    }
                                } else if (toast.timeoutPromise === null) {
                                    $scope.removeToast(toast.toastId);
                                }
                            };

                            $scope.click = function(event, toast, isCloseButton) {
                                event.stopPropagation();

                                var tapToDismiss = typeof toast.tapToDismiss === "boolean" 
                                                        ? toast.tapToDismiss 
                                                        : $scope.config.tap;
                                if (tapToDismiss === true || (toast.showCloseButton === true && isCloseButton === true)) {
                                    var removeToast = true;
                                    if (toast.clickHandler) {
                                        if (angular.isFunction(toast.clickHandler)) {
                                            removeToast = toast.clickHandler(toast, isCloseButton);
                                        } else if (angular.isFunction($scope.$parent.$eval(toast.clickHandler))) {
                                            removeToast = $scope.$parent.$eval(toast.clickHandler)(toast, isCloseButton);
                                        } else {
                                            console.log("TOAST-NOTE: Your click handler is not inside a parent scope of toaster-container.");
                                        }
                                    }
                                    if (removeToast) {
                                        $scope.removeToast(toast.toastId);
                                    }
                                }
                            };
                        }],
                    templateUrl: 'angularjs-toaster/toast.html'
                };
            }]
        );
})(window, document);

/*
  angular-md5 - v0.1.8 
  2015-11-17
*/

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
  module.exports = "angular-md5";
}
(function(angular) {
  angular.module("angular-md5", [ "gdi2290.md5" ]);
  angular.module("ngMd5", [ "gdi2290.md5" ]);
  angular.module("gdi2290.md5", [ "gdi2290.gravatar-filter", "gdi2290.md5-service", "gdi2290.md5-filter" ]);
  "use strict";
  angular.module("gdi2290.gravatar-filter", []).filter("gravatar", [ "md5", function(md5) {
    var cache = {};
    return function(text, defaultText) {
      if (!cache[text]) {
        defaultText = defaultText ? md5.createHash(defaultText.toString().toLowerCase()) : "";
        cache[text] = text ? md5.createHash(text.toString().toLowerCase()) : defaultText;
      }
      return cache[text];
    };
  } ]);
  "use strict";
  angular.module("gdi2290.md5-filter", []).filter("md5", [ "md5", function(md5) {
    return function(text) {
      return text ? md5.createHash(text.toString().toLowerCase()) : text;
    };
  } ]);
  "use strict";
  angular.module("gdi2290.md5-service", []).factory("md5", [ function() {
    var md5 = {
      createHash: function(str) {
        if (null === str) {
          return null;
        }
        var xl;
        var rotateLeft = function(lValue, iShiftBits) {
          return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
        };
        var addUnsigned = function(lX, lY) {
          var lX4, lY4, lX8, lY8, lResult;
          lX8 = lX & 2147483648;
          lY8 = lY & 2147483648;
          lX4 = lX & 1073741824;
          lY4 = lY & 1073741824;
          lResult = (lX & 1073741823) + (lY & 1073741823);
          if (lX4 & lY4) {
            return lResult ^ 2147483648 ^ lX8 ^ lY8;
          }
          if (lX4 | lY4) {
            if (lResult & 1073741824) {
              return lResult ^ 3221225472 ^ lX8 ^ lY8;
            } else {
              return lResult ^ 1073741824 ^ lX8 ^ lY8;
            }
          } else {
            return lResult ^ lX8 ^ lY8;
          }
        };
        var _F = function(x, y, z) {
          return x & y | ~x & z;
        };
        var _G = function(x, y, z) {
          return x & z | y & ~z;
        };
        var _H = function(x, y, z) {
          return x ^ y ^ z;
        };
        var _I = function(x, y, z) {
          return y ^ (x | ~z);
        };
        var _FF = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var _GG = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var _HH = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var _II = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var convertToWordArray = function(str) {
          var lWordCount;
          var lMessageLength = str.length;
          var lNumberOfWords_temp1 = lMessageLength + 8;
          var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
          var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
          var lWordArray = new Array(lNumberOfWords - 1);
          var lBytePosition = 0;
          var lByteCount = 0;
          while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
          }
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
          return lWordArray;
        };
        var wordToHex = function(lValue) {
          var wordToHexValue = "", wordToHexValue_temp = "", lByte, lCount;
          for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> lCount * 8 & 255;
            wordToHexValue_temp = "0" + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
          }
          return wordToHexValue;
        };
        var x = [], k, AA, BB, CC, DD, a, b, c, d, S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        x = convertToWordArray(str);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        xl = x.length;
        for (k = 0; k < xl; k += 16) {
          AA = a;
          BB = b;
          CC = c;
          DD = d;
          a = _FF(a, b, c, d, x[k + 0], S11, 3614090360);
          d = _FF(d, a, b, c, x[k + 1], S12, 3905402710);
          c = _FF(c, d, a, b, x[k + 2], S13, 606105819);
          b = _FF(b, c, d, a, x[k + 3], S14, 3250441966);
          a = _FF(a, b, c, d, x[k + 4], S11, 4118548399);
          d = _FF(d, a, b, c, x[k + 5], S12, 1200080426);
          c = _FF(c, d, a, b, x[k + 6], S13, 2821735955);
          b = _FF(b, c, d, a, x[k + 7], S14, 4249261313);
          a = _FF(a, b, c, d, x[k + 8], S11, 1770035416);
          d = _FF(d, a, b, c, x[k + 9], S12, 2336552879);
          c = _FF(c, d, a, b, x[k + 10], S13, 4294925233);
          b = _FF(b, c, d, a, x[k + 11], S14, 2304563134);
          a = _FF(a, b, c, d, x[k + 12], S11, 1804603682);
          d = _FF(d, a, b, c, x[k + 13], S12, 4254626195);
          c = _FF(c, d, a, b, x[k + 14], S13, 2792965006);
          b = _FF(b, c, d, a, x[k + 15], S14, 1236535329);
          a = _GG(a, b, c, d, x[k + 1], S21, 4129170786);
          d = _GG(d, a, b, c, x[k + 6], S22, 3225465664);
          c = _GG(c, d, a, b, x[k + 11], S23, 643717713);
          b = _GG(b, c, d, a, x[k + 0], S24, 3921069994);
          a = _GG(a, b, c, d, x[k + 5], S21, 3593408605);
          d = _GG(d, a, b, c, x[k + 10], S22, 38016083);
          c = _GG(c, d, a, b, x[k + 15], S23, 3634488961);
          b = _GG(b, c, d, a, x[k + 4], S24, 3889429448);
          a = _GG(a, b, c, d, x[k + 9], S21, 568446438);
          d = _GG(d, a, b, c, x[k + 14], S22, 3275163606);
          c = _GG(c, d, a, b, x[k + 3], S23, 4107603335);
          b = _GG(b, c, d, a, x[k + 8], S24, 1163531501);
          a = _GG(a, b, c, d, x[k + 13], S21, 2850285829);
          d = _GG(d, a, b, c, x[k + 2], S22, 4243563512);
          c = _GG(c, d, a, b, x[k + 7], S23, 1735328473);
          b = _GG(b, c, d, a, x[k + 12], S24, 2368359562);
          a = _HH(a, b, c, d, x[k + 5], S31, 4294588738);
          d = _HH(d, a, b, c, x[k + 8], S32, 2272392833);
          c = _HH(c, d, a, b, x[k + 11], S33, 1839030562);
          b = _HH(b, c, d, a, x[k + 14], S34, 4259657740);
          a = _HH(a, b, c, d, x[k + 1], S31, 2763975236);
          d = _HH(d, a, b, c, x[k + 4], S32, 1272893353);
          c = _HH(c, d, a, b, x[k + 7], S33, 4139469664);
          b = _HH(b, c, d, a, x[k + 10], S34, 3200236656);
          a = _HH(a, b, c, d, x[k + 13], S31, 681279174);
          d = _HH(d, a, b, c, x[k + 0], S32, 3936430074);
          c = _HH(c, d, a, b, x[k + 3], S33, 3572445317);
          b = _HH(b, c, d, a, x[k + 6], S34, 76029189);
          a = _HH(a, b, c, d, x[k + 9], S31, 3654602809);
          d = _HH(d, a, b, c, x[k + 12], S32, 3873151461);
          c = _HH(c, d, a, b, x[k + 15], S33, 530742520);
          b = _HH(b, c, d, a, x[k + 2], S34, 3299628645);
          a = _II(a, b, c, d, x[k + 0], S41, 4096336452);
          d = _II(d, a, b, c, x[k + 7], S42, 1126891415);
          c = _II(c, d, a, b, x[k + 14], S43, 2878612391);
          b = _II(b, c, d, a, x[k + 5], S44, 4237533241);
          a = _II(a, b, c, d, x[k + 12], S41, 1700485571);
          d = _II(d, a, b, c, x[k + 3], S42, 2399980690);
          c = _II(c, d, a, b, x[k + 10], S43, 4293915773);
          b = _II(b, c, d, a, x[k + 1], S44, 2240044497);
          a = _II(a, b, c, d, x[k + 8], S41, 1873313359);
          d = _II(d, a, b, c, x[k + 15], S42, 4264355552);
          c = _II(c, d, a, b, x[k + 6], S43, 2734768916);
          b = _II(b, c, d, a, x[k + 13], S44, 1309151649);
          a = _II(a, b, c, d, x[k + 4], S41, 4149444226);
          d = _II(d, a, b, c, x[k + 11], S42, 3174756917);
          c = _II(c, d, a, b, x[k + 2], S43, 718787259);
          b = _II(b, c, d, a, x[k + 9], S44, 3951481745);
          a = addUnsigned(a, AA);
          b = addUnsigned(b, BB);
          c = addUnsigned(c, CC);
          d = addUnsigned(d, DD);
        }
        var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
        return temp.toLowerCase();
      }
    };
    return md5;
  } ]);
})(angular);
(function (angular) {
  'use strict';

  // RFC4122 version 4 compliant UUID generator.
  // Based on: https://github.com/pnegri/uuid-js
  angular.module('uuid4', []).factory('uuid4', function () {

    var maxFromBits = function(bits) {
      return Math.pow(2, bits);
    };

    var limitUI04 = maxFromBits(4);
    var limitUI06 = maxFromBits(6);
    var limitUI08 = maxFromBits(8);
    var limitUI12 = maxFromBits(12);
    var limitUI14 = maxFromBits(14);
    var limitUI16 = maxFromBits(16);
    var limitUI32 = maxFromBits(32);
    var limitUI40 = maxFromBits(40);
    var limitUI48 = maxFromBits(48);

    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomUI06 = function() {
      return getRandomInt(0, limitUI06-1);
    };

    var randomUI08 = function() {
      return getRandomInt(0, limitUI08-1);
    };

    var randomUI12 = function() {
      return getRandomInt(0, limitUI12-1);
    };

    var randomUI16 = function() {
      return getRandomInt(0, limitUI16-1);
    };

    var randomUI32 = function() {
      return getRandomInt(0, limitUI32-1);
    };

    var randomUI48 = function() {
      return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 48 - 30)) * (1 << 30);
    };

    var paddedString =  function(string, length, z) {
      string = String(string);
      z = (!z) ? '0' : z;
      var i = length - string.length;
      for (; i > 0; i >>>= 1, z += z) {
        if (i & 1) {
          string = z + string;
        }
      }
      return string;
    };

    var fromParts = function(timeLow, timeMid, timeHiAndVersion, clockSeqHiAndReserved, clockSeqLow, node) {
      var hex = paddedString(timeLow.toString(16), 8)
                 + '-'
                 + paddedString(timeMid.toString(16), 4)
                 + '-'
                 + paddedString(timeHiAndVersion.toString(16), 4)
                 + '-'
                 + paddedString(clockSeqHiAndReserved.toString(16), 2)
                 + paddedString(clockSeqLow.toString(16), 2)
                 + '-'
                 + paddedString(node.toString(16), 12);
      return hex;
    };

    return {
      generate: function () {
        return fromParts(
          randomUI32(),
          randomUI16(),
          0x4000 | randomUI12(),
          0x80   | randomUI06(),
          randomUI08(),
          randomUI48()
        );
      },

      // addition by Ka-Jan to test for validity
      // Based on: http://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
      validate: function (uuid) {
        var testPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return testPattern.test(uuid);
      }
    };
  });

}(angular));
