app.controller("trendingNowController",call);
function call($scope,JSONFactory, trendingNowURL){
    var promise = JSONFactory.getJSON(trendingNowURL);
    promise.then(function(data){
        //console.log("the data is" ,data);
        $scope.trendingData= data.data.trending;
        console.log("DATA RECEIVED :: " ,data);
        console.log("Scope PrintData ",$scope.trendingData);
		},function(err){
			//console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})    
    
  
}

