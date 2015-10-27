/**
 * Created by danieljunior on 15/10/15.
 */
app.controller('GameController', function ($scope, $location, UserService, PokeService) {
    if (UserService.getCurrentUser() != "") {
        getPokemonData();
        $scope.resp = "";
        $scope.tries = 3;
        $scope.score = 0;
        $scope.check = function () {
            $('#pokeImage').removeClass('silhouette');
            $('#pokeName').removeClass('hidden');
            if ($scope.resp.toUpperCase() == $scope.pokeName) {
                alert("You are correct!");
                $scope.score += 100;
                $scope.reload();
            } else {
                if ($scope.score > 0) {
                    $scope.score -= 50;
                }
                $scope.tries -= 1;
                if ($scope.tries <= 0) {
                    //$('#myModal').modal();
                    alert("Game Over! Your score: "+$scope.score);
                    $location.path("/");
                } else {
                    alert("You are wrong... Left " + $scope.tries + " tries.");
                    $scope.reload();
                }
            }
        };

        $scope.reload = function () {
            getPokemonData();
            $scope.resp = "";
            $('#pokeImage').addClass('silhouette');
            $('#pokeName').addClass('hidden');
        };

        $scope.getUserName = UserService.getCurrentUser();

        function getPokemonData() {
            var pokemon = PokeService.getNewPokemon();
            $scope.pokeImage = PokeService.getPokemonImage();
            pokemon.then(
                function (data) {
                    $scope.pokeName = data.name.toUpperCase();
                },
                function (errorData) {
                    //$log.error('failure loading movie', errorPayload);
                });
        };
    } else {
        alert("You will be redirect to home page.");
        $location.path('/');
    }
});
