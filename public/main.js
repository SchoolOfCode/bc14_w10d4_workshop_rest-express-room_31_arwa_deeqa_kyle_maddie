const URL = `http://localhost:9001/api/books`;

const fetchBooks = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    const data = await response.json();
    displayBooks(data.payload);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

const displayBooks = (books) => {
  const bookList = document.querySelector(".card-container");

  books.forEach((book) => {
    const listItem = document.createElement("li");
    const bookImage = document.createElement("img");
    bookImage.src = book.image_url;
    listItem.textContent = `${book.title} `;
    listItem.appendChild(bookImage);
    bookList.appendChild(listItem);
  });
};

fetchBooks();

const fetchAuthors = async () => {
  try {
    const response = await fetch("http://localhost:9001/api/authors");
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    const data = await response.json();
    displayAuthors(data.payload);
  } catch (error) {
    console.error("Error fetching authors:", error);
  }
};

const displayAuthors = (authors) => {
  const authorList = document.querySelector("#authorList");
  authors.forEach((author) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${author.first_name} ${author.last_name}`;
    authorList.appendChild(listItem);
  });
};

fetchAuthors();

//add a book
const addBook = async () => {};
