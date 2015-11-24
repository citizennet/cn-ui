describe('cn.ui Directives', function() {

  var elem, $rootScope, $scope, $compile;

  beforeEach(module('cn.ui'));
  beforeEach(inject(function($injector) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
  }));

  describe('Checkbox UI Directive', function() {
    it('should add a span after the input', function() {
      elem = angular.element('<div class="checkbox"><input type="checkbox"/></div>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.children().length).toBe(2);
      expect(elem.children().eq(0).prop('tagName')).toBe('INPUT');
      expect(elem.children().eq(1).prop('tagName')).toBe('SPAN');
    });

    it('should add a span after both inputs', function() {
      elem = angular.element('<div class="checkbox"><input type="checkbox"/><input type="checkbox"/></div>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.children().length).toBe(4);
      expect(elem.children().eq(2).prop('tagName')).toBe('INPUT');
      expect(elem.children().eq(3).prop('tagName')).toBe('SPAN');
    });

    it('should add a span after the input', function() {
      elem = angular.element('<div><input type="checkbox" class="checkbox"/></div>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.children().length).toBe(2);
      expect(elem.children().eq(0).prop('tagName')).toBe('INPUT');
      expect(elem.children().eq(1).prop('tagName')).toBe('SPAN');
    });
  });

  describe('Radio UI Directive', function() {
    it('should add a span after the input', function() {
      elem = angular.element('<div class="radio"><input type="radio"/></div>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.children().length).toBe(2);
      expect(elem.children().eq(0).prop('tagName')).toBe('INPUT');
      expect(elem.children().eq(1).prop('tagName')).toBe('SPAN');
    });

    it('should add a span after both inputs', function() {
      elem = angular.element('<div class="radio"><input type="radio"/><input type="radio"/></div>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.children().length).toBe(4);
      expect(elem.children().eq(2).prop('tagName')).toBe('INPUT');
      expect(elem.children().eq(3).prop('tagName')).toBe('SPAN');
    });

    it('should add a span after the input', function() {
      elem = angular.element('<div><input type="radio" class="radio"/></div>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.children().length).toBe(2);
      expect(elem.children().eq(0).prop('tagName')).toBe('INPUT');
      expect(elem.children().eq(1).prop('tagName')).toBe('SPAN');
    });
  });

  describe('Pagination Directive', function() {
    it('should render no pagination', function() {
      $scope.paging = {count: 3, last: 1, limit: 3, skip: 1};
      elem = angular.element('<cn-pagination paging="paging"></cn-pagination>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('li').length).toBe(0);
    });

    it('should render 3 page links and a next link', function() {
      $scope.paging = {count: 9, last: 3, limit: 3, skip: 1};
      elem = angular.element('<cn-pagination paging="paging"></cn-pagination>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('li').length).toBe(4);
      expect(elem.find('li').eq(0).text().trim()).toBe('1');
      expect(elem.find('li').eq(0).hasClass('active')).toBe(true);
      expect(elem.find('li').eq(2).text().trim()).toBe('3');
      expect(elem.find('li').eq(3).text().trim()).toBe('\u2192');
    });

    it('should render 7 page links and a previous and next link', function() {
      $scope.paging = {count: 225, last: 75, limit: 3, skip: 27};
      elem = angular.element('<cn-pagination paging="paging"></cn-pagination>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('li').length).toBe(11);
      expect(elem.find('li').eq(0).text().trim()).toBe('\u2190');
      expect(elem.find('li').eq(1).text().trim()).toBe('1');
      expect(elem.find('li').eq(2).text().trim()).toBe('...');
      expect(elem.find('li').eq(3).text().trim()).toBe('25');
      expect(elem.find('li').eq(5).text().trim()).toBe('27');
      expect(elem.find('li').eq(5).hasClass('active')).toBe(true);
      expect(elem.find('li').eq(7).text().trim()).toBe('29');
      expect(elem.find('li').eq(8).text().trim()).toBe('...');
      expect(elem.find('li').eq(9).text().trim()).toBe('75');
      expect(elem.find('li').eq(10).text().trim()).toBe('\u2192');
    });

    it('should render 3 page links and a pevious link', function() {
      $scope.paging = {count: 9, last: 3, limit: 3, skip: 3};
      elem = angular.element('<cn-pagination paging="paging"></cn-pagination>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('li').length).toBe(4);
      expect(elem.find('li').eq(0).text().trim()).toBe('\u2190');
      expect(elem.find('li').eq(1).text().trim()).toBe('1');
      expect(elem.find('li').eq(3).text().trim()).toBe('3');
      expect(elem.find('li').eq(3).hasClass('active')).toBe(true);
    });
  });

  describe('Progress Bar Directive', function() {
    it('should render the progress bar at 100%', function() {
      $scope.allocated = null;
      $scope.spent = 1.23;
      elem = angular.element('<cn-progress-bar cn-limit="allocated" cn-progress="spent"></cn-progress-bar>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('.cn-projected-bar').prop('style').width).toBe('100%');
      expect(elem.find('.cn-progress-bar').prop('style').width).toBe('100%');
    });

    it('should render the progress bar at 60%', function() {
      $scope.allocated = 10;
      $scope.spent = 6;
      elem = angular.element('<cn-progress-bar cn-limit="allocated" cn-progress="spent"></cn-progress-bar>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('.cn-projected-bar').prop('style').width).toBe('60%');
      expect(elem.find('.cn-progress-bar').prop('style').width).toBe('100%');
    });

    it('should render the progress bar at 60%', function() {
      $scope.allocated = 10;
      $scope.spent = 16;
      elem = angular.element('<cn-progress-bar cn-limit="allocated" cn-progress="spent"></cn-progress-bar>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('.cn-projected-bar').prop('style').width).toBe('100%');
      expect(elem.find('.cn-progress-bar').prop('style').width).toBe('100%');
      // for some reason hasClass isn't working
      expect(!!elem.find('.cn-progress-over').length).toBe(true);
    });

    it('should render the progress bar at 60%', function() {
      $scope.limit = null;
      $scope.allocated = 10;
      $scope.spent = 6;
      elem = angular.element('<cn-progress-bar cn-limit="limit" cn-projected="allocated" cn-progress="spent"></cn-progress-bar>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('.cn-projected-bar').prop('style').width).toBe('100%');
      expect(elem.find('.cn-progress-bar').prop('style').width).toBe('60%');
    });

    it('should render the progress bar at 60%', function() {
      $scope.limit = 20;
      $scope.allocated = 10;
      $scope.spent = 6;
      elem = angular.element('<cn-progress-bar cn-limit="limit" cn-projected="allocated" cn-progress="spent"></cn-progress-bar>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('.cn-projected-bar').prop('style').width).toBe('50%');
      expect(elem.find('.cn-progress-bar').prop('style').width).toBe('60%');
    });

    it('should render the progress bar at 60%', function() {
      $scope.limit = 10;
      $scope.allocated = 12;
      $scope.spent = 6;
      elem = angular.element('<cn-progress-bar cn-limit="limit" cn-projected="allocated" cn-progress="spent"></cn-progress-bar>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('.cn-projected-bar').prop('style').width).toBe('100%');
      expect(elem.find('.cn-progress-bar').prop('style').width).toBe('50%');
      // for some reason hasClass isn't working
      expect(!!elem.find('.cn-progress-over').length).toBe(true);
    });

    it('should render the progress bar at 60%', function() {
      $scope.limit = 10;
      $scope.allocated = 10;
      $scope.spent = 11;
      elem = angular.element('<cn-progress-bar cn-limit="limit" cn-projected="allocated" cn-progress="spent"></cn-progress-bar>');
      elem = $compile(elem)($scope);
      $rootScope.$digest();

      expect(elem.find('.cn-projected-bar').prop('style').width).toBe('100%');
      expect(elem.find('.cn-progress-bar').prop('style').width).toBe('100%');
      // for some reason hasClass isn't working
      expect(!!elem.find('.cn-progress-over').length).toBe(true);
    });
  });
});