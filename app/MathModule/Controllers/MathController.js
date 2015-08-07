(function () {
    CONSTANTS.MATH_MODULE.MATH_CONTROLLER = {
        NAME: 'MathController'
    };
    var app = angular.module(CONSTANTS.MATH_MODULE.NAME);

    app.controller(
        CONSTANTS.MATH_MODULE.MATH_CONTROLLER.NAME,
        [
            CONSTANTS.MATH_MODULE.MATH_SERVICE.NAME,
            function(mathService){
                var ctrl = this;
                ctrl.model = new mathModule_Models_MathModel();
                ctrl.model.operator = '+';
                ctrl.result = 0;

                ctrl.getResult = function() {
                    ctrl.result = mathService.doMath(ctrl.model);
                }
            }
        ]
    );
})();
