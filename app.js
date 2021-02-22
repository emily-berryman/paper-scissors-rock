let playerScore = 1
let computerScore = 1
let roundNum = 1

function playRound(computerChoice) {

     
    let playerSelection = prompt('Paper, Scissors or Rock?')
    let playerChoice = capitalizePlayerInput(playerSelection)

    console.log('computer selection is ' + computerChoice)
    console.log('player selection is ' + playerSelection)

    
    if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock' && (computerScore <= 5 || playerScore <= 5))
    ) {
        playerScore++
        console.log('You won this round!')
        if (playerScore == 5) {
            return 'You WON! You got 5 points :))'
        
            // let newGame = confirm('Would you like to play another round???')
            // if (newGame){
            // return console.log('will restart')} else {
            //     return
            // }
        }
        roundNum++
    }
    else if ((playerChoice == 'Rock' && computerChoice == 'Paper') || (playerChoice == 'Scissors' && computerChoice == 'Rock') || (playerChoice == 'Paper' && computerChoice == 'Scissors' && (computerScore <= 5 || playerScore <= 5))
    ) {
        computerScore++
        console.log('Oh no, you lost this round!')
        if (computerScore == 5){
            return 'Computer WON! Better luck next time'
           
            // let newGame = confirm('Would you like to play another round???')
            // if (newGame){
            // return console.log('will restart')} 
            // else {
            //     return
            // }
        }
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

function computerSelection() {
    let array = ['Rock', 'Paper', 'Scissors']
    let rand = array[Math.floor(Math.random() * array.length)]
    return rand
}

function capitalizePlayerInput(playerSelection) {
    let transform = playerSelection.toLowerCase()
    let nameCapitalized = transform.charAt(0).toUpperCase() + transform.slice(1)
    console.log(nameCapitalized)
    return nameCapitalized
}

function game(computerChoice) {
    console.log('back to the game function)')
    if (computerScore && playerScore < 5){
        playRound(computerChoice)
    } else {
        return 'Thanks for playing'
    }
    
    // for(let i = 0; computerScore || playerScore < 5; i++) {
    //         console.log('I have come back to the game function ...')
    //         playRound(computerChoice)
    //     }
    // let newGame = prompt('Enter Yes if you\'d like to play another round?')
    // // if (newGame = 'Yes'){
    //     return 'Great - click the button to start again'
    // } else ('Ok, hope to see you again soon')
}

function resetGame() {
   playerScore = 0
   computerScore = 0
   roundNum = 1
}



// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

// Step 1 - write a function called game() that takes one parameter 

// Step 2 - call the playRound function & if player wins - add 1 point to playerScore variable, if the computer wins add 1 point to computerScore variable and if it's a draw don't add any points to either. 

// Step 3 - create a for loop that will keep track of the gameCount - & end once 5 rounds have been played

// Step 3 - call the playRound function 5 times, adding the score each time & finally if playerScore > computerScore output 'player wins' ELSE if computerScore > playerScore output 'computer wins'. If playerScore && computerScore are equal then output 'It's a draw, try again'. 