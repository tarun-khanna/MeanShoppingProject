footerApp.factory("CustServiceFactory", function($q, $http){
   var obj = {
       getCustService(){
           var url = "https://raw.githubusercontent.com/tarunraj95/MEANpractice/master/CustService.json";
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