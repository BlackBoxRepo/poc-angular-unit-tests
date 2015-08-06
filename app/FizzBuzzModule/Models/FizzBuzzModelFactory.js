(function () {
    var module = angular.module('FizzBuzzModule');

    function FizzBuzzModel() {
        this.totalItems = 0;
        this.divisor1 = 0;
        this.divisor2 = 0;
    }

    module.factory(
        'FizzBuzzModelFactory',
        [
            function() {

                return function() {
                    return new FizzBuzzModel();
                };
            }
        ]
    );
})();


