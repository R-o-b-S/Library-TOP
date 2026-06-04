function AddBook (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let info = "${this.title}" + " by " + "${this.author}" +
        ", " + "${this.pages}" + ", " + "${this.read}";
        return info;
    }
}

