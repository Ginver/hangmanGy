function displayWordSoFar(word, guesses) {
// [x] loggen what is word & what is guesses?
// [x] WRITE ME
  console.log("WOORD:", word); // = javascript
  console.log("GUESSES:", guesses); // = leeg array

// - [x] javascript, ['a', 'b', etc.] -> "- - - - - - - - - - " // output guesses
// - [x] javascript "splitten" split() -> ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'] // geen woord meer, onafhankelijke karakters, kan je in index doen
  const letterArray = word.split("");
  console.log("LETTERS IN WOORD:", letterArray);

// - [x] een loop maken (over de array heen) -> ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
  let output = ''
  for (let i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    console.log("LETTER TO CHECK:", letterInWord); // telkens één letter tegelijk

// - [x] checken: zit de letter in guesses?
    let letterGuessed = guesses.includes(letterInWord);
    console.log("GERADEN:", letterGuessed);

// - [x] if else
// - [x] zo nee: "_"
    if(!letterGuessed){
      output = output + "_ ";
    }

// - [] zo ja: "j" (niet j, maar de letter die we dan checken)
    if (letterGuessed){
      output = output + letterInWord + "";
    }
    console.log(output);
  }
// - [] klaar? -> onze string die we hebben gemaakt returnen
  return output;
}; // eind displayWordSoFar




function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
