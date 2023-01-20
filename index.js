let num = 0;

function generateRandomNumber() {
  return Math.floor(Math.random());
}

function differenceFromAnswer(guess, answer) {
  if(guess === answer) {
    return "Correct";
  }

  if(guess < answer) {
    return "Too Low";
  } else {
    return "Too High";
  }
}

function makeAGuess(answer) {
  let guess = prompt("Make a guess");
  
  if(isNAN(guess)) {
    console.log("Not an integer");
    guess = prompt("Make a guess");
  }
  
  return differenceFromAnswer(guess, answer);
}