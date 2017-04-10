'use strict';

(function () {
  'use strict';

  angular.module('cn.ui', ['angularFileUpload', 'toaster', 'ngAnimate']);
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

  cnCurrencyFormat.$inject = ['$compile'];
  function cnCurrencyFormat($compile) {
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
        if (format === 'cents') {
          return _.multiply(val, 100);
        }
        if (format === 'microcents') {
          return _.multiply(val, 1000000);
        }
        return parseFloat(val);
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
        cnData: '='
      },
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <div class="img-placeholder col-sm-6" ng-class="{ empty: !vm.filePath }">\
          <img ng-if="vm.cnFileType === \'image\'" ng-src="{{vm.filePath}}"/>\
          <video ng-if="vm.cnFileType === \'video\' && vm.filePath"\
                 ng-src="{{vm.filePath}}"\
                 controls="controls"/>\
        </div>\
        <file-upload class="col-sm-6"\
                     btn-text="Upload {{vm.cnFileType | titleCase}}"\
                     cn-disabled="vm.cnDisabled"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar', '$scope'];
  function Upload($q, $http, $sce, cfpLoadingBar, $scope) {
    function mediaUploadTag() {}
    $scope.__tag = new mediaUploadTag();

    var vm = this;

    vm.uploadFile = uploadFile;

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

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setFilePath).catch(handleError);

      var formData = new FormData();
      formData.append(vm.cnFileType, $files[0]);

      _.each(vm.cnData, function (value, key) {
        if (value) formData.append(key, value);
      });

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

    function setFilePath(response) {
      cfpLoadingBar.complete();
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
      template: '\n      <div class="flex-box align-items-center">\n        <div class="padding-right-40">\n          <span class="label">{{directiveData.selected.length}}</span>\n          {{directiveData.type}} Selected\n        </div>\n        <div class="padding-right-20 flex-5 btn-group">\n          <span ng-repeat="action in directiveData.actions">\n            <a class="btn btn-default margin-right-10" ng-click="action.click()">{{action.text}}</a>\n          </span>\n        </div>\n        <div>\n          <a ng-click="directiveData.deselect()">Deselect All</a>\n        </div>\n      </div>\n    '
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
      template: '\
                  <div class="cn-toggle"\
                       ng-class="currentCssState()"\
                       ng-click="toggle($event)">\
                    <i class="icn-toggle"\
                       ng-class="currentCssState()"></i>\
                  </div>',
      require: '^ngModel',
      scope: {
        'ngModel': '=', // property used to determine on / off state
        'onValue': '=?',
        'offValue': '=?',
        'undefinedClass': '=?',
        'readOnly': '=',
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