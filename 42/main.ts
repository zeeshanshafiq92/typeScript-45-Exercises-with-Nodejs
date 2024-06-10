// define the function to show magicians names
function showMagicians(magcians: string[]){
    magcians.forEach(name => console.log(name));
}

// function to make magicians great through .map () it will modify array
function makeGreat(magcians: string[]){
    return magcians.map(name => `The Great $(name)`);
}

// define an arry of magicians names
let magiciansName = ["Harry Poter", "Hamza", "Usman"];

// call makeGreat function to modify magicians names
let greatMagician = makeGreat(magiciansName);

// call showMagicians that show modified list of magicians
showMagicians(greatMagician);