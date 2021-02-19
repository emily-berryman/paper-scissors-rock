

function playRound(playerC, computerChoice){
    let playerChoice = capitalizePlayerInput(playerSelection)

    if (playerChoice == computerChoice){
        console.log('It\'s a draw, try again!')}
        
    else if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock')){
    console.log('Congrats, you win!')
    } 
    else ((playerChoice == 'Rock' && computerChoice == 'Paper') || (playerChoice == 'Scissors' && computerChoice == 'Rock') || (playerChoice == 'Paper' && computerChoice == 'Scissors')){
    console.log('Oh no, you lose!')
    } 

 }


function computerSelection()  {
let array = ['Rock', 'Paper', 'Scissors']
let rand = array[Math.floor(Math.random() * array.length)]
return rand
}

let playerSelection = 'Paper'

function capitalizePlayerInput (playerSelection) {
    let transform = playerSelection.toLowerCase()
    let nameCapitalized = transform.charAt(0).toUpperCase() + transform.slice(1)
    console.log(nameCapitalized)
    return nameCapitalized
}
