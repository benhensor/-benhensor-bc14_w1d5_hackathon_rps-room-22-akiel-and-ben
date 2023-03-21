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



let rockPaperScissors = ['rock', 'paper', 'scissors'];


let scoreCount = 0;

// task 4



function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

function getWinner(playerTurn, computerTurn) {

  if (computerTurn == playerTurn) return 0;
  
  const winningCombinations = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
  }

  if (winningCombinations[playerTurn] == computerTurn) return 1;
  return -1;

}



// task 5

let gameLoop = true;

while (gameLoop) {
  // get the players turn
  let playerMove = prompt('Choose rock, paper or scissors');
  console.log(playerMove)

  // get the computers turn
  let computerMove = rockPaperScissors[computerChoice()];
  console.log(computerMove)

  // See who wins
  let result = getWinner(playerMove, computerMove);
  console.log(result)

  // Alert winner
  alert(result == 1 ? "Player wins!" ? result == 0 : "It's a draw" : "Computer wins!");


  // Update global score
  scoreCount += result

  // Play again
  
  gameLoop = confirm("Press OK to Play Again!");
}












