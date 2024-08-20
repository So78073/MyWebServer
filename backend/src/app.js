const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar as rotas
app.use('/', indexRouter);

// Servir arquivos estáticos (como o HTML)
app.use(express.static('frontend'));

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
