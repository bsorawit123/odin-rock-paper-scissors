const computerPlay = () => {
  let ranNum = Math.floor(Math.random() * 3) + 1;
  if (ranNum == 1) {
    return "Rock";
  } else if (ranNum == 2) {
    return "Paper";
  } else if (ranNum == 3) {
    return "Scissor";
  }
};

const playRound = (playerSelection, computerSelection) => {
  let player1 = playerSelection.toLowerCase();
  let player2 = computerSelection.toLowerCase();

  if (player1 == "rock") {
    if (player1 == "rock" && player2 == "scissor") {
      return "You win! Rock beats Scissor";
    } else if (player1 == "rock" && player2 == "paper") {
      return "You lose! Paper beats Rock";
    } else if (player1 == "rock" && player2 == "rock") {
      return "Draw!";
    }
  } else if (player1 == "paper") {
    if (player1 == "paper" && player2 == "scissor") {
      return "You lose! Scissor beats Paper";
    } else if (player1 == "paper" && player2 == "paper") {
      return "Draw!";
    } else if (player1 == "paper" && player2 == "rock") {
      return "You win! Paper beats Rock";
    }
  } else if (player1 == "scissor") {
    if (player1 == "scissor" && player2 == "scissor") {
      return "Draw!";
    } else if (player1 == "scissor" && player2 == "paper") {
      return "You won! Scissor beats Paper";
    } else if (player1 == "scissor" && player2 == "rock") {
      return "You lose! Rock beats Paper";
    }
  } else {
    return "Please type only Rock or Paper or Scissor";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Please choose Rock or Paper or Scissor");
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
