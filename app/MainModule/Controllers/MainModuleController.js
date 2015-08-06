(function () {
    var module = angular.module('MainModule');

    module.controller(
        'MainModuleController',
        [
            function() {
                this.bla = 0;
            }
        ]
    );
})();