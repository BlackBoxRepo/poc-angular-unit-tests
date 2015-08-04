(function(){

    var app = angular.module("myApp.view1");

    app.factory(
        'CategoryTreeResource',
        [
            '$resource',
            function($resource) {
                return $resource('/app/CategoryTreeResource.json');
            }
        ]
    );

})();
