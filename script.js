function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    //console.log(getRandomValue);
    if (getRandomValue <= 0.33) {
        //console.log(rock);
        return rock;
    } else if (getRandomValue <= 0.66) {
        //console.log(paper);
        return paper;
    } else {
        //console.log(scissors);
        return scissors;
    }
}

function playRound(firstLetterCap, computerSelection) {
    let tie = "It's a Tie! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
    let paperBeatRock = "You Win!  You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
    let scissorsBeatPaperLoss = "You lose!  You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
    let paperBeatRockLoss = "You lose!  You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
    let rockBeatScissors = "You Win!  You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
    let rockBeatScissorsLoss = "You lose!  You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
    let scissorsBeatPaper = "You Win!  You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";

    if (firstLetterCap === computerSelection) {
        return tie;
    } else if ((firstLetterCap === "Paper") && (computerSelection === "Rock")) {
        return paperBeatRock;
    } else if ((firstLetterCap === "Paper") && (computerSelection === "Scissors")) {
        return scissorsBeatPaperLoss;
    } else if ((firstLetterCap === "Rock") && (computerSelection === "Paper")) {
        return paperBeatRockLoss;
    } else if ((firstLetterCap === "Rock") && (computerSelection === "Scissors")) {
        return rockBeatScissors;
    } else if ((firstLetterCap === "Scissors") && (computerSelection === "Rock")) {
        return rockBeatScissorsLoss;
    } else {
    return scissorsBeatPaper;
    }
}

// function to format/capitalize the input
function capitalize(playerSelection) {
    let allLowerCase = playerSelection.toLowerCase();
    let firstLetterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
    //console.log(firstLetterCap);
    return firstLetterCap;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(capitalize(playerSelection), computerSelection));