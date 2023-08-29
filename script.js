const start = document.querySelector("#startButton");
const higher = document.querySelector("#tooHighButton");
const lower = document.querySelector("#tooLowButton");
const correct = document.querySelector("#correctButton");
const compGuess = document.querySelector("#compGuess");

let randomNumber;

randomNumber = Math.floor(Math.random() * 101);

start.addEventListener("click", startGame);

function startGame() {
  console.log("start was clicked");
  console.log(randomNumber);
  compGuess.textContent = `Er tallet ${randomNumber}?`;
  higher.addEventListener("click", higherNumber);
  lower.addEventListener("click", lowerNumber);
  correct.addEventListener("click", correctNumber);
}

function higherNumber() {
  console.log("tallet er for højt");
}
function lowerNumber() {
  console.log("tallet er for lavt");
}

function correctNumber() {
  console.log(`Jeg gættede ${randomNumber} og det var korrekt`);
  compGuess.textContent = `Yay!! Jeg gættede tallet ${randomNumber} på antal gange`;
}
