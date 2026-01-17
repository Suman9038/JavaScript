// Step 1 select karo paragraph jise mujhe change karna hai for ex mujhe red color krna hai paragraph ko 
// let p = document.querySelector("p")

// Step 2 usme event listening add kro ki dekho kya event hoga toh kya action hoga
// p.addEventListener("click", ()=>{
//     p.style.color = "red"

// });

// let dblclick = ()=>{
//     p.style.color = "green";
// }

// p.removeEventListener("dblclick",dblclick);

//  ---------Input Event------
// let input = document.querySelector("input")
// input.addEventListener("input", (event) => {
//     console.log("Typed");
//     console.log(event);
//     // Ye check tumhara backspace k liya padta hai tab humara data null rehta haina usliya
//     if (event.data != null) {
//         console.log(event.data);
//     }
// })

// let inp = document.querySelector("input")

// inp.addEventListener("input", (event)=>{
//     if (event.data !== null){
//         console.log(event.data)
//     } 
// })


//  --------------Change Event-----------

// let select = document.querySelector("select")
// let device = document.querySelector(".abc")

// select.addEventListener("change", (event)=>{
//     // console.log(event)
//     // console.log(event.target.value);
//     device.textContent = `${event.target.value} Device Selected `
// })

// Chota sa kaam ka js 
// Approach 
// let h1 = document.querySelector("h1")
// window.addEventListener("keydown", (event)=>{
//     // console.log(event);
//     if (event.key ==" "){
//         h1.textContent = "SPC"
//     }
//     else{
//         h1.textContent = event.key
//     }
// })

// // Changing something in the button
// let btn = document.querySelector(".btn")
// let fileinp = document.querySelector(".fileinp")

// btn.addEventListener("click", ()=>{
//     fileinp.click() // Ye kya karta hai mera jo input field jo hide hai usko js k madad se click karta hai jab humlog custom button p click karta hai tab 
// })

// // Ye kya karega jab v file upload karenge hame jo upload hua uska naam change karna hai 
// fileinp.addEventListener("change", (event)=>{
//     console.log(event)
//     let fileName = event.target.files[0]
//     if (fileName){
//         btn.textContent = fileName.name
//     }
// })

//  Handling the Form submit button 

// let form = document.querySelector("form")
// let inputsData = document.querySelectorAll("input") //  Ab mujhe sara form ka answer chaiye
// let main = document.querySelector(".main")
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     // console.log(inputsData[0].value, inputsData[1].value, inputsData[2].value, inputsData[3].value)
//     let card = document.createElement("div")
//     card.classList.add("card")
//     let profile = document.createElement("div")
//     profile.classList.add("profile")

//     let img = document.createElement("img")
//     console.log(inputsData[0].value);
//     img.setAttribute("src",inputsData[0].value)

//     let h3 = document.createElement("h3")
//     h3.textContent = inputsData[1].value
//     let h5 = document.createElement("h5")
//     h5.textContent = inputsData[2].value
//     let p = document.createElement("p")
//     p.textContent = inputsData[3].value

//     //  Now ab sab ko div k andar dalna hai ek ek karka 
//     profile.appendChild(img)// Profile k andar image daal diya
//     card.appendChild(profile) // Card k andar profile daal diya
//     card.appendChild(h3)
//     card.appendChild(h5)
//     card.appendChild(p)
//     main.appendChild(card)

//     inputsData.forEach((input) => {
//         if (input.type !== "submit")
//         {
//             input.value = ""
//         }
//     })
// })

//  mouseover dekhenge ab 
// let main = document.querySelector(".main")

// main.addEventListener("mouseover", ()=>{
//     main.style.backgroundColor ="yellow";
// })
// main.addEventListener("mouseout", ()=>{
//     main.style.backgroundColor ="red";
// })



// Mouse se div move kar pana
// window.addEventListener("mousemove", (event)=>{
// // console.log(event); // Ye tumko mouse ka x axis and y axis deta hai
// // console.log(event.clientX, event.clientY);
// main.style.top = event.clientY + "px" // Top se niche woo Y axis p kaam ata hai
// main.style.left = event.clientX + "px" // Left se right woo X axis p kaam ata hai 
// })



//  Event Bubling
// document.addEventListener("click", ()=>{
//     alert("Clicked")
// })

// let ul = document.querySelector("ul")
// ul.addEventListener("click", (event)=>{
//     // alert("Clicked")
//     // event.target.style.textDecoration = "line-through"
//     event.target.classList.toggle("lt")


//     // ul.style.textDecoration = "line-through"
// })

//  ------ Event Capturing------- 

