function Library() {
  this.library = [];
  
  this.addBookToLibrary = function(book) {
    this.library.push(book)
  };

  this.printLibrary = function() {
    this.library.forEach(
      (book) => console.log(book.title)
    );
  };
};

const myLibrary = new Library();

function Book(bookTitle, bookDescription) {
  this.id = crypto.randomUUID();
  this.title = bookTitle;
  this.description = bookDescription;
};