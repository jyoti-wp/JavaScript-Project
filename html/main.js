function a() {
    console.log('Hey');
}

function a() {
    console.log('Bye');
}

a();

var favouriteFood = 'Grapes';

var foodThoughts = function () {
    console.log("Original favourite food: " + "favouriteFood");

    var favouriteFood = 'Sushi';

    console.log("New favourite Food:" + "favouriteFood");
};
foodThoughts();