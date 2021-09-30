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
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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
