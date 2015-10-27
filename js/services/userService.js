/**
 * Created by danieljunior on 15/10/15.
 */

app.factory('UserService', function () {
        var current_user="";
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