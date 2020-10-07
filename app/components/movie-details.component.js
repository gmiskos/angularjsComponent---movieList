(function(){
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieDetails", {
        templateUrl: '/app/components/movie-details.component.html',
        $routeConfig: [
            {path:"/overview", component:"movieOverview", name:"Overview"},
            {path:"/cast", component:"movieCast", name:"Cast"},
            {path:"/director", component:"movieDirector", name:"Director"}
        ],
        controllerAs: "model",
        controller: function(){
            var model = this;
            
            model.$routerOnActivate = function(next, previous){
                model.id = next.params.id;
            };
        }
    });

    module.component("movieOverview", {
        template: "<p>This is the Overview!</p>"
    });

    module.component("movieCast", {
        template: "<p>This is the Cast info!</p>"
    });

    module.component("movieDirector", {
        template: "<p>This is the director info!</p>"
    });

}());