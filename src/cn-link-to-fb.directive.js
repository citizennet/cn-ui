(function() {
  'use strict';

  angular
      .module('cn.ui')
      .directive('linkToFacebook', function() {

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
            function linkToFacebookTag() {}
            $scope.__tag = new linkToFacebookTag();

            if($scope.fbObject.twitterLink) {
              $scope.link = $scope.fbObject.twitterLink;
            }
            else if(_.has($scope.fbObject, 'platforms') && $scope.fbObject.platforms.origin) {
              $scope.link = $scope.fbObject.platforms.origin;
            }
          }
        };
      });
})();
