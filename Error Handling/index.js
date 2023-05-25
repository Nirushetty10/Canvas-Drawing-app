
function checkUserName() {
    
    let msgBox = document.getElementById("message");
    let userName = document.getElementById("userName").value;
    try{
      if(userName.length == 0) {
        throw new TypeError("User name cannot be empty");
      } else if(userName.length > 10) {
        throw new TypeError("User name cannot be greater than 10char");
      }
    } catch(e) {
      msgBox.textContent = e.message;
    }
}
