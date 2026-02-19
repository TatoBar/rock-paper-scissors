getComputerChoise = () => {
  let rand = Math.floor(Math.random() * 3) + 1;
  if (rand === 1) {
    return 'rock';
  }
  else if (rand === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

getHumanChoise = () => {
  let input = String(
    prompt(`Please enter "Rock, "Paper" or "Scissors`),
  ).toLowerCase();
  while (
    (String(input) != 'rock') &
    (String(input) != 'paper') &
    (String(input) != 'scissors')
  ) {
    input = prompt(
      'You did not enter the correct word. \nPlease enter "Rock, "Paper" or "Scissors',
    );
  }
  return input;
};
playRound = (humanChoise, computerChoise) => {
  if (computerChoise == humanChoise) {
    res.textContent = (`its a draw, you both selected ${humanChoise}`);
    return "draw";
  } else if (
    (computerChoise == 'rock') && (humanChoise == 'scissors') ||
    (computerChoise == 'paper') && (humanChoise == 'rock') ||
    (computerChoise == 'scissors') && (humanChoise == 'paper')
  ) {
    res.textContent = (`You Lose! ${computerChoise} beats ${humanChoise}`);
    return "computer";
  } else {
    res.textContent = (`You Win! ${humanChoise} beats ${computerChoise}`);
    return "human";
  }
};

checkResult = (result) => {
    if (result === 'computer') {
      computerScore += 1;
    } else if (result === 'human') {
      humanScore += 1;
    }
    score.textContent = 'Computer Score: ' + computerScore + '    Human Score: ' + humanScore;
    if(humanScore === 5 || computerScore === 5){
      buttons.appendChild(reset);
      buttons.removeChild(rock);
      buttons.removeChild(scissors);
      buttons.removeChild(paper);
      if(humanScore > computerScore){
        res.textContent = "Game Over: You Win!!!!"
      }
      else{
        res.textContent = "Game Over: You Lose :("
      }
    }
};

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");
const score = document.querySelector("#score");
const res = document.querySelector("#result");
const buttons = document.querySelector("#buttons");
const reset = document.createElement("button");

reset.textContent = "Reset game";



let result = "";
rock.addEventListener("click", (event) => {
  event.preventDefault();
  result = playRound("rock", getComputerChoise())
  checkResult(result);
});
paper.addEventListener("click", (event) => {
  event.preventDefault();
  result = playRound("paper", getComputerChoise())
  checkResult(result);
});
scissors.addEventListener("click", (event) => {
  event.preventDefault();
  result = playRound("scissors", getComputerChoise())
  checkResult(result);
});

reset.addEventListener("click", (event) => {
  event.preventDefault();
  res.textContent = "New Game"
  computerScore = 0;
  humanScore = 0;
  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);
  buttons.removeChild(reset);
  checkResult("draw");
});