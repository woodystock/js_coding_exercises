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

describe("getScreentimeAlertList", () => {
  const user1 = {
    username: "beth_1234",
    name: "Beth Smith",
    screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
      ]
  };
  
  const user2 = {
    username: "sam_j_1989",
    name: "Sam Jones",
    screenTime: [
    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
    ]
  };
  test("returns any users that have used more than 100 minutes screen time on the given date", () => {
    expect(getScreentimeAlertList([user1, user2],"2019-05-04")).toEqual(["beth_1234"]);
  });
});