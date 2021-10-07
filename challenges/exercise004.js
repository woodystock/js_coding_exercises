const { isString } = require("./helper");

function findSmallNums(nums) {
  if (!Array.isArray(nums)) throw new Error("nums (as array) is required");
  
  return nums.filter(num => num < 1);;
}

function findNamesBeginningWith(names, char) {
  if (!Array.isArray(names)) throw new Error("names (as array) is required");
  if (!isString(char)) throw new Error("char (as string) is required");

  return names.filter(name => name.toLowerCase().startsWith(char.toLowerCase()));
}

function findVerbs(words) {
  if (!Array.isArray(words)) throw new Error("words (as array) is required");

  return words.filter(word => word.startsWith("to "));;
}

function getIntegers(nums) {
  if (!Array.isArray(nums)) throw new Error("nums (as array) is required");

  return nums.filter( Number.isInteger );;
}

function getCities(users) {
  if (users == undefined) throw new Error("users is required");

  return users.map(user => user.data?.city?.displayName);
}

function getSquareRoots(nums) {
  if (!Array.isArray(nums)) throw new Error("nums is required");

  return nums.map(num => Math.round(Math.sqrt(num) * 100) / 100);;
}

function findSentencesContaining(sentences, str) {
  if (!Array.isArray(sentences)) throw new Error("sentences is required");
  if (!isString(str)) throw new Error("str is required");

  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));;
}

function getLongestSide(sides) {
  if (!Array.isArray(sides)) throw new Error("sides is required");

  return Math.max(...sides);;

}

function getLongestSides(triangles) {
  if (!Array.isArray(triangles)) throw new Error("triangles is required");

  return triangles.map( getLongestSide );
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
