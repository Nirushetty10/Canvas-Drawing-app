let extngName;
let extngPhone;
let selectedContact;

function displayForm() {
    document.querySelector(".form").classList.add("custom-animation-visible");
  }
  
  function hideForm() {
    document.querySelector(".form").classList.remove("custom-animation-visible");
    document.querySelector(".editForm").classList.remove("custom-animation-visible");
  }
  
  function addDetailsToBook(name, phone) {
    let word = name.slice(0, 1);
    let contactDiv = document.querySelector(".contact");
    let newDiv = contactDiv.cloneNode(true);
    newDiv.childNodes[3].textContent = name;
    newDiv.childNodes[1].textContent = word.toUpperCase();
    newDiv.childNodes[5].textContent = phone;
    newDiv.childNodes[7].removeAttribute("disabled");
    contactDiv.parentNode.insertBefore(newDiv, contactDiv.nextSibling);
  }
  
  function addDataToContact() {
    let name = document.getElementById("userName").value;
    let phone = document.getElementById("phoneNumber").value;
    
    if (name.length < 3 || phone.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name or Phone number",
        text: "Please enter vaild details!!"
      });
      return;
    }

    document.getElementById("userName").value = "";
    document.getElementById("phoneNumber").value = "";
    addDetailsToBook(name, phone);
    
    document.querySelector(".form").classList.remove("custom-animation-visible");
  }
  
  function onEditPress(val) {
    document.querySelector(".editForm").classList.add("custom-animation-visible");
    selectedContact = val.parentNode;
    extngName = val.parentNode.childNodes[3].textContent;
    extngPhone = val.parentNode.childNodes[5].textContent;
    document.getElementById("EuserName").value = extngName;
    document.getElementById("EphoneNumber").value = extngPhone;
  }
  
  function editContact() {
    let name = document.getElementById("EuserName").value;
    let phone = document.getElementById("EphoneNumber").value;
  
    if (name.length < 3 || phone.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name or Phone number",
        text: "Please enter vaild details!!"
      });
      return;
    }
    selectedContact.childNodes[3].textContent = name;
    selectedContact.childNodes[5].textContent = phone;
    selectedContact.childNodes[1].textContent = name.charAt(0).toUpperCase();
    document.querySelector(".editForm").classList.remove("custom-animation-visible");
  }

  function deleteContact() {
    document.querySelector(".bottomSection").removeChild(selectedContact);
    document.querySelector(".editForm").classList.remove("custom-animation-visible");
  }
  