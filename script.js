// CODED BY DANIEL DUKUNDANE
'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🤢 No number guessed');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('❤ Corrrect Answer .');
    document.querySelector('.check').setAttribute('disabled', true);
    document.querySelector('.check').style.backgroundColor = '#ccc';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highScore = Number(document.querySelector('.highscore').textContent);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📉 Too High !!!' : '⏬ Too Low !!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost the game !!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').classList.add('.btn');
  document.querySelector('.check').removeAttribute('disabled', true);
  document.querySelector('.guess').value = '';
});
