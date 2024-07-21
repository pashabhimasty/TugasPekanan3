const { expect } = require('chai');
const supertest = require('supertest');
const api = supertest('https://kasir-api.belajarqa.com'); // Ganti dengan base URL API Kasir AJA
const { getAuthToken } = require('./auth');

describe('Read Endpoint', () => {
    let token;

    before(async () => {
        token = await getAuthToken();
    });

    it('should get list of products', async () => {
        const response = await api.get('/products')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
    });
});
