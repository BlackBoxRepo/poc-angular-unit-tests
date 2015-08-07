(function () {
    CONSTANTS.MAIN_MODULE = {
        NAME: 'MainModule'
    };

    var module = angular.module(
        CONSTANTS.MAIN_MODULE.NAME,
        [
            CONSTANTS.ANGULAR.ROUTE.MODULE_NAME,
            CONSTANTS.FIZZ_BUZZ_MODULE.NAME,
            CONSTANTS.MATH_MODULE.NAME
        ]
    );
    module.config(
        [
            CONSTANTS.ANGULAR.ROUTE.VARIABLE_NAME,
            function(router){
                router.otherwise({redirectTo: '/fizzBuzz'});
            }
        ]
    );
})();
