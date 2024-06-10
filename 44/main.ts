// define a function with a rest parameter that accept items arugments representing our sandwish
function makeSandwish(...items: string[]){
    console.log("\nMaking a sandwish with the following items: \n");

    items.forEach(singleItems =>console.log("-" + singleItems));

    console.log("\nNow enjoy sandwish");
}

// call the function 3 times with 3 different number of arguments
makeSandwish("Chicken", "Cheese", "Mayo", "Egg");

makeSandwish("Bread", "Butter");

makeSandwish("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
