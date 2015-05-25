angular
  .module('example')
  .controller('ReportController', function($scope, supersonic) {

    Parse.User.current().fetch();
    $scope.currentUser = Parse.User.current();


    $scope.$apply();

    $scope.reportUTI=function(){

        if ($scope.Category.pregnant==null || $scope.Category.pregnant=="" || 
          $scope.Category.blood==null || $scope.Category.blood=="" ||
          $scope.Category.fever==null || $scope.Category.fever=="" ||
          $scope.Category.vaginal==null || $scope.Category.vaginal=="" ||
          $scope.Category.flank==null || $scope.Category.flank=="") {supersonic.ui.dialog.alert("In order to submit, you must answer each and every question, leaving none blank.");return;}

        var UTIcase = Parse.Object.extend("Case");
        var utiCase = new UTIcase();
        
        $scope.Category.now = new Date().toDateString();
        utiCase.set("createdBy",Parse.User.current());
        utiCase.set("status","Pending");
        utiCase.set("questionnaire",JSON.stringify($scope.Category));
                utiCase.save(null, {     //save profile object to database
                success: function(user) {
                supersonic.ui.dialog.alert("Succesfully Submitted! A Nurse Should Get Back to You Shortly");
                $scope.$apply();
                },
                  error: function(user, error) {
                    supersonic.ui.dialog.alert("Error: " + error.message);
                  }
              });
          $scope.refresh();
          supersonic.ui.layers.pop();
    };






    $scope.checkStatus =function(){
        $scope.refresh();
        if($scope.currentUser.get("approved")) supersonic.ui.dialog.alert($scope.currentUser.get("approved"));
        else supersonic.ui.dialog.alert("You have not submitted a UIT report yet.");
    };

    $scope.refresh = function(){
                Parse.User.current().fetch();
                $scope.currentUser = Parse.User.current();
                $scope.$apply();
      };
 });