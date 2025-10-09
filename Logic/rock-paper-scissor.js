// Get the score from localStorage or initialize it
const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

function playGame(playerChoice) {
  // Validate player choice
  const choices = ['Rock', 'Paper', 'Scissors'];
  // Set computer choice randomly
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';

  // Validate player choice
  if (playerChoice === computerChoice) {
    result = "It's a tie!"; score.tie++;
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result = "You win!"; score.win++;
  } else {
    result = "Computer win!"; score.lose++;
  }

  // Update the score in localStorage
  localStorage.setItem('score', JSON.stringify(score));

  // Display the result on the page
  document.querySelector('.js-result').innerText = result;

  document.querySelector('.js-moves')
    .innerHTML = `You <img src="../Images/${playerChoice}-emoji.png" class="moves-images"> <img src="../Images/${computerChoice}-emoji.png"  class="moves-images"> Computer`;

  updateScoreElement();
}

// Function to reset the scoreboard
// This function resets the score to zero and updates localStorage
function resetScoreBoard() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;

  localStorage.removeItem('score'); // Clear the score from localStorage

  updateScoreElement();

  // OR

  // Update the score in localStorage
  // localStorage.setItem('score', JSON.stringify(score));
}

// Function to update the score element on the page
function updateScoreElement() {
  document.querySelector('.js-score').innerText = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

// Display the score on the page
updateScoreElement();

function changeButtonEleText() {
  const buttonElement = document.querySelector(".js-auto-play-button");

  if (buttonElement.innerText === "Auto Play") {
    buttonElement.innerHTML = "Stop Play";
  } else {
    buttonElement.innerHTML = "Auto Play";
  }
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  const buttonElement = document.querySelector(".js-auto-play-button");

  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
      const choices = ['Rock', 'Paper', 'Scissors'];
      const playerChoice = choices[Math.floor(Math.random() * choices.length)];
      playGame(playerChoice);
    }, 2000); // Auto play every 2 seconds

    buttonElement.innerHTML = "Stop Play";
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    buttonElement.innerHTML = "Auto Play";
    isAutoPlaying = false;
  }
}