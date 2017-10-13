footerApp.controller("LogoController", function($scope, LogoFactory){
    var promise = LogoFactory.getLogo();
    promise.then((data)=>{
        var LogoData = data;
        $scope.result = LogoData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});