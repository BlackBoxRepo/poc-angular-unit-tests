(function(){
    CONSTANTS.MATH_MODULE.MATH_SERVICE = {
        NAME: 'MathService'
    };
    var module = angular.module(CONSTANTS.MATH_MODULE.NAME);

    module.service(
        CONSTANTS.MATH_MODULE.MATH_SERVICE.NAME,
        [
            function() {
                var service = this;
                service.doMath = function(model) {
                    if (!angular.isDefined(model.leftNumber)) {
                        throw "leftNumber must be defined";
                    }
                    if (!angular.isDefined(model.rightNumber)) {
                        throw "leftNumber must be defined";
                    }
                    if (!angular.isDefined(model.operator)) {
                        throw "operator must be defined";
                    }

                    var formula = model.leftNumber + model.operator + model.rightNumber;

                    return eval(formula);

                };
            }
        ]
    );
})();
