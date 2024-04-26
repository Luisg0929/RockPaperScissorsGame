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
    /*for (let i = 0; i <= 4; i++){
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
    */


}





//playGame();

const btn1 = document.querySelector('.rock');
btn1.addEventListener('click', () => {
    
    let playerChoice = 'rock';
    let computerChoice = getComputerChoice();

    

    if (computerChoice === 'rock') {
        const container = document.querySelector('.computerchoice-show-container');
        let img = document.createElement('img');
        img.classList = 'rock-computer'
        
        img.style.height = '200px'; 
        img.style.width = '200px'; 
        img.src = 'rock.jpg';
        img.alt = 'pic of a rock'
        container.appendChild(img); 

        const container2 = document.querySelector('.winner-container')
        const content = document.createElement('p');
        content.textContent = playRound(playerChoice,computerChoice);

        
        content.style.fontSize = '40px';
        content.style.fontWeight = 'bold';
        content.style.fontFamily = 'Georgia'; 
        content.style.textAlign = 'center'; 
        content.style.margin = '0';
        content.style.color = 'green';
        container2.appendChild(content);

        
        
       
    }
});




















const btn2 = document.querySelector('.paper');
btn2.addEventListener('click', () => {
    let playerChoice = 'paper';
    let computerChoice = getComputerChoice();

    alert(playRound(playerChoice,computerChoice));

});

const btn3 = document.querySelector('.scissors');
btn3.addEventListener('click', () => {
    let playerChoice = 'scissors';
    let computerChoice = getComputerChoice();

    alert(playRound(playerChoice,computerChoice));

});




