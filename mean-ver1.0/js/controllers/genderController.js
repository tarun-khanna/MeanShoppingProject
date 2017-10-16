app.controller("genderController",function($scope,JSONFactory,genderURL){
    console.log("controller start....")
var promise  = JSONFactory.getJSON(genderURL);
		
		promise.then(function(data){
			
			$scope.genderInfo = data.data;
			
		},function(err){
			console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})
});