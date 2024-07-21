const { expect } = require('chai');
const supertest = require('supertest');
const api = supertest('https://kasir-api.belajarqa.com'); // Ganti dengan base URL API Kasir AJA
const { getAuthToken } = require('./auth');

describe('Create Endpoint', () => {
    let token;

    before(async () => {
        token = await getAuthToken();
    });

    it('should create a new product', async () => {
        const response = await api.post('/products')
            .set('Authorization', `Bearer ${token}`)
            .send({
                "category_id" : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
                "code": "A314ASDDFIER3432",
                "name": "taro",
                "price": "3500",
                "cost": "3000",
                "stock": "5"
            });

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
    });
});
