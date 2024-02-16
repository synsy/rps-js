const container = document.getElementById('container');
const divResults = document.getElementById('results');

const buttonRock = document.createElement('button');
buttonRock.textContent = 'Rock';
const buttonPaper = document.createElement('button');
buttonPaper.textContent = 'Paper';
const buttonScissors = document.createElement('button');
buttonScissors.textContent = 'Scissors';

const pPlayerScore = document.createElement('p');
pPlayerScore.textContent = 'Player: 0';
const pComputerScore = document.createElement('p');
pComputerScore.textContent = 'Computer: 0';
const pResults = document.createElement('p');
pResults.textContent = 'Result: ';

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);
divResults.appendChild(pPlayerScore);
divResults.appendChild(pComputerScore);
divResults.appendChild(pResults);

let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection){        
    if(round < 5){
        round++; 
        if(playerSelection === computerSelection){
            return "It's a tie!";
        }
        if(playerSelection === 'rock'){
            if(computerSelection === 'scissors'){
                return "You win! Rock beats scissors!";
            } else {
                return "You lose! Paper beats rock!";
            }
        }
        if(playerSelection === 'paper'){
            if(computerSelection === 'rock'){
                return "You win! Paper beats rock!";
            } else {
                return "You lose! Scissors beats paper!";
            }
        }   
        if(playerSelection === 'scissors'){
            if(computerSelection === 'paper'){
                return "You win! Scissors beats paper!";
            } else {
                return "You lose! Rock beats scissors!";
            }
        }   
    } else {
        if(playerScore > computerScore){
            return "You win the game!";
        } else if(playerScore < computerScore){
            return "You lose the game!";
        } else {
            return "It's a tie!";
        }
    }
}

function handleButtonClick(playerSelection) {
    const result = playRound(playerSelection, getComputerChoice());
    pResults.textContent = `Result: ${result}`;
    if (result.includes('win')) {
        playerScore++;
    } else if (result.includes('lose')) {
        computerScore++;
    }
    pPlayerScore.textContent = `Player: ${playerScore}`;
    pComputerScore.textContent = `Computer: ${computerScore}`;
}

buttonRock.addEventListener('click', () => {
    if (round < 6) {
        handleButtonClick('rock');
    }
});

buttonPaper.addEventListener('click', () => {
    if (round < 6) {
        handleButtonClick('paper');
    }
});

buttonScissors.addEventListener('click', () => {
    if (round < 6) {
        handleButtonClick('scissors');
    }
});