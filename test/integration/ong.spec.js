
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest()
    });

    afterAll(async ()=> {
        await connection.destroy();
    })
    it('should be able to create a new ONG', async () =>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Samuel 2",
            email: "contato@apad.com.br",
            whatsapp: "63992066924",
            city: "Palmas",
            uf: "TO"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })
})