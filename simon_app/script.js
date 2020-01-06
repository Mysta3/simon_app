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

//Colors Light Up
//add click event to to game-panel
gamePanel.addEventListener('click', colorLightUp);

//box-shadow: h-offset, v-offset, blur, spread, color
function colorLightUp(evt) {
  let colorDiv = evt.target;
  let hasColor = colorDiv.dataset.color;
  if (hasColor) {
    colorDiv.style.boxShadow = ` 0px 0px 30px 10px ${hasColor}`;
    console.log(hasColor);
  }
}
