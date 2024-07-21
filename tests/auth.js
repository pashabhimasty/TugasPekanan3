const supertest = require('supertest');
const api = supertest('https://kasir-api.belajarqa.com'); // Ganti dengan base URL API Kasir AJA

let token;

async function getAuthToken() {
    if (token) return token;

    const response = await api.post('/authentications')
        .send({
            email: 'sample@example.com',
            password: '123adsfadf@'
        });
    token = response.body.token;
    return token;
}

module.exports = { getAuthToken };
