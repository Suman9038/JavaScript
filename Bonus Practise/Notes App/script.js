// // First New card create karna hai, Data local storage mai save karna ha
// // Second Local storage  se hi cards ko show krna hai
// // Third Buttons ko v Handle karna hoga 
// // Filters ko v handle krna hoga

// // All variable and document selction

// let addNote = document.querySelector("#addNote")
// let modal = document.querySelector(".modal")
// const form = document.querySelector(".form-card");

// // inputs
// const imageInput = form.querySelector('input[placeholder*="photo"]');
// const nameInput = form.querySelector('input[placeholder*="full"]');
// const townInput = form.querySelector('input[placeholder*="town"]');
// const purposeInput = form.querySelector('input[placeholder*="appointment"]');

// // category radios
// const categoryInputs = form.querySelectorAll('input[name="category"]');
// // const selectedCategory = form.querySelector('input[name="category"]:checked');

// // buttons
// const createBtn = form.querySelector(".submit");
// const closeBtn = form.querySelector(".close");

// let prevNote = document.querySelector("#prevNote")
// let nextNote = document.querySelector("#nextNote")


// // Opeing the form 
// addNote.addEventListener("click", () => {
//     modal.classList.add("show")
// })

// // closing the Form
// closeBtn.addEventListener("click", (event) => {
//     modal.classList.remove("show")
// })

// let selected = null;

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     if (imageInput.value.trim() === "") {
//         alert("Image URL is required");
//         imageInput.focus();
//         return;
//     }

//     if (nameInput.value.trim() === "") {
//         alert("Full Name is required");
//         nameInput.focus();
//         return;
//     }

//     if (townInput.value.trim() === "") {
//         alert("Home Town is required");
//         townInput.focus();
//         return;
//     }

//     if (purposeInput.value.trim() === "") {
//         alert("Purpose is required");
//         purposeInput.focus();
//         return;
//     }

//     categoryInputs.forEach((category) => {
//         if (category.checked) {
//             selected = category.value;
//         }
//     });

//     if (!selected) {
//         alert("Please select a category");
//         return;
//     }
//     saveTolocalStorage({
//         image: imageInput.value,
//         name: nameInput.value,
//         town: townInput.value,
//         purpose: purposeInput.value,
//         category: selected
//     })
//     form.reset();
//     modal.classList.remove("show")
// });

// function saveTolocalStorage(obj) {
//     // purana local storage nikalo
//     if (localStorage.getItem("notes") === null) {
//         let oldNotes = [];
//         oldNotes.push(obj);
//         localStorage.setItem("notes", JSON.stringify(oldNotes))
//     }
//     else {
//         let oldNotes = localStorage.getItem("notes");
//         oldNotes = JSON.parse(oldNotes);
//         oldNotes.push(obj);
//         localStorage.setItem("notes", JSON.stringify(oldNotes));
//     }
// }

// function showCards() {
//     // const StackContainer = document.querySelector(".stack-container");
//     // StackContainer.innerHTML = "";

//     const stack = document.querySelector(".card-stack");
//     stack.innerHTML = ""; // clear old cards
//     let allNotes = JSON.parse(localStorage.getItem("notes"));

//     allNotes.forEach((notes, index) => {
//         // main card
//         const noteCard = document.createElement("div");
//         // noteCard.classList.add("note-card", "card-1");
//         if (index === 0) noteCard.className = "note-card card-1";
//         else if (index === 1) noteCard.className = "note-card card-2";
//         else if (index === 2) noteCard.className = "note-card card-3";
//         else return; // baaki cards hide (stack logic)

//         // profile
//         const profile = document.createElement("div");
//         profile.classList.add("profile");

//         const img = document.createElement("img");
//         img.src = notes.image

//         const name = document.createElement("h3");
//         name.textContent = notes.name

//         profile.appendChild(img);
//         profile.appendChild(name);

//         // info: home town
//         const infoTown = document.createElement("div");
//         infoTown.classList.add("info");

//         const townLabel = document.createElement("span");
//         townLabel.textContent = "Home town";

//         const townValue = document.createElement("span");
//         townValue.textContent = notes.town;

//         infoTown.appendChild(townLabel);
//         infoTown.appendChild(townValue);

//         // info: bookings
//         const infoBooking = document.createElement("div");
//         infoBooking.classList.add("info");

//         const bookingLabel = document.createElement("span");
//         bookingLabel.textContent = "Bookings";

//         const bookingValue = document.createElement("span");
//         bookingValue.textContent = "3 times";

//         infoBooking.appendChild(bookingLabel);
//         infoBooking.appendChild(bookingValue);

//         // actions
//         const actions = document.createElement("div");
//         actions.classList.add("actions");

//         const callBtn = document.createElement("button");
//         callBtn.classList.add("dark-btn");
//         callBtn.textContent = "Call";

//         const msgBtn = document.createElement("button");
//         msgBtn.classList.add("light-btn");
//         msgBtn.textContent = "Message";

//         actions.appendChild(callBtn);
//         actions.appendChild(msgBtn);

//         // assemble card
//         noteCard.appendChild(profile);
//         noteCard.appendChild(infoTown);
//         noteCard.appendChild(infoBooking);
//         noteCard.appendChild(actions);

//         stack.appendChild(noteCard);
//         // StackContainer.appendChild(stack);

//     })
// }
// showCards();

// function updateStack() {
//     const noteCard = document.querySelectorAll(".note-card");
//     noteCard.forEach((card, index) => {
//         card.style.zIndex = 3 - index;
//         card.style.transform = `translateY(${index * 12}px) scale(${1 - index * 0.06})`;
//         card.style.opacity = 1 - index * 0.15;
//     })
// }


// prevNote.addEventListener("click", (event) => {
//     let lastChild = document.querySelector(".card-stack").lastElementChild;
//     if (lastChild) {
//         stack.insertBefor(lastChild, document.querySelector(".card-stack").firstElementChild);
//         // update
//         updateStack();
//     }
// });


// nextNote.addEventListener("click", (event) => {
//     let firstChild = document.querySelector(".card-stack").firstElementChild;
//     if (firstChild) {
//         stack.appendChild(firstChild, document.querySelector(".card-stack").lastElementChild);
//         updateStack();
//     }
// });


// ===============================
// ELEMENT SELECTION
// ===============================
const addNote = document.querySelector("#addNote");
const prevNote = document.querySelector("#prevNote");
const nextNote = document.querySelector("#nextNote");

const modal = document.querySelector(".modal");
const form = document.querySelector(".form-card");
const stack = document.querySelector(".card-stack");

// inputs
const imageInput = form.querySelector('input[placeholder*="photo"]');
const nameInput = form.querySelector('input[placeholder*="full"]');
const townInput = form.querySelector('input[placeholder*="town"]');
const purposeInput = form.querySelector('input[placeholder*="appointment"]');
const categoryInputs = form.querySelectorAll('input[name="category"]');

const closeBtn = form.querySelector(".close");


// ===============================
// OPEN / CLOSE MODAL
// ===============================
addNote.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});


