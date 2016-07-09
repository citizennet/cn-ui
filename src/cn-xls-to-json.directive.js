(function() {
  "use strict";

  angular
      .module('cn.ui')
      .directive('xlsToJson', xlsToJsonDirective);

  function xlsToJsonDirective() {
    return {
      restrict: 'E',
      scope: {
        callback: '@'
      },
      controller: xlsToJsonController,
      controllerAs: 'vm',
      bindToController: true,
      template: '\
        <file-upload class="col-sm-6"\
                     btn-text="Upload XLS"\
                     on-file-select="vm.convertXLS($files)">\
        </file-upload>\
      \
      '
    };
  }

  function xlsToJsonController() {
    let vm = this;

    vm.convertXLS = convertXLS;

    function convertXLS($files) {
      var f = $files[0];
      var reader = new FileReader();
      var name = f.name;
      reader.onload = function(e) {
        var data = e.target.result;

        var workbook = XLSX.read(data, {type: 'binary'});

        var json = workbook.SheetNames.map(sheetName =>
            XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
        );

        vm.callback(json);
      };
      reader.readAsBinaryString(f);
    }
  }
})();