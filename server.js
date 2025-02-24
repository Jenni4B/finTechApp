import express from 'express'; // es6 module import
import basicRoutes from './routes/basicRoutes.js'; // import basicRoutes from routes folder
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define the root route to render your EJS file
app.get('/', (req, res) => res.render('homepage')); // root route

// Apply the basic routes

app.use('/', basicRoutes); // apply basic routes to root route


// Login Logic/Authentication
// 


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
