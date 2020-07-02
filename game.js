
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

    if (playerSelection == ComputerSelection) {
        console.log("Tie" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
        gameresult.textContent = "Tie" + " you played " + playerSelection + " and Computer played " + ComputerSelection;
    }
    if (playerSelection == "Paper") {
        if (ComputerSelection == "Scissor") {
            console.log("you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection;
        }
        else if (ComputerSelection == "Rock") {
            console.log("you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection;
        }
    }
    if (playerSelection == "Rock") {
        if (ComputerSelection == "Paper") {
            console.log("you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection;
        }
        else if (ComputerSelection == "Scissor") {
            console.log("you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection;
        }
    }
    if (playerSelection == "Scissor") {
        if (ComputerSelection == "Rock") {
            console.log("you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "you lost" + " you played " + playerSelection + " and Computer played " + ComputerSelection;
        }
        else if (ComputerSelection == "Paper") {
            console.log("you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection);
            gameresult.textContent = "you win" + " you played " + playerSelection + " and Computer played " + ComputerSelection;
        }
    }

}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));

function game(e) {
        const cpval = computerPlay();
        const pval = e.path[0].textContent;
       // const pval = window.prompt('rock, paper, or scissor?');
        playRound(pval, cpval);

}