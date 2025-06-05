const express = require('express');
const router = express.Router();

// Hub principal
router.get('/hub', (req, res) => {
  res.render('hub', { title: 'Hub Principal' });
});

// Tela de cadastro de usuário
router.get('/register', (req, res) => {
  res.render('users/register', { title: 'Cadastrar Usuário' });
});

// Tela de criação de evento
router.get('/events/create', (req, res) => {
  res.render('events/create', { title: 'Criar Evento' });
});

// Redireciona a raiz para o hub
router.get('/', (req, res) => {
  res.redirect('/hub');
});

module.exports = router;