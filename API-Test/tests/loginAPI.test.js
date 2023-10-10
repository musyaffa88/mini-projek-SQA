const axios = require('axios');
const chai = require('chai')
const expect = chai.expect

describe('Login API', async function login() {
    it('Login User', async function () {
        const payload = {
            username: "mor_2314",
            password: "83r5^_",
        }
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const resLogin = await axios.post('https://fakestoreapi.com/auth/login', payload, headers)
        expect(resLogin.status).equal(200)
        expect(resLogin.data.token).include('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
        expect(resLogin.data.token).to.exist
    })
})