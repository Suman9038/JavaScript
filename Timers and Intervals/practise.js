let downloadBtn = document.querySelector("#downloadBtn")
let message = document.querySelector(".message")
let progressBar = document.querySelector("#progressBar")
let percentage = document.querySelector("#percentage")
let count = 0; 
//  Kitne second mai complete karna hai 100% 3sec mai toh 3000 milisec / 100 = 30


downloadBtn.addEventListener("click", (event)=>{
    setInterval(()=>{
        if (count<100){
            count++;
            progressBar.style.width = `${count}%`;
            percentage.textContent = `${count}%`;
            message.textContent = "Downloading...."

            if (count>= 100){
                message.textContent = "Download Complete";
                downloadBtn.textContent = "Download Again";
                clearInterval();
                console.log("Download Complete");
            }
        }
    },30)
})