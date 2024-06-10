// define a function to create a car object with optional option...
function createCar(manufacture, model, ...options){
    // intialize a car object with manufacture and model
    let car = {
        manufacture: manufacture,
        model: model
    };

    // add additional options to the car object
    options.forEach(options => {
        let [key, value] = options.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

// call the fuction to create a car object
let myCar = createCar("Toyata", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2024");

// orint the variable to ensure all the information is stored correctly in the car object
console.log(myCar);