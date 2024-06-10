// making a array of countries and print original order
let countriesToVisit: string[] = ["China", "Denmark", "Brasil", "Argentina"];
console.log("original order:", countriesToVisit);

// print the array in alphabetcial order without modfying the actual array list 
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show that the array is still in its orignal order
console.log("still in orignal order:",countriesToVisit);

// print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array is still in its orignal order
console.log("still in orignal order:",countriesToVisit);

//we have change the orignal array order now
console.log("Original Array Reverse:", countriesToVisit.reverse());

// print the array to show that it's back to its orginal order
console.log("Back to Orignal Order:",countriesToVisit.reverse());

//print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//we have change again  the orignal array order now in reverse order again
console.log("Original Array Reverse:", countriesToVisit.reverse());
