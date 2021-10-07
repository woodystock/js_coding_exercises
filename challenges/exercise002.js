const { isString } = require("./helper");

function getFillings(sandwich) {
  if (sandwich == undefined) throw new Error("ingredients is required");

  return [...sandwich.fillings];
}

function isFromManchester(person) {
  if (person == undefined) throw new Error("person is required");

  return (person?.city?.toString().toLowerCase() === "manchester");
}

function getBusNumbers(people) {
  if (isNaN(people)) throw new Error("people (as number) is required");
  if (people < 0) throw new Error("people must be positive");

  const MAX_BUS_CAPACITY = 40;

  return Math.ceil(people / MAX_BUS_CAPACITY);
}

function countSheep(arr) {
  if (!Array.isArray(arr)) throw new Error("arr (as Array) is required");

  return arr.filter(animal => isString(animal) && animal === "sheep").length;
}

function hasMPostCode(person) {
  if (person == undefined) throw new Error("person is required");

  const regEx_charUntilNumber = /^[^0-9]*/;

  const postCode = person.address?.postCode?.toLowerCase();

  if (!isString(postCode))
    return false; // if there is no post code, they can't have a manchester postcode

  const postCodeCity = regEx_charUntilNumber.exec(postCode)

  return postCodeCity === "m";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
