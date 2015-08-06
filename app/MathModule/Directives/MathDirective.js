(function(){
    var module = angular.module('MathModule');

    module.directive(
        'mathDirective',
        function() {
            return {
                templateUrl: "MathModule/Templates/MathTemplate.html",
                controller: "MathController",
                controllerAs: "mathCtrl"
            };
        }
    );
})();
