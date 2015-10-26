/**
 * Created by danieljunior on 15/10/15.
 */


app.factory('PokeService', function ($http) {
    var gen = [];
    var url = "http://pokeapi.co/";
    var service = "api/v1/pokemon/";
    var media = "media/img/";
    var genNumbers = {
        0: [1, 721],
        1: [1, 151],
        2: [152, 251],
        3: [252, 386],
        4: [387, 493],
        5: [494, 649],
        6: [650, 721]
    };

    function randomNumber(arr) {
        var randomGen = Math.floor(Math.random() * (arr.length));
        var resp = Math.floor(Math.random() * (arr[randomGen][1] - arr[randomGen][0] + 1)) + arr[randomGen][0];
        return resp;
    }

    return {
        getNewPokemon: function () {
            var number = randomNumber(gen);
            var resp = {};
            var request = url + service + number + "/";
            //$http.get(request)
            //    .success(function (data) {
            //        var poke_image = url + "media/img/" + number + ".png";
            //        var poke_name = data.name.toLowerCase();
            //        resp["name"] = poke_name;
            //        resp["img"] = poke_image;
            //    })
            //    .error(function () {
            //        console.log("Error retrieving pokemon data")
            //        resp["name"] = "default";
            //        resp["img"] = "img/pokemon.jpg";
            //    });
            //console.log(resp);
            resp["name"] = "default";
            resp["img"] = "img/pokemon.jpg";
            return resp;
        },
        setGens: function (value) {
            gen.push(genNumbers[value]);
        }
    }
});