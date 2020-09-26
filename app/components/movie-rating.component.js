(function(){
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieRating", {
        templateUrl: "/app/components/movie-rating.component.html",
        bindings:{
            value:"<"
        },
        transclude: true,
        controllerAs: "model",
        controller: function(){
            var model = this;

            model.$onInit = function(){
                model.entries = new Array( (model.value>1)? (model.value>5)? model.value = 5 : Math.trunc(model.value) : 1);
            };

            model.$onChanges = function(){
                model.entries = new Array( (model.value>1)? (model.value>5)? model.value = 5 :Math.trunc(model.value) : 1);
            };
        }
    });
}());