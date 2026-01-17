let nm = document.querySelector(".name")
let form = document.querySelector("form")


form.addEventListener("submit", (event)=>{
    event.preventDefault() // Form ko submit karna se rokna

    if (nm.value.length <= 2){
        document.querySelector(".hide").style.display = "initial";
    }
    else{
        document.querySelector(".hide").style.display = "none";
    }

})