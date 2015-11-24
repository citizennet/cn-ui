(function() {
  'use strict';

  angular.module('cn.ui')
      .directive('cnPagination', cnPagination);

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
      link: function($scope) {

        $scope.$watch('paging', function() {
          if($scope.paging) {
            $scope.pages = buildPaging($scope.paging);
          }
        });

        function buildPaging(paging) {
          var pages = [],
              i = paging.skip < 4 ?
                  1 : (paging.skip > paging.last - 3 ? paging.last - 4 : paging.skip - 2),
              l = paging.last + 1 > i + 5 ? i + 5 : paging.last + 1;

          if(paging.skip !== 1) {
            pages.push({
              label: '\u2190',
              skip: paging.skip - 1
            });
          }

          if(1 < i) {
            pages.push({
              label: 1,
              skip: 1
            });
            pages.push({
              label: '...',
              disabled: true
            });
          }

          for(; i < l; i++) pages.push({
            label: i,
            active: i === paging.skip,
            skip: i
          });

          if(paging.last >= l) {
            pages.push({
              label: '...',
              disabled: true
            });
            pages.push({
              label: paging.last,
              skip: paging.last
            });
          }

          if(paging.skip !== paging.last) {
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