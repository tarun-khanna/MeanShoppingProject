app.controller("AboutCompanyController", function($scope, JSONFactory, aboutCompanyURL){
    var promise = JSONFactory.getJSON(aboutCompanyURL);
    promise.then((data)=>{
        var AboutCompanyData = data;
        $scope.result = AboutCompanyData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});