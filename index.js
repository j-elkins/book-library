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
      this.title +
      " by " +
      this.author +
      ", " +
      this.pageCount +
      " pages, " +
      this.status
    );
  };
}

// loop through myLibrary array and display each book on the page
const bookTileContainer = document.querySelector("#bookTileContainer");

function displayBookInfoOnBookTile() {
  bookTileContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookTile = document.createElement("div");
    bookTile.textContent = book.info();
    bookTile.classList.add("tile");
    bookTileContainer.appendChild(bookTile);
  });
}

// add "New Book" button to generate form for users to input details:
// author, title, pageCount, readStatus
const newBookFormDiv = document.querySelector("#newBookFormDiv");
const newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", () => {
  newBookFormDiv.classList.toggle("hidden");
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
  displayBookInfoOnBookTile();
  console.log(myLibrary);
}

// add "Remove" button to remove book from library
// need to associate DOM elements with the actual books..
// can use data-attribute corresponding to index of lib array

// add button on book display to change "read" status
// function to toggle "read" status on Book prototype instance

// BONUS: add persistence using Web Storage API / localStorage
// function to save whole lib array to localStorage each time new book created
// function to look for that array when app is first loaded
// make sure app doesn't crash if lib array isn't in localStorage..
// JSON can't store functions.. how to add methods back to obj properties after retrieval?
