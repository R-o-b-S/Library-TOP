function newBook (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
    console.log(this.id);
    this.info = function() {
        const inf = this.title + " by " + this.author +
        ", " + this.pages + " pages, " + this.read;
        return inf;
    };
}

const myLibrary = [ //Array that will contain all books, added two for testing purposes
    {
        "title": "Test1",
        "author": "Micio Pallino the Cat",
        "pages": "156",
        "read": "true",
        "id": "ttr32ge",
        "info": function () {
            const inf = this.title + " by " + this.author +
            ", " + this.pages + " pages, " + this.read;
            return inf;
        }
    },
    {
        "title": "Test2",
        "author": "Micio Pallino the Cat",
        "pages": "301",
        "read": "false",
        "id": "tht78pl",
        "info": function () {
            const inf = this.title + " by " + this.author +
            ", " + this.pages + " pages, " + this.read;
            return inf;
        }
    },
];  

function addBookToLibrary () { //in sviluppo, input tramite form
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
    refreshLib ();
}

function refreshLib () {
    const counter = myLibrary.length;
    for (i=0; i<counter; i++){
        const newDiv = document.createElement("div");
        newDiv.classList = "card";
        newDiv.id = myLibrary[i].id;
        document.getElementById("main").appendChild(newDiv);

        const contDiv = document.createElement("div");
        contDiv.id = "cont"+i;
        document.getElementById(myLibrary[i].id).appendChild(contDiv);

        const title = document.createElement("p");
        title.id = "title";
        let txt = "Book title: " + myLibrary[i].title;
        title.textContent = txt;
        document.getElementById("cont"+i).appendChild(title);

        const author = document.createElement("p");
        author.id = "author";
        txt = "Author: " + myLibrary[i].author;
        author.textContent = txt;
        document.getElementById("cont"+i).appendChild(author);

        const pages = document.createElement("p");
        pages.id = "pages";
        txt = "Number of pages: " + myLibrary[i].pages;
        pages.textContent = txt;
        document.getElementById("cont"+i).appendChild(pages);

        const read = document.createElement("p");
        read.id = "pages";
        txt = "Read: " + myLibrary[i].read;
        read.textContent = txt;
        document.getElementById("cont"+i).appendChild(read);
    }
}



//document.getElementById("addBook").onclick = addBookToLibrary;
document.getElementById("showLibrary").onclick = showLibrary;