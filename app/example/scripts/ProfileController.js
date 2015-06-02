angular
  .module('example')
  .controller('ProfileController', function($scope, supersonic) {
  		Parse.User.current().fetch();
      $scope.currentUser = Parse.User.current();


  		$scope.submit =function(){
  			// if ($scope.Profile.firstName==null || $scope.Profile.firstName=="") {supersonic.ui.dialog.alert("First Name Needed");return;}
  			// else if ($scope.Profile.lastName==null || $scope.Profile.lastName=="") {supersonic.ui.dialog.alert("Last Name Needed");return;}
  			// else if ($scope.Profile.gender==null||$scope.Profile.gender=="") {supersonic.ui.dialog.alert("Gender Needed");return;}
  			// else if ($scope.Profile.race==null) {supersonic.ui.dialog.alert("Race Needed");return;}
  			// else if ($scope.Profile.streetAddress==null||$scope.Profile.streetAddress=="") {supersonic.ui.dialog.alert("Street Address Needed");return;}
  			// else if ($scope.Profile.city==null ||$scope.Profile.city=="") {supersonic.ui.dialog.alert("City Needed");return;}
  			// else if ($scope.Profile.state==null) {supersonic.ui.dialog.alert("State Needed");return;}
  			// else if ($scope.Profile.zipCode==null||$scope.Profile.zipCode=="") {supersonic.ui.dialog.alert("Zip Code Needed");return;};

        //alert($scope.Profile.past1);
  			$scope.currentUser.set("profile",JSON.stringify($scope.Profile));
  				$scope.currentUser.save(null, {     //save profile object to database
	            success: function(user) {
	           	supersonic.ui.dialog.alert("Profile information saved");
	           	$scope.$apply();
              supersonic.ui.layers.pop();
	            },
			      error: function(user, error) {
			        supersonic.ui.dialog.alert("Error: " + error.message);
			      }
	          });
          $scope.$apply();
  		};
       $scope.clickOnUpload = function () {
          $scope.$apply();
          window.document.getElementById("file1").click();
          $scope.myVar= setInterval($scope.UpLoadPhoto,1000); 
      };

      $scope.UpLoadPhoto = function(){
            var fileUploadControl = document.getElementById('file1');
            if (fileUploadControl.files.length > 0) {
              var reader = new FileReader();
              reader.readAsDataURL(fileUploadControl.files[0]);
              reader.onload=function(){
              $scope.dataURL=reader.result;
              var file = fileUploadControl.files[0];
              var name = "photo.jpg";
              var base64 = $scope.dataURL.split('base64,')[1];
              $scope.parseFile = new Parse.File(name, { base64: base64 }); 
              $scope.parseFile.save(null, {     //save profile object to database
              success: function(user) {
                  //clearInterval($scope.myVar);
                  alert("Photo Uploaded");
                  $scope.currentUser.set("photo",$scope.parseFile);
                  $scope.currentUser.save();
              },
            error: function(user, error) {
              supersonic.ui.dialog.alert("Error: " + error.message);
            }
            });
              
              
            }
        };
              $scope.$apply();
      };
      $scope.dataURL = $scope.currentUser.get("photo").url();

      $scope.Profile = JSON.parse($scope.currentUser.get("profile"));
      $scope.$apply();
 });
