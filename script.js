var testApp = angular.module('testApp', []);


testApp.controller('testController' , function ($scope, $http) {
    $scope.home = "This is the homepage";
    $scope.tags = [];
    $scope.getRequest = function () {
        console.log("I've been pressed!");
        req = "http://codeforces.com/api/contest.list";
        $http.get(req)
            .then(function successCallback(response){
                $scope.contest = response.data.result.slice(0,100);
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            })

        req = "http://codeforces.com/api/problemset.problems?tags=";

        $scope.tags.push($scope.search);

        for(var i=0;i<$scope.tags.length;i++)
        {
          req += $scope.tags[i];
          if(i!= $scope.tags.length-1)
          req+= ";";
        }
        $scope.request = req;
        $http.get(req)
            .then(function successCallback(response){
                $scope.response = response.data.result;
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
          delete $scope.search;
    };

});
