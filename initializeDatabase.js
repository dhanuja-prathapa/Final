// initializeDatabase.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

db.serialize(() => {
  // Create the download table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY,
      count INTEGER DEFAULT 0,
      title TEXT,
      author TEXT,
      genre TEXT,
      published YEAR,
      downloadLink URL,
      imageLink URL
      )
      `);

      db.run(`
      CREATE TABLE IF NOT EXISTS myBooks (
        id INTEGER PRIMARY KEY,
        count INTEGER DEFAULT 0,
        title TEXT,
        author TEXT,
        genre TEXT,
        published YEAR,
        downloadLink URL,
        imageLink TEXT
      )
    `);
  console.log('Database initialized');
});

db.close();
