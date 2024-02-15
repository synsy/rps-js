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
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt(`Round ${i + 1}: Enter Rock, Paper, or Scissors:`).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)) ;
    }
}
playGame();