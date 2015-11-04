/**
 * Created by danieljunior on 10/10/15.
 */
app.controller('RankingController', function ($scope, UserService) {

    var r = UserService.getRanking();
    r.then(
        function (data) {
            $scope.ranking = data;
        },
        function (errorData) {
            //$log.error('failure loading movie', errorPayload);
        });
});