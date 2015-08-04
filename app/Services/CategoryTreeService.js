(function(){
    var app = angular.module("myApp.view1");

    app.service(
        "CategoryTreeService",
        [
            "CategoryTreeResource",
            function(CategoryTreeResource) {
                //console.log(CategoryTreeResource);
                var tree = CategoryTreeResource.query();

                this.getCategoryTree = function() {
                    return tree;
                };

                this.saveCategoryTree = function(data) {
                    CategoryTreeResource.save(data);
                };

                this.bla = function() {
                    return "bla";
                }

            }
        ]
    );
})();