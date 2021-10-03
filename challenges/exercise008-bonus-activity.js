// Spread Syntax Bonus activity
const {isString } = require("./helper");

function printColours(colours){
    if (!Array.isArray(colours)) throw new Error("colours (as array) is required");
    
    console.log(...colours);

    return colours;
}

function shoppingList(list, newItem){
    if (!Array.isArray(list)) throw new Error("list is required");
    if (!Array.isArray(newItem)) throw new Error("newItem is required");
    
    return [...list, ...newItem];
}

function highestNumber(numbers){
    if (!Array.isArray(numbers)) throw new Error("numbers are required");
    
    return Math.max(...numbers);
}

function splitThatString(string){
    if (! isString(string)) throw new Error("string is required");
    
    return [...string];
}


// Optional Chaining Bonus activity!

function addressLookUp(user){
    if (!user) throw new Error("user is required");
    
    return user?.address?.postcode;

}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};