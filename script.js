getComputerChoise = () => {
  let rand = Math.random();
  if ((0 < rand) & (rand > 0.33)) {
    return 'rock';
  }
  if ((0.33 < rand) & (rand > 0.66)) {
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
    console.log(`its a draw, you both selected ${humanChoise}`);
    return 'draw';
  } else if (
    (computerChoise == 'rock') & (humanChoise == 'scissors') ||
    (computerChoise == 'paper') & (humanChoise == 'rock') ||
    (computerChoise == 'scissors') & (humanChoise == 'paper')
  ) {
    console.log(`You Lose! ${computerChoise} beats ${humanChoise}`);
    return 'computer';
  } else {
    console.log(`You Win! ${humanChoise} beats ${computerChoise}`);
    return 'human';
  }
};

playGame = () => {
  let result = '';
  for (let i = 0; i < 5; i++) {
    result = playRound(getHumanChoise(), getComputerChoise());
    if (result === 'computer') {
      computerScore += 1;
    } else if (result === 'human') {
      humanScore += 1;
    }
    console.log(
      'Computer Score: ' + computerScore + '\nHuman Score: ' + humanScore,
    );
  }
};

let humanScore = 0;
let computerScore = 0;

playGame();
