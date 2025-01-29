import sqlite3 from "sqlite3";

// Connect to SQLite database (it creates the file if it doesn't exist)
const db = new sqlite3.Database("./crypto.db", (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create a "transactions" table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    amount REAL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
