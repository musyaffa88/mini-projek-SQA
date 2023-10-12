// const request = require('supertest')('https://fakestoreapi.com')

const axios = require('axios');

async function getAuthToken() {
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
    // console.log(resLogin.data.token);
    return resLogin.data.token
}
// getAuthToken()
exports.module = getAuthToken