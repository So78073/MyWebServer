const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // ou o usuário que você configurou
    password: '',      // senha do MySQL
    database: 'logins'
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados');
});

// Rota para registro de usuários
router.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    // SQL query para inserir um novo usuário
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao registrar o usuário.');
        }
        res.send('Usuário registrado com sucesso!');
    });
});

module.exports = router;
