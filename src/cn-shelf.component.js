(function() {
  'use strict';

  class CnShelf {
    constructor($element) {
      'ngInject';
      console.log('constructor::::', $element, this);
      this.$element = $element;
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
        this.$element.removeClass(this.hideClass).addClass(this.showClass);
      }
      else {
        this.$element.removeClass(this.showClass).addClass(this.hideClass);
      }
    }
  }

  const cnShelf = {
    controller: CnShelf,
    controllerAs: 'shelf',
    bindings: {
      show: '<',
      showClass: '@',
      hideClass: '@'
    }
  };

  angular
      .module('cn.ui')
      .component('cnShelf', cnShelf);
})();
