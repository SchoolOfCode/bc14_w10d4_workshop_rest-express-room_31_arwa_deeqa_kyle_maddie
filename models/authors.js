import { pool } from "../db/index.js";

export async function getAuthors() {
  const query = "SELECT * FROM authors";
  const result = await pool.query(query);
  console.log(result.rows);
  return result.rows;
}

export async function searchAuthorsByName(searchTerm) {
  // Query the database and return all authors that have a name matching the searchTerm
  const query =
    "SELECT * FROM authors WHERE first_name LIKE $1 OR last_name LIKE $1";
  const result = await pool.query(query, [searchTerm]);
  console.log(result.rows);
  return result.rows;
}

export async function getAuthorById(id) {
  // Query the database and return the book with a matching id
  const query = "SELECT * FROM authors WHERE id = $1";
  const result = await pool.query(query, [id]);
  console.log(result.rows);
  return result.rows;
}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author
  const query =
    "INSERT INTO authors (id ,first_name, last_name) VALUES ($1, $2) RETURNING *";
  const result = await pool.query(query, [
    author.id,
    author.first_name,
    author.last_name,
  ]);
  console.log(result.rows);
  return result.rows;
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author
  const query =
    "UPDATE authors SET first_name = $1, last_name = $2 WHERE id = $3 RETURNING *";
  const result = await pool.query(query, [
    id,
    updates.first_name,
    updates.last_name,
  ]);
  console.log(result.rows);
  return result.rows;
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author

  return {};
}
