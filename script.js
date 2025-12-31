const library = [];
const libraryTable = document.querySelector('#libaryTable');

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

function addBookFromForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    addBookToLibrary(title, author, year, genre);
    displayLibrary();
}

addBookToLibrary("Percy Jackson", "Rick Riordan", 2005, "Urban Fantasy");
addBookToLibrary("Hunger Games", "Suzanne Collins", 2007, "Dystopian");

function displayLibrary() {    
    // Clear existing rows except the header
    while (libraryTable.rows.length > 1) {
        libraryTable.deleteRow(1);
    }
    
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