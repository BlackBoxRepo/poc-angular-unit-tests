(function () {
    var module = angular.module('MathModule');

    function MathModel() {
        var allowedOperators = ['+', '-', '*'];
        this.leftNumber = 0;
        this.intOperator = '+';
        this.rightNumber = 0;

        this.getOperators = function() {
            return allowedOperators;
        }
    }

    module.factory(
        'MathModelFactory',
        [
            function() {

                return function() {

                    var model = new MathModel();
                    Object.defineProperty(
                        model,
                        'opertor',
                        {
                            set: function (value) {
                                if (model.getOperators().indexOf(value) === -1 )
                                {
                                    throw "operator " + value + " not allowed";
                                }

                                model.intOperator = value;
                            },
                            get: function() {
                                return model.intOperator;
                            }
                        }
                    );
                    return model;
                };
            }
        ]
    );
})();


