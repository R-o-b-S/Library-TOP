function newBook (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const inf = this.title + " by " + this.author +
        ", " + this.pages + " pages, " + this.read;
        return inf;
    };
}

const myLibrary = [];  //Array that will contain all books

function addBookToLibrary () { //in sviluppo
    const title = window.prompt("Insert book title:");
    const author = window.prompt("Insert book author:");
    const pages = window.prompt("Insert how many pages is long:");
    const read = window.prompt("Did you read it? Yes or No");
    const book = new newBook (title, author, pages, read);
    myLibrary.push (book);
}

function showLibrary () {
    const counter = myLibrary.length;
    for (i=0; i<counter; i++){
        console.log(myLibrary[i].info());
    }
}

document.getElementById("addBook").onclick = addBookToLibrary;
document.getElementById("showLibrary").onclick = showLibrary;