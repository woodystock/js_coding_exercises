const { sum, isString } = require("./helper");

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!Array.isArray(arr)) throw new Error("arr (as array) is required");

  const multiples3and5 = arr.filter(num => !(num % 3) || !(num % 5));

  return multiples3and5.reduce(sum);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (!isString(str)) throw new Error("str (as string) is required");

  const regEx_DNAFormat = /(?![ACGT])./g;

  return str !== "" && str.match(regEx_DNAFormat) === null;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (!isString(str)) throw new Error("str (as string) is required");
  if (!isValidDNA(str)) throw new Error("str is not a valid DNA string");

  const dnaPairLookup = {
    T: "A",
    A: "T",
    C: "G",
    G: "C"
  }

  return [...str].map(char => dnaPairLookup[char]).join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (isNaN(n)) throw new Error("n (as number) is required");
  if (!Number.isInteger(n)) return false;

  // only need to check up to the sqrt due to factor pairs
  for (let i = 2; i < Math.sqrt(n); ++i)
    if (n % i === 0) return false;

  return n > 1;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fillContent
 * @returns {Array}
 */
const createMatrix = (n, fillContent) => {
  if (isNaN(n)) throw new Error("n (as number) is required");
  if (fillContent === undefined) throw new Error("fill is required");
  if (!n > 0) throw new Error("n must be positive and not 0")

  // 1. create a new array of size n...
  // 2. fill it with new arrays of size n... 
  // 3. that are filled with the param 'fillContent' (renamed for readability)
  //        1          2             3
  return Array(n).fill(Array(n).fill(fillContent));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (!Array.isArray(staff)) throw new Error("staff (as array) is required");
  if (!isString(day)) throw new Error("day is required");

  if (staff.length < 3) return false;         // impossible to pass with less than 3 staff

  let staffCount = 0;

  staff.forEach(employee => {                  // loop through the employees
    if ("rota" in employee)                      // avoid any possible reference errors
      if (employee.rota.indexOf(day) != -1)     // as it is a search, we cannot use optional chainging ('undefined' != -1 would equal true)
        ++staffCount;
  });

  return staffCount > 2;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
