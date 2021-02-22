// PAPER, SCISSORS, ROCK -- CONSOLE GAME

let playerScore = 0
let computerScore = 0
let roundNum = 1

// 1) Start by calling the game function & passing in the computerSelection() func 

// 2) This will then call the playRound func x 5 times which keeps a score & declares the overall winner when either the computer or player gets to 5 points 

// 3) Once the computer or player win the score is reset by the resetGame() & the player can play another round

// Having issue that once a match is won the game is reset but the game() func doesn't seem to running properly when called a 2nd time - i.e even though player & computerScore's are both 0 meaning the 1st if statement in the game() function should be true & run - the else statement keeps running instead

function game(computerChoice) {
    console.log('back to the game function')
    if ((computerScore && playerScore >= 0) && (computerScore && playerScore < 5)){
        playRound(computerChoice)
    } else {
        return 'Thanks for playing'
    }
}
function playRound(computerChoice) {

    let playerSelection = prompt('Paper, Scissors or Rock?')
    let playerChoice = capitalizePlayerInput(playerSelection)

    console.log('computer selection is ' + computerChoice)
    console.log('player selection is ' + playerSelection)

    if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock' && (computerScore <= 5 || playerScore <= 5))
    ) {
        playerScore++
        playerScore == 5 ? console.log('YOU WON THE GAME! Well done :))') && resetGame() : console.log('You won this round!')
        // if (playerScore == 5) {
        //     return 'You WON! You got 5 points :))'
        // }
        roundNum++
    }
    else if ((playerChoice == 'Rock' && computerChoice == 'Paper') || (playerChoice == 'Scissors' && computerChoice == 'Rock') || (playerChoice == 'Paper' && computerChoice == 'Scissors' && (computerScore <= 5 || playerScore <= 5))
    ) {
        computerScore++
        computerScore == 5 ? console.log('COMPUTER WON! Better luck next time!') && resetGame() : console.log('Oh no, you lost this round')
        roundNum++
    }
        
    else if (playerChoice == computerChoice) {
        console.log('It\'s a tie, try again!')
    }
    console.log('computerScore is ' + computerScore)
    console.log('playerScore is ' + playerScore)
    console.log('roundNum is ' + roundNum)
    game(computerChoice)

}

function resetGame() {
   playerScore = 0
   computerScore = 0
   roundNum = 1
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