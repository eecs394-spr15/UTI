angular
  .module('example')
  .controller('LoginController', function($scope,supersonic) {

  	 $scope.currentUser = Parse.User.current();
  	 $scope.master = {};
  	 
    if($scope.currentUser) {
		supersonic.ui.initialView.dismiss();
	}; //change later

	$scope.logIn = function(){
	    Parse.User.logIn($scope.existingUser.username, $scope.existingUser.password, {
	        success: function(user) {
	          $scope.currentUser = user;
	          $scope.$apply();
	          user.save(null, {
	            success: function(user) {
	            //$scope.saveToLocal();
	           	supersonic.ui.initialView.dismiss();
	           	supersonic.ui.dialog.alert("successfully logged in");
	           	$scope.reset();
	           	$scope.$apply();
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
      };

      
  $scope.saveToLocal = function() {
  		  localStorage.setItem("user", $scope.currentUser);
          localStorage.setItem("userName", $scope.existingUser.username);
          localStorage.setItem("userPassword", $scope.existingUser.password);
      };
  });
