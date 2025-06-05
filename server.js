const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./src/routes/index');
const viewRoutes = require('./src/routes/viewRoutes');

const app = express();
const port = 3000;

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layout/main'); // usa views/layout/main.ejs como base

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Static files (CSS, JS, images, etc)
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Configuração da view engine e views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Rotas para views (páginas)
app.use('/', viewRoutes);

// Rotas da API
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando no link http://localhost:${port}`);
});