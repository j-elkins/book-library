// books are stored in a simple array
let myLibrary = [];

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

// manually add a few books to get display working..
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

// add to library array
myLibrary.push(theHobbit, thePaperMenagerie, aPromisedLand);
console.log({ myLibrary });

// add "New Book" button brings up form for users to input details:
// author, title, pageCount, readStatus
// take users' input and store new book objects into array
function addToLibrary() {}

// loop through array and display each book on the page (table or tiles)
const bookTileContainer = document.querySelector("#bookTileContainer");
let bookTile = document.createElement("div");
// let title = "";
// let author = "";
// let pageCount = "";
// let readStatus = "";

// function loopThroughAllBooksGetInfo() {
//   myLibrary.forEach((book) => {
//     info = book.info;
//     title = book.title;
//     author = book.author;
//     pageCount = book.pageCount;
//     readStatus = book.status;
//     return info, title, author, pageCount, readStatus;
//   });
// }

// function displayBookInfoOnPage() {
//   bookTile.textContent =
//     title + " by " + author + ", " + pageCount + " pages, " + readStatus;
//   bookTile.classList.add("tile");
//   bookTileContainer.appendChild(bookTile);
// }

function displayBookInfoOnBookTile() {
  myLibrary.forEach((book) => {
    bookTile.textContent =
      book.title +
      " by " +
      book.author +
      ", " +
      book.pageCount +
      " pages, " +
      book.status;
    bookTile.classList.add("tile");
    bookTileContainer.appendChild(bookTile);
  });
}

displayBookInfoOnBookTile();

// for (let i = 0, l = myLibrary.length; i < l; i++) {
//     bookTile.textContent = book.title + book.author + book.pageNumber + book.status;
//     bookTileContainer.appendChild(bookTile);
//   }

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
