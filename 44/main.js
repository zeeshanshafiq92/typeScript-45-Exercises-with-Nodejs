// define a function with a rest parameter that accept items arugments representing our sandwish
function makeSandwish() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwish with the following items: \n");
    items.forEach(function (singleItems) { return console.log("-" + singleItems); });
    console.log("\nNow enjoy sandwish");
}
// call the function 3 times with 3 different number of arguments
makeSandwish("Chicken", "Cheese", "Mayo", "Egg");
makeSandwish("Bread", "Butter");
makeSandwish("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
