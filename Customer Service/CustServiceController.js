footerApp.controller("CustServiceController", function($scope, CustServiceFactory){
    var promise = CustServiceFactory.getCustService();
    promise.then((data)=>{
        var CustServiceData = data;
        $scope.result = CustServiceData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});