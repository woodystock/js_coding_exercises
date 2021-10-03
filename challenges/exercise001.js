const { isString, sumReducer } = require("./helper");

function capitalize(word) {
  if (!isString(word)) throw new Error("word (as string) is required");

  return word.charAt(0).toUpperCase() + word.slice(1, word.length);     // first char=>upper case, then merge rest of word
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined || !isString(firstName) || firstName == "") throw new Error("firstName (as string) is required");
  if (lastName === undefined || !isString(lastName) || lastName == "") throw new Error("lastName (as string) is required")

  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (isNaN(originalPrice)) throw new Error("originalPrice (as number) is requied");
  if (isNaN(vatRate)) throw new Error("vatRate (as number) is required");

  const priceInPence = originalPrice * 100;                         // convert to pence as that is our lowest possible unit
  const vatMultiplier = vatRate / 100;                              // vatRate to percentage multiplier
  const vatCost = priceInPence * vatMultiplier;
  const vatPrice = Math.round(priceInPence + vatCost);              // calc the added vat, rounding to nearest penny

  return vatPrice / 100;                                          // convert back to original pound format ( max 2 dp as vatPrice is an int )

}

function getSalePrice(originalPrice, reduction) {
  if (isNaN(originalPrice)) throw new Error("originalPrice (as number) is required");
  if (isNaN(reduction)) throw new Error("reduction (as number) is required");

  if (reduction < 0) throw new Error("reduction should not be negative. Try profiteer(price, increase)");

  const priceInPence = originalPrice * 100;                         // convert to pence as that is our lowest possible unit
  const reductionValue = priceInPence * (reduction / 100);
  const reducedPrice = Math.round(priceInPence - reductionValue);   // calc the reduction amount, rounding to nearest penny

  return reducedPrice / 100;                                      // convert back to original pound format ( max 2 dp as reducedPrice is an int )
}

function getMiddleCharacter(str) {

  /**
  * If the word has even length, the mid point will be an integer therefore the previous integer will
  * be mid - 1 and the next integar will be mid + 1 giving us a range of 2.
  * 
  * If the word has odd length, the mid point will have a suffix .5, the previous integer will be mid - .5 and
  * the next integer will be mid + .5 giving us a range of 1.
  * 
  * e.g.
  * IF word length = 4
  * mid = 2
  * prev = 1
  * next = 3
  * range = 2
  * 
  * IF word length = 5
  * mid = 2.5
  * prev = 2
  * next = 3
  * range = 1
  */


  if (!isString(str)) throw new Error("str (as string) is required");

  const midPos = str.length / 2;                            // find the middle position

  const bottomLimit = Math.floor(midPos - 0.5);           // calc previous integer (simplified as we can be sure of the input)        
  const topLimit = Math.floor(midPos + 1);                // calc next integer (simplified as we can be sure of the input) 


  return str.slice(bottomLimit, topLimit);               // return only the middle section
}

function reverseWord(word) {
  if (!isString(word)) throw new Error("word is required");

  return [...word].reverse().join("");
}

function reverseAllWords(words) {
  if (!Array.isArray(words)) throw new Error("words (as Array) is required");

  return words.map(word => reverseWord(word));
}

function countLinuxUsers(users) {
  if (users == undefined) throw new Error("users is required");

  // "ENUM" to store user OS types
  const OS_TYPE = {
    WINDOWS: "Windows",             // Classic
    MAC: "Mac",                     // New Skool
    LINUX: "Linux"                  // 1337
  }

  let linuxCount = 0;

  users.forEach( user => {                                    // iterate through each user
    if (user?.type === OS_TYPE.LINUX) linuxCount++;         // increment upon finding a linux user
  });

  return linuxCount;
}

function getMeanScore(scores) {
  if (!Array.isArray(scores)) throw new Error("scores (as Array) is required");

  const mean = (scores.length > 0) ? scores.reduce(sumReducer) / scores.length : 0;  //sumReducer found in helper.js

  return Math.round(mean * 100) / 100;     // average and round to 2 dp
}

function simpleFizzBuzz(n) {
  if (isNaN(n)) throw new Error("n is required");

  let result = "";

  if (!(n % 3)) result += "fizz";                         // append if divisible by 3
  if (!(n % 5)) result += "buzz";                         // append if divisible by 5

  return (result == "") ? n : result;                         // if nothing has been appended, return the number, otherwise return the string
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
