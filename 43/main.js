// define the function to show magicians names
function showMagicians(magcians) {
    magcians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map () it will modify array
function makeGreat(magcians) {
    return magcians.map(function (name) { return "The Great ".concat(name); });
}
// define an arry of magicians names
var magiciansName = ["Harry Poter", "Hamza", "Usman"];
// making a copy of orignal array through . slice() function
var copyMagicianNames = magiciansName.slice();
// modify the copied array to include "The Great" with their names
var copyGreatMagicians = makeGreat(copyMagicianNames);
// show both array original and copied
// orginal 
console.log("orginal array\n");
showMagicians(magiciansName);
// copied
console.log("\ncopied array\n");
showMagicians(copyGreatMagicians);
