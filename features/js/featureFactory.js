app.factory("featureFactory", ($http, $q) => {
    return {
        callServer() {
            var url = "https://raw.githubusercontent.com/sunnyharsh/sunnyAll/master/FeaturesJson.json";
            console.log("Going to Call a Server... ");
            var deferedObject = $q.defer();
            $http.get(url).then(function (data) {
                console.log("Response is Success...", data.data);
                deferedObject.resolve(data.data);
            }, function (error) {
                console.log("Error is Coming....")
                deferedObject.reject(error);
            });
            return deferedObject.promise;
        }
    }
});