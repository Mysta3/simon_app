console.log('server started');
//select button.
const startButton = document.querySelector('.start-panel');
const gamePanel = document.querySelector('.game-panel');
const gameOverPanel = document.querySelector('.gameOver');
const colorsArray = document.querySelectorAll('.color');
let computerArr = []; //computer's Array
let userColorPicks = []; //user's array

gamePanel.style.opacity = 0;
gameOverPanel.style.opacity = 0;

startButton.addEventListener('click', startGame);
gamePanel.addEventListener('click', userInput);

function startGame() {
  startButton.style.opacity = 0;
  gamePanel.style.opacity = 1; //change game-panel to opacity 1
  randomize();
}

//randomize color & push to computerArray
function randomize() {
  console.log('randomize func');
  // reference: https://medium.com/@fyoiza/how-to-randomize-an-array-in-javascript-8505942e452
  let ranNum = Math.floor(Math.random() * colorsArray.length); //produce random index
  computerArr.push(colorsArray[ranNum]);
  //reference end//

  //initiates glow
  computerArr.forEach(function(colorIndex, time) {
    setTimeout(() => {
      let color = colorIndex.innerText; //target innerText
      setTimeout(() => {
        colorIndex.classList.toggle(`glowEffect${color}`);
      }, 1000);

      setTimeout(() => {
        //if glow is on turn off glow
        colorIndex.classList.toggle(`glowEffect${color}`);
      }, 500);
    }, time * 1000);
  });
}

//User click, lights up color
function userInput(evt) {
  debugger;
  let colorDiv = evt.target;
  let hasColor = colorDiv.dataset.color;

  if (hasColor) {
    console.log('user input func');
    if (hasColor === 'black') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectBlack`);
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectBlack')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    } else if (hasColor === 'green') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectGreen`);
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectGreen')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    } else if (hasColor === 'orange') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectOrange`);
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectOrange')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    } else if (hasColor === 'purple') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectPurple`);
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectPurple')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    }
    console.log(userColorPicks);
    if (userColorPicks.length > 0) {
      checkFunc();
    }
  }
} //end of userInput Function

function checkFunc() {
  console.log('checkFunc');
  if (userColorPicks.length === computerArr.length) {
    for (let i = 0; i < computerArr.length; i++) {
      for (let x = 0; x < userColorPicks.length; x++) {
        if (computerArr[i] !== userColorPicks[x]) {
          gameOver();
        }
      }
    }
    // randomize();
  }
  console.log('time to randomize');
}

function gameOver() {
  console.log('game over!');
  if ((gameOverPanel.style.opacity = 0)) {
    startButton.style.opacity = 0;
    gamePanel.style.opacity = 0; //change game-panel to opacity 1
    gameOverPanel.style.opacity = 1;
  }
}
