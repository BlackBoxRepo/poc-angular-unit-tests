(function () {
    var module = angular.module('MainModule');
    module.config(
        [
            '$routeProvider',
            function($routeProvider) {
                $routeProvider.when(
                    '/fizzBuzz',
                    {
                        templateUrl: "MainModule/Templates/FizzBuzzTemplate.html"
                    }
                );
            }
        ]
    );
})();

