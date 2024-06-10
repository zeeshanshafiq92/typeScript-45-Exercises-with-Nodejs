// define the function to show magicians names
function showMagicians(magcians: string[]){
    magcians.forEach(name => console.log(name));
}

// function to make magicians great through .map () it will modify array
function makeGreat(magcians: string[]){
    return magcians.map(name => `The Great ${name}`);
}

// define an arry of magicians names
let magiciansName = ["Harry Poter", "Hamza", "Usman"];

// making a copy of orignal array through . slice() function

let copyMagicianNames = magiciansName.slice()

// modify the copied array to include "The Great" with their names
let  copyGreatMagicians = makeGreat(copyMagicianNames);

// show both array original and copied


// orginal 
console.log("orginal array\n")
showMagicians(magiciansName)

// copied
console.log("\ncopied array\n")
showMagicians(copyGreatMagicians)