// ===============================
// FORM SUBMIT
// ===============================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!imageInput.value.trim()) return alert("Image URL required");
  if (!nameInput.value.trim()) return alert("Name required");
  if (!townInput.value.trim()) return alert("Town required");
  if (!purposeInput.value.trim()) return alert("Purpose required");

  let selectedCategory = null;
  categoryInputs.forEach(radio => {
    if (radio.checked) selectedCategory = radio.value;
  });

  if (!selectedCategory) return alert("Select a category");

  saveToLocalStorage({
    image: imageInput.value,
    name: nameInput.value,
    town: townInput.value,
    purpose: purposeInput.value,
    category: selectedCategory
  });

  form.reset();
  modal.classList.remove("show");
  showCards();
});


// ===============================
// LOCAL STORAGE
// ===============================
function saveToLocalStorage(note) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.unshift(note); // NEW note on top
  localStorage.setItem("notes", JSON.stringify(notes));
}


// ===============================
// RENDER CARDS
// ===============================
function showCards() {
  stack.innerHTML = "";

  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.slice(0, 3).forEach(note => {
    const card = createCard(note);
    stack.appendChild(card);
  });

  updateStack();
}


// ===============================
// CREATE CARD ELEMENT
// ===============================
function createCard(note) {
  const card = document.createElement("div");
  card.className = "note-card";

  card.innerHTML = `
    <div class="profile">
      <img src="${note.image}" />
      <h3>${note.name}</h3>
    </div>

    <div class="info">
      <span>Home town</span>
      <span>${note.town}</span>
    </div>

    <div class="info">
      <span>Bookings</span>
      <span>3 times</span>
    </div>

    <div class="actions">
      <button class="dark-btn">Call</button>
      <button class="light-btn">Message</button>
    </div>
  `;

  return card;
}


// ===============================
// STACK ANIMATION
// ===============================
function updateStack() {
  const cards = document.querySelectorAll(".note-card");

  cards.forEach((card, index) => {
    card.style.zIndex = 3 - index;
    card.style.transform = `translateY(${index * 14}px) scale(${1 - index * 0.06})`;
    card.style.opacity = 1 - index * 0.15;
  });
}


// ===============================
// PREV / NEXT CONTROLS
// ===============================
prevNote.addEventListener("click", () => {
  if (stack.children.length < 2) return;

  const last = stack.lastElementChild;
  stack.insertBefore(last, stack.firstElementChild);
  updateStack();
});

nextNote.addEventListener("click", () => {
  if (stack.children.length < 2) return;

  const first = stack.firstElementChild;
  stack.appendChild(first);
  updateStack();
});


// ===============================
// INIT
// ===============================
showCards();
