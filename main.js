// ROCK PAPER SCISSORS

// task 1

//let playerMove = prompt('Choose rock, paper or scissors');
//let computerMove = rockPaperScissors[computerChoice()];
//let scoreCount = 0;

// task 2

/*
// Rock combinations
if (playerMove === 'rock' && computerMove === 'rock') {
  console.log('Draw!')
}

if (playerMove === 'rock' && computerMove === 'paper') {
  console.log('Computer Wins!')
}

if (playerMove === 'rock' && computerMove === 'scissors') {
  console.log('Player Wins!')
}

// scissor combinations
if (playerMove === 'scissors' && computerMove === 'rock') {
  console.log('Computer Wins!')
}

if (playerMove === 'scissors' && computerMove === 'paper') {
  console.log('Player Wins!')
}

if (playerMove === 'scissors' && computerMove === 'scissors') {
  console.log('Draw!')
}

// paper combinations
if (playerMove === 'paper' && computerMove === 'rock') {
  console.log('Player Wins!')
}
if (playerMove === 'paper' && computerMove === 'paper') {
  console.log('Draw!')
}

if (playerMove === 'paper' && computerMove === 'scissors') {
  console.log('Computer Wins!')
}


*/

// task 3

let playerMove = prompt('Choose rock, paper or scissors');
let computerMove = rockPaperScissors[computerChoice()];
let scoreCount = 0;

// task 4

let rockPaperScissors = ['rock', 'paper', 'scissors'];

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

function getWinner(player, computer) {
  // Rock combinations
  let scoreCount = 0;

if (player === 'rock' && computer === 'rock') {
  scoreCount = scoreCount +0;
}

if (player === 'rock' && computer === 'paper') {
  scoreCount--;
}

if (player === 'rock' && computer === 'scissors') {
   scoreCount++;
}

// scissor combinations
if (player === 'scissors' && computer === 'rock') {
  scoreCount--;
}

if (player === 'scissors' && computer === 'paper') {
  scoreCount++;
}

if (player === 'scissors' && computer === 'scissors') {
  scoreCount = scoreCount +0;
}

// paper combinations
if (player === 'paper' && computer === 'rock') {
  scoreCount++;
}

if (player === 'paper' && computer === 'paper') {
 scoreCount = scoreCount +0;
}

if (player === 'paper' && computer === 'scissors') {
  scoreCount++;
}

return scoreCount;
}

let result = getWinner(playerMove, computerMove);

// task 5

let gameLoop = true;

while (gameLoop === true) {
  result;
  alert(result);
  gameLoop = confirm("Press OK to Play Again!");
}


console.log(playerMove);
console.log(computerMove);
console.log(result);











