function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  
  // if the sandwhich has no fillings, return an empty array, otherwise return the fillings
  return ( sandwich.fillings == undefined ) ? [] : sandwich.fillings;
}

// "ENUM" for locations... consider a database instead, for external editing
const LOCATIONS = {
  MANCHESTER: "Manchester",
  LEEDS: "Leeds",
  LONDON: "London",
  ONETT: "Onett"
}
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  
  // if the person has no city, then we cannot confirm they are from manchester or not so returns false
  // [NB: Check if desired!]
  return ( person.city === LOCATIONS.MANCHESTER );
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
