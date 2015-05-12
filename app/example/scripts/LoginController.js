angular
  .module('example')
  .controller('LoginController', function($scope, supersonic) {

  	 $scope.currentUser = Parse.User.current();

<<<<<<< Updated upstream
    //if(localStorage.getItem("user")) {
	//	supersonic.ui.initialView.dismiss();
	//}; //change later
=======
    if(localStorage.getItem("user")) {
		supersonic.ui.initialView.dismiss();
	}; //change later
>>>>>>> Stashed changes

	$scope.logIn = function(){
	    Parse.User.logIn($scope.existingUser.username, $scope.existingUser.password, {
	        success: function(user) {
	          $scope.currentUser = user;
	          $scope.$apply();
	          user.save(null, {
	            success: function(user) {
	            supersonic.ui.dialog.alert("successfully logged in");
	           	supersonic.ui.initialView.dismiss();
	            $scope.submit();
	            }
	          });
	        },
	        error: function(user, error) {
	            supersonic.ui.dialog.alert("Error: " + error.message);
	            }
	      });
	    
	  };
  
  $scope.submit = function() {
          localStorage.setItem("user", $scope.existingUser);
      };
  });
