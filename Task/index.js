let [hr,min,sec] = [0,0,0];
let interval=10;
let clockTimer;

let displayHour = document.querySelector(".hour");
let displayMin = document.querySelector(".min");
let displaySec = document.querySelector(".sec");

function timer() {
    if(sec == 10 && interval == 10) {
        sec = -1;
        interval+=10;
    }

    if(sec == 20 && interval == 20) {
        sec = -1;
        interval+=10;
    }
    if(sec == 30 && interval == 30) {
        sec = -1;
        interval+=10;
        clearInterval(clockTimer);
    }

     sec++;
    //  min = (min<10) ? `0${min}` : min;
     sec = (sec<10) ? `0${sec}` : sec;
     displayHour.textContent = "00";
     displayMin.textContent = "00";
     displaySec.textContent = sec;
}

function startTimer() { 
    clockTimer = setInterval(timer,1000)
}