function getComputerChoice() {
    let list = ['rock', 'paper', 'scissors'];
    let choice = list[Math.floor(Math.random() * 3)];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection; 
    


    if (player === 'rock' && computerSelection === 'paper'){
        return "You Lose! Paper beats Rock"; 
    }
    else if (player === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats scissors';
    }
    else if (player === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'
    }
    else if (player === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'
    }
    else if (player === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'
    }
    else if (player === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper'
    }


    else {
         return 'Its a Tie! Both have selected the same thing!'
    }

}

function playGame() {
    for (let i = 0; i <= 4; i++){
        const playerSelection = prompt('Choose Rock, Paper or Scissors');
        let lowerStr = playerSelection.toLowerCase(); 
        if (lowerStr === 'rock' || lowerStr === 'paper' || lowerStr === 'scissors') {
            const computerSelection = getComputerChoice();
            console.log(playRound(lowerStr, computerSelection));
        }
        else {
            alert('Invalid Input! Please refresh page to re-run the game!!');
            continue;
        }
    }
}


//playGame();




