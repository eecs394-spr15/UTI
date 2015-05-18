angular
  .module('example')
  .controller('ProfileController', function($scope, supersonic) {
  		Parse.User.current().fetch();
      $scope.currentUser = Parse.User.current();

      $scope.refresh = function(){
                Parse.User.current().fetch();
                $scope.currentUser = Parse.User.current();
                $scope.$apply();
      };

  		$scope.submit =function(){
  			if ($scope.Profile.firstName==null || $scope.Profile.firstName=="") {supersonic.ui.dialog.alert("First Name Needed");return;}
  			else if ($scope.Profile.lastName==null || $scope.Profile.lastName=="") {supersonic.ui.dialog.alert("Last Name Needed");return;}
  			else if ($scope.Profile.gender==null||$scope.Profile.gender=="") {supersonic.ui.dialog.alert("Gender Needed");return;}
  			else if ($scope.Profile.race==null) {supersonic.ui.dialog.alert("Race Needed");return;}
  			else if ($scope.Profile.streetAddress==null||$scope.Profile.streetAddress=="") {supersonic.ui.dialog.alert("Street Address Needed");return;}
  			else if ($scope.Profile.city==null ||$scope.Profile.city=="") {supersonic.ui.dialog.alert("City Needed");return;}
  			else if ($scope.Profile.state==null) {supersonic.ui.dialog.alert("State Needed");return;}
  			else if ($scope.Profile.zipCode==null||$scope.Profile.zipCode=="") {supersonic.ui.dialog.alert("Zip Code Needed");return;};

  			$scope.currentUser.set("profile",JSON.stringify($scope.Profile));
  				$scope.currentUser.save(null, {     //save profile object to database
	            success: function(user) {
	           	supersonic.ui.dialog.alert("Survey has been Sent");
	           	$scope.$apply();
	            },
			      error: function(user, error) {
			        supersonic.ui.dialog.alert("Error: " + error.message);
			      }
	          });
          $scope.refresh();
  		};


      $scope.Profile = JSON.parse($scope.currentUser.get("profile"));
      $scope.$apply();
 });
