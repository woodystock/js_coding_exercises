const { capitalize } = require("./exercise001");
const { isString } = require("./helper");

function getSquares(nums) {
  if (!Array.isArray(nums)) throw new Error("nums (as Array) is required");

  return nums.map(x => x * x);
}

function camelCaseWords(words) {
  if (!Array.isArray(words)) throw new Error("words (as Array) is required");

  return words.reduce( (camelCased, word) => camelCased += capitalize(word), words.shift() );
}

function getTotalSubjects(people) {
  if (people == undefined) throw new Error("people is required");

  return people.reduce((subjectCount, person) => subjectCount + (person?.subjects?.length || 0), 0);
}

function checkIngredients(menu, ingredient) {
  if (menu == undefined) throw new Error("menu is required");
  if (!isString(ingredient)) throw new Error("ingredient (as string) is required");

 return menu.some(item => item?.ingredients?.includes(ingredient))
}

function duplicateNumbers(arr1, arr2) {
  if (!Array.isArray(arr1)) throw new Error("arr1 (as array) is required");
  if (!Array.isArray(arr2)) throw new Error("arr2 (as array) is required");

  return arr1.filter( (item,pos) => arr2.includes(item) && arr1.indexOf(item) == pos).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
