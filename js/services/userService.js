/**
 * Created by danieljunior on 15/10/15.
 */

app.factory('UserService', function ($http) {
        var current_user="";
        var score;
        var country;
        var server = "http://localhost:3000/saveUser";
        return {
            getCurrentUser: function () {
                return current_user;
            },
            setCurrentUser: function (user) {
                current_user = user;
            },
            setUserScore: function(s){
                score = s;
            },
            setUserCountry: function(c){
                country = c;
            },
            save: function(){
                var data = {
                    name: current_user,
                    score: score,
                    country: country
                };
                $http.post(server,data).success(function(data){
                    console.log("Data sended!");
                });
            }
        }
    }
);