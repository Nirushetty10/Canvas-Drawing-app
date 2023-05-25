// function rangeChangeHandler() {
//     let num = document.getElementById("num").value;
//     document.getElementById("range").value= num;
// }

// function inputChangeHandler() {
//     let range = document.getElementById("range").value;
//     document.getElementById("num").value= range;
// }

// let date = new Date(2023,05,01).
// console.log(date);

// let date1 = new Date("2023-05-01").toLocaleString()
// console.log(date1);



let hour =document.getElementById("hour")
let min =document.getElementById("min")
let sec =document.getElementById("sec")

setInterval(()=>{
    let time = new Date()
      hour.textContent = time.getHours()
      min.textContent = time.getMinutes()
      sec.textContent = time.getSeconds()
},1000)