angular
  .module('example')
  .controller('RootViewController', function($scope, supersonic) {

  	$scope.currentUser = Parse.User.current();//change later
    $scope.userJSON = JSON.parse($scope.currentUser.get("profile"));
    
    
    $scope.test = function(result){
      //supersonic.ui.dialog.alert($scope.currentUser.get("profile"));
      $scope.userJSON = JSON.parse($scope.currentUser.get("profile"));
      result= $scope.userJSON.firstName;//supersonic.ui.dialog.alert(userJSON.firstName);
      //supersonic.ui.dialog.alert(JSON.parse($scope.currentUser.get("profile")).firstName);
    };
    

  	$scope.getNewUserData =function(){
  		var query = new Parse.Query(Parse.User);
        query.get($scope.currentUser.id, {
          success: function(user) {
             $scope.currentUser =user;// The object was retrieved successfully.
             supersonic.ui.dialog.alert("success");
          },
          error: function(object, error) {
            supersonic.ui.dialog.alert("Error: " + error.message);// The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
          }
        });
  	};


  	$scope.logOut = function(){
  		Parse.User.logOut();
  		//localStorage.clear();
  		supersonic.ui.dialog.alert("You are logged out.");
  		supersonic.ui.initialView.show();
  	};
 });
