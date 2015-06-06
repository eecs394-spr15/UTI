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

        var currentUser = new Parse.Object('User', {username: "Greg Kim2", submitted: true, photo: {url: function(){return true;}}, profile: '{"firstName":"Greg","lastName":"Kim","race":"Asian","sulfa":true,"penicillin":true,"past2":false,"past4":true,"fluoroquinolone":true,"nitrofurantoin":true,"gender":"Female","streetAddress":"123 fake st","city":"City","state":"Alabama","zipCode":"12345","past1":false,"InsuranceGroupId":"1","PolicyPerson":"q","InsuranceCompany":"q","PhysicianName":"Q","PhysicianCity":"q","PharmacyName":"q","PharmacyCity":"q","PharmacyZipcode":"12345","CreditCardNumber":"133","ExpirationDate":"today","CardName":"q","CVV":"123","past3":false}'});
        //"{\"username\":\"Greg Kim2\",\"email\":\"gregwcmkim@gmail.com\",\"photo\":{\"__type\":\"File\",\"name\":\"tfss-201ffc7a-6ad0-4ba7-ad98-8d1ce8181feb-photo.jpg\",\"url\":\"http://files.parsetfss.com/df15e427-c9f7-4dbe-ab75-07bd63443c94/tfss-201ffc7a-6ad0-4ba7-ad98-8d1ce8181feb-photo.jpg\"},\"profile\":\"{\\\"firstName\\\":\\\"Greg\\\",\\\"lastName\\\":\\\"Kim\\\",\\\"race\\\":\\\"Asian\\\",\\\"sulfa\\\":true,\\\"penicillin\\\":true,\\\"past2\\\":false,\\\"past4\\\":true,\\\"fluoroquinolone\\\":true,\\\"nitrofurantoin\\\":true,\\\"gender\\\":\\\"Female\\\",\\\"streetAddress\\\":\\\"123 fake st\\\",\\\"city\\\":\\\"City\\\",\\\"state\\\":\\\"Alabama\\\",\\\"zipCode\\\":\\\"12345\\\",\\\"past1\\\":false,\\\"InsuranceGroupId\\\":\\\"1\\\",\\\"PolicyPerson\\\":\\\"q\\\",\\\"InsuranceCompany\\\":\\\"q\\\",\\\"PhysicianName\\\":\\\"Q\\\",\\\"PhysicianCity\\\":\\\"q\\\",\\\"PharmacyName\\\":\\\"q\\\",\\\"PharmacyCity\\\":\\\"q\\\",\\\"PharmacyZipcode\\\":\\\"12345\\\",\\\"CreditCardNumber\\\":\\\"133\\\",\\\"ExpirationDate\\\":\\\"today\\\",\\\"CardName\\\":\\\"q\\\",\\\"CVV\\\":\\\"123\\\",\\\"past3\\\":false}\",\"cases\":{\"__type\":\"Relation\",\"className\":\"Case\"},\"objectId\":\"KGYkKepOmN\",\"createdAt\":\"2015-06-01T21:06:19.073Z\",\"updatedAt\":\"2015-06-04T02:02:57.546Z\"}";

        beforeEach(inject(function ($rootScope, _$controller_) {
            scope = $rootScope.$new();
            $controller = _$controller_;
            
        }));

        // it("assigns UTIButtonMessage", function(){
        //     var $scope = {};
        //     Parse.User.current = function(){return currentUser;}
        //     spyOn(Parse.User, "current").and.returnValue(currentUser);
        //     var controller = $controller("RootViewController", {$scope: $scope});
        //     expect($scope.UTIButtonMessage).not.toBeNull();
        // })

        describe("$scope.reportUTI", function(){
        	it("tries to report UTI", function () {
        		var $scope = {};
                $scope.$apply = function(){return true;}
                Parse.User.current = function(){return currentUser;}
                spyOn($scope, "$apply").and.returnValue(true);
                spyOn(Parse.User, "current").and.returnValue(currentUser);

	            var controller = $controller("RootViewController", {$scope: $scope});

	            $scope.reportUTI();

                expect($scope.UTIButtonMessage).toEqual("Report a UTI");
                expect($scope.$apply).toHaveBeenCalled();
	        });
        })

        describe("$scope.submit", function(){
            it("saves profile changes", function () {

                var $scope = {};
                $scope.$apply = function(){return true;}
                Parse.User.current = function(){return currentUser;}
                spyOn($scope, "$apply").and.returnValue(true);
                spyOn(Parse.User, "current").and.returnValue(currentUser);

                var controller = $controller("ProfileController", {$scope: $scope});

                spyOn($scope.currentUser, "set").and.callThrough();
                spyOn($scope.currentUser, "save").and.callThrough();

                $scope.submit();

                expect($scope.currentUser.set).toHaveBeenCalledWith("profile",JSON.stringify($scope.Profile));
                expect($scope.currentUser.set).toHaveBeenCalledWith("photo",$scope.parseFile);
                expect($scope.currentUser.save).toHaveBeenCalled();
            });
        })

        
    });
});

// describe('My parsejs app', function () {
 
//   it('should load some data from parse', function () {
//     var stub = Parse.Mock.stubQueryFind(function (options) {
//       return [new Parse.Object('User', {name: 'Antony'})]
//     });
 
//     expect(getUser()).toBeUndefined();
 
//     loadUser(); //function that invokes Query.find
 
//     expect(getUser()).toBeDefined();
//     expect(stub.callCount).toEqual(1); //do assertions on stub object if necessary
//   });
 
//   afterEach(inject(function () {
//     Parse.Mock.clearStubs(); //manually dispose of stubs
//   }));
 
 
// });