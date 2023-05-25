let box = document.querySelector(".container");

function colorChangeHandler(type,val) {
    let green = document.querySelector("#greenInput").value;
    let blue = document.querySelector("#blueInput").value;
    let red = document.querySelector("#redInput").value;
    
   switch(type) {
    case "RED" :
        document.querySelector("#redInput").value = val;
        document.querySelector("#redRangeBar").value = val;
        box.style.backgroundColor = `rgb(${val},${green},${blue})`;
        break;   
    case "GREEN" :
        document.querySelector("#greenInput").value = val;
        document.querySelector("#greenRangeBar").value = val;
        box.style.backgroundColor = `rgb(${red},${val},${blue})`;
        break;   
    case "BLUE" :
        document.querySelector("#blueInput").value = val;
        document.querySelector("#blueRangeBar").value = val;
        box.style.backgroundColor = `rgb(${red},${green},${val})`;
        break;
   }
}