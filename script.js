let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let character = ['rock', 'paper', 'scissors'];
    return character[Math.floor(Math.random() * character.length)];
};

function getHumanChoice() {
    let userChoosedCharacter = prompt('Choose between rock, paper, and scissors.');
    while (true) {
        if (userChoosedCharacter) {
            userChoosedCharacter = userChoosedCharacter.toLowerCase();
            if (userChoosedCharacter !== 'rock'
                && userChoosedCharacter !== 'paper'
                && userChoosedCharacter !== 'scissors'
            ) {
                userChoosedCharacter = prompt('Please enter a valid choice. (rock, paper ,scissors)');
            } else {
                return userChoosedCharacter;
            }
        } else {
            return null;
        }
    }
};

function playGame() {

    function playPound(humanChoice, computerChoice) {
        if (!humanChoice) {
            return console.log('You did not enter any choices. Refresh the page for the new game.')
        } else if (humanChoice === computerChoice) {
            console.log('Tie');
            console.log(`Player score ${humanScore} : Computer score ${computerScore}`);

        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
            console.log(`Player score ${humanScore} : Computer score ${computerScore}`);
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
            console.log(`Player score ${humanScore} : Computer score ${computerScore}`);
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
            console.log(`Player score ${humanScore} : Computer score ${computerScore}`);
        } else {
            computerScore++;
            console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
            console.log(`Player score ${humanScore} : Computer score ${computerScore}`);
        }
    };
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playPound(humanSelection, computerSelection);
        if (!humanSelection) {
            return;
        }
    }
    console.log(
        humanScore > computerScore
            ? 'Congratulations! You won this round.'
            : humanScore < computerScore
                ? 'Oh no, you lost this round. Maybe next time.'
                : 'Tie. There is no winner this time.'
    );
};

playGame();
