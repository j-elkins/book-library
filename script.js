// books are stored in a simple array
let myLibrary = [];

// object constructor to create new book objects
function Book(title, author, pageCount, status) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.status = status;
}

// manually add a few books to get the display working..
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");
// console.log(theHobbit.info());

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

// add manual books to library array
myLibrary.push(theHobbit, thePaperMenagerie, aPromisedLand);
console.log({ myLibrary });

// loop through myLibrary array and display each book on the page
const bookTileContainer = document.querySelector("#bookTileContainer");

function createBookTileWithInfo() {
  bookTileContainer.innerHTML = "";
  myLibrary.forEach((currentBook) => {
    // create a new book tile populated with book info
    const bookTile = document.createElement("div");
    bookTile.classList.add("tile");

    const bookTileTitle = document.createElement("div");
    const bookTileAuthor = document.createElement("div");
    const bookTilePageCount = document.createElement("div");
    bookTileTitle.textContent = currentBook.title;
    bookTileAuthor.textContent = currentBook.author;
    bookTilePageCount.textContent = currentBook.pageCount + " pages";
    bookTileTitle.classList.add("title");
    bookTileAuthor.classList.add("author");
    bookTilePageCount.classList.add("pageCount");
    bookTile.appendChild(bookTileTitle);
    bookTile.appendChild(bookTileAuthor);
    bookTile.appendChild(bookTilePageCount);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");
    bookTile.appendChild(buttonsDiv);

    // add button to tile: removes book from library
    const removeBookButton = document.createElement("button");
    removeBookButton.addEventListener("click", () => {
      removeBookFromLibrary(currentBook);
    });
    removeBookButton.innerHTML = '<i class="fas fa-times"></i>';
    removeBookButton.classList.add("button");
    removeBookButton.classList.add("removeBtn");
    buttonsDiv.appendChild(removeBookButton);

    // add button to tile: shows read/not read status
    const toggleReadStatusButton = document.createElement("button");
    toggleReadStatusButton.classList.add("button");
    toggleReadStatusButton.classList.add("statusBtn");
    toggleReadStatusButton.textContent = currentBook.status;
    toggleReadStatusButton.addEventListener("click", (event) => {
      if (currentBook.status == "read") {
        currentBook.status = "not read";
      } else {
        currentBook.status = "read";
      }

      toggleReadStatusButton.textContent = currentBook.status;
    });
    buttonsDiv.appendChild(toggleReadStatusButton);

    bookTileContainer.appendChild(bookTile);

    saveLibraryArrayToLocalStorage();
  });
}

createBookTileWithInfo();

// add "New Book" button to generate form for users to input details:
// author, title, pageCount, readStatus
const addNewBookForm = document.querySelector("#addNewBookForm");
const addNewBookButton = document.querySelector("#addNewBookButton");
addNewBookButton.addEventListener("click", () => {
  addNewBookForm.classList.toggle("hidden");
});

// get input from form and store new book objects into array
const submitNewBookButton = document.querySelector("#submitNewBookButton");
let inputs = document.querySelectorAll("input");

// create new book object & add new book to library
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
  createBookTileWithInfo();
  console.log(myLibrary);
}

// clicking submit on newBookForm creates a new Book
submitNewBookButton.addEventListener("click", () => {
  getInputValues();
  inputs.forEach((input) => (input.value = ""));
});

// function returns new array with all books except the one selected (removed)
function removeBookFromLibrary(bookToRemove) {
  myLibrary = myLibrary.filter(
    (allowedBook) => allowedBook.title !== bookToRemove.title
  );
  createBookTileWithInfo();
}

// BONUS: add persistence using Web Storage API / localStorage
// first, test whether the storage object has already been populated (i.e., the page was previously accessed)
// could also use Storage.length to test whether the storage object is empty or not

// function to save whole lib array to localStorage each time new book created
function saveLibraryArrayToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// function to look for that array when app is first loaded /
// function to pull books from local storage when page refreshed
function checkIfLibraryArrayExistsInLocalStorage() {
  if (!localStorage.myLibrary) {
    createBookTileWithInfo();
  } else {
    let objects = localStorage.getItem("myLibrary"); // gets information from local storage to use in below loop to create DOM/display
    objects = JSON.parse(objects);
    myLibrary = objects;
    createBookTileWithInfo();
  }
}
// make sure app doesn't crash if lib array isn't in localStorage..
// JSON can't store functions.. how to add methods back to obj properties after retrieval?
// JSON.stringify(value[, replacer[, space]]) // ??
