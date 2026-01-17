let themeToggle = document.querySelector("#themeToggle")
let saveBtn = document.querySelector(".save-btn")

function setDarkOrLight() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; // Ye check karta hai ki mera os ka theme kya set hai and woo return karta hai matches dekhta ki dark mode on hai ye nahi if on rehega toh woo true dega else false
    // Ye function set karta hai according to my os dark mode and light mode
    console.log(isDarkMode);
    if (isDarkMode) {
        document.querySelector("html").setAttribute("data-theme", "dark")
        // document.querySelector("html").removeAttribute("data-theme", "light")
    }
    else {
        document.querySelector("html").setAttribute("data-theme", "light")
        // document.querySelector("html").removeAttribute("data-theme", "dark")
    }
}

if (localStorage.getItem("theme")) {
    document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
    )
    themeToggle.checked = localStorage.getItem("toggleCheck") === "true" ? true : false;
}
else {

    setDarkOrLight();
}


const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// setDarkOrLight(mediaQuery.matches);

mediaQuery.addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
        setDarkOrLight()
    }
})





themeToggle.addEventListener("change", (event) => {
    let getTheme = document.documentElement.getAttribute("data-theme")

    if (getTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
        localStorage.setItem("toggleCheck", false)

    }
    else {
        document.documentElement.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
        localStorage.setItem("toggleCheck", true)

    }
})







