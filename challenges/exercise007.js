const { sum, isString } = require("./helper");
/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (isNaN(n)) throw new Error("n (as number) is required");

  const numChars = [...Math.abs(n).toString()];           // convert number to string (ignoring negative value)

  const nums = numChars.map(Number);                    // convert each char back to a number

  return nums.reduce(sum);                              // add the contents of the array
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step = 1, dp = 2) => {
  if (isNaN(start)) throw new Error("start (as number) is required");
  if (isNaN(end)) throw new Error("end is required");
  if( isNaN(step)) step = 1;
  if( isNaN(dp)) dp = 2;

  if(end > start && step <=0 || end < start && step >=0 ) throw new Error("number of steps cannot reach end")
  
  const range = [];
  for (let i = start; i <= end; i += step) {
    if (Number.isInteger(i)) {
      range.push(i);
    }
    else {
      range.push(Number.parseFloat(i.toFixed(dp)));
    }
  }

  return range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");

  const regEx_dateFormat = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

  if (isString(date) && !date.match(regEx_dateFormat)) throw new Error("valid date (YYYY-MM-DD) is required");


  const alertUsers = [];

  users.forEach(user => {
    user.screenTime?.forEach(record => {
      if (record.date === date) {
        let totalUsage = 0;
        if ("usage" in record) {
          for (let property in record.usage) {
            totalUsage += record.usage[property];
          }
          if (totalUsage > 100) {
            alertUsers.push(user.username);
          }
        }
      }
    });
  });

  return alertUsers;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {

  const regEx_hexColourFormat = /^#[0-9A-F]{6}$/;

  if (!isString(hexStr) && !hexStr.match(regEx_hexColourFormat)) throw new Error("valid hexStr is required");

  return [
    parseInt("0x" + hexStr.substring(1, 3)),
    parseInt("0x" + hexStr.substring(3, 5)),
    parseInt("0x" + hexStr.substring(5, 7))
  ]
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  const checks = [{
    target: [1, 1],      // check middle square against..
    possibleMatches: [
      [[1, 0], [1, 2]],      // -- vertical mid
      [[0, 1], [2, 1]],      // -- horizontal mid
      [[0, 0], [2, 2]],      // -- diagonal 1
      [[2, 0], [0, 2]]       // -- diagonal 2
    ]
  }, {
    target: [0, 0],      // check top left square against...
    possibleMatches: [
      [[0, 1], [0, 2]],      // -- left side
      [[1, 0], [2, 0]]       // -- top side
    ]
  }, {
    target: [2, 2],      // check bottom right square against...
    possibleMatches: [
      [[2, 1], [2, 0]],      // -- right side
      [[1, 2], [0, 2]]       // -- bottom side
    ]
  }];


  for (let check of checks) {
    const currentPlayer = board[check.target[0]][check.target[1]];
    if (currentPlayer != null) {
      for (let match of check.possibleMatches) {
        if (board[match[0][0]][match[0][1]] === currentPlayer && board[match[1][0]][match[1][1]] === currentPlayer)
          return currentPlayer;
      };
    };
  };

  /**
   * NOTES
   * Cannot use a forEach here as the return doesn't break away half way through... interesting discussion point
   *  */


  // if we get here, no winner has been found
  return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
