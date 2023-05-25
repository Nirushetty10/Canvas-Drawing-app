let inputValue = document.querySelector(".form-control");
let bottomLeft = document.querySelector(".bottomLeft");
let bottomRight = document.querySelector(".bottomRight");
let notString = false;
function showErrorMsg() {
    Swal.fire({
        icon: 'error',
        title: 'Invalid characters',
        text: 'Please enter valid input',
      })
}
function submitHandler() {
    let noOfVowels = 0;
    bottomLeft.innerHTML=""
    bottomRight.innerHTML=""
    let stringArray = inputValue.value.split("");
    if(stringArray.length==0){
        showErrorMsg()
        return
    } 
    for(let a=0; a<stringArray.length; a++) {
        if(!isNaN(stringArray[a]) || stringArray[a].includes(" ")) {
            bottomLeft.innerHTML=""
            showErrorMsg()
              return;
        }
        let val = stringArray[a].toLowerCase();
        let div = document.createElement("div");
        div.setAttribute("class", "letterBox");
        div.textContent = stringArray[a];
        bottomLeft.appendChild(div);
        if(val==="a" || val==="e" || val==="i" || val==="o" || val==="u"){
            noOfVowels++;
        }
    }
   bottomRight.textContent=`Number of vowels in the string is ${noOfVowels}`
}