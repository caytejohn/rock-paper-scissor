// Function that computer will generate random choice
function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  let computerSelect = computerSelection.toLowerCase();
  console.log(`Computer choose: ${computerSelect}`)

  return computerSelect;
}