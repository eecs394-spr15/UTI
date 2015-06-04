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

        var currentUser = "{\"username\":\"Greg Kim2\",\"email\":\"gregwcmkim@gmail.com\",\"photo\":{\"__type\":\"File\",\"name\":\"tfss-201ffc7a-6ad0-4ba7-ad98-8d1ce8181feb-photo.jpg\",\"url\":\"http://files.parsetfss.com/df15e427-c9f7-4dbe-ab75-07bd63443c94/tfss-201ffc7a-6ad0-4ba7-ad98-8d1ce8181feb-photo.jpg\"},\"profile\":\"{\\\"firstName\\\":\\\"Greg\\\",\\\"lastName\\\":\\\"Kim\\\",\\\"race\\\":\\\"Asian\\\",\\\"sulfa\\\":true,\\\"penicillin\\\":true,\\\"past2\\\":false,\\\"past4\\\":true,\\\"fluoroquinolone\\\":true,\\\"nitrofurantoin\\\":true,\\\"gender\\\":\\\"Female\\\",\\\"streetAddress\\\":\\\"123 fake st\\\",\\\"city\\\":\\\"City\\\",\\\"state\\\":\\\"Alabama\\\",\\\"zipCode\\\":\\\"12345\\\",\\\"past1\\\":false,\\\"InsuranceGroupId\\\":\\\"1\\\",\\\"PolicyPerson\\\":\\\"q\\\",\\\"InsuranceCompany\\\":\\\"q\\\",\\\"PhysicianName\\\":\\\"Q\\\",\\\"PhysicianCity\\\":\\\"q\\\",\\\"PharmacyName\\\":\\\"q\\\",\\\"PharmacyCity\\\":\\\"q\\\",\\\"PharmacyZipcode\\\":\\\"12345\\\",\\\"CreditCardNumber\\\":\\\"133\\\",\\\"ExpirationDate\\\":\\\"today\\\",\\\"CardName\\\":\\\"q\\\",\\\"CVV\\\":\\\"123\\\",\\\"past3\\\":false}\",\"cases\":{\"__type\":\"Relation\",\"className\":\"Case\"},\"objectId\":\"KGYkKepOmN\",\"createdAt\":\"2015-06-01T21:06:19.073Z\",\"updatedAt\":\"2015-06-04T02:02:57.546Z\"}";

        var testUser = "";

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        	spyOn(Parse.User, "current").and.returnValue(JSON.parse(currentUser));
        }));

        

        it("should assign UTIButtonMessage", function () {
            controller("RootViewController", {$scope: scope});
            expect(scope.UTIButtonMessage).toBe("Cancel UTI report");
        });
    });
});