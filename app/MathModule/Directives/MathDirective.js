(function(){
    CONSTANTS.MATH_MODULE.MATH_DIRECTIVE = {
        NAME: 'mathDirective',
        TEMPLATE_URL: 'MathModule/Templates/MathTemplate.html',
        CONTROLLER_AS: 'mathCtrl'
    };
    var module = angular.module(CONSTANTS.MATH_MODULE.NAME);

    module.directive(
        CONSTANTS.MATH_MODULE.MATH_DIRECTIVE.NAME,
        function() {
            return {
                templateUrl: CONSTANTS.MATH_MODULE.MATH_DIRECTIVE.TEMPLATE_URL,
                controller: CONSTANTS.MATH_MODULE.MATH_CONTROLLER.NAME,
                controllerAs: CONSTANTS.MATH_MODULE.MATH_DIRECTIVE.CONTROLLER_AS
            };
        }
    );
})();
