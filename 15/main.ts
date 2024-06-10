let guestList = ["Hamza", "Ali", "Usman"];

let dontCome = guestList[0];

console.log(dontCome, "is not comming");

guestList.splice(0, 1, "Amirr");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
