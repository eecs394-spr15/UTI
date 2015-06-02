angular
  .module('example')
  .controller('RootViewController', function($scope, supersonic) {

    Parse.User.current().fetch();
    $scope.currentUser = Parse.User.current();

    if($scope.currentUser.get("submitted")==true) $scope.UTIButtonMessage = "Cancel UTI report";
    else $scope.UTIButtonMessage = "Report a UTI";

    $scope.$apply();

    if($scope.currentUser.get("profile")){
      $scope.userJSON = JSON.parse($scope.currentUser.get("profile"));
    }
    
    $scope.test = function(result){
        Parse.User.current().fetch();
        $scope.currentUser =Parse.User.current();
        $scope.$apply();
    };

  	$scope.logOut = function(){
  		Parse.User.logOut();
  		//localStorage.clear();
  		supersonic.ui.dialog.alert("You are logged out.");
  		supersonic.ui.initialView.show();
  	};

    $scope.reportUTI=function(){
        if($scope.currentUser.get("submitted")!=true) $scope.currentUser.set("submitted",true);
        else $scope.currentUser.set("submitted",false);
        if($scope.currentUser.get("submitted")==true) {
              $scope.UTIButtonMessage = "Cancel UTI report";
              $scope.$apply();
              supersonic.ui.dialog.alert("UTI reported");
            }
            else {
              $scope.UTIButtonMessage = "Report a UTI";
              $scope.$apply();
              supersonic.ui.dialog.alert("UTI report canceled");    
            }
        $scope.currentUser.save(null, {
          success: function(user) {
            
          },
          error: function(user, error) {
            supersonic.ui.dialog.alert("Error: " + error.message);
        } 
        });
    };

    $scope.checkStatus =function(){
        if($scope.currentUser.get("approved")) supersonic.ui.dialog.alert($scope.currentUser.get("approved"));
        else supersonic.ui.dialog.alert("You have not submitted a UIT report yet.");
    };

 });

    // $scope.getNewUserData =function(){
    //  var query = new Parse.Query(Parse.User);
   //      query.get($scope.currentUser.id, {
   //        success: function(user) {
   //           $scope.currentUser =user;// The object was retrieved successfully.
   //           //supersonic.ui.dialog.alert("success in getting new user data");
   //        },
   //        error: function(object, error) {
   //          supersonic.ui.dialog.alert("Error: " + error.message);// The object was not retrieved successfully.
   //          // error is a Parse.Error with an error code and message.
   //        }
   //      });
    // };
