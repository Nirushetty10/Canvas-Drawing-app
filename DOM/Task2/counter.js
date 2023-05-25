let value = document.querySelector(".card-title").textContent;
let btn1 = document.querySelector(".dc");
let btn2 = document.querySelector(".rc");
function setAttribute(val){
  if(val===0) {
    btn2.setAttribute("disabled",true)
    btn1.setAttribute("disabled",true);
    document.querySelector(".card-title").textContent= val;
  }
}
function increaseHAndler() {
    value++;
    if(value>0) btn1.removeAttribute("disabled");
    if(value>0) btn2.removeAttribute("disabled");
    document.querySelector(".card-title").textContent= value;
}
function decreaseHAndler() {
    if(value>0) {
    value--;
      setAttribute(value)
    }
}
function resetHAndler() {
    value=0;
    setAttribute(value)
}

