// books are stored in a simple array
let myLibrary = [];

// object constructor to create new book objects
function Book(title, author, pageNumber, status) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.status = status;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pageNumber +
      " pages, " +
      this.status
    );
  };
}

// take users' input and store new book objects into array
function addToLibrary() {}

// loop through array and display each book on the page (table or indiv cards)

// add "New Book" button brings up form for users to input details:
// author, title, pageCount, readStatus

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
