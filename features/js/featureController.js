app.controller("featureController", function ($scope, featureFactory) {
    console.log("controller start....");
    var promise = featureFactory.callServer();
    promise.then(function (data) {
        console.log("Controller Rec the Promise Data");
        console.log("Data is ", data);
        $scope.featureData = data.features;
    }, function (err) {
        console.log("Controller Rec the Promise Error");
        $scope.error = err;
    })


});
