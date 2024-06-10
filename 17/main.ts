// creating a guset list arry
let guestList = ["Hamza", "Ali", "Usman"];

// making variable for those guest who cant come
let dontCome = guestList[0];

// print the name of guset who  cant come
console.log(dontCome, "is not comming");

// add or remove values from guest list array
guestList.splice(0, 1, "Amirr" );

//message print for bigger table
console.log("Good news ! we have found a Bigger Table for dinner.");

//adding a new guest at starting index of array
guestList.unshift("Ayub");

// adding a new guest at ending index of array
guestList.push("Zain");

// get a middle index of our guest list array
let middleIndex: number =Math.floor(guestList.length / 2);

// Adding a new guest to middel index of array
guestList.splice(middleIndex, 0, "Osama");

// print message of updated list
console.log("updated list of our guest");

//sending a invitation message to our guests one by one with their names
guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, would you like to dinner with me`));

//inform that only two guests can be invited for dinner
console.log("unfortunatley, the new dinner table wont arrive on time, so I can only invite two guest dinner with me");

// using while loop to remove guests from the array until only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}
// sending a invitation to the last two guest on the list
console.log("Invitation to the last two guests");
guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, you are still invited to dinner`));

// removig last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);
