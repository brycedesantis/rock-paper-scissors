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

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === 'Paper' && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}`
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    let drawScore = 0

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
    
    const scoreDiv = document.createElement('div')
    scoreDiv.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}  Draws: ${drawScore}`
    container.insertBefore(scoreDiv, rockBtn)
    
    const buttons = document.querySelectorAll('button')
    
    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            const playGame = playRound(button.textContent, getComputerChoice())

            div.textContent = playGame
            
            scoreDiv.remove()
            container.insertBefore(scoreDiv, rockBtn)
            
            if(playGame.includes('Win')) {
                playerScore++
            } else if (playGame.includes('Lose')) {
                computerScore++
            } else {
                drawScore++
            }
            
            scoreDiv.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}  Draws: ${drawScore}`

            if(playerScore > computerScore && playerScore === 5){
                scoreDiv.remove()
                button.disabled = true
                div.textContent = `You won the game with a score of ${playerScore}!`
            } else if (playerScore < computerScore && computerScore === 5) {
                scoreDiv.remove()
                button.disabled = true
                div.textContent = `You lost the game. The computer scored ${computerScore} points.`
            }
        })
    })
}

game()