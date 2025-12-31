const library = [];

function Book(title, author, pubDate, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.genre = genre;
}

function addBookToLibrary(title, author, pubDate, genre) {
    let book = new Book(title, author, pubDate, genre);
    library.push(book);
}

addBookToLibrary("Percy Jackson", "Rick Riordan", 2005, "Urban Fantasy");

function displayLibrary() {
    const libraryTable = document.querySelector('#libaryTable');

    library.forEach((book) => {
        console.log(book.title);
        let row = libraryTable.insertRow();
        let cell1 = row.insertCell();
        cell1.textContent = book.id;
        let cell2 = row.insertCell();
        cell2.textContent = book.title;
        let cell3 = row.insertCell();
        cell3.textContent = book.author;
        let cell4 = row.insertCell();
        cell4.textContent = book.pubDate;
        let cell5 = row.insertCell();
        cell5.textContent = book.genre;
    });
}

displayLibrary();