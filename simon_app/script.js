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
//add click event to to game-panel
gamePanel.addEventListener('click', colorOn);

function colorOn(evt) {
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
  } else if (hasColor === 'green') {
    colorDiv.classList.toggle(`glowEffectGreen`);
    setTimeout(() => {
      if (colorDiv.classList.toggle('glowEffectGreen')) {
        colorDiv.classList.toggle('glowOff');
      }
    }, 500);
    console.log(`You Clicked ${hasColor}`);
  } else if (hasColor === 'orange') {
    colorDiv.classList.toggle(`glowEffectOrange`);
    setTimeout(() => {
      if (colorDiv.classList.toggle('glowEffectOrange')) {
        colorDiv.classList.toggle('glowOff');
      }
    }, 500);
    console.log(`You Clicked ${hasColor}`);
  } else if (hasColor === 'purple') {
    colorDiv.classList.toggle(`glowEffectPurple`);
    setTimeout(() => {
      if (colorDiv.classList.toggle('glowEffectPurple')) {
        colorDiv.classList.toggle('glowOff');
      }
    }, 500);
    console.log(`You Clicked ${hasColor}`);
  }
} //end of colorOn Function
