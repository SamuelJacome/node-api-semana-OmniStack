const express = require('express');
const routes = require('./routes')

const app = express();  

app.use(express.json()) // Isso deve ser feito antes de todas as rotas(Configuração para )
app.use(routes);
app.listen(3333);