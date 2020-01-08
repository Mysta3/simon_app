console.log('server started');
//select button.
const startButton = document.querySelector('.start-panel');
const gamePanel = document.querySelector('.game-panel');
const gameOverPanel = document.querySelector('.gameOver');
const colorsArray = document.querySelectorAll('.color');
const instructions = document.querySelector('.instructions');
const hiddenInstructions = document.querySelector('.lists');
const tester = document.querySelector('.tester');
let computerArr = []; //computer's Array
let userColorPicks = []; //user's array

gamePanel.style.opacity = 0;
gameOverPanel.style.opacity = 0;

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
  instructions.style.opacity = 1;
  emptyArrays();
  randomize();
}

//randomize color & push to computerArray
function randomize() {
  // reference: https://medium.com/@fyoiza/how-to-randomize-an-array-in-javascript-8505942e452
  let ranNum = Math.floor(Math.random() * colorsArray.length); //produce random index
  let colors = colorsArray[ranNum];
  let colorName = colors.innerText;
  computerArr.push(colorName);
  console.log(colors);
  //reference end//

  //initiates glow
  computerArr.forEach(function(colorIndex, time) {
    // console.log(colorIndex);

    // let color = colorIndex; //target innerText
    setTimeout(() => {
      setTimeout(() => {
        tester.classList.add(`glowEffect${colorIndex}`);
        setTimeout(() => {
          //if glow is on turn off glow
          tester.classList.remove(`glowEffect${colorIndex}`);
        }, 500);
      }, 300);
    }, time * 1000);
  });
}

//User click, lights up color
function userInput(evt) {
  let colorDiv = evt.target;
  let hasColor = colorDiv.dataset.color;

  if (hasColor) {
    if (hasColor === 'black') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectBlack`);
      // checkFunc();
      setTimeout(() => {
        colorDiv.classList.remove('glowEffectBlack');
      }, 500);
    } else if (hasColor === 'green') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectGreen`);
      // checkFunc();
      setTimeout(() => {
        colorDiv.classList.remove(`glowEffectGreen`);
      }, 500);
    } else if (hasColor === 'orange') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectOrange`);
      // checkFunc();
      setTimeout(() => {
        colorDiv.classList.remove(`glowEffectOrange`);
      }, 500);
    } else if (hasColor === 'purple') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectPurple`);
      // checkFunc();
      setTimeout(() => {
        colorDiv.classList.remove(`glowEffectPurple`);
      }, 500);
    }
  }
  // for (let i = 0; i < userColorPicks.length; i++) {
    if (computerArr.length === userColorPicks.length) {
    console.log(computerArr);
    console.log(userColorPicks);
    checkFunc();
    // }
  }

  // randomize();
} //end of userInput Function

function checkFunc() {
  let isGameOver = false;
  //reference https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
  for (let i = 0; i < computerArr.length; i++) {
    console.log(computerArr[i], userColorPicks[i]);
    if (computerArr[i].toLowerCase() !== userColorPicks[i].toLowerCase()) {
      console.log('Not equal!');
      isGameOver = true;
    }
  }
  if (isGameOver) {
    gameOver();
    return;
  }
  userColorPicks = [];
  randomize();
  // }
}

//GAME OVER FUNCTION
function gameOver() {
  emptyArrays();
  // console.log('game over!');
  startButton.style.opacity = 1;
  gamePanel.style.opacity = 0; //change game-panel to opacity 1
  gameOverPanel.style.opacity = 1;
  instructions.style.opacity = 0;
}

function emptyArrays() {
  computerArr = []; //empty current Array
  userColorPicks = []; //empty current Array
}
