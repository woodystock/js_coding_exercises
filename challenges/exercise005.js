const { isString, sum } = require("./helper");

const findNextNumber = (nums, n) => {
  if (!Array.isArray(nums)) throw new Error("nums (as array) is required");
  if (isNaN(n)) throw new Error("n (as number) is required");

  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] === n) return nums[i + 1];
  }

  return null;
};

const count1sand0s = str => {
  if (!isString(str)) throw new Error("str (as string) is required");

  // helper obj to define number strings
  const BINARY = {
    ZERO: "0",
    ONE: "1"
  }

  const strArray = [...str];

  const result = {};
  result[BINARY.ZERO] = 0;
  result[BINARY.ONE] = 0;

  strArray.forEach(char => {
    if (char in result) ++result[char];
  });

  return result;

};

const reverseNumber = n => {
  if (isNaN(n)) throw new Error("n (as number) is required");
  if (n < 0) throw new Error("n must be positive");

  return Number.parseFloat([...n.toString()].reverse().join(""));
};

const sumArrays = arrs => {
  if (!Array.isArray(arrs)) throw new Error("arrs (as array) is required");

  return arrs.reduce((prevValue, currentValue) => prevValue + currentValue.reduce(sum), 0);
};

const arrShift = arr => {
  if (!Array.isArray(arr)) throw new Error("arr (as array) is required");
  if (arr.length < 2) return arr;                       // if the array isnt big enough, just return it

  //swap using buffer
  const buffer = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = buffer;

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack == undefined) throw new Error("haystack is required");
  if (!isString(searchTerm)) throw new Error("searchTerm (as string) is required");

  // remove case sensitivity
  const searchTermLower = searchTerm.toLowerCase();

  return Object.values(haystack).some(element => isString(element) && element.toLowerCase().includes(searchTermLower));
};

const getWordFrequencies = str => {
  if (!isString(str)) throw new Error("str (as string) is required");

  const regEx_removeSpecialChars = /[^a-zA-Z ]/g;


  // change to lowercase (for case sensitivity) and remove all punctuation with RegEx 
  const cleanStr = str.toLowerCase().replace(regEx_removeSpecialChars, "");

  //split it into an array of words
  const words = cleanStr.split(" ");

  const frequencies = {};

  // loop through those words
  words.forEach(word => {
    word in frequencies ? ++frequencies[word] : frequencies[word] = 1;
  });

  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
