import express from 'express';
import jwt from 'jsonwebtoken'; // Importing jsonwebtoken for token
import bcrypt from 'bcrypt'; 
import User from '../models/user.js'; 

const clientRoute = express.Router();

// Signup route
clientRoute.post('/signup', async (req, res) => {
  // Destructuring username, email, and password
  const { username, email, password } = req.body;

  try {
    // Check if all fields are provided
    if (!username || !email || !password) {
      return res.status(400).send('All fields are required.'); // missing field will generate an error
    }

    //minimum length requirement
    if (password.length < 8) {
      return res.status(400).send('Password must be at least 8 characters long.');
    }

    // check for unique email
    const alreadyUser  = await User.findOne({ where: { email } });
    if (alreadyUser) {
      return res.status(400).send('Email is already registered.');
    }

    // Create a new user in the database
    const newUser  = await User.create({ username, email, password });

    // Redirect to the login
    res.redirect('/login');
  } catch (error) {
    // Log any errors 
    console.error('Error during signup:', error);
    res.status(500).send('Internal error.');
  }
});

// Login route
clientRoute.post('/login', async (req, res) => {
  // Destructuring email and password from the request body
  const { email, password } = req.body;

  try {
    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).send('All fields are required.'); // Respond with an error if any field is missing
    }

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).send('User  not found.'); // Respond with an error if user is not found
    }

    // Compare the provided password with the stored hashed password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).send('Invalid credentials.'); // Respond with an error if credentials are invalid
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRET_KEY, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    // Set the token as a cookie in the response
    res.cookie('auth_token', token, {
      httpOnly: true, // Cookie is not accessible via JavaScript
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000, // Cookie expires in 1 hour
    });

    // Redirect to the dashboard after successful login
    res.redirect('/dashboard');
  } catch (error) {
    // Log any errors that occur during login
    console.error('Error during login:', error);
    res.status(500).send('Internal server error.'); // Respond with a server error
  }
});

// Logout route
clientRoute.get('/logout', (req, res) => {
  // Clear the authentication token cookie
  res.clearCookie('auth_token');
  // Redirect to the login page after logout
  res.redirect('/login');
});

// Export the clientRoute to be used in other parts of the application
export default clientRoute;