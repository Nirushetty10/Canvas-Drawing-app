let userForm = document.getElementById("UserDetailsForm");
let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let specialCharsExcludingDot = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
let firstNameMsg = document.getElementById("firstNameMsg");
let lastNameMsg = document.getElementById("lastNameMsg");
let emailMsg = document.getElementById("emailMsg");
let mobileMsg = document.getElementById("mobileMsg");
let cityMsg = document.getElementById("cityMsg");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let validFormData = true;
  let data = new FormData(userForm);
  let firstName = data.get("firstName");
  let lastName = data.get("lastName");
  let email = data.get("email");
  let mobile = data.get("mobile");
  let city = data.get("city");

  try {
    if (firstName.length == 0) {
      throw new TypeError("First name cannot be empty!");
    } else if (firstName.includes(" ")) {
      throw new TypeError(
        "Inavalid first name! , space in the name field are not allowed"
      );
    } else if (/\d/.test(firstName)) {
      throw new TypeError(
        "Inavalid first name! , name field should contain only alphabets."
      );
    } else if (specialChars.test(firstName)) {
      throw new TypeError(
        "Inavalid first name! , special characters are not accepted"
      );
    }
  } catch (e) {
    validFormData = false;
    firstNameMsg.textContent = e.message;
    document.getElementById("firstName").style.borderBlockColor = "red";
  }

  try {
    if (lastName.length == 0) {
      throw new TypeError("Last name cannot be empty!");
    } else if (lastName.includes(" ")) {
      throw new TypeError(
        "Inavalid last name! , space in the name field are not allowed"
      );
    } else if (/\d/.test(lastName)) {
      throw new TypeError(
        "Inavalid last name! , name field should contain only alphabets."
      );
    } else if (specialChars.test(lastName)) {
      throw new TypeError(
        "Inavalid last name! , special characters are not accepted"
      );
    }
  } catch (e) {
    validFormData = false;
    document.getElementById("lastName").style.borderBlockColor = "red";
    lastNameMsg.textContent = e.message;
  }

  try {
    let emailArray = email.split("");
    let indexOfAt = emailArray.indexOf("@");
    let indexOfDot = emailArray.indexOf(".");
    let characterAfterAt = emailArray.slice(indexOfAt+1,indexOfDot);
    console.log(characterAfterAt);
    let characterAfterDot = emailArray.slice(indexOfDot+1);
    console.log(characterAfterDot);
    let address = emailArray.slice(0, indexOfAt);
    console.log(address);

    if (email.length == 0) {
      throw new TypeError("email field cannot be empty!");
    } else if (email.includes(" ") || address.length < 2 || specialCharsExcludingDot.test(address.join("")) 
    || characterAfterAt.length < 2  || /\d/.test(characterAfterAt.join()) 
    || characterAfterDot.length<2 || /\d/.test(characterAfterDot.join()) || specialChars.test(characterAfterDot.join(""))  ) {
      throw new TypeError("Inavalid email!");
    }
  } catch (e) {
    validFormData = false;
    emailMsg.textContent = e.message;
    document.getElementById("email").style.borderBlockColor = "red";
  }

  try {
    if (mobile.length == 0) {
      throw new TypeError("phone number cannot be empty!");
    } else if (mobile.length !== 10) {
      throw new TypeError("Inavlid phone number");
    }
  } catch (e) {
    validFormData = false;
    mobileMsg.textContent = e.message;
    document.getElementById("mobile").style.borderBlockColor = "red";
  }

  try {
    if (city.length == 0) {
      throw new TypeError("Please select the city!");
    }
  } catch (e) {
    validFormData = false;
    cityMsg.textContent = e.message;
  }
  if (validFormData) {
    document.querySelector(".userFirstName").textContent = firstName;
    document.querySelector(".userLasttName").textContent = lastName;
    document.querySelector(".userEmail").textContent = email;
    document.querySelector(".userPhoneNumber").textContent = mobile;
    document.querySelector(".userCity").textContent = city;
  }
});

function clearErrorMsg(val) {
  val.style.borderColor = "#cfcbcb";
  val.parentNode.lastElementChild.textContent = "";
}
