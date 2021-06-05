'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '❤ Corrrect Answer .';
  if (!guess) {
    document.querySelector('.message').textContent = '🤢 No number guessed';
  }
});
