app.controller("newctrl",($scope,myfactory)=>{
		var promise  = myfactory.getNew();
		promise.then(function(data){
            $scope.shoes = data.data.Shoes;
		},
            function(err){
			$scope.error = err;
            console.log("THERE IS SOME ERROR IN THE DATA RECEIVED!!")
		})
		
	
});