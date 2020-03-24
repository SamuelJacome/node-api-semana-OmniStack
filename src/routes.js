const express = require('express');
const cryto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();


routes.get('/ongs', async(req, res)=>{
    const ongs = await connection('ongs_').select('*')
    return res.json(ongs);
});


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
 
     return res.json({ 
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      });
     
});

 module.exports = routes;