footerApp.controller("SocialController", function($scope, SocialFactory){
    var promise = SocialFactory.getSocial();
    promise.then((data)=>{
        var SocialData = data;
        $scope.result = SocialData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});