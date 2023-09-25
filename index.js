function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0) {
        return "Rock"
    } else if (computerChoice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === 'paper' && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}`
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))