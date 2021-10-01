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
  test("returns false if the string is empty", () => {
    expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
    expect(getComplementaryDNA("CGGTTTAA")).toBe("GCCAAATT");
  });
});

describe("isItPrime", () => {
  test("returns true only if the number is prime", () => {
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(23)).toBe(true);
    expect(isItPrime(50)).toBe(false);
  });

  test("returns false if the value is 1", () => {
    expect(isItPrime(1)).toBe(false);
  });

  test("returns false if the value is 0", () => {
    expect(isItPrime(0)).toBe(false);
  });

  test("returns false if the value is a decimal", () => {
    expect(isItPrime(4.37)).toBe(false);
  });

  test("does not time out on larger values", () => {
    expect(isItPrime(524287)).toBe(true);
    expect(isItPrime(2147483647)).toBe(true);
    expect(isItPrime(1000000000)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns a matrix of size n * n filled with fill", () => {
    expect(createMatrix(3,"a")).toEqual([
      ["a","a","a"],
      ["a","a","a"],
      ["a","a","a"]
    ]);
    expect(createMatrix(1,"fill")).toEqual([["fill"]]);
  });
});

describe("areWeCovered", () => {
  test("returns true if at least 3 staff are in the rota for the given day", () => {
    const employee1 = {
      name: "Sally",
      rota: ["Monday", "Tuesday", "Friday"]
    };
    const employee2 = {
      name: "Pedro",
      rota: ["Saturday", "Sunday", "Tuesday", "Friday"]
    };
    const employee3 = {
      name: "Steve",
      rota: ["Monday", "Tuesday", "Sunday"]
    };
    expect(areWeCovered([employee1,employee2,employee3], "Tuesday")).toBe(true);
    expect(areWeCovered([employee1,employee2,employee3], "Sunday")).toBe(false);
  });
});
