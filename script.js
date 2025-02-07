console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = ""; 

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    computerChoice = "rock";
  } else if (num === 1) {
    computerChoice = "paper";
  } else computerChoice = "scissors";
  return computerChoice; 
}


function getHumanChoice() {
  humanChoice = prompt("Rock, Paper, Scissors");
  return humanChoice;
}


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("Tie");
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
}



function playGame(){

    for(let i = 0; i<5; i++){
    console.log(getComputerChoice());
    console.log(getHumanChoice());
    playRound(humanChoice, computerChoice);
    
    }
    console.log(humanScore);
    console.log(computerScore);
}

playGame();


