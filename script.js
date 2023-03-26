const addBookButton = document.getElementById("addbookbutton");
const formdiv = document.querySelector(".formdiv");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("#bookform");
const maindiv = document.querySelector(".maindiv");
const submitbutton = document.querySelector("#submitform");
const formtitle = document.querySelector("#formtitle");
const formauthor = document.querySelector("#formauthor");
const formpages = document.querySelector("#formpages");

const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function createCard(a) {
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const readbutton = document.createElement("button");
  readbutton.classList.add("buttonread");

  if (form.isread.checked === true) {
    readbutton.classList.add("greenbutton");
    readbutton.innerText = "Read";
  } else {
    readbutton.classList.add("redbutton");
    readbutton.innerText = "Not read";
  }

  const removebutton = document.createElement("button");
  removebutton.innerText = "Remove";
  removebutton.classList.add("buttonremove");
  title.innerText = a.name;
  author.innerText = a.author;
  pages.innerText = a.pages;
  card.append(title, author, pages, readbutton, removebutton);
  maindiv.appendChild(card);
  card.classList.add("cardactive");
  readbutton.addEventListener("click", () => {
    if (readbutton.classList.contains("greenbutton")) {
      readbutton.classList.remove("greenbutton");
      readbutton.classList.add("redbutton");
      readbutton.innerText = "Not read";
    } else {
      readbutton.classList.remove("redbutton");
      readbutton.classList.add("greenbutton");
      readbutton.innerText = "Read";
    }
  });

  removebutton.addEventListener("click", () => {
    card.remove();
  });
}

addBookButton.addEventListener("click", () => {
  form.reset();
  formdiv.classList.add("displayblock");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    formdiv.classList.remove("displayblock");
  }
});

submitbutton.addEventListener("click", (e) => {
  if (formtitle.value === "" || formauthor.value === "" || formpages.value === "") return;
  const newbook = new Book(formtitle.value, formauthor.value, formpages.value);
  myLibrary.push(newbook);
  createCard(myLibrary[myLibrary.length - 1]);
  overlay.classList.remove("active");
  formdiv.classList.remove("displayblock");
  e.preventDefault();
});

// on next library. link the actual cards to the array. and create each card by looping through the array.
