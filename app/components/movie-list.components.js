(function(){
    "use strict";
    var module = angular.module("psMovies");

    function fetchMovies($http){
        return $http.get("/movies.json")
                .then(function(response){
                    return response.data;
                });
    }

    function Controller($http){
        var vm = this;
        vm.movies = [];
        
        vm.$onInit = function(){
            fetchMovies($http).then(function(movies){
                movies.forEach(element => {
                    if(element.imdbRating>5){
                        element.imdbRating = 5;
                    }
                });
                vm.movies = movies;
            })
        }

        vm.increaseRating = function(movie){
            if(movie.imdbRating<5)
                movie.imdbRating += 1;
        };
        vm.decreaseRating = function(movie){
            if(movie.imdbRating>0)
                movie.imdbRating -= 1;
        };
    }

    module.component(  "movieList" ,{
        templateUrl: "/app/components/movie-list.component.html",
        controllerAs: "vm",
        controller: ["$http", Controller]
    });
}());