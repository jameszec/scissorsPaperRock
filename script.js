function computer() {
    selection = Math.floor(Math.random() * 3);
    return selection;
}

// 0 = rock
// 1 = paper
// 2 = scissors

let playerScore = 0;
let computerScore = 0;

const playerScoreNum = document.querySelector(".playerScoreNum");
playerScoreNum.innerHTML = playerScore;

const computerScoreNum = document.querySelector(".computerScoreNum");
computerScoreNum.innerHTML = computerScore;

const playerResult = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult")

const endOfGame = document.querySelector("body");

function bestOfFive(button) {
        let playerSelection = (button.target.id);

        const choice = document.createElement('div');
        choice.textContent = playerSelection;
        playerResult.append(choice);

        let computerSelection = computer();

        if (computerSelection == 0) {
            const rock = document.createElement('div');
            rock.textContent = "rock";
            computerResult.append(rock);
        }
        if (computerSelection == 1) {
            const paper = document.createElement('div');
            paper.textContent = "paper";
            computerResult.append(paper);
        }
        if (computerSelection == 2) {
            const scissors = document.createElement('div');
            scissors.textContent = "scissors";
            computerResult.append(scissors);
        }
        
        if (playerSelection == "rock") {
            if (computerSelection == 1) {
                computerScore = computerScore + 1;
                computerScoreNum.innerHTML = computerScore;
            }
            if (computerSelection == 2) {
                playerScore = playerScore + 1;
                playerScoreNum.innerHTML = playerScore;
            }
        }
        if (playerSelection == "paper") {
            if (computerSelection == 2) {
                computerScore = computerScore + 1;
                computerScoreNum.innerHTML = computerScore;
            }
            if (computerSelection == 0) {
                playerScore = playerScore + 1;
                playerScoreNum.innerHTML = playerScore;
            }
        }
        if (playerSelection == "scissors") {
            if (computerSelection = 0) {
                computerScore = computerScore + 1;
                computerScoreNum.innerHTML = computerScore;
            }
            if (computerSelection = 1) {
                playerScore = playerScore + 1;
                playerScoreNum.innerHTML = playerScore;
            }
        }
    if (playerScore == 3) {
        alert("you win");
        const restart = document.createElement('button');
        restart.textContent = "restart";
        restart.classList.add('restartButton');
        endOfGame.append(restart);
    }
    if (computerScore == 3) {
        alert("you lose");
        const restart = document.createElement('button');
        restart.textContent = "restart";
        restart.classList.add('restartButton');
        endOfGame.append(restart);
    }
    
}


const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', bestOfFive);
});





