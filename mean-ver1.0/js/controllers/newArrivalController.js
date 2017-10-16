app.controller("newArrivalController",function($scope,JSONFactory, newArrivalURL){
		var promise  = JSONFactory.getJSON(newArrivalURL);
		promise.then(function(data){
            $scope.shoes = data.data.Shoes;
		},
            function(err){
			$scope.error = err;
            console.log("THERE IS SOME ERROR IN THE DATA RECEIVED!!")
		})
		
	
});