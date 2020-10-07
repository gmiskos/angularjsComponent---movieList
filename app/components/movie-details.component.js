(function(){
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieDetails", {
        templateUrl: '/app/components/movie-details.component.html',
        // $canActivate: function($timeout){
        //     return $timeout(function(){
        //         return true;
        //     }, 5000);
        // },
        controllerAs: "model",
        controller: function(){
            var model = this;
            
            model.$routerOnActivate = function(next, previous){
                model.id = next.params.id;
            };
        }
    })
}());