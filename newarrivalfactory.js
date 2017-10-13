app.factory("myfactory",function($http,$q){
	var object = {
		getNew(){
			var url ="https://raw.githubusercontent.com/Mukul001/puma.json/master/puma.json" ;
            
			var defererdObject = $q.defer();
			$http.get(url).then(function(data){
				defererdObject.resolve(data);
				
			},function(error){
				defererdObject.reject(error);
			});
			return defererdObject.promise;
		}
	};
	return object;
});
