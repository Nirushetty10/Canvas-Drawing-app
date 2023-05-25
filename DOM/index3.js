// function demo(){
//     document.getElementById("inp").style.backgroundColor="red"
// }
// function test(){
//     document.getElementById("inp").style.backgroundColor="green"
// }


// function changeTitle(){
//     let msgNode = document.getElementById("msg");
//     let newNode = msgNode.cloneNode(true);
//     newNode.id="msg2";
//     if(document.getElementById("msg2")) return;
//     msgNode.parentNode.insertBefore(newNode, msgNode.nextSibling);
//     // console.log(msgNode.parentNode);
//         document.getElementById("msg2").childNodes[1].textContent="React.js";
// }


let li = document.querySelectorAll("a")
for (let i = 0; i < li.length; i++) {
    if(li[i].href.includes("https")) li[i].style.color="red"
}