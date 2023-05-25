document.querySelector(".btn").addEventListener("click", () => {
    let ul = document.querySelector(".dropdown-menu");
    let liCopy = document.querySelector(".dropdown-item");
    let li = document.createElement("li");
    let newLi = liCopy.cloneNode(true);
    let inputValue = document.querySelector(".form-control").value;
    newLi.textContent = inputValue;
function errorMsg (type,msg) {
       if(type==="SUCCESS") {
        Swal.fire(
          'Good job!',
            msg,
          'success'
        )
       } else {
        Swal.fire({
          icon: "error",
          title: "Invalid!!",
          text: msg
        });
       }
    }

    let dropdownItems = document.querySelectorAll(".dropdown-item")
    for (let i = 0; i < dropdownItems.length; i++) {
         if(dropdownItems[i].textContent == inputValue) {
          errorMsg("ERROR","Item already exists")
          return
         }
    }
    if (!inputValue.trim().includes(" ") && inputValue.length !== 0) {
      li.appendChild(newLi);
      ul.appendChild(li);
       errorMsg("SUCCESS","Item added to dropdown successfully")
    } else {
      errorMsg("ERROR","Invalid input , enter only one word")
    }
  });
  