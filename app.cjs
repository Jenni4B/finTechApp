const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define the root route to render your EJS file

app.get('/', (req, res) => res.render('index')); // root route

app.get('/register', (req, res) => res.render('register')); // render register page

app.get('/login', (req, res) => res.render('login')); // render login page

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
