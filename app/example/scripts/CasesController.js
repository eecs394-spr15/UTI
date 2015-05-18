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
          // for(var i = 0; i < results.length; i++){
          //   results[i].questionnaire = 1;
          // }
          $scope.cases = results;
          $scope.$apply();
          //alert("Successfully retrieved " + results.length + " users.");
          // Do something with the returned Parse.Object values
          //for (var i = 0; i < results.length; i++) { 
          //  var object = results[i];
          //  alert(object.id + ' - ' + object.get('username'));
          //}
        },
        error: function(error) {
          //alert("Error: " + error.code + " " + error.message);
        }
      });

      //$scope.CasesQuestionnaire = $scope.currentUser.get("cases").get("questionnaire");

      $scope.$apply();
 });
