// define a function to print each magician name from an array
function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magicianNames = ["Harry Poter", "Hamza", "Usman"];
// call the function to print each magician names
showMagicians(magicianNames);
