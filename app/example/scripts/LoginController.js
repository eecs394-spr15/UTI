angular
  .module('example')
  .controller('LoginController', function($scope,supersonic) {
  	 //Parse.User.logOut();						
  	 $scope.currentUser = Parse.User.current(); // Parse.User.current() read user object from cached localstorage
  	 $scope.master = {};						// Use for reset the Inputbox for username and password to empty.
  	 
    if($scope.currentUser) {
		supersonic.ui.initialView.dismiss();	//if localStrorage has user already, dimiss login page
		var userName = localStorage.getItem("userName");
		var password = localStorage.getItem("userPassword");
		Parse.User.logIn(userName,password);
	}; //change later

	$scope.logIn = function(){					// check username and password from parse cloud, 
												// and I believe this stores user to localStorage
	    Parse.User.logIn($scope.existingUser.username, $scope.existingUser.password, {
	        success: function(user) {
	          user.save(null, {					// save the row or an object to parse
	            success: function(user) {		// each time you want data on cloud to change, need save it.
	           	supersonic.ui.initialView.dismiss();
	           	supersonic.ui.dialog.alert("successfully logged in");
	           	$scope.saveToLocal();
	           	$scope.reset();			// syc view and model data immediately           					
	            }
	          });
	        },
	        error: function(user, error) {
	            supersonic.ui.dialog.alert("Error: " + error.message);
	            }
	      });
	  };
  
   $scope.reset = function() {
        $scope.existingUser = angular.copy($scope.master);
        $scope.$apply();
      };

      
  $scope.saveToLocal = function() {			// currently no use
          localStorage.setItem("userName", $scope.existingUser.username);
          localStorage.setItem("userPassword", $scope.existingUser.password);
      };
  });
