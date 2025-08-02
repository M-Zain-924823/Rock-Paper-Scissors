// Variables declaration and initialization:
let humanScore = 0, computerScore = 0;
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let winner = document.querySelector(".winner");
let humanColor = document.querySelector(".humanScore");
let computerColor = document.querySelector(".computerScore");

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
        alert("Sorry! Couldn't make a choice.");
    }
}

// The function to play a round and announce a winner! 
function playRound(humanChoice, computerChoice) {
    if (computerChoice == humanChoice) {
        print("It's a tie! ");
    } else if (humanChoice == "Rock") {
        if (computerChoice == "Paper") {
            print("You lose! Paper beats Rock! ");
            computerScore++;
        } else {
            print("You Win! Rock beats Scissors! ");
            humanScore++;
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            print("You lose! Scissors beats Paper! ");
            computerScore++;
        } else {
            print("You Win! Paper beats Rock! ");
            humanScore++;
        }
    } else {
        if (computerChoice == "Rock") {
            print("You lose! Rock beats Scissors! ");
            computerScore++;
        } else {
            print("You Win! Scissors beats Paper! ");
            humanScore++;
        }
    } 
}

// Check for user's choice 
buttons.forEach(button => {
    button.addEventListener("click", function(e){
        let computerChoice = getComputerChoice();
        winner.textContent = "Computer Choice: " + computerChoice;
        display.textContent = ""; // clear the display result div
        switch(e.target.id){
            case "rock":
                playRound("Rock", computerChoice);
                break;
            case "paper":
                playRound("Paper", computerChoice);
                break;
            case "scissors":
                playRound("Scissors", computerChoice);
                break;
            default: 
                alert("Something went wrong!");
        }
        whoseWinning();
        score();
        checkWinner();
    })
});

// Functions to display text and score
function print(text){
    display.textContent += text + " ";
}

function score(){
    document.querySelector(".humanScore").textContent = "Your score: " + humanScore;
    document.querySelector(".computerScore").textContent = "Computer score: " + computerScore;
}

// Other functions
function checkWinner(){
    if(humanScore === 5){
        restartGame(" Won ");
    } else if (computerScore === 5){
        restartGame(" Lose ");
    }
}

function restartGame(playerStatus){
    winner.textContent = "You" + playerStatus + "The Game!";
    humanScore = 0;
    computerScore = 0;
}

function whoseWinning(){
    if(humanScore > computerScore){
        humanColor.style.backgroundColor = "green";
        computerColor.style.backgroundColor = "red";
    } else if (computerScore > humanScore){
        humanColor.style.backgroundColor = "red";
        computerColor.style.backgroundColor = "green";
    } else {
        humanColor.style.backgroundColor = "green";
        computerColor.style.backgroundColor = "green";
    }
}