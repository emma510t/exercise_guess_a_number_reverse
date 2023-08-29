const start = document.querySelector("#startButton");
const higher = document.querySelector("#tooHighButton");
const lower = document.querySelector("#tooLowButton");
const correct = document.querySelector("#correctButton");
const compGuess = document.querySelector("#compGuess");

let maxNumber = 100;
let minNumber = 0;
let compRanNumber;
let antal = 0;

start.addEventListener("click", startGame);

function guess() {
  compRanNumber = Math.floor((minNumber + maxNumber) / 2);
  compGuess.textContent = `Er tallet ${compRanNumber}?`;
  console.log(compRanNumber);
  antal++;
}

function startGame() {
  console.log("start was clicked");
  lower.classList.remove("hidden");
  higher.classList.remove("hidden");
  correct.classList.remove("hidden");
  start.classList.add("inactive");
  higher.addEventListener("click", higherNumber);
  lower.addEventListener("click", lowerNumber);
  correct.addEventListener("click", correctNumber);
  start.removeEventListener("click", startGame);
  guess();
}

function higherNumber() {
  console.log("tallet er for højt");
  maxNumber = compRanNumber;
  console.log(compRanNumber);
  guess();
}
function lowerNumber() {
  console.log("tallet er for lavt");
  console.log(compRanNumber);
  minNumber = compRanNumber + 1;
  guess();
}

function correctNumber() {
  console.log(`Jeg gættede  og det var korrekt`);
  compGuess.textContent = `Yay!! Jeg gættede tallet ${compRanNumber} på ${antal} antal gange`;
  lower.classList.add("hidden");
  higher.classList.add("hidden");
  correct.classList.add("hidden");
  start.classList.remove("inactive");
}
