const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of numbers in an array that are multiples of 3 and 5", () => {
    expect(sumMultiples([1,3,5])).toBe(8);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
  });
});

describe("isValidDNA", () => {
  test("returns true only if the string contains C, G, T or A", () => {
    expect(isValidDNA("CGGTTTAA")).toBe(true);
    expect(isValidDNA("DNA_ROCKS")).toBe(false);
    expect(isValidDNA("CGTA?")).toBe(false);
  });

  test("is not case sensitive", () => {
    expect(isValidDNA("cgTtaA")).toBe(true);
  });
});
