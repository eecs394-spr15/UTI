angular
  .module('example')
  .controller('CasesController', function($scope, supersonic) {
  		Parse.User.current().fetch();
      $scope.currentUser = Parse.User.current();

      $scope.refresh = function(){
                Parse.User.current().fetch();
                $scope.currentUser = Parse.User.current();
                $scope.$apply();
      };

      var query = new Parse.Query("Case");
      query.equalTo("createdBy", Parse.User.current());
      query.find({
        success: function(results) {
          $scope.cases = results;
          for (var i = results.length - 1; i >= 0; i--) {
            var row = results[i];
            results[i] = JSON.parse(results[i].get("questionnaire"));
            results[i].objectId = row.id;
            results[i].status = row.get("status");
            results[i].createdBy = row.get("createdBy");
            switch(results[i].status){
                case "Pending":
                    results[i].msg = "You have already submitted your report to the nurse. Please wait to check out the suggestion.";
                    break;
                case "Approved":
                    results[i].msg = "You can drop off your urine sample and your medication [ANITBIOTICS_NAME] is ready for pick up at your pharmacy";
                    break;
                case "Results Pending":
                    results[i].msg = "You have to wait for your result coming out from your pharmacy.";
                    break;
                case "Results Available":
                    results[i].msg = "The result is coming out. You can go to check the following result now.";
                    break;
                case "Closed":
                    results[i].msg = "You have already completed the whole report. Thank you for using AmamdaCare!";
                    break;
              default:
                break;
            }
            //results[i].now = new Date(results[i].now);
          };
          $scope.$apply();
        },
        error: function(error) {
          //alert("Error: " + error.code + " " + error.message);
        }
      });

      $scope.$apply();
 });

