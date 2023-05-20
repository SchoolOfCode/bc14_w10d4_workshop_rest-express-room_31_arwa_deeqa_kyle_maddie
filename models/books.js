import { pool } from "../db/index.js";

export async function getBooks() {
  const query = "SELECT * FROM books";
  // Query the database and return all books
  const result = await pool.query(query);
  return result.rows;
}

export async function searchBooksByTitle(searchTerm) {
  const query = "SELECT * FROM books WHERE title = $1";
  const result = await pool.query(query, [searchTerm]);
  return result.rows;
}

export async function searchBooksByAuthor(searchTerm) {
  // Query the database and return any books matching the search term
  const query = `
    SELECT books.*
    FROM books
    JOIN authors ON books.author_id = authors.id
    WHERE authors.last_name = $1
  `;

  console.log("Search term:", searchTerm);
  console.log("Query:", query);

  const result = await pool.query(query, [searchTerm]);
  return result.rows;
}

export async function getBookById(id) {
  // Query the database and return the book with a matching id
  const query = "SELECT * FROM books WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows;
}

export async function createBook(book) {
  // Query the database to create a book and return the newly created book
  const query = "INSERT INTO books (title, author_id) VALUES ($1, $2)";
  const result = await pool.query(query, [book.title, book.author_id]);
  return result.rows[0];
}

export async function updateBookById(id, updates) {
  // Query the database to update a book and return the newly updated book
  const query = "UPDATE books SET title = $1, author_id = $2 WHERE id = $3";
  const result = await pool.query(query, [
    updates.title,
    updates.author_id,
    id,
  ]);
  return result.rows[0];
}

export async function deleteBookById(id) {
  // Query the database to delete a book and return the deleted book
  const query = "DELETE FROM books WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
}
