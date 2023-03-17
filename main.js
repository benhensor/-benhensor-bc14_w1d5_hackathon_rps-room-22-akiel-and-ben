// ROCK PAPER SCISSORS

// task 1

// 

let playerMove = prompt('Choose rock, paper or scissors');
let computerMove = 'paper';
let scoreCount = 0;

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

console.log(result);
alert(result)




