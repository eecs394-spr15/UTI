angular
  .module('example')
  .controller('RootViewController', function($scope, supersonic) {
  	$scope.logOut = function(){
  		localStorage.clear();
  	}
 });
