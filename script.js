console.log('server started');
//select button.
const startButton = document.querySelector('.start-panel');
const gamePanel = document.querySelector('.game-panel');
const gameOverPanel = document.querySelector('.gameOver');
const colorsArray = document.querySelectorAll('.color');
const instructions = document.querySelector('.instructions');
const hiddenInstructions = document.querySelector('.lists');
let computerArr = []; //computer's Array
let userColorPicks = []; //user's array

gamePanel.style.opacity = 1;
gameOverPanel.style.opacity = 1;

instructions.addEventListener('click', showInstructions);
startButton.addEventListener('click', startGame);
gamePanel.addEventListener('click', userInput);

function showInstructions() {
  hiddenInstructions.classList.toggle('hide');
}

function startGame() {
  startButton.style.opacity = 0;
  gamePanel.style.opacity = 1; //change game-panel to opacity 1
  gameOverPanel.style.opacity = 0;
  randomize();
}

//randomize color & push to computerArray
function randomize() {
  // console.log('randomize func');
  // reference: https://medium.com/@fyoiza/how-to-randomize-an-array-in-javascript-8505942e452
  let ranNum = Math.floor(Math.random() * colorsArray.length); //produce random index
  let colors = colorsArray[ranNum];
  let colorName = colors.innerText;
  computerArr.push(colorName);
  //reference end//
  console.log(computerArr);
  //initiates glow
  computerArr.forEach(function(colorIndex, time) {
    console.log(time);
    let color = colorIndex; //target innerText
    setTimeout(() => {
      setTimeout(() => {
        colors.classList.toggle(`glowEffect${color}`);
        setTimeout(() => {
          //if glow is on turn off glow
          colors.classList.toggle(`glowEffect${color}`);
        }, 500);
      }, 1000);
    }, time * 1000);
  });
}

//User click, lights up color
function userInput(evt) {
  let colorDiv = evt.target;
  let hasColor = colorDiv.dataset.color;

  if (hasColor) {
    console.log('user input func');
    if (hasColor === 'black') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectBlack`);
      checkFunc();
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectBlack')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    } else if (hasColor === 'green') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectGreen`);
      checkFunc();
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectGreen')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    } else if (hasColor === 'orange') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectOrange`);
      checkFunc();
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectOrange')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    } else if (hasColor === 'purple') {
      userColorPicks.push(hasColor);
      colorDiv.classList.toggle(`glowEffectPurple`);
      checkFunc();
      setTimeout(() => {
        if (colorDiv.classList.toggle('glowEffectPurple')) {
          colorDiv.classList.toggle('glowOff');
        }
      }, 500);
    }
    //place push array outside of inside if
    //if length equals each other
    //then run checkfunc
  }
  console.log(userColorPicks);
} //end of userInput Function

function checkFunc() {
  // console.log(userColorPicks);
  // console.log(computerArr);
  // console.log('checkFunc');
  if (userColorPicks.length === computerArr.length) {
    for (let i = 0; i < computerArr.length; i++) {
      for (let x = 0; x < userColorPicks.length; x++) {
        if (computerArr[i].toLowerCase() === userColorPicks[x].toLowerCase()) {
          // console.log(computerArr[i].toLowerCase());
          // console.log(userColorPicks[x].toLowerCase());
        } else {
          gameOver();
        }
      }
    }
    // randomize();
  }
}

//GAME OVER FUNCTION
function gameOver() {
  console.log('game over!');
  startButton.style.opacity = 1;
  gamePanel.style.opacity = 0; //change game-panel to opacity 1
  gameOverPanel.style.opacity = 1;
  instructions.style.opacity = 0;
  if (computerArr.length > 0) {
    computerArr = []; //empty current Array
  }
  if (userColorPicks.length > 0) {
    userColorPicks = []; //empty current Array
  }
}
