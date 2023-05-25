let playerWhiteTurn = true;
let playerBlackTurn = false;
let bTimer, wTimer;
let w = 1, b = 1;

let [Wmin, Wsec] = [10, 00];
let [Bmin, Bsec] = [10, 00];

let Bminutes = document.querySelector(".Bminutes");
let Bseconds = document.querySelector(".Bseconds");
let Wminutes = document.querySelector(".Wminutes");
let Wseconds = document.querySelector(".Wseconds");

function clearTime(min, sec , side, player) {
    if (min == 0 && sec == 0) {
        clearInterval(side);
        alert(`Player ${player} won the match`)
        // Swal.fire(
        //     'Game over',
        //     `Player ${player} won the game`,
        //     'success'
        //   )
      }
}

function bTurn() {
    if (Bsec == 0) {
        Bsec = 60;
        Bmin--;
    }
    Bsec--;
    clearTime(Bmin, Bsec , bTimer , "WHITE");
  Bminutes.textContent = Bmin;
  Bseconds.textContent = Bsec;
}

function wTurn() {
    if (Wsec == 0) {
        Wsec = 60;
        Wmin--;
    }
    Wsec--;
  clearTime(Wmin, Wsec , wTimer , "BLACK");
  Wminutes.textContent = Wmin;
  Wseconds.textContent = Wsec;
}

function blackSideClicked() {
  if (playerWhiteTurn && w == 1) {
    clearTimeout(bTimer);
    playerBlackTurn = true;
    playerWhiteTurn = false;
    w++;
    b = 1;
    wTimer = setInterval(wTurn, 1000);

  }
}

function whiteSideClicked() {
  if (playerBlackTurn && b == 1) {
    clearTimeout(wTimer);
    playerBlackTurn = false;
    playerWhiteTurn = true;
    b++;
    w = 1;
        bTimer = setInterval(bTurn, 1000);
  }
}

function onPlayBtnClicked() {
        if(!playerBlackTurn) {
          blackSideClicked();
        }else{
          whiteSideClicked();
        }
        document.getElementById("playButton").setAttribute("disabled",true);
        document.getElementById("pauseButton").removeAttribute("disabled");
}

function onPauseButtonClicked() {
    clearTimeout(bTimer);
    clearTimeout(wTimer);
    document.getElementById("pauseButton").setAttribute("disabled",true);
    document.getElementById("playButton").removeAttribute("disabled");
}

function resetTime() {
    clearTimeout(bTimer);
    clearTimeout(wTimer);
    Wmin = 10;
    Bmin = 10;
    Wsec = "00";
    Bsec = "00";
    Wminutes.textContent = Wmin;
    Wseconds.textContent = Wsec;
    Bminutes.textContent = Bmin;
    Bseconds.textContent = Bsec;
}

function setGameTiming() {
   document.querySelector(".popup").classList.add("userInput")
}

function onUserEnterInput() {
  let value = document.getElementById("userSelectedTime").value; 
  Wmin = value; 
  Bmin = value; 
  Bminutes.textContent = Bmin; 
  Wminutes.textContent = Wmin; 
  Bseconds.textContent = 00; 
  Wseconds.textContent = 00; 
  let element = document.querySelector(".popup"); 
   element.classList.remove("userInput"); 
   document.getElementById("pauseButton").setAttribute("disabled",true); 
    document.getElementById("playButton").removeAttribute("disabled"); 
    playerBlackTurn = false; 
    playerWhiteTurn = true;  
}