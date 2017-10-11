app.factory("footerFactory", function($q, $http){
   var obj = {
       getFooter(){
           var url = "https://raw.githubusercontent.com/tarunraj95/MEANpractice/master/footer.json";
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