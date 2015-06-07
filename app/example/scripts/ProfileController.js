angular
  .module('example')
  .controller('ProfileController', function($scope, supersonic) {
  		Parse.User.current().fetch();
      $scope.currentUser = Parse.User.current();


  		$scope.submit =function(){
  			
  			$scope.currentUser.set("profile",JSON.stringify($scope.Profile));
        var fileUploadControl = document.getElementById('file1');
        if (fileUploadControl.files.length > 0) $scope.currentUser.set("photo",$scope.parseFile);
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
      };

      $scope.UpLoadPhoto = function(){
            var fileUploadControl = document.getElementById('file1');
      var reader = new FileReader();
            reader.readAsDataURL(fileUploadControl.files[0]);
            reader.onload=function(){
            $scope.dataURL=reader.result;
            if (fileUploadControl.files.length > 0) {
              var file = fileUploadControl.files[0];
              var name = "photo.jpg";
              var base64 = $scope.dataURL.split('base64,')[1];
              $scope.parseFile = new Parse.File(name, { base64: base64 }); 
              $scope.parseFile.save();
            }
          };
      };
      $scope.dataURL = $scope.currentUser.get("photo").url();
      $scope.Profile = JSON.parse($scope.currentUser.get("profile"));
      $scope.$apply();
 });
