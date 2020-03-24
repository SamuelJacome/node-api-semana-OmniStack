const express = require('express');
const routes = require('./routes')

const app = express();  // Isso deve ser feito antes de todas as rotas(Configuração para )

app.use(express.json())
app.use(routes);
app.listen(3333);