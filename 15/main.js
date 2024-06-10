var guestList = ["Hamza", "Ali", "Usman"];
var dontCome = guestList[0];
console.log(dontCome, "is not comming");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
