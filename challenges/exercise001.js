const { isString, sum } = require("./helper");

function capitalize(word) {
  if (!isString(word)) throw new Error("word (as string) is required");

  return word.charAt(0).toUpperCase() + word.slice(1, word.length);     // first char=>upper case, then merge rest of word
}

function generateInitials(firstName, lastName) {
  if (!isString(firstName) || firstName == "") throw new Error("firstName (as string) is required");
  if (!isString(lastName) || lastName == "") throw new Error("lastName (as string) is required")

  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (isNaN(originalPrice)) throw new Error("originalPrice (as number) is requied");
  if (isNaN(vatRate)) throw new Error("vatRate (as number) is required");
  if (vatRate < 0) throw new Error("vatRate should not be negative.");


  const priceInPence = originalPrice * 100;
  const vatCost = priceInPence * (vatRate / 100);

  return Math.round(priceInPence + vatCost) / 100

}

function getSalePrice(originalPrice, reduction) {
  if (isNaN(originalPrice)) throw new Error("originalPrice (as number) is required");
  if (isNaN(reduction)) throw new Error("reduction (as number) is required");
  if (reduction < 0) throw new Error("reduction should not be negative.");

  const priceInPence = originalPrice * 100;                         // convert to pence as that is our lowest possible unit
  const reductionValue = priceInPence * (reduction / 100);

  return Math.round(priceInPence - reductionValue) / 100;                                      // convert back to original pound format ( max 2 dp as reducedPrice is an int )
}

function getMiddleCharacter(str) {
  if (!isString(str)) throw new Error("str (as string) is required");

  const midPos = str.length / 2;

  return str.slice(Math.floor(midPos - 0.5), Math.floor(midPos + 1));
}

function reverseWord(word) {
  if (!isString(word)) throw new Error("word is required");

  return [...word].reverse().join("");
}

function reverseAllWords(words) {
  if (!Array.isArray(words)) throw new Error("words (as Array) is required");

  return words.map( reverseWord );
}

function countLinuxUsers(users) {
  if (users == undefined) throw new Error("users is required");

  return users.reduce( (prevCount, user) => prevCount + (user?.type === "Linux"),0);
}

function getMeanScore(scores) {
  if (!Array.isArray(scores)) throw new Error("scores (as Array) is required");

  return scores.length > 0 ? Math.round(scores.reduce(sum) / scores.length * 100) / 100 : 0;     // average and round to 2 dp
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
