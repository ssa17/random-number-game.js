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