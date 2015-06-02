angular
  .module('example')
  .controller('RegisterController', function($scope, $location,supersonic) {
  		
  		$scope.currentUser = Parse.User.current();
  		$scope.ele = document.getElementById('file1');


    $scope.clickOnUpload = function () {
          window.document.getElementById("file1").click(); 
      };

  	$scope.signUp = function(){	
            var fileUploadControl = document.getElementById('file1');
			var reader = new FileReader();
            reader.readAsDataURL($scope.ele.files[0]);
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
            $scope.$apply();

        if($scope.newUser.password1===$scope.newUser.password2){
		        var user = new Parse.User();
		        user.set("username", $scope.newUser.username);
		        user.set("password", $scope.newUser.password1);
		        user.set("email", $scope.newUser.email);
		        user.set("profile", "{}");
		        user.set("photo",$scope.parseFile);
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
