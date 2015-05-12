angular
  .module('example')
  .controller('RegisterController', function($scope, $location,supersonic) {
  		
  		$scope.currentUser = Parse.User.current();
  	$scope.signUp = function(){
        if($scope.newUser.password1===$scope.newUser.password2){
		        var user = new Parse.User();
		        user.set("username", $scope.newUser.username);
		        user.set("password", $scope.newUser.password1);
		        user.set("email", $scope.newUser.email);
		        user.signUp(null, {
		      success: function(user) {
		        $scope.currentUser = user;
		        $scope.$apply();
		        supersonic.ui.dialog.alert("You have successfully signed up!");
		        supersonic.ui.initialView.dismiss();
<<<<<<< HEAD
				//window.location.replace("basic-info.html");
=======
<<<<<<< Updated upstream
				window.location.replace("basic-info.html");
=======
				//window.location.replace("basic-info.html");
>>>>>>> Stashed changes
>>>>>>> origin/master
		      },
		      error: function(user, error) {
		        supersonic.ui.dialog.alert("Error: " + error.message);
		      }

	    });
        }else{
          supersonic.ui.dialog.alert("Please Enter the same Password");
        }
  };
  });
