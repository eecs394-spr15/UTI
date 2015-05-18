angular
  .module('example')
  .controller('ReportController', function($scope, supersonic) {

    Parse.User.current().fetch();
    $scope.currentUser = Parse.User.current();


    $scope.$apply();

    $scope.reportUTI=function(){
        // $scope.refresh();
        //  $scope.currentUser.set("submitted",true);
        // $scope.currentUser.save(null, {
        //   success: function(user) {
        //     alert("Successfully submitted. You can track the status of your UTI from the main page.");
        //   },
        //   error: function(user, error) {
        //     supersonic.ui.dialog.alert("Error: " + error.message);
        // } 
        // });
        alert("Test!");
    };

    $scope.checkStatus =function(){
        $scope.refresh();
        if($scope.currentUser.get("approved")) supersonic.ui.dialog.alert($scope.currentUser.get("approved"));
        else supersonic.ui.dialog.alert("You have not submitted a UIT report yet.");
    };

 });