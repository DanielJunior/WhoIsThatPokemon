/**
 * Created by danieljunior on 10/10/15.
 */
app.controller('MainController', function ($scope, $location, UserService, PokeService) {
    $scope.nickName = "";
    $scope.gen = "0";
    $scope.country;
    $scope.pokeName = "";
    $scope.submit = function () {
        UserService.setCurrentUser($scope.nickName);
        UserService.setUserCountry($scope.country);
        PokeService.setGens($scope.gen);
        $location.path('/game');
    };
});