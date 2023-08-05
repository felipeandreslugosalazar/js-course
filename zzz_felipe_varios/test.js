function getComputerChoice() {
  // creata an array with the options 
  const options = ['Rock', 'Paper', 'Scissors'];
  // create a function to pick a randon index in the array
  let randomIndex = Math.floor(Math.random() * options.length);
  // return the element associated with the -random- index
  return options[randomIndex];
}

function simulateUserChoice() {
  // create a an array with the options 
  const options = ['Rock', 'Paper', 'Scissors'];
  // create a function to pick a randon index in the array
  let randomIndex = Math.floor(Math.random() * options.length);
  // return the element associated with the -random- index
  return options[randomIndex];
}


function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = 0;
  // All situations where human draws, set `score` to 0
  if ((playerChoice == 'Rock' && computerChoice == 'Rock') || (playerChoice == 'Paper' && computerChoice == 'Paper') || (playerChoice == 'Scissors' && computerChoice == 'Scissors')) {
    // console.log('It\'s a Tie!');
    score = 0;
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
  } else if ((playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Rock' && computerChoice == 'Scissors')) {
    console.log('Player Won!');
    score = 1;
    // Otherwise human loses (aka set score to -1)
  } else {
    // console.log('Computer Won!');
    score = -1;
  }
  // return score
  return score;
}


let playerChoice = simulateUserChoice();
console.log('playerChoice => ', playerChoice);
let computerChoice = getComputerChoice();
console.log('computerChoice => ', computerChoice);

console.log(getResult(playerChoice, computerChoice));
