footerApp.controller("AboutCompanyController", function($scope, AboutCompanyFactory){
    var promise = AboutCompanyFactory.getAboutCompany();
    promise.then((data)=>{
        var AboutCompanyData = data;
        $scope.result = AboutCompanyData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});