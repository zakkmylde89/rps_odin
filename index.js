const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    
}

getComputerChoice();