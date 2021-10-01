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
