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
		        $scope.logIn();				// save to localStroage
		        supersonic.ui.initialView.dismiss();

		        
		      },
		      error: function(user, error) {
		        supersonic.ui.dialog.alert("Error: " + error.message);
		      }

	    });
        }else{
          supersonic.ui.dialog.alert("Please Enter the same Password");
        }
  };


  $scope.logIn = function(){
	    Parse.User.logIn($scope.newUser.username, $scope.newUser.password1, {
	        success: function(user) {
	          $scope.currentUser = user;
	          $scope.$apply();
	          user.save(null, {
	            success: function(user) {
	            //$scope.saveToLocal();
	           	supersonic.ui.initialView.dismiss();
	           	supersonic.ui.dialog.alert("successfully logged in");
	           	$scope.$apply();
	            }
	          });
	        },
	        error: function(user, error) {
	            supersonic.ui.dialog.alert("Error: " + error.message);
	            }
	      });
	    
	  };
	    $scope.saveToLocal = function() {
          localStorage.setItem("userName", $scope.newUser.username);
          localStorage.setItem("userPassword", $scope.newUser.password);
      };
  });
