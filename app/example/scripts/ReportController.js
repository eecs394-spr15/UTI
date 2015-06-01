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



    supersonic.ui.views.current.params.onValue( function (values) {
      //alert(values.id);
      var query = new Parse.Query("Case");
          query.equalTo("objectId", values.id);
          //alert(values.id);
      query.find({
            success: function(results) {
              $scope.Category=JSON.parse(results[0].get("questionnaire"));
              $scope.Category.objectId = results[0].id;
              $scope.Category.status = results[0].get("status");
              $scope.Category.msg = "";
                switch($scope.Category.status){
                    case "Pending":
                        $scope.Category.msg = "You have already submitted your report to the nurse. Please wait to check out the suggestion.";
                        break;
                    case "Approved":
                        $scope.Category.msg = "You can drop off your urine sample and your medication [ANITBIOTICS_NAME] is ready for pick up at your pharmacy.";
                        break;
                    case "Results Pending":
                        $scope.Category.msg = "You have to wait for your result coming out from your pharmacy.";
                        break;
                    case "Results Available":
                        $scope.Category.msg = "The result is coming out. You can go to check the following result now.";
                        break;
                    case "Closed":
                        $scope.Category.msg = "You have already completed the whole report. Thank you for using AmamdaCare!";
                        break;
                    case "Denied":
                        $scope.Category.msg = "Your nurse strongly suggests you visit your local clinic - your symptoms are too severe to be prescribed anything remotely."
                    default:
                        break;
                }
              $scope.$apply();
            },
          error: function(error) {
              //alert("Error: " + error.code + " " + error.message);
          }
      });
    });


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