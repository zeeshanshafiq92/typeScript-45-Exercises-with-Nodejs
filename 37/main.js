"use strict";
// making a function
function makeShirt(size = "large", printMessage = "I love Typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// calling a function
makeShirt();
// calling a function now with medium size and default message
makeShirt("Medium");
// calling a function now with small size and also different print message
makeShirt("Small", "I love javaScript");
