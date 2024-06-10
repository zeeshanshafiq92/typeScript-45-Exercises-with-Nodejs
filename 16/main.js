// creating a guset list arry
var guestList = ["Hamza", "Ali", "Usman"];
// making variable for those guest who cant come
var dontCome = guestList[0];
// print the name of guset who cant come
console.log(dontCome, "is not comming");
// add or remove values from guest list array
guestList.splice(0, 1, "Amirr");
//message print for bigger table
console.log("Good news ! we have found a Bigger Table for dinner.");
//adding a new guest at starting index of array
guestList.unshift("Ayub");
// adding a new guest at ending index of array
guestList.push("Zain");
// get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middel index of array
guestList.splice(middleIndex, 0, "Osama");
// print message of updated list
console.log("updated list of our guest");
//sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, ", would you like to dinner with me")); });
