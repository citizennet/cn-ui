(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('cnMastHead', cnMastHead);

  function cnMastHead() {
    return {
      restrict: 'E',
      template: `
        <div class="cn-heading cn-mast-head">
          <div class="cn-mast-head-inner">
            <div class="cn-mast-head-main">
              <div class="cn-heading-title">
                <a ng-if="vm.config.backState"
                   class="cn-heading-back"
                   ui-sref="{{vm.config.backState}}">
                  <i ng-show="vm.config.backState" class="icn-back"></i>
                </a>
                <h1 ng-hide="vm.config.dropdown">
                  {{vm.config.title}}
                </h1>
                <h1 ng-show="vm.config.dropdown" data-toggle="dropdown">
                  <a>
                    {{vm.config.title}}
                    <i ng-show="vm.config.dropdown" class="icn-caret"></i>
                  </a>
                </h1>
                <ul ng-if="vm.config.dropdown"
                    class="dropdown-menu row"
                    ng-class="vm.config.dropdown.style"
                    style="width: {{vm.config.dropdown.lists.length * 250}}px"
                    role="menu">
                  <div ng-repeat="list in vm.config.dropdown.lists"
                       style="width: 250px">
                    <li class="{{list.style}}">
                      <div class="input-group">
                        <input ng-model="list.filter"
                               class="form-control"
                               placeholder="{{list.name}}"/>
                        <span class="input-group-addon">
                          <i class="icn-search"></i>
                        </span>
                      </div>
                    </li>
                    <li class="divider"></li>
                    <li ng-repeat="item in list.items | filter:list.filter"
                        class="{{list.style}} {{item.style}}">
                      <a ng-show="item.name"
                         ng-click="list.handler(item)"
                         ng-class="{'selected': list.isSelected(item)}">{{item.name}}</a>
                    </li>
                  </div>
                </ul>
              </div>
  
              <div ng-show="vm.config.options"
                   class="pull-right btn-options">
                <span ng-repeat="btn in vm.config.options">
                  <a ng-if="btn.state"
                     class="btn btn-sm btn-transparent"
                     ui-sref="{{btn.state}}"
                     title="{{btn.title}}">
                    <i class="{{btn.icon}}"/>
                  </a>
                  <a ng-if="btn.href"
                     class="btn btn-sm btn-transparent"
                     ng-href="{{btn.href}}"
                     title="{{btn.title}}">
                    <i class="{{btn.icon}}"/>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="cn-mast-head-sub">
            <div class="cn-mast-head-inner">
              <ul class="tabs" ng-if="vm.config.tabs && vm.config.tabs.length">
                <li ng-repeat="tab in vm.config.tabs"
                    ng-class="{active: tab.active}"
                    class="{{tab.style}}">
                  <a ng-if="tab.state"
                     ui-sref="{{tab.state}}">
                    <i ng-show="tab.active" class="{{tab.icon}}"/>
                    {{tab.name}}
                  </a>
                  <span ng-if="!tab.state">
                    {{tab.name}}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="cn-mast-actions">
            <div class="cn-mast-head-inner">
              <div class="cn-actions"
                   ng-if="vm.floater"
                   ng-mouseenter="vm.toggleFloaters(false)"
                   ng-mouseleave="vm.toggleFloaters(true)">
                <floating-action-button
                  ng-mouseenter="vm.floater.showTitle = true"
                  ng-mouseleave="vm.floater.showTitle = false">
                  <a class="btn {{vm.hideFloaters ? '' : vm.floater.style}}"
                     ui-sref="{{vm.floater.state}}">
                     <i ng-show="vm.floater.icon && !vm.hideFloaters"
                        class="{{vm.floater.icon}}"></i>
                     <span ng-show="vm.floater.text && vm.hideFloaters" class="text">
                       {{vm.floater.text}}
                     </span>
                     <span ng-hide="vm.floater.icon || vm.floater.text || vm.hideFloaters">
                       {{vm.floater.symbol || '+'}}
                     </span>
                     <span ng-show="vm.hideFloaters">+</span>
                  </a>
                  <span class="fab-title"
                        ng-show="vm.floater.showTitle && vm.floater.title">
                    {{vm.floater.title}}
                  </span>
                </floating-action-button>
                <div class="cn-floaters" style="height: {{vm.floatersHeight}}">
                  <div class="cn-floaters-inner">
                    <floating-action-button
                      ng-repeat="btn in vm.floaters"
                      ng-mouseenter="btn.showTitle = true"
                      ng-mouseleave="btn.showTitle = false">
                      <a ng-show="btn.state"
                         class="btn {{btn.style}}"
                         ui-sref="{{btn.state}}">
                         <i ng-show="btn.icon" class="{{btn.icon}}"></i>
                         <span ng-show="btn.text" class="text">{{btn.text}}</span>
                         <span ng-show="btn.symbol">{{btn.symbol}}</span>
                       </a>
                      <span class="fab-title"
                            ng-show="btn.showTitle && btn.title">
                        {{btn.title}}
                      </span>
                    </floating-action-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`,
      scope: {
        config: '='
      },
      link: (scope, elem) => {
        console.log('scope:', scope);
        scope.vm.elem = elem;
      },
      controller: MastHead,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function MastHead() {
    const vm = this;
    vm.floater = _.first(vm.config.actions);
    vm.floaters = _.rest(vm.config.actions);
    vm.floatersHeight = 0;
    vm.hideFloaters = true;
    vm.toggleFloaters = toggleFloaters;

    console.log('vm:', vm);

    ////////

    function toggleFloaters(hide) {
      vm.floatersHeight = hide ?
          0 : vm.elem.find('.cn-floaters-inner').outerHeight() + 'px';
      vm.hideFloaters = hide;
    }
  }
})();