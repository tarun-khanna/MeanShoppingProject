footerApp.factory("SocialFactory", function($q, $http){
   var obj = {
       getSocial(){
           var url = "https://raw.githubusercontent.com/tarunraj95/MEANpractice/master/Social.json";
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