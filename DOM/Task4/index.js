let ul = document.querySelector(".items");
let inputArray = [];

function appendList(value) {
    let newLi = document.createElement("li");
    newLi.className = "lists";
    newLi.textContent = value;
    ul.appendChild(newLi);
}

function addToList() {
    let userValue = document.getElementById("userInput").value;
    let search = document.querySelector("lists").textContent;
    if(search === "No result found....") ul.innerHTML="";
    if (userValue.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid input',
            text: 'Input cannot be empty'
        })
        return;
    }

    inputArray.push(userValue);
    appendList(userValue);
    document.getElementById("userInput").value = "";
}

function searchInput() {
    let searchValue = document.getElementById("searchValue").value;

    if (searchValue.length === 0 ) return;
    
    ul.innerHTML = "";
    document.getElementById("resetButton").removeAttribute("disabled");

    if (inputArray.includes(searchValue)) {
        appendList(searchValue);
        document.getElementById("searchValue").value = "";
    } else appendList("No result found....");
}

function resetInput() {
    ul.innerHTML = "";
    document.getElementById("resetButton").setAttribute("disabled",true);
    inputArray.forEach(value=> appendList(value));
}

function clearList(){
    inputArray = [];
    ul.innerHTML = "";
}











