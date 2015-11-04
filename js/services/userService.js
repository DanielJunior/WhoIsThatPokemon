/**
 * Created by danieljunior on 15/10/15.
 */

app.factory('UserService', function ($http, $q) {
        var current_user = "";
        var score;
        var country;
        //var server = "http://localhost:3000/";
        var server = "https://whoisthatpokemon.herokuapp.com/";
        return {
            getCurrentUser: function () {
                return current_user;
            },
            setCurrentUser: function (user) {
                current_user = user;
            },
            setUserScore: function (s) {
                score = s;
            },
            setUserCountry: function (c) {
                country = c;
            },
            save: function () {
                var data = {
                    name: current_user,
                    score: score,
                    country: country
                };
                $http.post(server + "saveUser", data).success(function (data) {
                    console.log("Data sended!");
                });
            },
            getRanking: function () {
                var defer = $q.defer();
                var resp;
                $http.get(server + "list.json")
                    .success(function (response) {
                        //resp = response;
                        //console.log(response);
                        defer.resolve(response);
                    });
                 return defer.promise;
            }
        }
    }
);