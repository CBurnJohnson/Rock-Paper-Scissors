let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumer = Math.floor(Math.random() * 3);
    return choices[randomNumer];
}

function convertToCapital(word) {
    if (word === "rock") {
        return "Rock";
    }
    if (word === "paper") {
        return "Paper";
    }
    else return "Scissors";
}

function win(userChoice, compChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToCapital(userChoice)}${smallUser} beats ${convertToCapital(compChoice)}${smallComp}. You won!`;
    scoreBoard_div.classList.add('green-glow');
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { scoreBoard_div.classList.remove('green-glow'); }, 500);
    setTimeout( () => userChoice_div.classList.remove('green-glow'), 500)
}

function lose(userChoice, compChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;    
    result_p.innerHTML = `${convertToCapital(userChoice)}${smallUser} loses to ${convertToCapital(compChoice)}${smallComp}. You lost...`;
    scoreBoard_div.classList.add('red-glow');
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { scoreBoard_div.classList.remove('red-glow'); }, 500);
    setTimeout( () => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, compChoice) {   
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToCapital(userChoice)}${smallUser} and ${convertToCapital(compChoice)}${smallComp}. It's a draw!`;
    scoreBoard_div.classList.add('gray-glow');
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { scoreBoard_div.classList.remove('gray-glow'); }, 500);
    setTimeout( () => userChoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + " " + compChoice){
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            win(userChoice, compChoice);
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            lose(userChoice, compChoice);
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener("click", function() {
        game("rock");
    })
    
    paper_div.addEventListener("click", function() {
        game("paper");
    })
    
    scissors_div.addEventListener("click", function() {
        game("scissors");
    })
}

main();