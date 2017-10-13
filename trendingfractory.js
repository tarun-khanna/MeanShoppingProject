trendingApp.factory("trendingFactory",($http,$q)=>{
   
	var object = {
		callServer(){
			var url = "https://raw.githubusercontent.com/aditikanodia/product-json/master/projectjson";
			var defererdObject = $q.defer();
			$http.get(url).then(function(data){
				console.log("Response is Success...",data.data);
				
				defererdObject.resolve(data.data);
				
				
			},function(error){
				console.log("Error is Come...");
				
				defererdObject.reject(error);
			});
			console.log("Server Called....");
			return defererdObject.promise;
		}
        

            

	};
	return object;
})