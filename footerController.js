app.controller("footerController", function($scope, footerFactory){
    var promise = footerFactory.getFooter();
    promise.then((data)=>{
        var footerData = data;
        $scope.result = footerData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
});