function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 1/3) {
    return "rock";
  } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
  let humanInput = prompt("Rock, Paper, Scissors?");

  if (humanInput.toLowerCase() === "rock") {
    return "rock";
  } else if (humanInput.toLowerCase() === "paper") {
    return "paper";
  } else if (humanInput.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    console.log("error, invalid answer");
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
  if(computerSelection === 'rock') {
    if(humanSelection === 'rock') {
      console.log("You Tied! Rock ties Rock.") ;
    } else if(humanSelection === 'paper') {
      console.log("You Won! Paper beats Rock.") ;
      return(++humanScore);
    } else if(humanSelection === 'scissors') {
      console.log("You Lost! Scissors lose to Rock.") ;
      return(++computerScore);
    }
  } else if(computerSelection === 'paper') {
    if(humanSelection === 'rock') {
      console.log("You Lost! Rock loses to Paper.") ;
      return(++computerScore);
    } else if(humanSelection === 'paper') {
      console.log("You Tied! Paper ties Paper.");
    } else if(humanSelection === 'scissors') {
      console.log("You Won! Scissors beats Paper.");
      return(++humanScore);
    }
  } else if(computerSelection === 'scissors') {
    if(humanSelection === 'rock') {
      console.log("You Won! Rock beats Scissors.");
      return(++humanScore);
    } else if(humanSelection === 'paper') {
      console.log("You Lost! Paper loses to Scissors.");
      return(++computerScore);
    } else if(humanSelection === 'scissors') {
      console.log("You Tied! Scissors ties Scissors.");
      
    }
  }
}



function playGame() {
  for(let numberOfRounds = 0; numberOfRounds <5; numberOfRounds++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    console.log("Your Score is " + humanScore + " and the computer score is " + computerScore + ".");
  }

  if (humanScore > computerScore){
    console.log(`You won the game! You got ${humanScore} and the computer got ${computerScore}`);
  }
  else if (humanScore < computerScore) {
    console.log(`You lost the game... You got ${humanScore} and the computer got ${computerScore}`);
  }
  else {
    console.log(`You drew the game. Your score is ${humanScore} to ${computerScore}.`);
  }

  console.log(`Game Over. Reload the page to restart.`);
}



playGame();