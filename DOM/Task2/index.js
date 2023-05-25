let states = {
    INDIA : ["select","Karnataka", "Goa", "Keral", "Andrapradesh" , "TamilNadu"],
    UAE : ["select","AbuDhabi", "Dubai", "Sharjah", "Ajman" , "Fujairah"],
    USA : ["select","California", "Florida", "Georgia", "Texas" , "Washington"],
}
let cities = {
    Karnataka : ["select","Bangalore","Mangalore","Mysore","chickmaglore","shimoga"],
    Goa : ["select","Panaji", "Margao", "Mapusa"],
    Keral : ["select","kocchi", "kannur", "kollam", "kottayam", "thrissur"],
    Andrapradesh : ["select","tirupathi", "kurnool", "anantpur", "guntur", "nellure"],
    TamilNadu : ["select","chennai", "tiruppur", "Coimbatore", "Madurai", "Erode"],
    AbuDhabi : ["select","ab1", "ab2", "ab3", "ab4", "ab5"],
    Dubai : ["select","db1", "db2", "db3", "db4", "db5"],
    Sharjah : ["select","select","sj1", "sj2", "sj3", "sj4", "sj5"],
    Ajman : ["select","select","aj1", "aj2", "aj3", "aj4", "aj5"],
    Fujairah : ["select","select","fj1", "fj2", "fj3", "fj4", "fj5"],
    California : ["select","cal1", "cal2", "cal3", "cal4", "cal5"],
    Florida : ["select","frd1", "frd2", "frd3", "frd4", "frd5"],
    Georgia : ["select","grg1", "grg2", "grg3", "grg4", "grg5"],
    Texas : ["select","txs1", "txs2", "txs3", "txs4", "txs5"],
    Washington : ["select","wgt1", "wgt2", "wgt3", "wgt4", "wgt5"],
}

let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third")

let dropDownState = document.getElementById("state")
function countrySelectedHAndler(){
    dropDownState.innerHTML = "";
    let country = document.querySelector("#country").value;
    if(!country) return
    let state = states[country]


    for(let a=1; a<state.length; a++) {
        let option = document.createElement("option")
        option.value = state[a];
        option.textContent = state[a];   
        dropDownState.append(option)
    }
    //   let option = document.getElementById("stateName");
    //   console.log(option);
    //   let newNode = option.cloneNode(true);
    //   newNode.value= state[a]
    //   newNode.textContent= state[a];
    //   option.parentNode.insertBefore(newNode , option.nextSibling)

    // }
}

let dropDowncity = document.getElementById("city")
function stateSelectedHAndler(){
    dropDowncity.innerHTML = "";
    let selState = document.querySelector("#state").value;
    let state = cities[selState]
    for(let a=1; a<state.length; a++) {
        let option = document.createElement("option")
        option.value = state[a];
        option.textContent = state[a];
        dropDowncity.appendChild(option)
    }
}

function submitHandler() {
    let country = document.querySelector("#country").value;
    let state = document.querySelector("#state").value;
    let city = document.querySelector("#city").value;
    if(!country || !state || !city) {
        Swal.fire({
            icon: "error",
            title: "Invalid!!",
            text: "Please select all the fields"
          });
          return
    }
    Swal.fire(
        'Thank you!',
        'Your data is submited successfully',
        'success'
      )
    first.textContent=country; 
    second.textContent=state;
    third.textContent=city;
}

function resetHandler() {
    document.querySelector("#country").selectedIndex=0;
    document.querySelector("#state").selectedIndex=0;
    document.querySelector("#city").selectedIndex=0;
    first.textContent="Country";
    second.textContent="State";
    third.textContent="City";
}