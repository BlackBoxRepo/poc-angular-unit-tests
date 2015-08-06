(function () {
    var app = angular.module('MathModule');

    app.controller(
        'MathController',
        [
            'MathService',
            'MathModelFactory',
            function(mathService, mathModelFactory){
                var ctrl = this;
                ctrl.model = mathModelFactory();
                ctrl.model.operator = '+';
                ctrl.result = 0;

                ctrl.getResult = function() {
                    ctrl.result = mathService.doMath(ctrl.model);
                }
            }
        ]
    );
})();
