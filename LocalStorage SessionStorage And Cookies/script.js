localStorage.setItem("friends",JSON.stringify(["xey","bye"]))
console.log(localStorage.getItem("friends"));


let g = localStorage.getItem("friends");
console.log(JSON.parse(g));



sessionStorage.setItem("name", "xey")
sessionStorage.removeItem("name")