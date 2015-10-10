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

app.factory('UserService', function () {
        var current_user;
        return {
            getCurrentUser: function () {
                return current_user;
            },
            setCurrentUser: function (user) {
                current_user = user;
            }

        }
    }
);