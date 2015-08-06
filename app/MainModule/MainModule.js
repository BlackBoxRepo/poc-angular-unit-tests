(function () {
    var module = angular.module(
        'MainModule',
        [
            'ngRoute',
            'FizzBuzzModule',
            'MathModule'
        ]
    );
    module.config(
        [
            '$routeProvider',
            function($routeProvider){
                $routeProvider.otherwise({redirectTo: '/fizzBuzz'});
            }
        ]
    );
})();
