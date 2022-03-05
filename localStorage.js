// function to save whole lib array to localStorage each time new book created:

// function saveLibraryToLocalStorage() {
//   localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
// }

// function to look for that array when app is first loaded /
// function to pull books from local storage when page refreshed
// function checkIfLibraryExistsInLocalStorage() {
//   const storedLibrary = localStorage.getItem("myLibrary"); // gets information from local storage to use in below loop to create DOM/display
//   if (storedLibrary) {
//     const parsedLibrary = JSON.parse(storedLibrary);
//     myLibrary = parsedLibrary.map(function (almostBook) {
//       Object.setPrototypeOf(almostBook, Book.prototype);
//       return almostBook;
//     });
//     console.log("Library restored");
//   } else {
//     // manually add a few books to get the display working..
//     const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");

//     const thePaperMenagerie = new Book(
//       "The Paper Menagerie",
//       "Ken Liu",
//       "464",
//       "read"
//     );

//     const aPromisedLand = new Book(
//       "A Promised Land",
//       "Barack Obama",
//       "768",
//       "not read"
//     );

//     // const newBook = new Book(
//     //   almostBook.title,
//     //   almostBook.author,
//     //   almostBook.pageCount,
//     //   almostBook.status
//     // );
//     myLibrary.push(theHobbit, thePaperMenagerie, aPromisedLand, newBook);

//     console.log("Default library created");
//   }
//   createBookTileWithInfo();
// }

// make sure app doesn't crash if lib array isn't in localStorage..

// window.onload = function () {
//   checkIfLibraryExistsInLocalStorage();
// };
