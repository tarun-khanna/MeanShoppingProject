footerApp.factory("GenderFactory", function($q, $http){
   var obj = {
       getGender(){
           var url = "https://raw.githubusercontent.com/kundan4all/json/master/gender.json";
           var deferedObj = $q.defer();
           $http.get(url).then((data)=>{
               deferedObj.resolve(data);
           },(err)=>{
               deferedObj.reject(err);
           });
           return deferedObj.promise;
       }
   };
    return obj;
});