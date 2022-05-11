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