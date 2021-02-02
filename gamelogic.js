function displayWordSoFar(word, guesses) {
// [x] loggen what is word & what is guesses?
// [x] WRITE ME
  console.log("WOORD:", word); // = javascript
  console.log("GUESSES:", guesses); // = leeg array

// - [x] javascript, ['a', 'b', etc.] -> "- - - - - - - - - - " // output guesses
// - [x] javascript "splitten" split() -> ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'] // geen woord meer, onafhankelijke karakters, kan je in index doen


// - [x] een loop maken (over de array heen) -> ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
  let output = '';
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

// - [x] zo ja: "j" (niet j, maar de letter die we dan checken)
    if (letterGuessed){
      output = output + letterInWord + " ";
    }
    console.log(output);
  }
// - [x] klaar? -> onze string die we hebben gemaakt returnen
  return output;

}; // eind displayWordSoFar


function isGameWon(word, guesses) {
  // WRITE ME
  const letterArray2 = word.split("");
  for (let index = 0; index < letterArray2.length; index++) {
    const letterInWord = letterArray2[index];
    const letterGuessed = guesses.includes(letterInWord);
    if (!letterGuessed) {
      return false;
    }
    return true;

// DOEL: isGameWon
    // word = "javascript" guesses = ["j", "a", "v", "s", "c", "r", "i", "p", "t"] -> true
    // word = "javascript" guesses = [], ["j", "a"] -> false
    // Strategie:
    // Kunnen we 1 letter vinden die je niet hebt geraden? return false
    // Kunnen niet 1 letter vinden die je niet hebt geraden return true
    // - [ ] loggen: wat is word & guesses
    // - [ ] word -> word.split(""): ["j", "a", "v","a", "s", "c", "r", "i", "p", "t"]
    // - [ ] loopen over dat array met de letters van het woord
    // - [ ] Voor elke letter in het woord
    // - [ ] Zit deze letter in guesses -> guesses.includes(letter)
    // - [ ] if in de loop
    // - [ ] in guesses true -> we gaan door
    // - [ ] in guesses false -> we stoppen: return false
    // - [ ] Zijn we aan het einde van de loop? aan het einde van de functie return true


}; // eind isGameWon


function isGameLost(word, guesses) {
  // WRITE ME
  let mistakeCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakeCount = mistakeCount + 1;
    }
  }
  const MAX_MISTAKE_COUNT = 7;
  if (mistakeCount >= MAX_MISTAKE_COUNT) {
    return true;
  } else {
    return false;
  }
  // DOEL: isGameLost
  // word = "javascript" guesses = ["q", "w", "e", "y", "u", "o", "d"]; -> true
  // word = "javascript" guesses = ["q", "w", "e", "a", "t"]; -> false
  // STRATEGIE:
  // fouten tellen
  // 7 fout (of meer?) -> return true
  // minder dan 7 fout -> return false
  // - [ ] counter aanmaken -> start bij 0
  // - [ ] for loop over de guesses
  // - [ ] voor elke guess
  // - [ ] zit deze guess (letter) in het woord word.includes(guess)
  // - [ ] if
  // - [ ] Als true (we doen niets)
  // - [ ] Als false -> counter met 1 verhogen
  // - [ ] aan het eind van de functie een if statement maken
  // - [ ] if
  // - [ ] count is 7 -> return true
  // - [ ] count is minder dan 7 -> return false

}; // eind isGameLost
  module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
  },