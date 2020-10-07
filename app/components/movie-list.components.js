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
                let index = 1;
                movies.forEach(element => {
                    if(element.imdbRating>5){
                        element.imdbRating = Math.floor(Math.random() * Math.floor(5));                        
                    }
                    element.id = index;
                    index++;
                });
                vm.movies = movies;
            })
        }

        vm.setRating = function(movie , newRating){
            movie.imdbRating = newRating;
        };

        vm.increaseRating = function(movie){
            if(movie.imdbRating<5)
                movie.imdbRating += 1;
        };
        vm.decreaseRating = function(movie){
            if(movie.imdbRating>0)
                movie.imdbRating -= 1;
        };
        vm.goTo = function(id){
            vm.$router.navigate(['Details', {id: id}, 'Overview'])
        }
    }

    module.component(  "movieList" ,{
        templateUrl: "/app/components/movie-list.component.html",
        controllerAs: "vm",
        controller: ["$http", Controller],
        bindings: {
            "$router":"<"
        }
    });
}());