let [min, sec] = [01, 00];
let answerSelected = false;
let questionGenerateNum = 1;
let questionNum = 1;
let score = 0;
let timerInterval;
let resDisplay = false;

let datas = {
    question1 : {
       question : "1) Which is the capital city of India?",
       correctAnswerIndex : 0,
       options : ["Delhi","Bangalore","Mumbai","Chennai"]
    },
    question2 : {
        question : "2) Which is the capital city of Karnataka?",
        correctAnswerIndex : 1,
        options : ["Mysore","Bangalore","Mangalore","Udupi"]
     },
     question3 : {
        question : "3) Who is the prime minister of India?",
        correctAnswerIndex : 3,
        options : ["Rahul gandhi","Kejrival","Amith Sha","Narendra modi"]
     },
     question4 : {
        question : "4) which is the national animal of India?",
        correctAnswerIndex : 2,
        options : ["Elephant","deer","Tiger","lion"]
     },
     question5 : {
        question : "5) what is the currancy of India?",
        correctAnswerIndex : 1,
        options : ["Dollar","Rupee","pounds","AED"]
     },
}

let result = document.getElementById("result");
let bottomButton = document.querySelector(".bottomButton");
let resultMsg = document.querySelector(".resultMsg");
let scoreDiv = document.querySelector(".score");
let timerDiv = document.querySelector(".timer");
let btn1 = document.querySelector(`.btn1`);
let btn2 = document.querySelector(`.btn2`);

function createQuestionsAndAnswer(number) {
   let div = document.createElement("div");
   div.className = `question${number}`;
   let div1 = document.createElement("div");
   div1.className = "question";
   div1.textContent = datas[`question${number}`].question;
   div.appendChild(div1);
   let div2 = document.createElement("div");
   div2.className = "answers";
   div.appendChild(div2);

   for(let a=0; a < datas[`question${number}`].options.length ; a++) {
    let divAns = document.createElement("div");
    divAns.className = "answer";

    if(a == datas[`question${number}`].correctAnswerIndex) {
        divAns.setAttribute("onclick", `answerRight(this, ${number})`);
    } else {
        divAns.setAttribute("onclick", `answerWrong(this, ${number})`);
    }
    divAns.textContent = datas[`question${number}`].options[a];
    div2.appendChild(divAns);
   }
   document.querySelector(".content").appendChild(div);
}

function countDownTimer() {
  if (min == 0 && sec == "01") {
    document.querySelector(`.question${questionNum}`).style.display = "none";
    resultMsg.style.display = "flex";
    result.textContent = score;
    bottomButton.style.display = "none";
    clearInterval(timerInterval);
  }

  if (sec == 0 && min != 0) {
    min="00";
    sec = 60;
  }

  sec--;
  sec = sec < 10 ? `0${sec}` : sec;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").textContent = sec;
}

function startGame() {
  document.getElementById("startButton").style.display = "none";
  scoreDiv.style.display = "flex";
  timerDiv.style.display = "flex";

  for(let a = 1; a <= 5; a++) {
    createQuestionsAndAnswer(a);
  }

  document.querySelector(".question1").style.display = "flex";
  bottomButton.style.display = "block";
  timerInterval = setInterval(countDownTimer, 1000);
}

function answerRight(value) {
  if (!answerSelected) {
    score++;
    document.getElementById("score").textContent = score;
    value.style.backgroundColor = "#82CD47";
    bottomButton.removeAttribute("disabled");
    answerSelected = true;
  }
}

function answerWrong(value, qstNo) {
    if(!resDisplay) {
        for(let i=0; i<value.parentNode.children.length ; i++) {
          if(i == datas[`question${qstNo}`].correctAnswerIndex){
              value.parentNode.children[i].style.backgroundColor = "#82CD47";
          }
        }
      }

  if (!answerSelected) {
    value.style.backgroundColor = "#f10808";
    bottomButton.removeAttribute("disabled");
    answerSelected = true;
  }
}

function nextQuestion() {
    resultMsg.style.display = "none";

    if(resDisplay) {
        bottomButton.removeAttribute("disabled");

        if (questionNum < 5) {
            document.querySelector(`.question${questionNum}`).style.display = "none";
            questionNum++;
            document.querySelector(`.question${questionNum}`).style.display = "flex";
          } else {
            document.querySelector(`.question${questionNum}`).style.display = "none";
            btn1.style.display = "block";
            btn2.style.display = "block";
            bottomButton.style.display = "none";
            resultMsg.style.display = "flex";
            result.textContent = score;
            clearInterval(timerInterval);
          }
        return;
    }

  if (questionNum < 5) {
    document.querySelector(`.question${questionNum}`).style.display = "none";
    questionNum++;
    document.querySelector(`.question${questionNum}`).style.display = "flex";
    answerSelected = false;
    bottomButton.setAttribute("disabled",true);
  } else {
    document.querySelector(`.question${questionNum}`).style.display = "none";
    btn1.style.display = "block";
    btn2.style.display = "block";
    bottomButton.style.display = "none";
    resultMsg.style.display = "flex";
    result.textContent = score;
    clearInterval(timerInterval);
  }
}

function showAnswer() {
    resultMsg.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "none";
    document.querySelector(".question1").style.display = "flex";
    bottomButton.style.display = "block";
    resDisplay = true;
    questionNum = 1;
}

function resetApp() {
    location.reload();
}