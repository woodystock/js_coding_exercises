function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  
  // if the sandwhich has no fillings, return an empty array, otherwise return a shallow copy of the array [NB: Is a deep copy required??]
  return ( sandwich.fillings == undefined ) ? [] : sandwich.fillings.map(fill => fill);
}

// "ENUM" for locations... consider a database instead, for external editing
const LOCATIONS = {
  MANCHESTER: "manchester",
  LEEDS: "leeds",
  LONDON: "london",
  ONETT: "onett"
}
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === undefined) throw new Error("person needs a city");
  
  return ( person.city.toString().toLowerCase() === LOCATIONS.MANCHESTER );
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (isNaN(people)) throw new Error("people must be a number");        // could combine these two, though less accurate error report
  if (people < 0 ) throw new Error("people must be positive");
  
  const MAX_BUS_CAPACITY = 40;

  return Math.ceil( people / MAX_BUS_CAPACITY );
}

// "ENUM" for animals... consider a database instead, for external editing
const ANIMAL = {
  SHEEP: "sheep",
  DOG: "dog",
  DUCK: "duck",
  SNAKE: "snake"
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  return arr.filter( animal => animal.toString().toLowerCase() === ANIMAL.SHEEP).length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  // next two checks could be legal if people are not expected to have address / postcode and could return false instead
  // [NB: Check if desired!]
  if (person.address === undefined) throw new Error("person needs an address");
  if (person.address.postCode === undefined) throw new Error("person needs a post code");



  // little bit dirty but fastest in terms of computation.. check city for manchester, and post code begins with M...
  return person.address.city.toString().toLowerCase() == LOCATIONS.MANCHESTER && person.address.postCode.toString().startsWith("M");
  
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
