// ROCK PAPER SCISSORS

// task 1

// 

let playerMove = prompt('Choose rock, paper or scissors');
let computerMove = 'paper';

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
