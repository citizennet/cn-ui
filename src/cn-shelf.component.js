(function() {
  'use strict';

  class CnShelf {
    constructor($element, $timeout) {
      'ngInject';
      console.log('constructor::::', $element, this);
      this.$element = $element;
      this.$timeout = $timeout;
    }
    $onInit() {
      this.$element.addClass('animated fast animated-width');
      this.toggleShow();
    }
    $onChanges(changes) {
      console.log('changes:::', changes, this.show);
      if(changes.show) {
        //this.show = changes.show.currentValue;
        this.toggleShow();
      }
    }
    toggleShow() {
      if(this.show) {
        this.$timeout(() => {
          this.$element.removeClass(this.hideClass).addClass(this.showClass);
        }, this.showDelay || 0);
      }
      else {
        this.$timeout(() => {
          this.$element.removeClass(this.showClass).addClass(this.hideClass);
        }, this.hideDelay || 0);
      }
    }
  }

  const cnShelf = {
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

  angular
      .module('cn.ui')
      .component('cnShelf', cnShelf);
})();
