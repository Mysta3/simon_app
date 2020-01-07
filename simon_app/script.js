console.log('server started');

//Start Display

//select button.
const startButton = document.querySelector('.start-panel');
//select game-panel
const gamePanel = document.querySelector('.game-panel');

//when user clicks change start-panel to display: none
// startButton.addEventListener('click', startGame);
//3. change game-panel to display: inline-block or opacity 1.

//START GAME FUNCTION
//gamePanel.style.opacity = 0; //set opacity of game panel to 0.
function startGame(evt) {
  console.log(evt.target);

  if ((startButton.style.opacity = 1)) {
    startButton.style.opacity = 0;
    gamePanel.style.opacity = 1;
  }
}
/****************************************/

//USER INPUT Colors Light Up

let userColorPicks = [];
//add click event to to game-panel
gamePanel.addEventListener('click', userInput);

function userInput(evt) {
  let colorDiv = evt.target;
  let hasColor = colorDiv.dataset.color;
  // let glowEffect = ` 0px 0px 30px 10px ${hasColor}`; May use later.

  if (hasColor === 'black') {
    colorDiv.classList.toggle(`glowEffectBlack`);
    setTimeout(() => {
      if (colorDiv.classList.toggle('glowEffectBlack')) {
        colorDiv.classList.toggle('glowOff');
      }
    }, 500);
    console.log(`You Clicked ${hasColor}`);
    userColorPicks.push(hasColor);
  } else if (hasColor === 'green') {
    colorDiv.classList.toggle(`glowEffectGreen`);
    setTimeout(() => {
      if (colorDiv.classList.toggle('glowEffectGreen')) {
        colorDiv.classList.toggle('glowOff');
      }
    }, 500);
    console.log(`You Clicked ${hasColor}`);
    userColorPicks.push(hasColor);
  } else if (hasColor === 'orange') {
    colorDiv.classList.toggle(`glowEffectOrange`);
    setTimeout(() => {
      if (colorDiv.classList.toggle('glowEffectOrange')) {
        colorDiv.classList.toggle('glowOff');
      }
    }, 500);
    console.log(`You Clicked ${hasColor}`);

    userColorPicks.push(hasColor);
  } else if (hasColor === 'purple') {
    colorDiv.classList.toggle(`glowEffectPurple`);
    setTimeout(() => {
      if (colorDiv.classList.toggle('glowEffectPurple')) {
        colorDiv.classList.toggle('glowOff');
      }
    }, 500);
    console.log(`You Clicked ${hasColor}`);
    userColorPicks.push(hasColor);
  }
  console.log(userColorPicks);
} //end of userInput Function

/*********************************************************/
//Game Logic

const colorsArray = document.querySelectorAll('.color');

// gameLogic();

function gameLogic() {
  //add divs to array
  let colorsArray = document.querySelectorAll('.color');
  // let randomNum = Math.floor(Math.random(1) * 4);
  // for (let i = 0; i < colorsArray.length; i++) {
  //   let randomArray = colorsArray[randomNum].push[i];
  //   console.log(randomArray);
  // }

  //iterate over array elements
  for (let i = 0; i < colorsArray.length; i++) {
    let colorIndex = colorsArray[i].innerText;
    //light up colors using setTimeout
    //if div is a certain color turn on glow
    if (colorIndex.toLowerCase() === 'black') {
      setTimeout(() => {
        colorsArray[i].classList.toggle('glowEffectBlack');
      }, 2000);

      setTimeout(() => {
        //if glow is on turn off glow
        if (colorsArray[i].classList.toggle('glowEffectBlack')) {
          colorsArray[i].classList.toggle('glowOff');
        }
      }, 3000);
    }

    if (colorIndex.toLowerCase() === 'green') {
      setTimeout(() => {
        colorsArray[i].classList.toggle('glowEffectGreen');
      }, 3000);

      setTimeout(() => {
        //if glow is on turn off glow
        if (colorsArray[i].classList.toggle('glowEffectGreen')) {
          colorsArray[i].classList.toggle('glowOff');
        }
      }, 4000);
    }

    if (colorIndex.toLowerCase() === 'orange') {
      setTimeout(() => {
        colorsArray[i].classList.toggle('glowEffectOrange');
      }, 5000);

      setTimeout(() => {
        //if glow is on turn off glow
        if (colorsArray[i].classList.toggle('glowEffectOrange')) {
          colorsArray[i].classList.toggle('glowOff');
        }
      }, 6000);
    }

    if (colorIndex.toLowerCase() === 'purple') {
      setTimeout(() => {
        colorsArray[i].classList.toggle('glowEffectPurple');
      }, 1000);

      setTimeout(() => {
        //if glow is on turn off glow
        if (colorsArray[i].classList.toggle('glowEffectPurple')) {
          colorsArray[i].classList.toggle('glowOff');
        }
      }, 2000);
    }
    // console.log(colorIndex.toLowerCase());
  }
}

//iterate over empty array
//store 1 element after iteration
//add glow effect to element in array
//remove glow effect to element in array
//check to see if user click matches element array order
//repeat steps 2 -5.
//if not display game over

//RANDOMIZE & add element to array FUNCTION
//create an array to hold colors

let count = 1;
let arr = []; //push to
// reference: https://medium.com/@fyoiza/how-to-randomize-an-array-in-javascript-8505942e452
randomize();
randomize();
function randomize() {
  for (let i = 0; i < count; i++) {
    let ranNum = Math.floor(Math.random() * colorsArray.length); //produce random index
    arr[i] = colorsArray[ranNum]; //push random index element to new array
    //reference end//

    let color = arr[i].innerText; //target innerText

    let lowerCase = color.toLowerCase(); //set string to lowercase

    //reference: https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
    let upperColor = lowerCase.charAt(0).toUpperCase() + lowerCase.substring(1); //combine upperCase letter with lowerCase word based off of substring
    //end reference

    setTimeout(() => {
      arr[i].classList.toggle(`glowEffect${upperColor}`); //turn glow on
    }, 1000);

    setTimeout(() => {
      //if glow is on turn off glow
      if (arr[i].classList.toggle(`glowEffect${upperColor}`)) {
        arr[i].classList.toggle(`glowOff`);
      }
    }, 500);
  }

  console.log(arr);
}

//GameOver function Logic
function gameOver() {
  let gameOverPanel = document.querySelector('.gameOver');
  gameOverPanel.style.opacity = 1;
  gamePanel.style.opacity = 0;
  arr = [];
}
