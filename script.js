let humanScore = 0;
let computerScore = 0;
let gamesCount = 0; 

const final = document.querySelector('.final'); 
const result = document.querySelector('.result'); 
result.textContent = ""; 
final.textContent = ""; 
const buttons = document.querySelectorAll('button'); 

buttons.forEach(function(button){
  button.addEventListener('click', function(){
    playRound(button.className, getComputerChoice());
  }); 
})

function getComputerChoice() {
  let computerChoice = ""; 
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    computerChoice = "rock";
  } else if (num === 1) {
    computerChoice = "paper";
  } else computerChoice = "scissors";
  return computerChoice; 
}

function playRound(humanChoice, computerChoice) {
  gamesCount++;
  if (humanChoice === computerChoice) {
    result.textContent = "Tie between yall"; 
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }
  final.textContent = gamesCount;
    if(gamesCount%5 == 0){
      let winner  = (humanScore>computerScore)?"You":(humanScore == computerScore)?"Tie":"Computer"; 
      result.textContent = `The winner afer 5 rounds is ${winner}`; 
    }

    
}



