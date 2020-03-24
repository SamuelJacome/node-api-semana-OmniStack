const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();  

app.use(cors());
app.use(express.json()) // Isso deve ser feito antes de todas as rotas(Configuração para )
app.use(routes);
app.listen(3333);