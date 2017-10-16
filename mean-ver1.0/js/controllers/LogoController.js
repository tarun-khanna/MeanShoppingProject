app.controller("LogoController", function($scope, JSONFactory, logoURL){
    var promise = JSONFactory.getJSON(logoURL);
    promise.then((data)=>{
        var LogoData = data;
        $scope.result = LogoData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});