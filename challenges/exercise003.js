const { capitalize } = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  return nums.map( x => x * x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  let camelCased = "";
  let isFirst = true;


  for(let word of words) {
    if(isFirst) {                     // make sure we skip the first word
      camelCased += word;
      isFirst = false;                // change flag for next iterations
    }
    else {
      camelCased += capitalize(word); // reuse code from exercise001 incase of refactoring
    }
  }
  return camelCased;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
