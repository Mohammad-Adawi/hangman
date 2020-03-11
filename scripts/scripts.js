
hanger = new Array ("--------\n|      |\n|\n|\n|\n|\n=====",
"--------\n|      O\n|\n|\n|\n|\n=====",
"--------\n|      O\n|      |\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     /\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     / \\\n|\n=====")

// guessChoices = new Array("JavaScript","Navigator","LiveConnect","LiveWire")
guessChoices = new Array("KEVIN","AARON","WARREN","COLE","BO")
function startAgain() {
 guesses = 0
 max = hanger.length-1
 guessed = " "
 len = guessChoices.length - 1
 toGuess = guessChoices[Math.round(len*Math.random())].toUpperCase()
 displayHangman()
 displayToGuess()
 displayGuessed()
}

function stayAway() {
 document.game.elements[3].focus()
 alert("Don't mess with this form element!")
}

function displayHangman() {
 document.game.status.value=hanger[guesses]
}

function displayToGuess() {
 pattern=""
 for(i=0;i<toGuess.length;++i) {
  if(guessed.indexOf(toGuess.charAt(i)) != -1)
   pattern += (toGuess.charAt(i)+" ")
  else pattern += "_ "
 }
 document.game.toGuess.value=pattern
}

function displayGuessed() {
 document.game.guessed.value=guessed
}

function badGuess(s) {
 if(toGuess.indexOf(s) == -1) return true
 return false
}

function winner() {
 for(i=0;i<toGuess.length;++i) {
  if(guessed.indexOf(toGuess.charAt(i)) == -1) return false
 }
 return true
}

function guess(s){
 if(guessed.indexOf(s) == -1) guessed = s + guessed
 if(badGuess(s)) ++guesses
 displayHangman()
 displayToGuess()
 displayGuessed()
 if(guesses >= max){
 alert("You Lose! Try again? The word you missed was "+toGuess+".")
  startAgain()
 }
 if(winner()) {
  alert("You win!")
  startAgain()
 }
}