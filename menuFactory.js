app.factory("menuFactory",($http,$q)=>{
  
    var obj = {
        getMenu(){
            var URL = "https://raw.githubusercontent.com/karan-khanna/MeanPractice/master/nestedMenuList-better";
            
            var defferedObj = $q.defer();
            $http.get(URL).then((data)=>{
                defferedObj.resolve(data);
            },(err)=>{
                defferedObj.reject(err);
            });
            return defferedObj.promise;
        }
    };
    return obj;
});