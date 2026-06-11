function newBook (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
    this.info = function() {
        const inf = this.title + " by " + this.author +
        ", " + this.pages + " pages, " + this.read;
        return inf;
    };
}

const myLibrary = [ //Array that will contain all books, added two for testing purposes
    {
        "title": "Miaw",
        "author": "Micio the Cat",
        "pages": "156",
        "read": true,
        "id": "ttr32ge",
        "info": function () {
            const inf = this.title + " by " + this.author +
            ", " + this.pages + " pages, " + this.read;
            return inf;
        }
    },
    {
        "title": "Miao",
        "author": "Micio Pallino il Gatto",
        "pages": "301",
        "read": false,
        "id": "tht78pl",
        "info": function () {
            const inf = this.title + " by " + this.author +
            ", " + this.pages + " pages, " + this.read;
            return inf;
        }
    },
];  

function addBookToLibrary () {
    const title = document.getElementById("addTitle").value;
    const author = document.getElementById("addAuthor").value;
    const pages = document.getElementById("addPages").value;
    const read = document.getElementById("addRead").checked;
    const book = new newBook (title, author, pages, read);
    myLibrary.push (book);
    const last = myLibrary.length-1;
    const newDiv = document.createElement("div");
    newDiv.classList = "card";
    newDiv.id = myLibrary[last].id;
    document.getElementById("main").appendChild(newDiv);
    refreshLib();
}

function displayForm () {
    const element = document.getElementById("newBook");
    element.open = true;
}

document.getElementById("addBook").onclick = displayForm;

function submitForm (event) {
    addBookToLibrary();
    event.preventDefault();
    closeForm ();
}

document.getElementById("submitForm").onclick = submitForm;

function closeForm () {
    const element = document.getElementById("newBook");
    element.open = false;
    document.getElementById("addTitle").value = "";
    document.getElementById("addAuthor").value = "";
    document.getElementById("addPages").value = "";
    document.getElementById("addRead").checked = false;
}

document.getElementById("cancelForm").onclick = closeForm;

function fillLib () {
    const counter = myLibrary.length;
    for (i=0; i<counter; i++){
        const newDiv = document.createElement("div");
        newDiv.classList = "card";
        newDiv.id = myLibrary[i].id;
        document.getElementById("main").appendChild(newDiv);

        const contDiv = document.createElement("div");
        contDiv.id = "container"+i;
        document.getElementById(myLibrary[i].id).appendChild(contDiv);

        const titleDiv = document.createElement("div");
        titleDiv.classList = "bookInfo";
        titleDiv.id = "title"+i;
        document.getElementById("container"+i).appendChild(titleDiv);
        const title1 = document.createElement("p");
        title1.classList = "bI";
        let txt = "Book title:";
        title1.textContent = txt;
        document.getElementById("title"+i).appendChild(title1);
        const title2 = document.createElement("p");
        txt = myLibrary[i].title;
        title2.textContent = txt;
        document.getElementById("title"+i).appendChild(title2);

        const authorDiv = document.createElement("div");
        authorDiv.classList = "bookInfo";
        authorDiv.id = "author"+i;
        document.getElementById("container"+i).appendChild(authorDiv);
        const author1 = document.createElement("p");
        author1.classList = "bI";
        txt = "Author:";
        author1.textContent = txt;
        document.getElementById("author"+i).appendChild(author1);
        const author2 = document.createElement("p");
        txt = myLibrary[i].author;
        author2.textContent = txt;
        document.getElementById("author"+i).appendChild(author2);

        const pagesDiv = document.createElement("div");
        pagesDiv.classList = "bookInfo";
        pagesDiv.id = "pages"+i;
        document.getElementById("container"+i).appendChild(pagesDiv);
        const pages1 = document.createElement("p");
        pages1.classList = "bI";
        txt = "N. of pages:";
        pages1.textContent = txt;
        document.getElementById("pages"+i).appendChild(pages1);
        const pages2 = document.createElement("p");
        txt = myLibrary[i].pages;
        pages2.textContent = txt;
        document.getElementById("pages"+i).appendChild(pages2);

        const buttonDiv = document.createElement("div");
        buttonDiv.classList = "bookInfo";
        buttonDiv.id = "butt"+i;
        document.getElementById(myLibrary[i].id).appendChild(buttonDiv);
        const butt1 = document.createElement("button");
        butt1.classList = "doStuff";
        txt = "Delete book";
        butt1.textContent = txt;
        butt1.addEventListener("click", () => deleteBook(newDiv.id));
        document.getElementById("butt"+i).appendChild(butt1);
        
        const butt2 = document.createElement("button");
        butt2.classList = "doStuff";
        butt2.id = "refRead"+i;
        if (myLibrary[i].read === true){
                txt = "Read";
                butt2.style.backgroundColor = "#e6af2e";
                butt2.addEventListener("mouseenter", (event) => {butt2.style.backgroundColor = "#e0e2db"; })
                butt2.addEventListener("mouseleave", (event) => {butt2.style.backgroundColor = "#e6af2e"; })
            }
        else if (myLibrary[i].read === false){
            txt = "Not read";
        }
        butt2.textContent = txt;
        butt2.addEventListener("click", () => readStatus(newDiv.id));
        document.getElementById("butt"+i).appendChild(butt2);
    }
}

fillLib();

function refreshLib () {
        const counter = myLibrary.length;
        for (i=0; i<counter; i++) {
            const element = document.getElementById(myLibrary[i].id);
            element.remove();
            }
        fillLib();
} 

function deleteBook (e) {
    const counter = myLibrary.length;
    for (i=0; i<counter; i++) {
        const element = document.getElementById(myLibrary[i].id);
        if (e === myLibrary[i].id) {
            myLibrary.splice(i, 1);
            element.remove();
        }
    }
    refreshLib();
}

function readStatus(e) {
    const counter = myLibrary.length;
    for (i=0; i<counter; i++) {
        const element = document.getElementById(myLibrary[i].id);
        if (e === myLibrary[i].id) {
            if (myLibrary[i].read === true){
                myLibrary[i].read = false;
            }
            else if (myLibrary[i].read === false){
                myLibrary[i].read = true;
            }
            element.remove();
        }
        else {
            element.remove();
        }
    
    }
    fillLib();
}