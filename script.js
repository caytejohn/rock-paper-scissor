let playerScore = 0;
let computerScore = 0;

// Function that computer will generate random choice
function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  let computerSelect = computerSelection.toLowerCase();
  console.log(`Computer choose: ${computerSelect}`)

  return computerSelect;
}

// Function that will determine who will win the round between player's choice and computer's choice
function playRound(playerSelection, computerPlay) {
  if (playerSelection === computerPlay) {
    return `You have same choice.`;
  }
  else if ((playerSelection === 'paper' && computerPlay === 'rock') ||
    (playerSelection === 'scissors' && computerPlay === 'paper') ||
    (playerSelection === 'rock' && computerPlay === 'scissors')) {
    playerScore++;
    return "You beat computer. PLAYER WIN!";

  }
  else if ((playerSelection === 'rock' && computerPlay === 'paper') ||
    (playerSelection === 'scissors' && computerPlay === 'rock') ||
    (playerSelection === 'paper' && computerPlay === 'scissors')) {
    computerScore++;
    return "Computer beats you. COMPUTER WIN!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Choose one: "Rock", "Paper", "Scissors"').toLowerCase();
    console.log(`You choose: ${playerSelection}`)
    let computerSelect = computerPlay();
    let rounds = playRound(playerSelection, computerSelect);
    console.log(rounds);
  }
  console.log(`Computer Score: ${computerScore}`);
  console.log(`Player Score: ${playerScore}`);

  if (playerScore === computerScore) {
    console.log(`It's Tie. Same Score`);
  } else if (playerScore > computerScore) {
    console.log(`You win the game. Your score is ${playerScore} while Computer scored ${computerScore}`);
  } else {
    console.log(`Computer wins the game. Computer scored ${computerScore} while you scored ${playerScore}`)
  }
  console.log("Game Over!");
}

game();