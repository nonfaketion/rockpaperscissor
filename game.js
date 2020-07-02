
function computerPlay() {
    var num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: return "Rock"; break;
        case 1: return "Paper"; break;
        case 2: return "Scissor"; break;
    }

}
function playRound(playerSelection, ComputerSelection) {
    const gameresult = document.querySelector('#gameresult');
    const playerscore = document.querySelector('#playerscore');
    const computerscore = document.querySelector('#computerscore');
    if (playerSelection == ComputerSelection) {
        //console.log("Tie" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
        gameresult.textContent = "Tie! " + " You played " + playerSelection + " and Computer played " + ComputerSelection;
        playerscore.textContent = "Player Score: " + playerwin;
        computerscore.textContent = "Computer Score: " + computerwin;
    }
    if (playerSelection == "Paper") {
        if (ComputerSelection == "Scissor") {
            //console.log("you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "You lost! " + " You played " + playerSelection + " and Computer played " + ComputerSelection;
            computerwin++;
            playerscore.textContent = "Player Score: " + playerwin;
            computerscore.textContent = "Computer Score: " + computerwin;
        }
        else if (ComputerSelection == "Rock") {
            //console.log("you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "You win! " + " You played " + playerSelection + " and Computer played " + ComputerSelection;
            playerwin++;
            playerscore.textContent = "Player Score: " + playerwin;
            computerscore.textContent = "Computer Score: " + computerwin;
        }
    }
    if (playerSelection == "Rock") {
        if (ComputerSelection == "Paper") {
            //console.log("you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "You lost! " + " You played " + playerSelection + " and Computer played " + ComputerSelection;
            computerwin++;
            playerscore.textContent = "Player Score: " + playerwin;
            computerscore.textContent = "Computer Score: " + computerwin;
        }
        else if (ComputerSelection == "Scissor") {
            //console.log("you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "You win! " + " You played " + playerSelection + " and Computer played " + ComputerSelection;
            playerwin++;
            playerscore.textContent = "Player Score: " + playerwin;
            computerscore.textContent = "Computer Score: " + computerwin;
        }
    }
    if (playerSelection == "Scissor") {
        if (ComputerSelection == "Rock") {
            //console.log("you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "You lost! " + " You played " + playerSelection + " and Computer played " + ComputerSelection;
            computerwin++;
            playerscore.textContent = "Player Score: " + playerwin;
            computerscore.textContent = "Computer Score: " + computerwin;
        }
        else if (ComputerSelection == "Paper") {
            //console.log("you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "You win! " + " You played " + playerSelection + " and Computer played " + ComputerSelection;
            playerwin++;
            playerscore.textContent = "Player Score: " + playerwin;
            computerscore.textContent = "Computer Score: " + computerwin;
        }
    }

}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));
var playerwin = 0;
var computerwin = 0;

function game(e) {
        const cpval = computerPlay();
        const pval = e.path[0].textContent;
       // const pval = window.prompt('rock, paper, or scissor?');
        playRound(pval, cpval);

}