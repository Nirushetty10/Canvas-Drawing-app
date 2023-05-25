let id = 1;
function addChild() {
    let box = document.getElementById("box")
    let copyBox = box.cloneNode(true) 
    box.parentNode.insertBefore(copyBox, box.nextSibling);
    copyBox.id= `child${id}`;
    id++;
}