/**
 * Created by danieljunior on 15/10/15.
 */
app.controller('GameController', function ($scope, $location, UserService, PokeService) {

    var pokemon = PokeService.getNewPokemon();
    $scope.pokeName = pokemon.name;
    $scope.pokeImage = pokemon.img;
    $scope.resp = "";
    $scope.tries = 3;
    $scope.score = 0;
    $scope.check = function () {
        $('#pokeImage').removeClass('silhouette');
        $('#pokeName').removeClass('hidden');
        if ($scope.resp == $scope.pokeName) {
            alert("You are correct!");
            $scope.score += 100;
            $scope.reload();
        } else {
            $scope.score -= 50;
            $scope.tries -= 1;
            if ($scope.tries <= 0) {
                //$('#myModal').modal();
                alert("Game Over!");
                $location.path("/");
            } else {
                alert("You are wrong... Left " + $scope.tries + " tries.");
                $scope.reload();
            }
        }
    };

    $scope.reload = function () {
        pokemon = PokeService.getNewPokemon();
        $scope.resp = "";
        $('#pokeImage').addClass('silhouette');
        $('#pokeName').addClass('hidden');
        $scope.pokeName = pokemon.name;
        $scope.pokeImage = pokemon.image;
    };

    $scope.getUserName = UserService.getCurrentUser();

});
