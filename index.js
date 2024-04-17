const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie"
    }
    else if (result == "Player") {
        return "You Win"
    }
    else {
        return "You Lose"
    }
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice();

console.log(playRound);