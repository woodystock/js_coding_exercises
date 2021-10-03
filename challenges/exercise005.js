const { isString, sumReducer } = require("./helper");

const findNextNumber = (nums, n) => {
  if (!Array.isArray(nums)) throw new Error("nums (as array) is required");
  if (isNaN(n)) throw new Error("n (as number) is required");
  
  // use a for loop here, as we don't need to check the last value
  for(let i = 0; i < nums.length - 1; ++i){
    if(nums[i] === n) return nums[ i + 1 ];       // if we find the number, return the next
  }

  // if nothing was found, return null
  return null;
};

const count1sand0s = str => {
  if (!isString(str)) throw new Error("str (as string) is required");

    // "ENUM" to refernce the different binary values in an object
  const BINARY = {
    ZERO: "0",
    ONE: "1"
  }
  
  const strArray = [...str];

  const result = {};
  result[BINARY.ZERO] = 0;        // counter for 0 inside object
  result[BINARY.ONE] = 0;         // counter for 1 inside object

  strArray.forEach( char => {
    if(char in result) ++result[char];
  });

  return result;

};

const reverseNumber = n => {
  if (isNaN(n)) throw new Error("n (as number) is required");
  if( n < 0 ) throw new Error("n must be positive");

  /**
   * 1. convert to string
   * 2. spread into an array
   * 3. reverse the array
   * 4. convert back into string
   * 5. convert back into a number
   */

  //               5       2        1         3         4
  return Number.parseFloat([...n.toString()].reverse().join(""));
};

const sumArrays = arrs => {
  if (!Array.isArray(arrs)) throw new Error("arrs (as array) is required");
  
  // nested reduce, to sum each indivdual array
  return arrs.reduce( (prevValue, currentValue) => prevValue + currentValue.reduce( sumReducer ), 0);
};

const arrShift = arr => {
  if (!Array.isArray(arr)) throw new Error("arr (as array) is required");
  if( arr.length < 2)  return arr;                       // if the array isnt big enough, just return it

  //swap using buffer
  const buffer = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = buffer;

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack == undefined) throw new Error("haystack is required");
  if (!isString(searchTerm)) throw new Error("searchTerm (as string) is required");
  
  // convert to lower case to remove case sensitivity (only do it once to save computation)
  const searchTermLower = searchTerm.toLowerCase();

  return Object.values(haystack).some( element => isString(element) && element.toLowerCase().includes(searchTermLower));
};

const getWordFrequencies = str => {
  if (!isString(str)) throw new Error("str (as string) is required");

  const REGEX_REMOVE_SP_CHAR = /[^a-zA-Z ]/g; // NB Move the RegEx to helper funcs / constants

  
  // change to lowercase (for case sensitivity) and remove all punctuation with RegEx 
  const cleanStr = str.toLowerCase().replace( REGEX_REMOVE_SP_CHAR, "");      

  //split it into an array of words
  let words = cleanStr.split(" ");

  let frequencies = {};

  // loop through those words
  words.forEach( word => {
    if( word in frequencies)        // if the word has already been logged..
      ++frequencies[word];          // just increment the counter
    else                          
      frequencies[word] = 1;        // otherwise, set up a new property, and set to 1 (as we just found one)
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
