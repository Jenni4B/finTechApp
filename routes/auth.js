import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => { });

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => { });

router.get('/logout', (req, res) => {

  req.session.destroy((err) => {
  
    if (err) {
      console.error('Logout error:', err);
    }

    res.redirect('/');

  });
});

export default router