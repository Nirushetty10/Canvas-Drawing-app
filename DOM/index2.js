document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    let name = document.getElementById("name").value
    let num = document.getElementsByClassName("number")[0].value;
    let password = document.getElementsByTagName("input")[2].value
    let email = document.querySelector("#email").value
    let city = document.querySelectorAll("input")[3].value

    console.log(name,num,password,email,city);
})

// let h1 = document.getElementById("tag")
    
// function greet() {
//     let fName = document.getElementById("fName").value
//     let sName = document.getElementById("sName").value
//     h1.textContent = `Welcome ${fName} ${sName}`
// }

// let h1 = document.createElement("h1")
// function demo() {
//     h1.textContent="Welcome to this website"
//    document.body.appendChild(h1)
// }

    //  function demo() {
    //    let p = document.getElementsByTagName("p")[0]
    //    let res = p.getAttribute("id")
    //    console.log(res);
    //    p.removeAttribute("id")
    // }