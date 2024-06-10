// define the function to show magicians names
function showMagicians(magcians) {
    magcians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map () it will modify array
function makeGreat(magcians) {
    return magcians.map(function (name) { return "The Great $(name)"; });
}
// define an arry of magicians names
var magiciansName = ["Harry Poter", "Hamza", "Usman"];
// call makeGreat function to modify magicians names
var greatMagician = makeGreat(magiciansName);
// call showMagicians that show modified list of magicians
showMagicians(greatMagician);
