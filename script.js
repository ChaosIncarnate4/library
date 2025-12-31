const library = [];
const libraryTable = document.querySelector('#libaryTable');

function Book(title, author, pubDate, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.genre = genre;
    this.read = false;
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

Book.prototype.Read = function() {
    this.read === false ? this.read = true : this.read = false;
    displayLibrary();
}

function removeBook(index) {
    library.splice(index, 1);
    displayLibrary();
}

addBookToLibrary("Percy Jackson", "Rick Riordan", 2005, "Urban Fantasy");
addBookToLibrary("Hunger Games", "Suzanne Collins", 2007, "Dystopian");

function displayLibrary() {    
    // Clear existing rows except the header
    while (libraryTable.rows.length > 1) {
        libraryTable.deleteRow(1);
    }
    
    library.forEach((book, index) => {
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
        let cell6 = row.insertCell();
        cell6.textContent = book.read;
        let cell7 = row.insertCell();
        let readButton = document.createElement('button');
        readButton.textContent = "Read it?";
        readButton.onclick = () => book.Read();
        cell7.appendChild(readButton);
        let cell8 = row.insertCell();
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeBook(index);
        cell8.appendChild(removeButton);
    });
}

displayLibrary();