/**
 * Created by danieljunior on 15/10/15.
 */


app.factory('PokeService', function ($http) {
    var poker_name;
    return {
        getNewPokemonName: function () {
            poker_name = 'pikachu';
            return poker_name;
        },
        getNewPokemonImage: function () {
            return 'img/pokemon.jpg'
        }
    }
});