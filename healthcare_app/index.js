
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Use bodyParser to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SQL Connection Setup
const connection = mysql.createConnection({
  host: 'db', // Refers to the database service in docker-compose
  user: 'root',
  password: 'Sai@2020', // SQL password
  database: 'healthcare'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the SQL database.');
});

// Vulnerable Login Endpoint (SQL Injection Vulnerable)
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Insecure SQL query that allows SQL Injection without parameterized queries
  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send('Database error');
    } else if (results.length > 0) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
