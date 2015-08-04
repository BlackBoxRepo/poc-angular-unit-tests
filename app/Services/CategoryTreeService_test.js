'use strict';

describe('CategoryTreeService test..', function() {
    var categoryTreeService;
    var mockResource;
    beforeEach(module('myApp.view1'));
    beforeEach(
        function() {
            module(
                function($provide) {
                    $provide.service('CategoryTreeResource', function() {
                        this.query = jasmine.createSpy('query').and.callFake(
                            function() {
                                return [
                                    {
                                        id: 1,
                                        title: "bla",
                                        nodes: []
                                    }
                                ];
                            }
                        );

                        this.bla = function(){return "bla"};
                    });
                }
            );


            inject(function(CategoryTreeResource){mockResource = CategoryTreeResource});
        }
    );
    beforeEach(
        angular.mock.inject(
            function(_CategoryTreeService_){
                categoryTreeService = _CategoryTreeService_;
            }
        )
    );

    it(
        "Should be a cool test...",
        function(){
            var catTree = categoryTreeService.getCategoryTree();
            expect(catTree).toBeDefined();
            expect(catTree[0]).toBeDefined();
            expect(catTree[0].id).toBeDefined();
            expect(catTree[0].id).toEqual(1);
            expect(mockResource.query).toHaveBeenCalled();


            var promise = new Promise(function(resolve, reject) {
                var num = Math.round(Math.random() * (1 - 0) + 0);
                console.log(num);
                if (num == 0) {
                    resolve("yay, it worked");
                } else {
                    reject("sad, it didn't work");
                }
            });
            promise.then(
                function(val) {
                    console.log(val);
                },
                function(val) {
                    console.log(val);
                }
            );
        }
    );

});
