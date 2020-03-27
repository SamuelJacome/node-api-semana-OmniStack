const connection = require('../database/connection');
const cryto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(req, res){
        const ongs = await connection('ongs_').select('*')
        return res.json(ongs);
    },

    async create(req, res){
        const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

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
        
      });
    }
}