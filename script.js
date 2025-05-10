let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");
let message = document.querySelector(".message");
let gameScore = document.querySelector(".score");
let guessValue = document.querySelector(".guess");
let gameHighScore = document.querySelector(".highscore");
let secretNumber = document.querySelector(".number");
let bgColor = document.querySelector("body");
let score = 20;
let highscore = 0;
let compNumber = Math.floor(Math.random() * 20 + 1);
const lossingCondition = (gameScore) => {
  if (gameScore.innerText > 1) {
    score = score - 1;
    gameScore.innerText = score;
  } else {
    message.innerText = "You Lost";
    gameScore.innerText = 0;
  }
};
checkBtn.addEventListener("click", () => {
  let userNumber = Number(guessValue.value);
  if (userNumber == compNumber) {
    secretNumber.innerText = compNumber;
    message.innerText = "Correct Number";
    bgColor.style.backgroundColor = "#55aa3e";
    if (gameScore.innerText > gameHighScore.innerText) {
      gameHighScore.innerText = score;
    }
    checkBtn.disabled = true;
  } else if (userNumber != compNumber) {
    if (userNumber < compNumber) {
      message.innerText = "Too low";
      lossingCondition(gameScore);
    } else if (userNumber > compNumber) {
      message.innerText = "Too high";
      lossingCondition(gameScore);
    }
  }
});
againBtn.addEventListener("click", () => {
  score = 20;
  compNumber = Math.floor(Math.random() * 20 + 1);
  gameScore.innerText = score;
  bgColor.style.backgroundColor = "#222";
  secretNumber.innerText = "?";
  message.innerText = "Start Guessing...";
  guessValue.value = "";
  checkBtn.disabled = false;
});
