const express = require('express');
const app = express();
app.use(express.json())
// Isso deve ser feito antes de todas as rotas(Configuração para )
app.post('/users', (req, res) =>{
    const body = req.body;
    console.log(body);

    return res.json({
        evento: "Semana Omnistack",
        aluno: "Samuel Jácome",
    })
})

app.listen(3333);