function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  let result = [];

  // for loop
  // for(let i = 0; i < nums.length; ++i) {
  //   if(nums[i] < 1)
  //     result.push(nums[i]);
  // }

  // forEach
  nums.forEach( function(num) {
    if(num < 1)
      result.push(num)
  });

  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  let result = [];

  // for loop
  // for(let i = 0; i < names.length; ++i) {
  //   if(names[i].startsWith(char))
  //     result.push(names[i]);
  // }

  // forEach
  names.forEach( function(name) {
    if(name.startsWith(char))
      result.push(name);
  });

  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  let result = [];

  const VERB_CHECK = "to "

  // for loop
  // for(let i = 0; i < words.length; ++i) {
  //   if(words[i].startsWith( VERB_CHECK ))
  //     result.push(words[i]);
  // }

  // forEach
  words.forEach( function(word) {
    if(word.startsWith( VERB_CHECK ))
      result.push(word);
  });

  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  let result = [];

  // for loop
  // for(let i = 0; i < nums.length; ++i) {
  //   if(Number.isInteger( nums[i]) )
  //     result.push(nums[i]);
  // }

  // forEach
  nums.forEach( function(num) {
    if(Number.isInteger( num) )
      result.push(num);
  });

  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  let result = [];

  // for loop
  // for(let i = 0; i < users.length; ++i) {
  //   if( (users[i].data !== undefined) && (users[i].data.city != undefined))    // make sure it uses lazy comparisons! (Likely)
  //     result.push(users[i].data.city.displayName);
  // }

  // forEach
  users.forEach( function(user) {
    if( (user.data !== undefined) && (user.data.city != undefined))    // make sure it uses lazy comparisons! (Likely)
      result.push(user.data.city.displayName);
  });

  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  let result = [];

  // for loop
  // for(let i = 0; i < nums.length; ++i) {
  //   if(! isNaN(nums[i]))
  //     result.push(Math.round(Math.sqrt(nums[i]) * 100) / 100 );       // sqrt and round to 2 dp (* 100 => / 100)
  // }

  // forEach
  nums.forEach(function(num) {
    if(! isNaN(num))
      result.push(Math.round(Math.sqrt(num) * 100) / 100 );       // sqrt and round to 2 dp (* 100 => / 100)
  });


  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  let result = [];

  // for loop
  // for(let i = 0; i < sentences.length; ++i) {
  //   if(sentences[i].toLowerCase().includes(str.toLowerCase()))        // .toLowerCase() to ignore case
  //     result.push(sentences[i]);
  // }

  // forEach
  sentences.forEach(function(sentence) {
    if(sentence.toLowerCase().includes(str.toLowerCase()))        // .toLowerCase() to ignore case
      result.push(sentence);
  });

  return result;
}

function getLongestSide(sides){
  if(!sides) throw new Error("sides is required");
  
  longest = 0;                                                    // reset longest

  // for loop
  // for( let i = 0; i < sides.length; ++i) {                 // loop through the triangle sets
  //   if( sides[i] > longest)                                // if you find a number that is bigger
  //     longest = sides[i];                                  //replace the longest
  // }

  //forEach
  sides.forEach(function(side) {
    if(side > longest)
      longest = side;
  });

  return longest;

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  let result = [];

  // for loop
  // for(let i = 0; i < triangles.length; ++i) {
  //   if( Array.isArray(triangles[i]))
  //     result.push(getLongestSide(triangles[i]));
  // }

  // forEach
  triangles.forEach(function(sides) {
    if( Array.isArray(sides))
      result.push(getLongestSide(sides));
  });

  return result;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
