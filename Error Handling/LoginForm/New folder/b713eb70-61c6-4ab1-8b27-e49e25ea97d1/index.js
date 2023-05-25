let userNameErrorBox;
let passwordErrorBox;

function demo() {
  document.querySelector(".container").style.backgroundColor = "#707070";
}

function validateUser() {
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    userNameErrorBox = document.getElementById("errorMsgUserName");
    passwordErrorBox = document.getElementById("errorMsgPassword");

    userNameErrorBox.textContent = "";
    passwordErrorBox.textContent = "";

    userName.style.borderColor = "#005";
    password.style.borderColor = "#005";

    try {
      if(userName.value.length == 0 && password.value.length == 0) {
        throw new TypeError("User name and password cannot be empty");
    }
    } catch (e) {
      userName.style.borderColor = "red";
        password.style.borderColor = "red";
      userNameErrorBox.textContent = e.message;
      passwordErrorBox.textContent = e.message;
    }

    try {
      if(userName.value.length == 0 ) {
        throw new TypeError("User name cannot be empty");
      }
      if(userName.value.length > 10) {
        throw new TypeError("User name cannot be greater than 10char");
      }

    } catch (e) {
      userName.style.borderColor = "red";
      userNameErrorBox.textContent = e.message;
    }

    try {
      if(password.value.length < 6) {       
        throw new TypeError("Password should be greater than 6 character");
      }

      document.getElementById("loginMsg").textContent = "Login successfull";

    } catch (e) {
      password.style.borderColor = "red";
      passwordErrorBox.textContent = e.message;
    } finally {
      demo();
    }
  }
 

function removeError(val) {
  val.style.borderColor = "#005";
  if(val.id == "userName") {
    userNameErrorBox.textContent = "";
  } else {
    passwordErrorBox.textContent = "";
  }
}