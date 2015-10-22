/**
 * Created by danieljunior on 15/10/15.
 */
app.controller('GameController', function ($scope, $location, UserService, PokeService) {

    $scope.pokeName = PokeService.getNewPokemonName();
    $scope.pokeImage = PokeService.getNewPokemonImage();
    $scope.resp = "";
    $scope.tries = 3;
    $scope.score = 0;
    $scope.check = function () {
        $('#pokeImage').removeClass('silhouette');
        if ($scope.resp == $scope.pokeName) {
            alert("You are correct!");
            $scope.score += 10;
            $scope.reload();
        } else {
            $scope.tries -= 1;
            console.log($scope.tries);
            if ($scope.tries == 0) {
                $('#myModal').modal();
                //$location.path("/");

            } else {
                alert("You are wrong... Left " + $scope.tries + " tries.");
                $scope.reload();
            }
        }
    };

    $scope.reload = function () {
        $scope.resp = "";
        $('#pokeImage').addClass('silhouette');
        $scope.pokeName = PokeService.getNewPokemonName();
        $scope.pokeImage = PokeService.getNewPokemonImage();
    };

    $scope.getUserName = UserService.getCurrentUser();

});
