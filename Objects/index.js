function Calculator() {
    this.add= function(val1,val2){
       return val1+val2;
    },
    this.sub= function(val1,val2){
       return val1-val2;
    },
    this.mul= function(val1,val2){
        return val1*val2;
     },
    this.divd= function(val1,val2){
        return val1/val2;
     }
}

let cal = new Calculator()
let repeatTask;
do{
let operation = Number(prompt("Press--> 1-Add , 2-Sub , 3-Mul , 4-Div"));
let val1 =Number(prompt("Enter the first value"));
let val2 =Number(prompt("Enter the second value"));

let res;
switch(operation) {
    case 1:
        res= cal.add(val1,val2);
        break;
    case 2:
        res= cal.sub(val1,val2);
        break;
    case 3:
        res= cal.mul(val1,val2);
        break;
    case 4:
        res= cal.divd(val1,val2);
        break;
    default:
        alert("Please select the valid operation type")

}
if(res) alert(`A=${val1}, B=${val2} and result is ${res}`)
repeatTask=confirm("Do you want to use Calculator again")

}while(repeatTask);