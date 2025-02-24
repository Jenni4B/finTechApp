import express, { Router } from 'express';

const basicRoutes = express.Router();

basicRoutes.get('/login', (req, res) => {
  res.render('login');
});

basicRoutes.post('/login', async (req, res) => { });

basicRoutes.get('/register', (req, res) => {
  res.render('register');
});

basicRoutes.post('/register', async (req, res) => { });

basicRoutes.get('/logout', (req, res) => {

  req.session.destroy((err) => {
  
    if (err) {
      console.error('Logout error:', err);
    }

    res.redirect('/');

  });
});

export default basicRoutes
