function capitalize(word) {
  /**
   * TODO
   * Would consider using RegEx for this as it will compute quicker and is a quick google solution, 
   * but that doesn't display much understanding behind the problem as I am not a RegEx-pert
   */
  if (word === undefined) throw new Error("word is required");

  if(word.length == 0)  return word;                                    // if the string is empty, do nothing

  return word.charAt(0).toUpperCase() + word.slice(1, word.length);     // first char=>upper case, then merge rest of word
}

// "ENUM" for a list of formats to generate initials
const initialsFormat = {
  FORMAL: "formal",                 // no periods between initials
  INFORMAL: "informal",             // periods between initials
  APPEASE_TEST: "appease_test"      // periods on first initial, not on second.... [NB: CHECK IF DESIRED!]
}

function generateInitials(firstName, lastName, format = initialsFormat.APPEASE_TEST) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  let initials = [];

  if( firstName.length != 0) {                                  // if the firstname is empty, skip it

    let firstInitial = firstName.charAt(0).toUpperCase();       // seperate and uppercase the initial [NB: CHECK IF DESIERED!]

    switch(format) {                                           // handle different formats [EXT: add more cases as required]

      case initialsFormat.INFORMAL:
      case initialsFormat.APPEASE_TEST:                         // Both informal and the test, wants a period on the first initial
        firstInitial += ".";
        break;

      default:
        // do nothing
        break;
    }

    initials.push(firstInitial);
    
  }

  if( lastName.length != 0) {                                   // if lastName empty, skip it            

    let lastInitial = lastName.charAt(0).toUpperCase();         // seperate and uppercase the initial [NB: CHECK IF DESIRED!]

    switch(format)                                              // handle different formats [EXT: add more cases as required]
    {
      case initialsFormat.INFORMAL:                             // Only informal wants a period on the last initial
        firstInitial += ".";
        break;

      default: 
        // do nothing
        break;
    }

    initials.push(lastInitial);

  }

    return initials.join("");
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  let priceInPence = originalPrice * 100;                         // convert to pence as that is our lowest possible unit
  let vatMultiplier = vatRate / 100;                              // vatRate to percentage multiplier
  let vatCost = priceInPence * vatMultiplier;
  let vatPrice = Math.round(priceInPence + vatCost);              // calc the added vat, rounding to nearest penny

  return vatPrice / 100;                                          // convert back to original pound format ( max 2 dp as vatPrice is an int )

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  if(reduction < 0) throw new Error("reduction cannot be negative. Try profiteer(price, increase)");
  
  let priceInPence = originalPrice * 100;                         // convert to pence as that is our lowest possible unit
  let reductionMultiplier = reduction / 100;                      // reduction to percentage multiplier
  let reductionValue = priceInPence * reductionMultiplier;        
  let reducedPrice = Math.round( priceInPence - reductionValue ); // calc the reduction amount, rounding to nearest penny

  return reducedPrice / 100;                                      // convert back to original pound format ( max 2 dp as vatPrice is an int )
}

function getMiddleCharacter(str) {

  /**
  * If the word has even length, the mid point will be an integer therefore the previous integer will
  * be mid - 1 and the next integar will be mid + 1 giving us a range of 2.
  * 
  * If the word has odd length, the mid point will have a suffix .5, the previous integer will be mid - .5 and
  * the next integer will be mid + .5 giving us a range of 1.
  * 
  * e.g.
  * IF word length = 4
  * mid = 2
  * prev = 1
  * next = 3
  * range = 2
  * 
  * IF word length = 5
  * mid = 2.5
  * prev = 2
  * next = 3
  * range = 1
  */


 if (str === undefined) throw new Error("str is required");
 if( str.length == 0) throw new Error("str cannot be empty")

 let midPos = str.length / 2;                            // find the middle position

 let bottomLimit = Math.floor( midPos - 0.5 );           // calc previous integer (simplified as we can be sure of the input)        
 let topLimit = Math.floor( midPos + 1);                // calc next integer (simplified as we can be sure of the input) 
 

 return str.slice(bottomLimit, topLimit );               // return only the middle section
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  let wordArr = word.split("");                           // split chars into array for easier manipulation

  /////////////////////////////////////////////////////////////////////////////////////
  /**
   * CUSTOM METHOD
   * 
   * Full control over code. Could be useful for future updates or if .reverse() not deemed as
   * optimised.
   */


  // let buffer;                                             // a buffer to help swap 2 values

  // for(let i = 0; i < wordArr.length / 2; ++i ) {          // only need to iterate through half of the word
  //   buffer = wordArr[i];                                  // store the char to swap
  //   wordArr[i] = wordArr[word.length - i - 1];            // replace the adjacent char
  //   wordArr[word.length - i - 1] = buffer;                // put in the previously stored char
  // }

  // return wordArr.join("");                                // parse the array back into a string
  ////////////////////////////////////////////////////////////////////////////////////////
  
  /**
   * REVERSE METHOD
   * Relient on .reverse() being optimised (which it probably is). Custom method could be faster.
   * 
   */
  return wordArr.reverse().join("");                                // reverse and parse the array back into a string
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  let reversed = [];                                
  for( let word of words )
    reversed.push( reverseWord( word ) );

  return reversed;
}

// "ENUM" to store user OS types
const OS_TYPE = {
  WINDOWS: "Windows",             // Classic
  MAC: "Mac",                     // New Skool
  LINUX: "Linux"                  // 1337
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let linuxCount = 0;

  for(let user of users) {                                    // iterate through each user
    if( user.type === OS_TYPE.LINUX )   linuxCount++;         // increment upon finding a linux user
  }

  return linuxCount;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  let total = 0;

  for(let score of scores)                                    // calc the sum of all the scores
    total += score;                                           
  
    return Math.round(total / scores.length * 100) / 100;     // average and round to 2 dp
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  
  let result = "";

  if( !( n % 3 ) )  result += "fizz";                         // append if divisible by 3
  if( !( n % 5 ) )  result += "buzz";                         // append if divisible by 5

  return (result == "") ? n : result;                         // if nothing has been appended, return the number, otherwise return the string
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
