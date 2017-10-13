footerApp.factory("AboutCompanyFactory", function($q, $http){
   var obj = {
       getAboutCompany(){
           var url = "https://raw.githubusercontent.com/tarunraj95/MEANpractice/master/AboutCompany.json";
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