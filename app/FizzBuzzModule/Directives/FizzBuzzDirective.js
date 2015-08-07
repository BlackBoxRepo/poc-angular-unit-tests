(function(){
    CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_DIRECTIVE = {
        NAME: 'fizzBuzzDirective',
        TEMPLATE_URL: 'FizzBuzzModule/Templates/FizzBuzzTemplate.html',
        CONTROLLER_AS: 'fizzBuzzCtrl'
    };
    var module = angular.module(CONSTANTS.FIZZ_BUZZ_MODULE.NAME);

    module.directive(
        CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_DIRECTIVE.NAME,
        function() {
            return {
                templateUrl: CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_DIRECTIVE.TEMPLATE_URL,
                controller: CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_CONTROLLER.NAME,
                controllerAs: CONSTANTS.FIZZ_BUZZ_MODULE.FIZZ_BUZZ_DIRECTIVE.CONTROLLER_AS
            };
        }
    );
})();
