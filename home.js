let userChoice;
let computerChoice;
let result;
let ranNum;
let userScore = 0;
let computerScore = 0;
let isGameOver = false;

const displayResult = document.getElementById('result');
const computerPick = document.getElementById('compChoice');
const userPick = document.getElementById('userChoice');
const possibleChoices = document.querySelectorAll('.options3');
const pScore = document.getElementById('p-score');
const cScore = document.getElementById('c-score');
const matchList = document.getElementById('match-list');
const playerList = document.querySelector('#player-list');
const compList = document.querySelector('#comp-list');
const playAgainButton = document.getElementById('playAgain');
const muteButton = document.getElementById('muteButton');
const resetButton = document.getElementById('resetGameButton');
const bgMusic = document.getElementById('bgMusic');

let isMuted = false;

muteButton.addEventListener('click', toggleMute);
resetButton.addEventListener('click', resetGame);

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', handleChoice));

function handleChoice(e) {
    if (isGameOver) return;

    userChoice = e.target.id;
    ranNum = Math.floor(Math.random() * 3) + 1;
    generateCompChoice();
    compareChoices();

    computerPick.innerHTML = `<img class="animate__animated animate__bounceIn" width="250" height="250" src="/images/${computerChoice}.png">`;

    userPick.innerHTML = `<img class="animate__animated animate__bounceIn" width="250" height="250" src="/images/${userChoice}.png">`;
    // displayResult.innerHTML = result;

    // if (userScore === 3 || computerScore === 3) {
    //     handleGameOver();
    // }
    // Update the result, score display, and match history
    displayResult.innerText = result;
    updateScoreDisplay();
   

    if (userScore === 3 || computerScore === 3) {
        handleGameOver();
    }

    updateScoreDisplay();
    if (!isGameOver) {
        updateMatchHistory();
    }
}

function handleGameOver() {  
  isGameOver = true;
  const message = userScore === 3 ? `You Win!!! Amazing =) ` : `Game Over, You Lose !!! Try Again Next Time =(`;
  updateScoreDisplay();  // Update the score display
  updateMatchHistory();  // Update the match history
  displayResult.innerText = result;  // Update the result display


  bgMusic.pause();
  // Optionally, you can reset the background music to the beginning
  bgMusic.currentTime = 0;
 

  alert(message);
  playGameOverSound();
  document.getElementById('playAgain').style.display = 'block';  
}

// function handleGameOver() {
//     isGameOver = true;
//     const message = userScore === 3 ? "You Are The Winner" : "Game Over, You Lose!!!";
//     alert(message);
//     playGameOverSound();
//     document.getElementById('playAgain').style.display = 'block';  
// }

function generateCompChoice() {
    if (ranNum === 1) {
        computerChoice = 'rock';
    } else if (ranNum === 2) {
        computerChoice = 'paper';
    } else if (ranNum === 3) {
        computerChoice = 'scissors';
    }
}

function compareChoices() {
    if (userChoice === computerChoice) {
        result = "It's a Tie !!!";
    } else if (
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors')
    ) {
        result = "YOU WIN !!!";
        userScore++;
    } else {
        result = "You lose !!!";
        computerScore++;
    }
}



function updateScoreDisplay() {
  pScore.innerText = userScore;
  cScore.innerText = computerScore;
}

function updateMatchHistory() {
  let userChoiceImage = new Image();
  userChoiceImage.src = `/images/${userChoice}.png`;
  userChoiceImage.width = 50;
  userChoiceImage.height = 50;
  userChoiceImage.onload = function () {
      let plist = createListItem(userChoiceImage);
      playerList.appendChild(plist);
  };

  let computerChoiceImage = new Image();
  computerChoiceImage.src = `/images/${computerChoice}.png`;
  computerChoiceImage.width = 50;
  computerChoiceImage.height = 50;
  computerChoiceImage.onload = function () {
      let clist = createListItem(computerChoiceImage);
      compList.appendChild(clist);
  };

  let list = document.createElement('div');
  list.innerHTML = `${result}<hr>`;
  list.style.fontSize = "large";
  list.style.marginTop = "2.40rem";
  matchList.appendChild(list);

  matchList.scrollTop = matchList.scrollHeight;
}


function createListItem(imageElement) {
    let item = document.createElement('li');
    item.appendChild(imageElement);
    item.innerHTML += "<hr>";
    item.style.listStyleType = "none";
    return item;
}

function playGameOverSound() {
    const gameOverSound = document.getElementById('gameOverSound');
    gameOverSound.play();
}


function resetGame() {
    userScore = 0;
    computerScore = 0;
    pScore.innerText = '0';
    cScore.innerText = '0';
    matchList.innerHTML = '';
    playerList.innerHTML = '';
    compList.innerHTML = '';
    displayResult.innerText = ''; 

    // Reset other game-related elements as needed
    isGameOver = false;
    // playAgainButton.style.display = 'none';
    displayResult.innerText = '';

    // Stop the game over sound if it's playing
    const gameOverSound = document.getElementById('gameOverSound');
    gameOverSound.pause();
    gameOverSound.currentTime = 0;

    // Restart background music if it was muted
    bgMusic.muted = isMuted;
    bgMusic.play();
}

function toggleMute() {
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';

    if (isMuted) {
        bgMusic.pause();
    } else {
        bgMusic.play();
    }
}
