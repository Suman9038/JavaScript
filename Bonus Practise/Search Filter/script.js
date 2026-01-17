const users = [
    {
        id: 1,
        name: "Aarav Sharma",
        bio: "Frontend developer who loves clean UI",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    },
    {
        id: 2,
        name: "Neha Verma",
        bio: "UX designer and coffee addict",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
        id: 3,
        name: "Rohit Mehta",
        bio: "JavaScript nerd & open source contributor",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
        id: 4,
        name: "Simran Kaur",
        bio: "Product designer with minimalist taste",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
        id: 5,
        name: "Kunal Singh",
        bio: "Full-stack dev & startup builder",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
        id: 6,
        name: "Priya Desai",
        bio: "Data scientist & AI enthusiast",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
        id: 7,
        name: "Priti Desai",
        bio: "Data scientist & AI enthusiast",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }

];



// Sare user show karna 
// Filter karna har baar input karna pe
// Show filtered users


// Container div
const container = document.querySelector("#cardsContainer");
function showUsers(arr) {

    arr.forEach((user) => {
        // card-div
        const card = document.createElement("div");
        card.className = "card";

        // image
        const img = document.createElement("img");
        img.src = user.image;
        img.alt = "User image";

        // blur layer
        const blurLayer = document.createElement("div");
        blurLayer.className = "blur-layer";

        // content
        const content = document.createElement("div");
        content.className = "content";

        const h3 = document.createElement("h3");
        h3.innerText = user.name;

        const p = document.createElement("p");
        p.innerText = user.bio

        // append text to content
        content.appendChild(h3);
        content.appendChild(p);

        // append all to card
        card.appendChild(img);
        card.appendChild(blurLayer);
        card.appendChild(content);

        cardsContainer.appendChild(card);

    })

}

showUsers(users)


let searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", (event) => {
    // console.log(searchInput.value);
    let filteredUsers = users.filter((user) => {
        return user.name.startsWith(searchInput.value);
    });
    console.log(filteredUsers);
    container.innerHTML = "";
    if (filteredUsers.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "No users found";
        msg.style.color = "#888";
        msg.style.textAlign = "center";
        msg.style.gridColumn = "1 / -1"; // full width
        container.appendChild(msg);
    }
    else{

        showUsers(filteredUsers);
    }
})