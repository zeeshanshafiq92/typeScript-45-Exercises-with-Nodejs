// array of current users
var currentUsers = ["Usman", "ali", "Areeba", "Zain", "Osama"];
// array of new users
var newUsers = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// loop through newUsers to check for username avaibility
newUsers.forEach(function (newOneUser) {
    // making a condition for username exist and save in ourCondition variable
    var ourCondition = currentUsers.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    // print different messages using if-else statement
    if (ourCondition) {
        console.log("sorry ".concat(newOneUser, " is already taken!"));
    }
    else {
        console.log("This user ".concat(newOneUser, " is available"));
    }
});
