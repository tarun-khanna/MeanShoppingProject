app.controller("SocialController", function($scope, JSONFactory, socialShareURL){
    var promise = JSONFactory.getJSON(socialShareURL);
    promise.then((data)=>{
        var SocialData = data;
        $scope.result = SocialData.data;
    },(err)=>{
        console.log("error has occured in controller");
    });
   
});