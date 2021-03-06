angular
  .module('example')
  .controller('CasesController', function($scope, supersonic) {
  		Parse.User.current().fetch();
      $scope.currentUser = Parse.User.current();

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

