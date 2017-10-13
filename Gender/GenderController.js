footerApp.controller("GenderController", function($scope, GenderFactory){
    var promise = GenderFactory.getGender();
    promise.then((data)=>{
        var GenderData = data;
        $scope.result = GenderData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});