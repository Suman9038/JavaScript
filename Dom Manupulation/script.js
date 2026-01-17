// let h1 = document.getElementById("abc")
// let h1 = document.getElementsByClassName("abc")
// let h1 = document.querySelector("h1");
// console.log(h1);

// Text or content Manipulation
// h1.innerText = "Hello  World!";
// h1.textContent = "Hello Everyone!";
// h1.innerHTML = "<i>Hello World</i>"

// Attributes Manipulation

// let a = document.querySelector("a")
// // a.href = "https://www.google.com"
// a.setAttribute("href", "https://www.google.com")
// console.log(a.getAttribute("href"))
// a.removeAttribute("href")
// console.log(a)

// let img = document.querySelector("img")
// img.setAttribute("src", "https://images.unsplash.com/photo-1767284349315-8baf0161c675?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")



// -------- Dynamic  DOM Manipluarion--------

// let h1 = document.createElement("h1"); // EK blank element h1 naam ka bana diya 
// h1.textContent = "This is created using JS"; // usme text content daal diya
// document.body.prepend(h1); // us element ko body ke starting me daal diya and woo display ho gaya frontend p
// document.querySelector("h1").remove(); // ye wala h1 remove kar diya jiska class abc hai


// -------- Style update using .style -------

let h1 = document.querySelector("h1")
h1.classList.add("abc")

// h1.style.color = "red"
// h1.style.fontFamily = "Gilroy"
// h1.style.textTransform = "capitalize"



