(function() {

  'use strict';

  class CnSchedule {

    constructor($scope) {
      'ngInject';

      // https://tools.ietf.org/html/rfc5545#section-3.3.10
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
          by: [ this.WEEKDAY.MO, this.WEEKDAY.FR ],
          _option: 'BIWEEKLY'
        },
        BOM: {
          freq: this.FREQ.MONTHLY,
          interval: 1,
          by: [ 1 ],
          _option: 'BOM'
        },
        DAILY: {
          freq: this.FREQ.DAILY,
          inerval: 1,
          _option: 'DAILY'
        },
        EOM: {
          freq: this.FREQ.MONTHLY,
          interval: 1,
          by: [ -1 ],
          _option: 'EOM'
        },
        MONTHLY: {
          freq: this.FREQ.MONTHLY,
          interval: 1,
          by: [ 14 ],
          _option: 'MONTHLY'
        },
        WEEKLY: {
          freq: this.FREQ.WEEKLY,
          interval: 1,
          by: [ this.WEEKDAY.MO ],
          _option: 'WEEKLY'
        },
        WORKDAY: {
          freq: this.FREQ.DAILY,
          interval: 1,
          by: (
            _(this.WEEKDAY)
              .keys()
              .reject(value => _.eq(value, this.WEEKDAY.SA) || _.eq(value, this.WEEKDAY.SU))
              .value()
          ),
          _option: 'WORKDAY'
        }
      };

      this.keyedWeekDays = _.map(this.WEEKDAY, (key, value) =>
        ({ name: this.showWeekDay(value), value }));

      $scope.$watch(() => this.model, value => this.ngModel.$setViewValue(value));
    }

    $onInit() {
      this.ngModel.$render = () => {
        const viewValue = this.ngModel.$viewValue;
        const _option = _.get(viewValue, '_option');

        if (_.isObject(viewValue) && _.isString(_option)) {
          _.assign(this.state[_option], viewValue);
          this.model = this.state[_option];
        }
        else {
          this.model = this.state.WEEKLY;
        }
      }
    }

    handleChangeBiWeekly(biweekly) {
      _.set(this.state.BIWEEKLY, 'by', biweekly)
    }

    handleChangeWeekly(weekday) {
      _.set(this.state.WEEKLY, 'by', [ weekday ]);
    }

    showWeekDay(day) {
      return ({
        MO: 'Monday',
        TU: 'Tuesday',
        WE: 'Wednesday',
        TH: 'Thursday',
        FR: 'Friday',
        SA: 'Saturday',
        SU: 'Sunday'
      })[day];
    }
  }

  export default {
    bindings: {
      form: '<'
    },
    controller: CnSchedule,
    controllerAs: 'schedule',
    require: {
      ngModel: '^ngModel'
    },
    template: `
      <div class="form-group">
        <div class="btn-group clearfix">

          <label class="radio radio-block">
            <input type="radio"
                   ng-model="schedule.model"
                   ng-value="schedule.state.WEEKLY">
              Every
              &nbsp;
              <div class="btn-group"
                   uib-dropdown
                   is-open="weeklyIsOpen">
                <button type="button"
                        class="btn btn-primary"
                        uib-dropdown-toggle
                        ng-disabled="schedule.model._option !== 'WEEKLY'"
                        style="background-color: #DEDEDE; color: black;">
                  {{ schedule.showWeekDay(schedule.state.WEEKLY.by[0]) }}
                  &nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    uib-dropdown-menu
                    role="menu"
                    aria-labelledby="single-button">
                  <li role="menuitem"
                      ng-click="schedule.handleChangeWeekly(wd.value)"
                      ng-repeat="wd in schedule.keyedWeekDays track by wd.value">
                    <a>{{ wd.name }}</a>
                  </li>
                </ul>
              </div>
            </input>
          </label>

          <label class="radio radio-block">
            <input type="radio"
                   ng-model="schedule.model"
                   ng-value="schedule.state.BIWEEKLY">
              Every
              &nbsp;
              <div class="btn-group"
                   uib-dropdown
                   is-open="biWeeklyXIsOpen">
                <button type="button"
                        class="btn btn-primary"
                        uib-dropdown-toggle
                        ng-disabled="schedule.model._option !== 'BIWEEKLY'"
                        style="background-color: #DEDEDE; color: black;">
                  {{ schedule.showWeekDay(schedule.state.BIWEEKLY.by[0]) }}
                  &nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    uib-dropdown-menu
                    role="menu"
                    aria-labelledby="single-button">
                  <li role="menuitem"
                      ng-hide="wd.value === schedule.state.BIWEEKLY.by[1]"
                      ng-click="schedule.handleChangeBiWeekly([wd.value, schedule.state.BIWEEKLY.by[1]])"
                      ng-repeat="wd in schedule.keyedWeekDays track by wd.value">
                    <a>{{ wd.name }}</a>
                  </li>
                </ul>
              </div>
              &nbsp;
              and
              &nbsp;
              <div class="btn-group"
                   uib-dropdown
                   is-open="biWeeklyYIsOpen">
                <button type="button"
                        class="btn btn-primary"
                        uib-dropdown-toggle
                        ng-disabled="schedule.model._option !== 'BIWEEKLY'"
                        style="background-color: #DEDEDE; color: black;">
                  {{ schedule.showWeekDay(schedule.state.BIWEEKLY.by[1]) }}
                  &nbsp;
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    uib-dropdown-menu
                    role="menu"
                    aria-labelledby="single-button">
                  <li role="menuitem"
                      ng-hide="wd.value === schedule.state.BIWEEKLY.by[0]"
                      ng-click="schedule.handleChangeBiWeekly([schedule.state.BIWEEKLY.by[0], wd.value])"
                      ng-repeat="wd in schedule.keyedWeekDays track by wd.value">
                    <a>{{ wd.name }}</a>
                  </li>
                </ul>
              </div>
            </input>
          </label>

          <label class="radio radio-block">
            <input type="radio"
                   ng-model="schedule.model"
                   ng-value="schedule.state.WORKDAY">
              Weekdays
            </input>
          </label>

          <label class="radio radio-block">
            <input type="radio"
                   ng-model="schedule.model"
                   ng-value="schedule.state.DAILY">
              Daily
            </input>
          </label>

          <label class="radio radio-block">
            <input type="radio"
                   ng-model="schedule.model"
                   ng-value="schedule.state.BOM">
              Beginning of Month
            </input>
          </label>

          <label class="radio radio-block">
            <input type="radio"
                   ng-model="schedule.model"
                   ng-value="schedule.state.EOM">
              End of Month
            </input>
          </label>

          <label class="radio radio-block">
            <input type="radio"
                   ng-model="schedule.model"
                   ng-value="schedule.state.MONTHLY">
              Every
              &nbsp;
              <input max="31"
                     min="1"
                     ng-disabled="schedule.model._option !== 'MONTHLY'"
                     ng-model-options="{ debounce: 300 }"
                     ng-model="schedule.state.MONTHLY.by[0]"
                     step="1"
                     style="width: 50px; text-align: center;"
                     type="number"
                     class="form-control" />
              &nbsp;
              of the month
            </input>
          </label>
        </div>
      </div>
    `
  };

  angular
    .module('cn.ui')
    .component('cnSchedule', cnScheduleComponent)

})();
