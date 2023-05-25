function submitHandler() {
let val1 = document.getElementById("input1").value;
let val2 = document.getElementById("input2").value;
   if(val1.length !== 5 || val2.length !==2) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
      return;
   }
   let valArray1 = val1.split("");
   let valArray2 = val2.split("");
   valArray1.splice(2,0,valArray2[0],valArray2[1]);
   document.getElementById("res").textContent = valArray1;
}