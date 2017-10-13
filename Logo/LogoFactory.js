footerApp.factory("LogoFactory", function($q, $http){
   var obj = {
       getLogo(){
           var url = "https://raw.githubusercontent.com/tarunraj95/MEANpractice/master/logo.json";
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