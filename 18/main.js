var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print original order
var countriesToVisit = ["China", "Denmark", "Brasil", "Argentina"];
console.log("original order:", countriesToVisit);
// print the array in alphabetcial order without modfying the actual array list 
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in its orignal order
console.log("still in orignal order:", countriesToVisit);
// print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is still in its orignal order
console.log("still in orignal order:", countriesToVisit);
//we have change the orignal array order now
console.log("Original Array Reverse:", countriesToVisit.reverse());
// print the array to show that it's back to its orginal order
console.log("Back to Orignal Order:", countriesToVisit.reverse());
//print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//we have change again  the orignal array order now in reverse order again
console.log("Original Array Reverse:", countriesToVisit.reverse());
