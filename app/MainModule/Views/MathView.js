(function () {
    var module = angular.module('MainModule');
    module.config(
        [
            '$routeProvider',
            function($routeProvider) {
                $routeProvider.when(
                    '/math',
                    {
                        templateUrl: 'MainModule/Templates/MathTemplate.html'
                    }
                );
            }
        ]
    );
})();

