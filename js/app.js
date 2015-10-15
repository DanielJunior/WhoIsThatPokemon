/**
 * Created by danieljunior on 10/10/15.
 */
var app = angular.module('pokeApp', ['ngRoute', 'ngAnimate']);

app.
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            })
            .when('/game', {
                templateUrl: 'templates/game.html',
                controller: 'GameController'
            })
            .when('/developers', {
                templateUrl: 'templates/developers.html',
                controller: 'DevelopersController'
            })
            .when('/ranking', {
                templateUrl: 'templates/ranking.html',
                controller: 'RankingController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
