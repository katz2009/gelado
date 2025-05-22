require('dotenv').config();
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

(async () => {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10),
    ssl: process.env.DB_SSL === 'false',
  });

  try {
    await client.connect();
    console.log('✅ Conectado ao banco de dados com sucesso!');

    const sql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();
    await client.query(sql);
    console.log('✅ Migração executada com sucesso!');
  } catch (err) {
    console.error('❌ Erro durante a migração:', err);
  } finally {
    await client.end();
    console.log('🔌 Conexão com o banco encerrada.');
  }
})();
