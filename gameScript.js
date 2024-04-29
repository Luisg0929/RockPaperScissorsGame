let playerScore = 0; 
let compScore = 0; 


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




const btn1 = document.querySelector('.rock');
btn1.addEventListener('click', () => {
    const checkNode = document.querySelector('.computerchoice-show-container');
    const checkNode2 = document.querySelector('.winner-container');
    if (checkNode.hasChildNodes() === true) {
        checkNode.innerHTML = ''; 
    }
    if (checkNode2.hasChildNodes() === true) {
        checkNode2.innerHTML = ''; 
    }

    
    let playerChoice = 'rock';
    let computerChoice = getComputerChoice();


    let winnerString = playRound(playerChoice,computerChoice);
    if (winnerString.includes("You Win! Rock beats scissors")) {
        playerScore++; 
        if (playerScore == 5) {
            let mainWinnerContainer = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent = document.createElement('h1');
            mainWinnerContainerContent.textContent = 'YOU WIN !!!!!'
            mainWinnerContainerContent.style.fontSize = '40px'; 
            mainWinnerContainerContent.style.color = 'blue'; 
            mainWinnerContainerContent.style.textAlign = 'center'; 
            mainWinnerContainer.appendChild(mainWinnerContainerContent);
            let button3_1 = document.querySelector('.rock');
            button3_1.setAttribute('disabled', '');

            let button3_2 = document.querySelector('.paper');
            button3_2.setAttribute('disabled', '');

            let button3_3 = document.querySelector('.scissors');
            button3_3.setAttribute('disabled', '');
            
        }
        else if (compScore == 5) {
            let mainWinnerContainer2 = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent2= document.createElement('h1');
            mainWinnerContainerContent2.textContent = 'YOU LOSE !!!!!'
            mainWinnerContainerContent2.style.fontSize = '40px'; 
            mainWinnerContainerContent2.style.color = 'blue'; 
            mainWinnerContainerContent2.style.textAlign = 'center'; 
            mainWinnerContainer2.appendChild(mainWinnerContainerContent2);
            let button2 = document.querySelector('.rock');
            button2.setAttribute('disabled', '');

            let button2_2 = document.querySelector('.paper');
            button2_2.setAttribute('disabled', '');

            let button2_3 = document.querySelector('.scissors');
            button2_3.setAttribute('disabled', '');
            
            
        }
        const scoreContainer = document.querySelector('.luis');
        if (scoreContainer.hasChildNodes() === true) {
            scoreContainer.innerHTML = '';
        }
        let scoreAdd = document.createElement('p');
        scoreAdd.textContent = `${playerScore}`;
        scoreAdd.style.margin = '0px';
        scoreAdd.style.paddingTop = '4px';
        scoreAdd.style.fontSize = '40px'; 
        scoreAdd.style.fontWeight = 'bold'; 
        scoreAdd.style.color = 'yellow'; 
        scoreContainer.appendChild(scoreAdd);

    }
    else if (winnerString.includes("You Lose! Paper beats Rock")) {
        compScore++; 
        if (playerScore == 5) {
            let mainWinnerContainer = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent = document.createElement('h1');
            mainWinnerContainerContent.textContent = 'YOU WIN !!!!!'
            mainWinnerContainerContent.style.fontSize = '40px'; 
            mainWinnerContainerContent.style.color = 'blue'; 
            mainWinnerContainerContent.style.textAlign = 'center'; 
            mainWinnerContainer.appendChild(mainWinnerContainerContent);
            let button4 = document.querySelector('.rock');
            button4.setAttribute('disabled', '');

            let button4_1 = document.querySelector('.paper');
            button4_1.setAttribute('disabled', '');

            let button4_2 = document.querySelector('.scissors');
            button4_2.setAttribute('disabled', '');
            
        }
        else if (compScore == 5) {
            let mainWinnerContainer2 = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent2= document.createElement('h1');
            mainWinnerContainerContent2.textContent = 'YOU LOSE !!!!!'
            mainWinnerContainerContent2.style.fontSize = '40px'; 
            mainWinnerContainerContent2.style.color = 'blue'; 
            mainWinnerContainerContent2.style.textAlign = 'center'; 
            mainWinnerContainer2.appendChild(mainWinnerContainerContent2);
            let button5 = document.querySelector('.rock');
            button5.setAttribute('disabled', '');

            let button5_1 = document.querySelector('.paper');
            button5_1.setAttribute('disabled', '');

            let button5_2 = document.querySelector('.scissors');
            button5_2.setAttribute('disabled', '');
            
            
        }
        const scoreContainer2 = document.querySelector('.josh');
        if (scoreContainer2.hasChildNodes() === true) {
            scoreContainer2.innerHTML = '';
        }
        let scoreAdd2 = document.createElement('p');
        scoreAdd2.textContent = `${compScore}`; 
        scoreAdd2.style.margin = '0px';
        scoreAdd2.style.paddingTop = '4px';
        scoreAdd2.style.fontSize = '40px'; 
        scoreAdd2.style.fontWeight = 'bold'; 
        scoreAdd2.style.color = 'yellow'; 

        scoreContainer2.appendChild(scoreAdd2);
    }

    

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
    else if (computerChoice === 'paper') {
        const container = document.querySelector('.computerchoice-show-container');
        let img = document.createElement('img');
        img.classList = 'paper-computer'
        
        img.style.height = '200px'; 
        img.style.width = '200px'; 
        img.src = 'paper.jpg';
        img.alt = 'pic of paper'
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

    else if (computerChoice === 'scissors') {
        const container = document.querySelector('.computerchoice-show-container');
        let img = document.createElement('img');
        img.classList = 'scissors-computer'
        
        img.style.height = '200px'; 
        img.style.width = '200px'; 
        img.src = 'scissors.jpg';
        img.alt = 'pic of scissors'
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
    const checkNode = document.querySelector('.computerchoice-show-container');
    const checkNode2 = document.querySelector('.winner-container');
    if (checkNode.hasChildNodes() === true) {
        checkNode.innerHTML = ''; 
    }
    if (checkNode2.hasChildNodes() === true) {
        checkNode2.innerHTML = ''; 
    }
    
    
    let playerChoice = 'paper';
    let computerChoice = getComputerChoice();



    let winnerString = playRound(playerChoice,computerChoice);
    if (winnerString.includes("You Win! Paper beats Rock")) {
        playerScore++; 
        if (playerScore == 5) {
            let mainWinnerContainer = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent = document.createElement('h1');
            mainWinnerContainerContent.textContent = 'YOU WIN !!!!!'
            mainWinnerContainerContent.style.fontSize = '40px'; 
            mainWinnerContainerContent.style.color = 'blue'; 
            mainWinnerContainerContent.style.textAlign = 'center'; 
            mainWinnerContainer.appendChild(mainWinnerContainerContent);
            let button3_1 = document.querySelector('.rock');
            button3_1.setAttribute('disabled', '');

            let button3_2 = document.querySelector('.paper');
            button3_2.setAttribute('disabled', '');

            let button3_3 = document.querySelector('.scissors');
            button3_3.setAttribute('disabled', '');
            
        }
        else if (compScore == 5) {
            let mainWinnerContainer2 = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent2= document.createElement('h1');
            mainWinnerContainerContent2.textContent = 'YOU LOSE !!!!!'
            mainWinnerContainerContent2.style.fontSize = '40px'; 
            mainWinnerContainerContent2.style.color = 'blue'; 
            mainWinnerContainerContent2.style.textAlign = 'center'; 
            mainWinnerContainer2.appendChild(mainWinnerContainerContent2);
            let button2 = document.querySelector('.rock');
            button2.setAttribute('disabled', '');

            let button2_2 = document.querySelector('.paper');
            button2_2.setAttribute('disabled', '');

            let button2_3 = document.querySelector('.scissors');
            button2_3.setAttribute('disabled', '');
            
            
        }
        const scoreContainer = document.querySelector('.luis');
        if (scoreContainer.hasChildNodes() === true) {
            scoreContainer.innerHTML = '';
        }
        let scoreAdd = document.createElement('p');
        scoreAdd.textContent = `${playerScore}`;
        scoreAdd.style.margin = '0px';
        scoreAdd.style.paddingTop = '4px';
        scoreAdd.style.fontSize = '40px'; 
        scoreAdd.style.fontWeight = 'bold';  
        scoreAdd.style.color = 'yellow'; 
        scoreContainer.appendChild(scoreAdd);

    }
    else if (winnerString.includes("You Lose! Scissors beats Paper")) {
        compScore++; 
        if (playerScore == 5) {
            let mainWinnerContainer = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent = document.createElement('h1');
            mainWinnerContainerContent.textContent = 'YOU WIN !!!!!'
            mainWinnerContainerContent.style.fontSize = '40px'; 
            mainWinnerContainerContent.style.color = 'blue'; 
            mainWinnerContainerContent.style.textAlign = 'center'; 
            mainWinnerContainer.appendChild(mainWinnerContainerContent);
            let button4 = document.querySelector('.rock');
            button4.setAttribute('disabled', '');

            let button4_1 = document.querySelector('.paper');
            button4_1.setAttribute('disabled', '');

            let button4_2 = document.querySelector('.scissors');
            button4_2.setAttribute('disabled', '');
            
        }
        else if (compScore == 5) {
            let mainWinnerContainer2 = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent2= document.createElement('h1');
            mainWinnerContainerContent2.textContent = 'YOU LOSE !!!!!'
            mainWinnerContainerContent2.style.fontSize = '40px'; 
            mainWinnerContainerContent2.style.color = 'blue'; 
            mainWinnerContainerContent2.style.textAlign = 'center'; 
            mainWinnerContainer2.appendChild(mainWinnerContainerContent2);
            let button5 = document.querySelector('.rock');
            button5.setAttribute('disabled', '');

            let button5_1 = document.querySelector('.paper');
            button5_1.setAttribute('disabled', '');

            let button5_2 = document.querySelector('.scissors');
            button5_2.setAttribute('disabled', '');
            
            
        }
        const scoreContainer2 = document.querySelector('.josh');
        if (scoreContainer2.hasChildNodes() === true) {
            scoreContainer2.innerHTML = '';
        }
        let scoreAdd2 = document.createElement('p');
        scoreAdd2.textContent = `${compScore}`; 
        scoreAdd2.style.margin = '0px';
        scoreAdd2.style.paddingTop = '4px';
        scoreAdd2.style.fontSize = '40px'; 
        scoreAdd2.style.fontWeight = 'bold'; 
        scoreAdd2.style.color = 'yellow'; 

        scoreContainer2.appendChild(scoreAdd2);
    }



























    

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
    else if (computerChoice === 'paper') {
        const container = document.querySelector('.computerchoice-show-container');
        let img = document.createElement('img');
        img.classList = 'paper-computer'
        
        img.style.height = '200px'; 
        img.style.width = '200px'; 
        img.src = 'paper.jpg';
        img.alt = 'pic of paper'
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

    else if (computerChoice === 'scissors') {
        const container = document.querySelector('.computerchoice-show-container');
        let img = document.createElement('img');
        img.classList = 'scissors-computer'
        
        img.style.height = '200px'; 
        img.style.width = '200px'; 
        img.src = 'scissors.jpg';
        img.alt = 'pic of scissors'
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

const btn3 = document.querySelector('.scissors');
btn3.addEventListener('click', () => {
    const checkNode = document.querySelector('.computerchoice-show-container');
    const checkNode2 = document.querySelector('.winner-container');
    if (checkNode.hasChildNodes() === true) {
        checkNode.innerHTML = ''; 
    }
    if (checkNode2.hasChildNodes() === true) {
        checkNode2.innerHTML = ''; 
    }
    
    
    let playerChoice = 'scissors';
    let computerChoice = getComputerChoice();


    let winnerString = playRound(playerChoice,computerChoice);
    if (winnerString.includes("You Win! Scissors beats Paper")) {
        playerScore++; 
        if (playerScore == 5) {
            let mainWinnerContainer = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent = document.createElement('h1');
            mainWinnerContainerContent.textContent = 'YOU WIN !!!!!'
            mainWinnerContainerContent.style.fontSize = '40px'; 
            mainWinnerContainerContent.style.color = 'blue'; 
            mainWinnerContainerContent.style.textAlign = 'center'; 
            mainWinnerContainer.appendChild(mainWinnerContainerContent);
            let button3_1 = document.querySelector('.rock');
            button3_1.setAttribute('disabled', '');

            let button3_2 = document.querySelector('.paper');
            button3_2.setAttribute('disabled', '');

            let button3_3 = document.querySelector('.scissors');
            button3_3.setAttribute('disabled', '');
            
        }
        else if (compScore == 5) {
            let mainWinnerContainer2 = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent2= document.createElement('h1');
            mainWinnerContainerContent2.textContent = 'YOU LOSE !!!!!'
            mainWinnerContainerContent2.style.fontSize = '40px'; 
            mainWinnerContainerContent2.style.color = 'blue'; 
            mainWinnerContainerContent2.style.textAlign = 'center'; 
            mainWinnerContainer2.appendChild(mainWinnerContainerContent2);
            let button2 = document.querySelector('.rock');
            button2.setAttribute('disabled', '');

            let button2_2 = document.querySelector('.paper');
            button2_2.setAttribute('disabled', '');

            let button2_3 = document.querySelector('.scissors');
            button2_3.setAttribute('disabled', '');
            
            
        }
        const scoreContainer = document.querySelector('.luis');
        if (scoreContainer.hasChildNodes() === true) {
            scoreContainer.innerHTML = '';
        }
        let scoreAdd = document.createElement('p');
        scoreAdd.textContent = `${playerScore}`;
        scoreAdd.style.margin = '0px';
        scoreAdd.style.paddingTop = '4px';
        scoreAdd.style.fontSize = '40px'; 
        scoreAdd.style.fontWeight = 'bold'; 
        scoreAdd.style.color = 'yellow'; 
        scoreContainer.appendChild(scoreAdd);

    }
    else if (winnerString.includes("You Lose! Rock beats Scissors")) {
        compScore++; 
        if (playerScore == 5) {
            let mainWinnerContainer = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent = document.createElement('h1');
            mainWinnerContainerContent.textContent = 'YOU WIN !!!!!'
            mainWinnerContainerContent.style.fontSize = '40px'; 
            mainWinnerContainerContent.style.color = 'blue'; 
            mainWinnerContainerContent.style.textAlign = 'center'; 
            mainWinnerContainer.appendChild(mainWinnerContainerContent);
            let button4 = document.querySelector('.rock');
            button4.setAttribute('disabled', '');

            let button4_1 = document.querySelector('.paper');
            button4_1.setAttribute('disabled', '');

            let button4_2 = document.querySelector('.scissors');
            button4_2.setAttribute('disabled', '');
            
        }
        else if (compScore == 5) {
            let mainWinnerContainer2 = document.querySelector('.main-winner-container');
            let mainWinnerContainerContent2= document.createElement('h1');
            mainWinnerContainerContent2.textContent = 'YOU LOSE !!!!!'
            mainWinnerContainerContent2.style.fontSize = '40px'; 
            mainWinnerContainerContent2.style.color = 'blue'; 
            mainWinnerContainerContent2.style.textAlign = 'center'; 
            mainWinnerContainer2.appendChild(mainWinnerContainerContent2);
            let button5 = document.querySelector('.rock');
            button5.setAttribute('disabled', '');

            let button5_1 = document.querySelector('.paper');
            button5_1.setAttribute('disabled', '');

            let button5_2 = document.querySelector('.scissors');
            button5_2.setAttribute('disabled', '');
            
            
        }
        const scoreContainer2 = document.querySelector('.josh');
        if (scoreContainer2.hasChildNodes() === true) {
            scoreContainer2.innerHTML = '';
        }
        let scoreAdd2 = document.createElement('p');
        scoreAdd2.textContent = `${compScore}`; 
        scoreAdd2.style.margin = '0px';
        scoreAdd2.style.paddingTop = '4px';
        scoreAdd2.style.fontSize = '40px'; 
        scoreAdd2.style.fontWeight = 'bold'; 
        scoreAdd2.style.color = 'yellow'; 


        scoreContainer2.appendChild(scoreAdd2);
    }



























    

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
    else if (computerChoice === 'paper') {
        const container = document.querySelector('.computerchoice-show-container');
        let img = document.createElement('img');
        img.classList = 'paper-computer'
        
        img.style.height = '200px'; 
        img.style.width = '200px'; 
        img.src = 'paper.jpg';
        img.alt = 'pic of paper'
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

    else if (computerChoice === 'scissors') {
        const container = document.querySelector('.computerchoice-show-container');
        let img = document.createElement('img');
        img.classList = 'scissors-computer'
        
        img.style.height = '200px'; 
        img.style.width = '200px'; 
        img.src = 'scissors.jpg';
        img.alt = 'pic of scissors'
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



const btn4 = document.querySelector('.reset-button');
btn4.addEventListener('click', () => {

    location.reload();

});




