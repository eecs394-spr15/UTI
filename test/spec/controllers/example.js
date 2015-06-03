describe("My First Test", function(){

    it("should be true", function(){
        expect(true).toBe(true);
    });
});

describe("example module", function () {
    beforeEach(module('example'));

    describe("RootViewController", function () {
        var scope,
            controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should assign UTIButtonMessage", function () {
            controller("RootViewController", {$scope: scope});
            expect(scope.UTIButtonMessage).toBe("Cancel UTI report");
        });
    });
});