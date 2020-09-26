(function(){
    var app = angular.module("psMovies");
    var IndexController = function($scope){
        $scope.message = "Hello Components!";
    }

    app.controller("IndexController", ["$scope", IndexController]);
}())