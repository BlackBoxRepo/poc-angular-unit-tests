(function(){
    var module = angular.module('FizzBuzzModule');

    module.service(
        'FizzBuzzService',
        [
            function() {
                var service = this;
                service.doFizzBuzz = function(model) {
                    var results = [];
                    if (!angular.isDefined(model.totalItems)) {
                        throw "totalItems must be defined";
                    }
                    if (!angular.isDefined(model.divisor1)) {
                        throw "divisor1 must be defined";
                    }
                    if (!angular.isDefined(model.divisor2)) {
                        throw "divisor2 must be defined";
                    }

                    for(var i = 1; i <= model.totalItems; i++)
                    {
                        if (i % (model.divisor1 * model.divisor2) == 0)
                            results.push(i + " FizzBuzz");
                        else if (i % model.divisor1 == 0)
                            results.push(i + " Fizz");
                        else if (i % model.divisor2 == 0)
                            results.push(i + " Buzz");
                        else
                            results.push(i);
                    }

                    return results;
                };
            }
        ]
    );
})();
