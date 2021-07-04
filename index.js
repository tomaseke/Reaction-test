const button = document.getElementById("button");
let start = 0;
let end = 0;
let numberOfClicks = 0;
let clickedSoon = false;
let timeout;
function timeoutFunc(){
  timeout = setTimeout(() => {
  changeBackground("green");
  start = new Date().getTime();
  numberOfClicks = 1;
}, Math.floor(Math.random() * 4000) + 1000);
};



function startGame(){

  if(button.style.background == "red") {
    clickedSoon = true;
    changeBackground("blue");
    button.innerHTML = "Too soon fucker, slowly slowly catchy monkey.<br> Click to try again!";
    clearTimeout(timeout);
  }

  if(!clickedSoon){
    
    if(numberOfClicks == 0){
    changeBackground("red");
    button.innerHTML = "";
    timeoutFunc();
    }

    if(numberOfClicks == 1 && button.style.background != "red"){
      end = new Date().getTime();
      changeBackground("blue");
      button.innerHTML = `Your time is ${end - start}ms, click again to restart.`
      numberOfClicks = 0;
    }


}
clickedSoon = false;
}


function changeBackground(color){
  button.style.background = color;
}

button.onclick = startGame;

