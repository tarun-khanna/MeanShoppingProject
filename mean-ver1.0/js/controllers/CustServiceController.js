app.controller("CustServiceController", function($scope, JSONFactory, customerServiceURL){
    var promise = JSONFactory.getJSON(customerServiceURL);
    promise.then((data)=>{
        var CustServiceData = data;
        $scope.result = CustServiceData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});