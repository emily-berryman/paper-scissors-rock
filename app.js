// PAPER, SCISSORS, ROCK -- CONSOLE GAME

let playerScore = 0
let computerScore = 0
let roundNum = 1
let playing = false


// Start by adding click event to each of the paper scissors rock buttons

// First get reference to the elements
const buttons = document.querySelectorAll(".btn");

// Next add event listener for each button
buttons.forEach((button) => button.addEventListener("click", playRound))

const output = document.querySelector("#output");
const playerScoreOutput = document.querySelector("#player-score")
const compScoreOutput = document.querySelector("#computer-score")

function game() {
    playing = true
    console.log('back to the game function')
    console.log(computerScore, playerScore)
    if (computerScore < 5 && playerScore < 5){
        playRound(computerSelection())
    } else {
        return 'Thanks for playing' && resetGame()
    }
}
function playRound(e) {
    
    playing = false
    let playerSelection = e.target.id 
    let playerChoice = capitalizePlayerInput(playerSelection)
    let computerChoice = computerSelection()
    
    console.log('playing is' + playing)
    console.log('computer selection is ' + computerChoice)
    console.log('player selection is ' + playerSelection)

    if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock' && (computerScore <= 5 || playerScore <= 5))
    ) {
        playerScore++
        if (playerScore == 5){
            delcareScore(playerScore, computerScore)
            return resetGame('YOU WON THE GAME, WELL DONE!', playing)
        } else {
            output.textContent = `You selected ${playerChoice} and the computer chose ${computerChoice} - congrats you won this round!`
        }
        roundNum++
    }
    else if ((playerChoice == 'Rock' && computerChoice == 'Paper') || (playerChoice == 'Scissors' && computerChoice == 'Rock') || (playerChoice == 'Paper' && computerChoice == 'Scissors' && (computerScore <= 5 || playerScore <= 5))
    ) {
        computerScore++
        if (computerScore == 5){
            delcareScore(playerScore, computerScore)
            return resetGame('COMPUTER WON! Better luck next time!', playing)
        } else {
            output.innerHTML = '<h3>Oh no, you lost this round</h3>'
        }
        roundNum++
    }
        
    else if (playerChoice == computerChoice) {
        output.textContent = 'It\'s a tie, try again!'
    }
    delcareScore(playerScore, computerScore)
    console.log('roundNum is ' + roundNum)
    game(computerChoice)
}

function delcareScore(){
    playerScoreOutput.textContent = `player: ${playerScore}`
    compScoreOutput.textContent = `computer: ${computerScore}`
}
function resetGame(str, playing) {
    
    output.textContent = str + ' Select another option to play again!'
    console.log('playing is' + playing)
    if (!(playing)) {
        roundNum = 1 
        playerScore = 0
        computerScore = 0
    } 
}

function computerSelection() {
    let array = ['Rock', 'Paper', 'Scissors']
    let rand = array[Math.floor(Math.random() * array.length)]
    return rand
}

function capitalizePlayerInput(playerSelection) {
    let transform = playerSelection.toLowerCase()
    let nameCapitalized = transform.charAt(0).toUpperCase() + transform.slice(1)
    return nameCapitalized
}


// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

// Step 1 - write a function called game() that takes one parameter 

// Step 2 - call the playRound function & if player wins - add 1 point to playerScore variable, if the computer wins add 1 point to computerScore variable and if it's a draw don't add any points to either. 

// Step 3 - create a for loop that will keep track of the gameCount - & end once 5 rounds have been played

// Step 3 - call the playRound function 5 times, adding the score each time & finally if playerScore > computerScore output 'player wins' ELSE if computerScore > playerScore output 'computer wins'. If playerScore && computerScore are equal then output 'It's a draw, try again'. 