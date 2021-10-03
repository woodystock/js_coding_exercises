const { isString, regEx_charUntilNumber } = require("./helper");

function getFillings(sandwich) {
  if (sandwich == undefined) throw new Error("ingredients is required");

  // if the sandwhich has no fillings, return an empty array, otherwise return a shallow copy of the array [NB: Is a deep copy required??]
  return sandwich.fillings?.slice(0);
}

function isFromManchester(person) {
  if (person == undefined) throw new Error("person is required");

  // "ENUM" for locations... consider a database instead, for external editing
  const LOCATIONS = {
    MANCHESTER: "manchester",
    LEEDS: "leeds",
    LONDON: "london",
    ONETT: "onett"
  }

  return (person?.city?.toString().toLowerCase() === LOCATIONS.MANCHESTER);
}

function getBusNumbers(people) {
  if (isNaN(people)) throw new Error("people (as number) is required");
  if (people < 0) throw new Error("people must be positive");

  const MAX_BUS_CAPACITY = 40;

  return Math.ceil(people / MAX_BUS_CAPACITY);
}

function countSheep(arr) {
  if (!Array.isArray(arr)) throw new Error("arr (as Array) is required");

  // "ENUM" for animals... consider a database instead, for external editing
  const ANIMAL = {
    SHEEP: "sheep",
    DOG: "dog",
    DUCK: "duck",
    SNAKE: "snake"
  }

  return arr.filter(animal => animal.toString().toLowerCase() === ANIMAL.SHEEP).length;
}

function hasMPostCode(person) {
  if (person == undefined) throw new Error("person is required");

  const regEx_charUntilNumber = /^[^0-9]*/;


  const city = person.address?.city?.toString().toLowerCase();
  const postCode = person.address?.postCode?.toLowerCase();

  if (!isString(postCode))
    return false; // if there is no post code, they can't have a manchester postcode

  const postCodeCity = regEx_charUntilNumber.exec(postCode)

  return postCodeCity == "m";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
