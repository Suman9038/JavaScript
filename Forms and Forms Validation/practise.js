let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")
let validateButton = document.querySelector("#validateBtn")


validateButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#emailError").style.textContent = "";
    document.querySelector("#passwordError").style.textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;

    let emailAns = emailRegex.test(email.value)
    let passAns = passwordRegex.test(password.value)

    // let error = document.querySelector("error")

    if (!emailAns) {
        
        document.querySelector("#emailError").textContent = "Email is incorrect";
        // document.querySelector("#emailError").style.display = "initial";
        isValid = false
    }

    if (!passAns) {

        document.querySelector("#passwordError").textContent = "Password is incorrect"
        // document.querySelector("#passwordError").style.textContent = "initial"
        isValid = false;
    }
    if (isValid){
        document.querySelector(".resultMessage").textContent = "Login Successful";
    }

});

