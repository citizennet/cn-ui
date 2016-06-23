'use strict';

(function () {
  'use strict';

  angular.module('cn.ui', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.ui').directive('checkbox', function () {
    return {
      restrict: 'C',
      link: function link($scope, elem) {
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
      controller: Upload,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <file-upload class="col-sm-6"\
                     btn-text="Upload CSV"\
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar'];
  function Upload($q, $http, $sce, cfpLoadingBar) {
    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setModelValue, cfpLoadingBar.complete);

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
      if (!vm) return;

      var format = attrs.cnCurrencyFormat;
      var placeholder = attrs.cnCurrencyPlaceholder;

      activate();

      //////////

      function activate() {
        if (placeholder) {
          placeholder = formatVal(placeholder);
          elem.attr('placeholder', placeholder);
        }

        elem.on('blur', function (el) {
          if (/\.\d$/.test(elem[0].value)) return elem[0].value += '0';

          var overflow = elem[0].value.match(/(\d*\.\d{2})(.+)/);
          if (overflow) elem[0].value = overflow[1];
        });

        vm.$parsers.unshift(parseVal);
        vm.$formatters.unshift(function (val) {
          //console.log('val:', val);
          vm.$setDirty();
          return formatVal(val);
        });
      }

      function parseVal(val) {
        if (!val) return 0;
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
        iconStyle: '@',
        callback: '&onFileSelect',
        inputId: '@',
        btnText: '@'
      },
      template: '<div class="file-wrapper">\
                       <button class="btn btn-file {{btnStyle}}">\
                         <i ng-if="iconStyle" class="{{iconStyle}}"></i> {{btnText}}\
                       </button>\
                       <input type="file" id="{{inputId}}" class="form-control" \
                              ng-file-select="onFileSelect($files)"/>\
                     </div>',
      compile: function compile(elem, attrs) {
        attrs.btnStyle = /btn-(primary|success|info|warning|danger|link)/.test(attrs.btnStyle) ? attrs.btnStyle : attrs.btnStyle + ' btn-default';
        attrs.inputId = attrs.inputId || 'file-' + _.uniqueId();
        attrs.btnText = attrs.btnText || 'Choose a file...';

        return function link($scope, elem) {
          var btn = elem.find('button'),
              file = elem.find('input');

          btn.click(function () {
            file.click();
          });

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

  angular.module('cn.ui').directive('cnIframeHeight', cnIframeHeight);

  cnIframeHeight.$inject = ['$timeout'];
  function cnIframeHeight($timeout) {
    return {
      restrict: 'A',
      link: Link
    };

    function Link($scope, elem, attrs) {
      var body, $body, h;
      var insurance;

      $scope.$watch(function () {
        return attrs.ngSrc;
      }, function () {
        if (attrs.ngSrc) {
          insurance = 0;
          $timeout(activate, 100);
        }
      });

      ////////

      function activate() {
        body = getBody();
        if (body) {
          elem.height('');
          h = body.scrollHeight;
          elem.height(h);
          angular.element(body).find('img').on('load', activate);
          if (!insurance) {
            ++insurance;
            $timeout(activate, 200);
            $timeout(activate, 500);
            $timeout(activate, 1000);
            $timeout(activate, 1500);
            $timeout(activate, 3500);
            $timeout(activate, 5000);
            $timeout(activate, 7500);
            $timeout(activate, 10000);
          }
          return;
        }
        $timeout(activate, 100);
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
        $scope.progress = 0;
        $scope.counter = 1;
        $scope.numerator = 1;
        $scope.denominator = 3;

        $scope.$watch('run', function (newVal, oldVal) {
          console.log('run:', $scope.run);
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
          console.log('stop:', $scope.interval);
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
                     on-file-select="vm.uploadFile($files)">\
        </file-upload>\
      '
    };
  }

  Upload.$inject = ['$q', '$http', '$sce', 'cfpLoadingBar'];
  function Upload($q, $http, $sce, cfpLoadingBar) {
    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile($files) {
      var dfr = $q.defer();
      dfr.promise.then(setFilePath, cfpLoadingBar.complete);

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
        console.log('changeState:', vm.modal);
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
              label: '←',
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
              label: '→',
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
      link: Link
    };

    function Link(scope, elem) {
      var w = angular.element($window);
      var parent = elem.parent();

      w.bind('resize', activate);
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
        var projectedBar = elem.find('.cn-projected-bar'),
            progressBar = elem.find('.cn-progress-bar');

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
      var w = angular.element($window);
      var breakpoint = {
        sm: 768,
        md: 992,
        lg: 1200
      }[attrs.cnResponsiveBreak] || 0;

      w.bind('resize', activate);
      /* give page elements a chance to render before calculation */
      $timeout(activate, 250);
      $timeout(activate, 500); // twice for good measure

      function activate() {
        if ($window.innerWidth > breakpoint) {
          var topOffset = elem.offset().top;
          //console.log('elem:topOffset:', elem, topOffset);

          if (topOffset < 0) {
            // calculate again after any animations have completed
            $timeout(activate, 500);
            //$timeout(activate, 800); // twice for good measure
          } else {
              var bottomOffset = attrs.cnResponsiveHeight || 0;
              var height = w.height() - topOffset - bottomOffset;
              height = height ? height + 'px' : 'auto';
              //console.log('attrs.cnSetMaxHeight:', attrs.cnSetMaxHeight);
              if (_.has(attrs, 'cnSetMaxHeight')) {
                elem.css({
                  'max-height': height,
                  'overflow': 'auto'
                });
              } else {
                elem.css({
                  'height': height,
                  'overflow': 'auto'
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
        console.log('tpl:', tpl);
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
      console.log('vm:', vm);
      vm.form.schema._required = _.clone(vm.form.schema.required);
    }

    function processTemplate(item) {
      return $sce.trustAsHtml($interpolate(vm.itemTemplate)(item));
    }

    function onSelectionChange() {
      console.log('onSelectionChange:', vm.selected, vm.ngModel);
      vm.setValue(_.first(vm.selected) || null);
    }

    function setValue(val) {
      if (val) {
        val = vm.form.schema.type === 'object' ? val : val[vm.form.valueProperty || 'value'];
      }
      vm.ngModel = val;
    }

    function toggleView() {
      console.log('toggleView:', vm.form.view, vm.form);
      vm.form.view = vm.form.view === 'new' ? 'list' : 'new';
      if (vm.selected[0]) {
        vm.selected[0].selected = false;
        vm.selected.length = 0;
      }
    }
  }
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
        'onChange': '&' // callback when toggle changes
      },
      link: function link($scope, elem, attrs, ctrl) {
        console.log('$scope:', $scope.ngModel, ctrl);
        $scope.onValue = _.isUndefined($scope.onValue) ? true : $scope.onValue;
        $scope.offValue = _.isUndefined($scope.offValue) ? false : $scope.offValue;
        $scope.undefinedClass = $scope.undefinedClass || 'schrodinger';

        $scope.currentCssState = function () {
          if ($scope.ngModel == $scope.onValue) return null;
          if ($scope.ngModel == $scope.offValue) return 'disabled';
          return $scope.undefinedClass;
        };

        $scope.toggle = function ($event) {
          console.log('toggle:', $scope);
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
        var ogText = $scope.text || '',
            shortText = ogText.length > $scope.size ? ogText.substr(0, $scope.size) + '…' : ogText,
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
