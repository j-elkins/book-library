let bookLibrary = [];
const bookTileContainer = document.querySelector("#bookTileContainer");
const addNewBookForm = document.querySelector("#addNewBookForm");
class Book {
  constructor(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pages = pageCount;
    this.status = status;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  fetch(`http://localhost:3000/books`)
    .then((response) => response.json())
    .then((data) => {
      // loading page updates bookLibrary with current data
      data.forEach((bookObj) => {
        bookLibrary.push(bookObj);
      });

      updateLibrary(bookLibrary);
      console.log(bookLibrary);
    });
});

function updateLibrary(arr) {
  // resets DOM & iterates through library, creating a book tile for each book
  bookTileContainer.innerHTML = "";

  arr.forEach((bookObj) => {
    console.log(bookObj);
    createBookTile(bookObj);
  });
}

function createBookTile(bookObj) {
  // creates a book tile populated from bookObj info & appends to DOM
  const bookTile = document.createElement("div");
  bookTile.classList.add("tile");

  const bookTileTitle = document.createElement("div");
  const bookTileAuthor = document.createElement("div");
  const bookTilePageCount = document.createElement("div");

  bookTileTitle.textContent = bookObj.title;
  bookTileAuthor.textContent = bookObj.author;
  bookTilePageCount.textContent = bookObj.pages + " pages";
  bookTileTitle.classList.add("title");
  bookTileAuthor.classList.add("author");
  bookTilePageCount.classList.add("pageCount");

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttonsDiv");

  // add button to tile: removes book from library
  const removeBookBtn = document.createElement("button");
  removeBookBtn.addEventListener("click", () => {
    removeBookFromLibrary(bookObj);
  });
  removeBookBtn.innerHTML = '<i class="fas fa-times"></i>';
  removeBookBtn.classList.add("button");
  removeBookBtn.classList.add("removeBtn");

  // add button to tile: shows read/not read status
  const toggleStatusBtn = document.createElement("button");
  toggleStatusBtn.classList.add("button");
  toggleStatusBtn.classList.add("statusBtn");
  toggleStatusBtn.textContent = bookObj.status;
  toggleStatusBtn.addEventListener("click", (event) => {
    if (bookObj.status == "read") {
      bookObj.status = "not read";
    } else {
      bookObj.status = "read";
    }

    toggleStatusBtn.textContent = bookObj.status;
    saveUpdatedBookInfo(bookObj);
  });

  buttonsDiv.append(removeBookBtn, toggleStatusBtn);
  bookTile.append(bookTileTitle, bookTileAuthor, bookTilePageCount, buttonsDiv);
  bookTileContainer.appendChild(bookTile);
}

// get input from form and store new book objects into array
addNewBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBookObj = new Book(
    e.target["title"].value,
    e.target["author"].value,
    e.target["pages"].value,
    e.target["status"].value
  );

  console.log(newBookObj);
  bookLibrary.push(newBookObj);
  saveBook(newBookObj);
  updateLibrary(bookLibrary);

  // createBookTileWithInfo();
  console.log(bookLibrary);
});

const addNewBookButton = document.querySelector("#addNewBookButton");
addNewBookButton.addEventListener("click", () => {
  addNewBookForm.classList.toggle("hidden");
});

// function returns new array with all books except the one selected (removed)
function removeBookFromLibrary(bookObj) {
  //rewrite this to be based on book ID
  bookLibrary = bookLibrary.filter(
    (allowedBook) => allowedBook.title !== bookObj.title
  );

  deleteBook(bookObj);
  updateLibrary(bookLibrary);
}

function saveBook(bookObj) {
  fetch(`http://localhost:3000/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(bookObj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function saveUpdatedBookInfo(bookObj) {
  fetch(`http://localhost:3000/books/${bookObj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ status: `${bookObj.status}` }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function deleteBook(bookObj) {
  fetch(`http://localhost:3000/books/${bookObj.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// NEXT:
// 1. set up & connect to db.json with hardcoded books *DONE
// 2. link form input to create new db object *DONE
// 3. establish POST, PATCH, DELETE for persistence *DONE
// 4. search by title and pull info from book API
