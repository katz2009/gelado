
const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  res.render('users/register');
});

router.get('/hub', (req, res) => {
  const user = req.session.userId
    ? { id: req.session.userId, name: 'Usuário' }
    : null;
  res.render('hub', { user });
});

router.get('/events/create', (req, res) => {
  res.render('events/create');
});

router.get('/confirm-delete', (req, res) => {
  const user = req.session.userId
    ? { id: req.session.userId, name: 'Usuário' }
    : null;
  if (!user) return res.redirect('/register');
  res.render('confirmDelete', { user });
});

module.exports = router;
