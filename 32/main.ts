// array of current users
let currentUsers = ["Usman", "ali", "Areeba", "Zain", "Osama"];

// array of new users
let newUsers = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];

// loop through newUsers to check for username avaibility
newUsers.forEach(newOneUser => {

    // making a condition for username exist and save in ourCondition variable
    let ourCondition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())

    // print different messages using if-else statement
    if(ourCondition){
        console.log(`sorry ${newOneUser} is already taken!`);
    }else{
        console.log(`This user ${newOneUser} is available`);
    }
})