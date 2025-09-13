let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  }


function updateScoreElement(){
  
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

    // This is a global variable
function pickComputerMove(){
  const randomNumber = (Math.random());
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = '✊';
  }

  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = '✋';
  }




  else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = '✌️';
  }

  // return; // This returns a value 'undefined'
  return computerMove; // The 'return' is used to end a func as well
    }

function playgame(playerMove){

  const computerMove =  pickComputerMove();


    let result = '';
    if (playerMove === '✊'){
      if (computerMove === '✊'){
      result = 'Tie.';
      }

      else if (computerMove === '✋') {
        result = 'You lose.';
      }
      else if (computerMove === '✌️') {
        result = 'You win.'
      }
    }

    else if (playerMove === '✋'){
          if (computerMove === '✊'){
        result = 'You win.';
      }

      else if (computerMove === '✋') {
        result = 'Tie.';
      }
      else if (computerMove === '✌️') {
        result = 'You lose.'
      }

      }
    
    else if (playerMove === '✌️'){
      if (computerMove === '✊'){
        result = 'You lose.';
      }

      else if (computerMove === '✋') {
        result = 'You win.';
      }
      else if (computerMove === '✌️') {
        result = 'Tie.'
      }

    }

    if (result === 'You win.'){
      score.wins += 1
    }

    else if (result === 'You lose.'){
      score.losses += 1
    }

    else if (result === 'Tie.'){
      score.ties += 1
    }

  localStorage.setItem('score', JSON.stringify(score))

    
  updateScoreElement();

  document.querySelector('.js-playerResult').innerHTML = `${result}`

  

  document.querySelector('.js-results')
  .innerHTML = `You <span class ="emoji"> ${playerMove}</span>
    <span class ="emoji">${computerMove}</span> Computer`
}


function reset(){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
  localStorage.removeItem('score');
  updateScoreElement();
}

let isAutoPlaying = false;
let intervalId;

// const autoplay = () => {

// }

function autoplay(){
  if (!isAutoPlaying)// This checks if the auto play is off and flips it using '!'
  {
     intervalId = setInterval(() => {
    const playerMove = pickComputerMove() // To generate a playerMove automatically we can use the 'pickComputerMove' that generates a random move for the computer AS the playermove as well.
    playgame(playerMove); // So now we can play the game
  }, 1000);

  isAutoPlaying = true; // This now tells us that because we confirmed it was off to begin with, and we set the interval, now it is on.
  }


  // Okay so what happens is that when we now click the button again and call the function, what we are doing is checking if 'isAutoPlaying' is still off, if it is the interval will still run, but because it has been flipped to 'true' this tells it that it has changed and so the else statement runs 

  else {
    clearInterval(intervalId)
    isAutoPlaying = false;
  }
  
}


document.querySelector('.js-rock-button').addEventListener('click', ()=> {
  playgame('✊');
})

document.querySelector('.js-paper-button').addEventListener('click', ()=> {
  playgame('✋');
})


document.querySelector('.js-scissors-button').addEventListener('click', ()=> {
  playgame('✌️');
})


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    playgame('✊');
  }

  else if(event.key === 'p'){
    playgame('✋');
  }

  else if(event.key === 's'){
    playgame('✌️');
  }

  else {
    console.log(`${event.key} does not perform any action in the game`)
  }
  console.log('Keydown')
})