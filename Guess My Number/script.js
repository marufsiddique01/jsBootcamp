'use strict';

/*
console.log(document.querySelector('.message').textContent);

//Dom and its manipulations

document.querySelector('.message').textContent = '🎉 Correct Number!!!!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);

*/
// learning to click on website / event listener

let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);

let scoreCalc = document.querySelector('.score').textContent;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//console.log(scoreCalc);

document.querySelector('.check').addEventListener('click', clickMe);

function clickMe() {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  if (!guess) {
    displayMessage('No Number !!');
    //document.querySelector('.message').textContent = 'No Number !!';
  } else if (guess == secretNumber) {
    displayMessage('wew you lucky dog');
    //document.querySelector('.message').textContent = 'wew you lucky dog';
    document.querySelector('.number').textContent = secretNumber;

    // manipulation of css using js
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (scoreCalc > highScore) {
      highScore = scoreCalc;
      document.querySelector('.highscore').textContent = highScore;
    }

    //number is greater
  } else if (guess !== secretNumber) {
    if (scoreCalc > 1) {
      displayMessage(
        guess > secretNumber ? 'Little bit higher' : 'Little bit lower'
      );
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Little bit higher' : 'Little bit lower';
      scoreCalc--;
      document.querySelector('.score').textContent = scoreCalc;
    } else {
      displayMessage('You Lost');
      //document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
    //hu?
    // } else if (guess > secretNumber) {
    //   if (scoreCalc > 1) {
    //     document.querySelector('.message').textContent = 'Little bit higher';
    //     scoreCalc--;
    //     document.querySelector('.score').textContent = scoreCalc;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (scoreCalc > 1) {
    //     document.querySelector('.message').textContent = 'Little bit lower';
    //     scoreCalc--;
    //     document.querySelector('.score').textContent = scoreCalc;
  } else {
    displayMessage('You Lost');
    //document.querySelector('.message').textContent = 'You Lost';
    document.querySelector('.score').textContent = 0;
  }
}

function lost() {}

//coding challenge 1 - again button

document.querySelector('.again').addEventListener('click', reset);

function reset() {
  secretNumber = Math.trunc(Math.random() * 100);
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  scoreCalc = 20;
  document.querySelector('.score').textContent = scoreCalc;
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
}
