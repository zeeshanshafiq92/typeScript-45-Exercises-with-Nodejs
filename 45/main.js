// define a function to create a car object with optional option...
function createCar(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // intialize a car object with manufacture and model
    var car = {
        manufacture: manufacture,
        model: model
    };
    // add additional options to the car object
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the fuction to create a car object
var myCar = createCar("Toyata", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2024");
// orint the variable to ensure all the information is stored correctly in the car object
console.log(myCar);
