// Get the score from localStorage or initialize it
const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

// Added Shortcuts for most functionality.
document.body
  .addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'r') playGame('Rock');
    else if (key === 'p') playGame('Paper');
    else if (key === 's') playGame('Scissors');
    else if (key === 'x') showResetConfirmation();
    else if (key === 'a') autoPlay();
    else if (key === 'y') { resetScoreBoard(); hideAlertConfirmation(); }
    else if (key === 'n') hideAlertConfirmation();
  });

// Main functionality to play the game.
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

  // Update the result in HTML
  document.querySelector('.js-moves')
    .innerHTML = `You <img src="./Images/${playerChoice}-emoji.png" class="moves-images"> <img src="./Images/${computerChoice}-emoji.png"  class="moves-images"> Computer`;

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
}

// Added eventListener for score reset confirmation.
document.querySelector('.reset-score-button')
  .addEventListener('click', showResetConfirmation);

// Added reset confirmation message.
function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
		.innerHTML = `
			Are you sure you want to reset the score?
			<button class="js-del-conf-yes">Yes</button>
			<button class="js-del-conf-no">No</button>
		`;

  document.querySelector('.js-del-conf-yes')
    .addEventListener('click', () => {
      resetScoreBoard();
      hideAlertConfirmation();
    });

  document.querySelector('.js-del-conf-no')
    .addEventListener('click', () => {
      hideAlertConfirmation();
    });
}

// Hide alert notification for reset.
function hideAlertConfirmation() {
  document.querySelector('.js-reset-confirmation').innerHTML =  ``;
}

// Function to update the score element on the page
function updateScoreElement() {
  document.querySelector('.js-score').innerText = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

// Display the score on the page
updateScoreElement();

// Add functionality to change the button element text.
function changeButtonEleText() {
  const buttonElement = document.querySelector(".js-auto-play-button");

  if (buttonElement.innerText === "Auto Play") {
    buttonElement.innerHTML = "Stop Play";
  } else {
    buttonElement.innerHTML = "Auto Play";
  }
}

// Global variables for autoplay functionality.
let isAutoPlaying = false;
let intervalId;

// Adding autoplay functionality to play & stop automatically.
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


