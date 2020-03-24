const express = require('express');
const cryto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = cryto.randomBytes(4).toString('HEX');

    await connection('ongs_').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
 
     return res.json({ id });
     
});

 module.exports = routes;