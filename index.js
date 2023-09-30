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

function syntax(selection){
    let firstLetter = selection[0].toUpperCase()
    let ending = selection.slice(1).toLowerCase()
    return firstLetter + ending
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
        return `Draw! You both picked ${syntax(playerSelection)}`
    } else {
        return `You Win! ${syntax(playerSelection)} beats ${syntax(computerSelection)}`
    }
}


function game(){
    let playerScore = 0
    let computerScore = 0
    let drawScore = 0

    // for (let i = 0; i < 5; i++){
    //     const playerSelection = prompt("Choose Rock, Paper or Scissors")
    //     const computerSelection = getComputerChoice()
    //     const playGame = playRound(playerSelection, computerSelection)
        
    //     console.log(playGame)

    //     
    // }

    const container = document.querySelector('#container')
    
    const div = document.createElement('div')

    div.textContent = "Choose Rock, Paper or Scissors"
    div.setAttribute('style', 'font-size: 30px; font-weight: bold; margin-bottom: 10px')

    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');

    rockBtn.textContent = 'Rock'
    paperBtn.textContent = 'Paper'
    scissorsBtn.textContent = 'Scissors'

    container.appendChild(div)

    container.appendChild(rockBtn)
    container.appendChild(paperBtn)
    container.appendChild(scissorsBtn)
    
    const buttons = document.querySelectorAll('button')
    
    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            const playGame = playRound(button.textContent, getComputerChoice())

            div.textContent = playGame

            if(playGame.includes('Win')) {
                playerScore++
            } else if (playGame.includes('Lose')) {
                computerScore++
            } else {
                drawScore++
            }
        })
    })



    if(playerScore > computerScore){
        console.log(`You won the game with a score of ${playerScore}!`)
    } else if (playerScore < computerScore) {
        console.log(`You lost the game. The computer scored ${computerScore} points.`)
    } else {
        console.log('The game has ended in a tie.')
    }
}

console.log(game())