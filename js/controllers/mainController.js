/**
 * Created by danieljunior on 10/10/15.
 */
app.controller('MainController', function ($scope, $location, UserService) {
    $scope.nickName = "";
    $scope.gen = "";
    $scope.pokeName = "";
    $scope.submit = function () {
        $scope.gen = $('select option:checked').val();
        UserService.setCurrentUser($scope.nickName);
        $location.path('/game');
    };

    $scope.check = function () {
        $('#pokeImage').removeClass('silhouette');
        alert("You are correct!");
    };

    $scope.getUserName = UserService.getCurrentUser();


});