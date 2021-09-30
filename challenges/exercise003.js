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
      camelCased += capitalize(word); // reuse code from exercise001 in case of refactoring
    }
  }
  return camelCased;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  // Using a reducer for speed, though skips deep validation on subjects which may be dangerous
  // [NB: Speed vs safety discussion for this method required]
  const subjectReducer = ((prevValue, currentValue) => prevValue + (currentValue.subjects === undefined) ? 0 : currentValue.subjects.length);

  return people.reduce(subjectReducer, 0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  for(let item of menu) {                                             // iterate through each item
    if(item.ingredients !== undefined)                                // make sure we avoid any reference errors
      if(item.ingredients.indexOf(ingredient) != -1) return true;     // if we find the ingredient at any time, return
  }

  return false;                                                       // we made it through the menu without finding the ingredient... return false
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
