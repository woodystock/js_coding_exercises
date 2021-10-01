const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  // use a for loop here, as we don't need to check the last value
  for(let i = 0; i < nums.length - 1; ++i){
    if(nums[i] === n) return nums[ i + 1 ];       // if we find the number, return the next
  }

  // if nothing was found, return null
  return null;
};

// "ENUM" to refernce the different binary values in an object
const BINARY = {
  ZERO: "0",
  ONE: "1"
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  let strArray = str.split("");

  let result = {};
  result[BINARY.ZERO] = 0;        // counter for 0 inside object
  result[BINARY.ONE] = 0;         // counter for 1 inside object

  strArray.forEach( char => ++result[char]);

  return result;

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  /**
   * 1. convert to string
   * 2. split into an array
   * 3. reverse the array
   * 4. convert back into string
   * 5. convert back into a number
   */

  //               5         1           2         3         4
  return Number.parseInt(n.toString().split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  // a reducer to sum all elements inside an array (consider adding to global)
  const sumReduce = (prevValue, currentValue) => {
    return prevValue + currentValue;
  }
  
  // nested reduce, to sum each indivdual array
  return arrs.reduce( (prevValue, currentValue) => prevValue + currentValue.reduce( sumReduce ), 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if( arr.length < 2)  return arr;                       // if the array isnt big enough, just return it

  //swap using buffer
  let buffer = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = buffer;

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  // convert to lower case to remove case sensitivity (only do it once to save computation)
  let searchTermLower = searchTerm.toLowerCase();

  for(let property in haystack) {
    
    let element = haystack[property].toString().toLowerCase();
    
    // if we find the search term break and return true...
    if(element.includes(searchTermLower))  return true;
  }

  // if we reach here, we havent found it, therefore return false
  return false;
};

const REGEX_REMOVE_SP_CHAR = /[^a-zA-Z ]/g; // NB Move the RegEx to helper funcs / constants

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  // change to lowercase (for case sensitivity) and remove all punctuation with RegEx 
  let cleanStr = str.toLowerCase().replace( REGEX_REMOVE_SP_CHAR, "");      

  //split it into an array of words
  let words = cleanStr.split(" ");

  let frequencies = {};

  // loop through those words
  for(let word of words)
    if( word in frequencies)        // if the word has already been logged..
      ++frequencies[word];          // just increment the counter
    else                          
      frequencies[word] = 1;        // otherwise, set up a new property, and set to 1 (as we just found one)

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
