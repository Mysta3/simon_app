console.log('server started');
//SELECTED ELEMENTS
const startButton = document.querySelector('.start-panel');
const gamePanel = document.querySelector('.game-panel');
const gameOverPanel = document.querySelector('.gameOver');
const colorsArray = document.querySelectorAll('.color');
const instructions = document.querySelector('.instructions');
const hiddenInstructions = document.querySelector('.lists');
const colorCube = document.querySelector('.colorCube');
let computerArr = []; //computer's Array
let userColorPicks = []; //user's array

//HIDDEN CONTENT
gamePanel.style.opacity = 0;
gameOverPanel.style.opacity = 0;

//EVENT LISTENERS
instructions.addEventListener('click', showInstructions);
startButton.addEventListener('click', startGame);
gamePanel.addEventListener('click', userInput);

//FUNCTIONS SECTION
function showInstructions() {
  hiddenInstructions.classList.toggle('hide');
}

//INITIALIZE GAME
function startGame() {
  startButton.style.opacity = 0;
  gamePanel.style.opacity = 1; //change game-panel to opacity 1
  gameOverPanel.style.opacity = 0;
  instructions.style.opacity = 1;
  emptyArrays();
  randomize();
}

//RANDOMIZE COLOR & PUSH TO COMPUTERARRAY
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
    //Dan Fruth helped me with the time variable & wrapping another setTimeout function.

    // let color = colorIndex; //target innerText
    setTimeout(() => {
      setTimeout(() => {
        colorCube.classList.add(`glowEffect${colorIndex}`);
        setTimeout(() => {
          //if glow is on turn off glow
          colorCube.classList.remove(`glowEffect${colorIndex}`);
        }, 300);
      }, 200);
    }, time * 1000);
  });
}

//POSSIBLE REFACTOR
//create variable, upper, to hold uppercase letter
//create uppercase color word
//if hasColor === hasColor
//then push hasColor
//interpellate uppervariable with glowEffect

//User click > Color Lights Up
function userInput(evt) {
  let colorDiv = evt.target;
  let hasColor = colorDiv.dataset.color;

  if (hasColor) {
    if (hasColor === 'black') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectBlack`);

      setTimeout(() => {
        colorDiv.classList.remove('glowEffectBlack');
      }, 200);
    } else if (hasColor === 'green') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectGreen`);

      setTimeout(() => {
        colorDiv.classList.remove(`glowEffectGreen`);
      }, 200);
    } else if (hasColor === 'orange') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectOrange`);

      setTimeout(() => {
        colorDiv.classList.remove(`glowEffectOrange`);
      }, 200);
    } else if (hasColor === 'purple') {
      userColorPicks.push(hasColor);
      colorDiv.classList.add(`glowEffectPurple`);

      setTimeout(() => {
        colorDiv.classList.remove(`glowEffectPurple`);
      }, 200);
    }
  }
  //Prevents CheckFunc from running until after user makes pics.
  if (computerArr.length === userColorPicks.length) {
    checkFunc();
  }
}

//CHECKING FUNCTION
function checkFunc() {
  //JENNIFER HELPED ME WITH ADDING isGameOver variable.
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

//EMPTY ARRAYS
function emptyArrays() {
  computerArr = []; //empty current Array
  userColorPicks = []; //empty current Array
}
