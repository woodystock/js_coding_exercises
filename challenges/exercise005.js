const { isString, sum } = require("./helper");

const findNextNumber = (nums, n) => {
  if (!Array.isArray(nums)) throw new Error("nums (as array) is required");
  if (isNaN(n)) throw new Error("n (as number) is required");

  const index = nums.indexOf(n);

  return index != -1 && index != nums.length - 1 ? nums[index+1] : null;
};

const count1sand0s = str => {
  if (!isString(str)) throw new Error("str (as string) is required");

  return [...str].reduce( (accumulator, char) => {
    if (char in accumulator)
      accumulator[char]++;
    return accumulator;
  },{"0":0, "1":0});

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

  const buffer = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = buffer;

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack == undefined) throw new Error("haystack is required");
  if (!isString(searchTerm)) throw new Error("searchTerm (as string) is required");

  const searchTermLower = searchTerm.toLowerCase();

  return Object.values(haystack).some(element => isString(element) && element.toLowerCase().includes(searchTermLower));
};

const getWordFrequencies = str => {
  if (!isString(str)) throw new Error("str (as string) is required");

  const regEx_removeSpecialChars = /[^a-zA-Z ]/g;

  return str
  .toLowerCase()
  .replace(regEx_removeSpecialChars, "")
  .split(" ")
  .reduce( (frequencies, word) => {
    (word in frequencies) ? ++frequencies[word] : frequencies[word] = 1;
    return frequencies;
  },{});
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
