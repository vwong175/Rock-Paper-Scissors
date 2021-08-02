// constants and variables
let userScore = localStorage.getItem('userScore');
let compScore = localStorage.getItem('compScore');
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const resultMessage = document.getElementById('resultMessage');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

// FUNCTIONS

//On load read LocalStorage
window.addEventListener(
  'load',
  function () {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
  },
  false
);

//Resets the score board
function restartGame() {
  localStorage.setItem('userScore', 0);
  localStorage.setItem('compScore', 0);
  updateScores(userScore, compScore);
  resultMessage.innerHTML = 'You restarted the game';
}

// Random computer choice
function randomChoice() {
  choices = ['rock', 'paper', 'scissors'];
  randomNum = Math.floor(Math.random() * 3); //can be 0,1,2
  return choices[randomNum];
}

// Updates the score board on HTML
function updateScores(userScore, compScore) {
  userScore_span.innerHTML = localStorage.getItem('userScore');
  compScore_span.innerHTML = localStorage.getItem('compScore');
}

// Displays user won on HTML and updates user's score
function win(userChoice, compChoice) {
  resultMessage.innerHTML = `${userChoice} beats ${compChoice}. You win!`;
  userScore = Number(userScore) + 1;
  localStorage.setItem('userScore', userScore);
}

// Displays user won on HTML and updates computer's score
function lost(userChoice, compChoice) {
  resultMessage.innerHTML = `${userChoice} can't beat ${compChoice}. You lost!`;
  compScore = Number(compScore) + 1;
  localStorage.setItem('compScore', compScore);
}

// When the user chooses rock
rock_div.addEventListener('click', function () {
  userChoice = 'rock';
  let compChoice = randomChoice();

  // compares the results
  if (compChoice == 'scissors') {
    win(userChoice, compChoice);
    updateScores(userScore, compScore);
  } else if (compChoice == 'paper') {
    lost(userChoice, compChoice);
    updateScores(userScore, compScore);
  } else {
    resultMessage.innerHTML = 'Its a tie';
  }
});

// When user chooses paper
paper_div.addEventListener('click', function () {
  userChoice = 'paper';
  let compChoice = randomChoice();

  if (compChoice == 'rock') {
    win(userChoice, compChoice);
    updateScores(userScore, compScore);
  } else if (compChoice == 'scissors') {
    lost(userChoice, compChoice);
    updateScores(userScore, compScore);
  } else {
    resultMessage.innerHTML = 'Its a tie';
  }
});

// When the user chooses scissor
scissor_div.addEventListener('click', function () {
  userChoice = 'scissor';
  let compChoice = randomChoice();

  if (compChoice == 'paper') {
    win(userChoice, compChoice);
    updateScores(userScore, compScore);
  } else if (compChoice == 'rock') {
    lost(userChoice, compChoice);
    updateScores(userScore, compScore);
  } else {
    resultMessage.innerHTML = 'Its a tie';
  }
});
