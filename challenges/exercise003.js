const { capitalize } = require("./exercise001");
const { isString } = require("./helper");

function getSquares(nums) {
  if (!Array.isArray(nums)) throw new Error("nums (as Array) is required");

  return nums.map(x => x * x);
}

function camelCaseWords(words) {
  if (!Array.isArray(words)) throw new Error("words (as Array) is required");

  let camelCased = "";

  if( words.length > 0 ){
    camelCased = words.shift();


    words.forEach(word => {
      camelCased += capitalize(word); // reuse code from exercise001 in case of refactoring
    });
  }
  return camelCased;
}

function getTotalSubjects(people) {
  if (people == undefined) throw new Error("people is required");

  const subjectReducer = ((prevValue, currentValue) => {
    const incrementBy = currentValue.subjects?.length;
    return prevValue + (incrementBy ? incrementBy : 0);
  });

  return people.reduce(subjectReducer, 0);
}

function checkIngredients(menu, ingredient) {
  if (menu == undefined) throw new Error("menu is required");
  if (!isString(ingredient)) throw new Error("ingredient (as string) is required");

  for(let item of menu ) {                                             // iterate through each item
    if (item.ingredients !== undefined)                                // make sure we avoid any reference errors
      if (item.ingredients.indexOf(ingredient) != -1) return true;     // if we find the ingredient at any time, return
  };

  return false;                                                       // we made it through the menu without finding the ingredient... return false
}

function duplicateNumbers(arr1, arr2) {
  if (!Array.isArray(arr1)) throw new Error("arr1 (as array) is required");
  if (!Array.isArray(arr2)) throw new Error("arr2 (as array) is required");

  let duplicates = [];

  arr1.forEach(value => {
    if (duplicates.indexOf(value) == -1 && arr2.indexOf(value) != -1)    // if its not already in duplicates and it is in the 2nd array 
      duplicates.push(value);                                           // push it into the duplicates
  });

  return duplicates.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
