let num1,num2,num3,sysGenNum1,gameNumber;

function validateNumber(val) { 
    let numArray = val.split(""); 
    for (let i = 0; i < numArray.length; i++) {
       for (let j = i+1; j < numArray.length; j++) {
         if(numArray[i] == numArray[j]) return true;
    }
}
    return false;
}

function erroMsg(msg) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg,
      })
}

function toggleInputField(num) {
     document.getElementById(`numb${num}`).setAttribute("disabled",true);
     document.getElementById(`num${num}Btn`).setAttribute("disabled",true);
    if(num == 3) {
     document.getElementById("numberviewButton").removeAttribute("disabled");
     return;
    }
    document.getElementById(`numb${num+1}`).removeAttribute("disabled");
    document.getElementById(`num${num+1}Btn`).removeAttribute("disabled");
}

function onInputEntered(id ,flag) {
    let num = document.getElementById(id).value;
    if (num.length !== 4) {
        erroMsg("Please enter 4 digit number!");
        return;
    }
        
    if(validateNumber(num)) {
        erroMsg("Numbers are repeating!! , please enter unique Number");
        return;
    }
    
  if(flag === "firstInput") {
    gameNumber = 20000+(num-2);
    document.querySelector(".secreteNum").textContent = gameNumber;
    toggleInputField(1);
  } else if (flag === "secondInput") {
    document.getElementById("SystemNumber1").textContent = 9999-num;
    toggleInputField(2);
  } else if(flag === "thirdInput") {
    document.getElementById("SystemNumber2").textContent = 9999-num;
    toggleInputField(3);
  }
}

function seeResultHandler() {
    document.querySelector(".secreteBox").style.backgroundColor = "white";
    document.querySelector("#secreteText").style.display = "block";
}