// Variables declaration and initialization:
let humanScore = 0, computerScore = 0;

// The function to return choice made by Computer
function getComputerChoice(){
    let random3 = Math.floor((Math.random()*3))+1;
    if (random3 === 1){
        return "Rock";
    } else if (random3 === 2){
        return "Paper";
    } else if (random3 === 3){
        return "Scissors";
    } else {
        console.log("Sorry! Couldn't make a choice.");
    }
}

// The function to return the choice of User
function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice: (Rock, Paper, Scissors)").toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    if ( humanChoice == "Rock" || humanChoice == "Paper" || humanChoice == "Scissors") {
        return humanChoice; 
    } else {
        alert("Invalid choice!");
    }
}

// The function to play a round and announce a winner! 
function playRound(humanChoice, computerChoice) {
    if (computerChoice == humanChoice) {
        console.log("It's a tie!");
    } else if (humanChoice == "Rock") {
        if (computerChoice == "Paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else {
            console.log("You Win! Rock beats Scissors!");
            humanScore++;
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else {
            console.log("You Win! Paper beats Rock!");
            humanScore++;
        }
    } else {
        if (computerChoice == "Rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else {
            console.log("You Win! Scissors beats Paper!");
            humanScore++;
        }
    } 
}

// Function to play the game: 
function playGame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);   
}

// Let's play the game!
console.log("You can make a case insensitive choice");
playGame();
playGame();
playGame();
playGame();
playGame();
console.log("Your score: " + humanScore);
console.log("Computer score: " + computerScore);