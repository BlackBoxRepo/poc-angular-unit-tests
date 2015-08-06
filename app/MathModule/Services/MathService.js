(function(){
    var module = angular.module('MathModule');

    module.service(
        'MathService',
        [
            function() {
                var service = this;
                service.doMath = function(model) {
                    var results = [];
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
