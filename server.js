const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

const apiRoutes = require('./src/routes/ApiRoutes');
const viewRoutes = require('./src/routes/ViewRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: true
}));

app.use('/', viewRoutes);
app.use('/api', apiRoutes);

app.listen(3000, () => console.log('Servidor rodando no link http://localhost:3000/hub'));