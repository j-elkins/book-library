// books are stored in a simple array
const myLibrary = [];

// object constructor to create new book objects
function Book(title, author, pageCount, status) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.status = status;
  this.info = function () {
    return (
      this.title + " by " + this.author + ", " + this.pageCount + " pages "
    );
  };
}

// manually add a few books to get display working..
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");
console.log(theHobbit.info());

const thePaperMenagerie = new Book(
  "The Paper Menagerie",
  "Ken Liu",
  "464",
  "read"
);

const aPromisedLand = new Book(
  "A Promised Land",
  "Barack Obama",
  "768",
  "not read"
);

// add to library array
myLibrary.push(theHobbit, thePaperMenagerie, aPromisedLand);
console.log({ myLibrary });

// loop through myLibrary array and display each book on the page
const bookTileContainer = document.querySelector("#bookTileContainer");

function createBookTileWIthInfo() {
  bookTileContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    // create a new book tile populated with book info
    const bookTile = document.createElement("div");
    bookTile.textContent = book.info();
    bookTile.classList.add("tile");
    bookTileContainer.appendChild(bookTile);

    // add button to tile to remove book from library
    const removeBookButton = document.createElement("button");
    removeBookButton.addEventListener("click", () => {
      removeBookFromLibrary();
    });
    removeBookButton.textContent = "X";
    removeBookButton.classList.add("button");
    removeBookButton.classList.add("removeBtn");
    bookTile.appendChild(removeBookButton);

    // add button to tile to update read status
    const toggleReadStatusButton = document.createElement("button");
    toggleReadStatusButton.classList.add("button");
    toggleReadStatusButton.classList.add("statusBtn");
    toggleReadStatusButton.textContent = book.status;
    toggleReadStatusButton.addEventListener("click", () => {
      let change = document.querySelector(".statusBtn");
      if (change.innerHTML == "read") {
        change.innerHTML = "not read";
      } else {
        change.innerHTML = "read";
      }
    });

    bookTile.appendChild(toggleReadStatusButton);
  });
}

createBookTileWIthInfo();

function createNewTile() {}

function addRemoveBookButton() {}

function addToggleReadStatusButton() {}

function toggleReadStatus() {}

// add "New Book" button to generate form for users to input details:
// author, title, pageCount, readStatus
const addNewBookForm = document.querySelector("#addNewBookForm");
const addNewBookButton = document.querySelector("#addNewBookButton");
addNewBookButton.addEventListener("click", () => {
  addNewBookForm.classList.toggle("hidden");
});

// take users' input from form and store new book objects into array:
// click submit on newBookForm enters user input into Book()
const submitNewBookButton = document.querySelector("#submitNewBookButton");
let inputs = document.querySelectorAll("input");

submitNewBookButton.addEventListener("click", () => {
  getInputValues();
  inputs.forEach((input) => (input.value = ""));
});

// function grabs innerText.HTML from each input and saves it into variables
function getInputValues() {
  let enteredTitle = document.querySelector("#title").value;
  let enteredAuthor = document.querySelector("#author").value;
  let enteredPageCount = document.querySelector("#count").value;
  let enteredReadStatus = document.querySelector("#status").value;

  const newBook = new Book(
    enteredTitle,
    enteredAuthor,
    enteredPageCount,
    enteredReadStatus
  );

  myLibrary.push(newBook);
  createBookTileWIthInfo();
  console.log(myLibrary);
}

// add "Remove" button to remove book from library
// need to associate DOM elements with the actual books..
// can use data-attribute corresponding to index of lib array
// or filter() ??
function removeBookFromLibrary() {
  myLibrary.filter((book) => book.title === book.title);
}

console.log(removeBookFromLibrary());

// add button on book display to change "read" status
// function to toggle "read" status on Book prototype instance

// BONUS: add persistence using Web Storage API / localStorage
// first, test whether the storage object has already been populated (i.e., the page was previously accessed)

// could also use Storage.length to test whether the storage object is empty or not

// function to save whole lib array to localStorage each time new book created
function saveLibraryArrayToLocalStorage() {}
// function to look for that array when app is first loaded
function checkIfLibraryArrayExistsInLocalStorage() {
  if (!localStorage.getItem("myLibrary")) {
    populateStorage();
  } else {
    setStyles();
  }
}
// make sure app doesn't crash if lib array isn't in localStorage..
// JSON can't store functions.. how to add methods back to obj properties after retrieval?
// JSON.stringify(value[, replacer[, space]]) // ??
