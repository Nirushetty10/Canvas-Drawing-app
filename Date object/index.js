// function getDate() {
//     // let date = new Date().toLocaleDateString(); // 09/05/2023 
//     let date = new Date().toDateString();  // Tue May 09 2023
//     // let date = new Date().toISOString()   // 2023-05-09T12:40:23.267Z
//     // let date = new Date().toLocaleString()  // 09/05/2023, 18:11:49
//     //    let date = new Date().toUTCString()  // Tue, 09 May 2023 12:42:59 GMT
//     document.getElementById("date").textContent = date;
// }
// function getTime() {
//     let time = new Date().toLocaleTimeString()
//     document.getElementById("date").textContent = time;
// }

// let date = new Date().toDateString().split(" ")[3]
// console.log(date);

function getCalender() {
    let dateArray = new Date().toDateString().split(" ");
    console.log(dateArray);
    document.getElementById("year").textContent = dateArray[3];
    document.getElementById("day").textContent = dateArray[0];
    document.getElementById("date").textContent = dateArray[2];
    document.getElementById("month").textContent = dateArray[1];
}
function getTime() {
    let dateArray = new Date().toLocaleTimeString().split(":");
    document.querySelector(".hour").textContent = dateArray[0];
    document.querySelector(".min").textContent = dateArray[1];
    document.querySelector(".sec").textContent = dateArray[2];
}

setInterval(getTime, 1000)