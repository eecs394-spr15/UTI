describe("My First Test", function(){

    it("should be true", function(){
        expect(true).toBe(true);
    });
});

describe("example module", function () {
    beforeEach(module('example'));

    describe("LoginController", function () {
        var scope,
            controller,
            compile;

        beforeEach(inject(function ($compile,$rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
            compile=$compile;

        }));

        it("should assign UTIButtonMessage", function () {
            controller("LoginController", {$scope: scope});
            expect(scope.hi).toBe(5);

        });
    });
});