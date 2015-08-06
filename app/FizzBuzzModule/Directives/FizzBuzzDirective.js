(function(){
    var module = angular.module('FizzBuzzModule');

    module.directive(
        'fizzBuzzDirective',
        function() {
            return {
                templateUrl: "FizzBuzzModule/Templates/FizzBuzzTemplate.html",
                controller: "FizzBuzzController",
                controllerAs: "fizzBuzzCtrl"
            };
        }
    );
})();
