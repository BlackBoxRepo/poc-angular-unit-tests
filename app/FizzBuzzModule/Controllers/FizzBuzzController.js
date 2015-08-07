(function () {
    CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_CONTROLLER = {
        NAME: 'FizzBuzzController'
    };

    var app = angular.module(CONSTANTS.FIZZ_BUZZ_MODULE.NAME);

    app.controller(
        CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_CONTROLLER.NAME,
        [
            CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_SERVICE.NAME,
            function(fizzBuzzService){
                var ctrl = this;
                ctrl.model = new fizzBuzzModule_Models_FizzBuzzModel();
//                ctrl.model = fizzBuzzModelFactory();
                ctrl.results = [];

                ctrl.getResults = function() {
                    ctrl.results = fizzBuzzService.doFizzBuzz(ctrl.model);
                }
            }
        ]
    );
})();
