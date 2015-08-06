(function () {
    var app = angular.module('FizzBuzzModule');

    app.controller(
        'FizzBuzzController',
        [
            'FizzBuzzService',
            'FizzBuzzModelFactory',
            function(fizzBuzzService, fizzBuzzModelFactory){
                var ctrl = this;
                ctrl.model = fizzBuzzModelFactory();
                ctrl.results = [];

                ctrl.getResults = function() {
                    ctrl.results = fizzBuzzService.doFizzBuzz(ctrl.model);
                }
            }
        ]
    );
})();
