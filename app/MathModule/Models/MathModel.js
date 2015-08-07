function mathModule_Models_MathModel() {
    var allowedOperators = ['+', '-', '*'];
    var intOperator = '+';
    var model = this;
    model.leftNumber = 0;
    model.rightNumber = 0;

    model.getOperators = function() {
        return allowedOperators;
    };

    Object.defineProperty(
        model,
        'opertor',
        {
            set: function (value) {
                if (model.getOperators().indexOf(value) === -1 )
                {
                    throw "operator " + value + " not allowed";
                }

                intOperator = value;
            },
            get: function() {
                return intOperator;
            }
        }
    );
}

