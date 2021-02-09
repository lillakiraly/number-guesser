let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const randomNumber = Math.floor((Math.random() * 10));
    return randomNumber;
}

const compareGuesses = (userGuess,computerGuess,targetNumber) => {
    targetNumber = generateTarget();
    if (userGuess === computerGuess) {
        return true;
    }
    else if (Math.abs(targetNumber - userGuess) > Math.abs(targetNumber - computerGuess)) {
        return false;
    }
    else {
        return true;
    }
}

const updateScore = winner => {
    let humanScore = 0;
    let computerScore = 0;

    if (winner === 'human') {
        humanScore++;
    }
    else if (winner = 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    let currentRoundNumber;
    currentRoundNumber++;

}



