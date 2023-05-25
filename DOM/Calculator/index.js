let output = document.querySelector(".output");
let a=0;
function numberPress(val) {
  if(a<1 && isNaN(val)) return;
  a++;
  let prvsValue = output.textContent.slice(output.textContent.length-1);
  if(output.textContent==0) output.textContent=""
  if(prvsValue===val || (isNaN(prvsValue) && isNaN(val))) return;
  output.textContent += val;
}
function calculate() {
  let res = eval(output.textContent);
  output.textContent = res;
}
function clearValue() {
  output.textContent = 0;
}
function valueBack() {
  let value = output.textContent;
  if(value.length==1) {output.textContent=0;}
  let sliced = value.slice(0, value.length - 1);
  output.textContent = sliced;
}
