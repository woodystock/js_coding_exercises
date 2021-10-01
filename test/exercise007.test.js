const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of all the digits of the given number", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(40045)).toBe(13);
  });

  test("still works on lengthy numbers", () => {
    expect(sumDigits(100000000000001)).toBe(2);
  });

  test("ignores negatives", () => {
    expect(sumDigits(-123)).toBe(6);
  });
});


describe("createRange", () => {
  test("returns an array filled with the digits 'start' to 'end' incrementing by 'step'", () => {
    expect(createRange(2,6,2)).toEqual([2,4,6]);
    expect(createRange(5,50, 5)).toEqual([5,10,15,20,25,30,35,40,45,50]);
  });

  test("if end is too big it is not at the end", () => {
    expect(createRange(1,6,2)).toEqual([1,3,5]);
  });

  test("if step isnt passed, it defaults to 1", () => {
    expect(createRange(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
  
});
