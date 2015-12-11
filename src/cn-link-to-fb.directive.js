(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('linkToFacebook', function() {

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

          link: function($scope) {
            if(fbObject.twitterLink) {
              $scope.link = fbObject.twitterLink;
            }
            else if(_.has($scope.fbObject, 'fbCampaignGroupId')) {
              if($scope.fbObject.fbCampaignGroupId) {
                $scope.link = base + 'campaign/?campaign_id=' + $scope.fbObject.fbCampaignGroupId;
              }
            } else if(_.has($scope.fbObject, 'fbCampaignId')) {
              if($scope.fbObject.fbCampaignId) {
                $scope.link = base + 'adset/?ad_set_id=' + $scope.fbObject.fbCampaignId;
              }
            } else if(_.has($scope.fbObject, 'fbAdgroupId')) {
              if($scope.fbObject.adSet.fbCampaignId && $scope.fbObject.fbAdgroupId) {
                $scope.link = base + 'adset/?ad_set_id=' + $scope.fbObject.adSet.fbCampaignId + '&show_adgroup_id=' + $scope.fbObject.fbAdgroupId;
              }
            }
          }
        };
      });
})();