let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    console.log(formData);

    console.log(name,phone);
})