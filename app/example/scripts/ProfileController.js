angular
  .module('example')
  .controller('ProfileController', function($scope,$interval, supersonic) {
  		Parse.User.current().fetch();
      $scope.currentUser = Parse.User.current();
      $scope.counter = 0;

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
	           	supersonic.ui.dialog.alert("Profile information saved");
	           	$scope.$apply();
              supersonic.ui.layers.pop();
	            },
			      error: function(user, error) {
			        supersonic.ui.dialog.alert("Error: " + error.message);
			      }
	          });
          $scope.refresh();
  		};

      $scope.clickOnUpload = function () {
          window.document.getElementById("file1").click(); 
          $scope.myVar = setInterval($scope.UpLoadPhoto, 300);
      };

      $scope.UpLoadPhoto = function(){
            var ele = document.getElementById('file1');
            $scope.counter++;
            if($scope.counter ==30) {
              $scope.counter=0;
              clearInterval($scope.myVar);
            }
            var fileUploadControl = document.getElementById('file1');
            var reader = new FileReader();

            reader.readAsDataURL(ele.files[0]);
            reader.onload=function(){$scope.dataURL=reader.result};

            $scope.$apply();
            if (fileUploadControl.files.length > 0) {
              var file = fileUploadControl.files[0];
              var name = "photo.jpg";
              var base64 = $scope.dataURL.split('base64,')[1];
              var parseFile = new Parse.File(name, { base64: base64 }); 
            }
            parseFile.save().then(function() {
                $scope.currentUser.set("photo",parseFile);
                $scope.currentUser.save(null, {     //save profile object to database
                  success: function(user) {
                    clearInterval($scope.myVar);
                    supersonic.ui.dialog.alert("Profile photo saved");
                    $scope.$apply();
                  },
                error: function(user, error) {
                  supersonic.ui.dialog.alert("Error: " + error.message);
                }
            });

            $scope.refresh();
            }, function(error) {
              // The file either could not be read, or could not be saved to Parse.
            });
      };
      $scope.dataURL = $scope.currentUser.get("photo").url();
      $scope.Profile = JSON.parse($scope.currentUser.get("profile"));
      $scope.$apply();
 });
