app.controller("menuController",($scope,menuFactory)=>{
   var promise = menuFactory.getMenu(); 
    promise.then((data)=>{
        var menuData = data;
        $scope.menu = menuData.data.subMenuList;
    },(err)=>{console.log("THERE IS SOME ERROR IN THE DATA RECEIVED!!")});
});