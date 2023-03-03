let playAGame = confirm ("Shall we play rock, paper, or scissors");

if (playAGame) {
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice;
        if (playerOne === "rock" 
        || playerOne === "paper" 
        || playerOne === "scissors") {
            
            let computerChoice = Math.floor(Math.random() * 3) + 1;
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            :"scissors";
            let result =
            playerOne === computer
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nTie game!`
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`; 
                alert(result);
                let playAgain = confirm("Play Again?");
                playAgain ? location.reload() : alert("Ok, thanks for playing");
        } else {
            alert("you didn't enter rock, paper, scissors");
        }
    } else {
        let response = confirm ("I guess you changed your mind. Maybe next time.");
        if (response) {
            
        } else {
            location.reload()
        }
    }
} else {
    alert ("Ok, maybe next time.");
}
