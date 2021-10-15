const { isString } = require("./helper");

function getFillings(sandwich) {
  if (sandwich == undefined) throw new Error("ingredients is required");

  return sandwich?.fillings?.map(x => x);
}

function isFromManchester(person) {
  if (person == undefined) throw new Error("person is required");

  return (person?.city?.toLowerCase() === "manchester");
}

function getBusNumbers(people) {
  if (isNaN(people)) throw new Error("people (as number) is required");
  if (people < 0) throw new Error("people must be positive");

  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (!Array.isArray(arr)) throw new Error("arr (as Array) is required");

  return arr.reduce( (prevCount, animal) => prevCount + (animal === "sheep"), 0);
}

function hasMPostCode(person) {
  if (person == undefined) throw new Error("person is required");

  return RegExp(/^[^0-9]*/).exec(person.address?.postCode?.toLowerCase())[0] === "m";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
