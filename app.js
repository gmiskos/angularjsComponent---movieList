var app = angular.module("psMovies", ["ngComponentRouter"]); //ngRoute

app.value("$routerRootComponent", "movieApp");
// app.config(function($routeProvider){
//     $routeProvider
//         .when('/list',{
//             template: '<movie-list></movie-list>'
//         })
//         .when('/about',{
//             template: '<app-about></app-about>'
//         })
//         .otherwise({redirectTo:"/list"})
// });

app.component("appAbout", {
    template: "<h1>This is about page!</h1>"
})