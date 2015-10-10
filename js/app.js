/**
 * Created by danieljunior on 10/10/15.
 */
var app = angular.module('pokeApp', ['ngRoute']);

app.
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            })
            .when('/game', {
                templateUrl: 'templates/game.html',
                controller: 'MainController'
            });
    }]);