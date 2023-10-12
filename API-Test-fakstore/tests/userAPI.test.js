const request = require('supertest')('https://fakestoreapi.com')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
const usersSchema = require('../schema/usersSchema.js')
const singleUserSchema = require('../schema/singleUserSchema.js')
const user = require('../payload/user.js')

chai.use(chaiJsonSchema)
const expect = chai.expect

describe('User API', async function () {
    it('Test Get All User', async function () {
        const res = await request.get('/users')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(usersSchema)
    })

    it('Test Get Single User', async function () {
        const res = await request.get('/users/1')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleUserSchema)
        expect(res.body.id).equal(1)
    })

    it('Test Limit Result = 5', async function () {
        const res = await request.get('/users?limit=5')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(usersSchema)
        expect(res.body.length).equal(5)
    })

    it('Test Sort Result by Id = DESC', async function () {
        const res = await request.get('/users?sort=desc')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(usersSchema)
        expect(res.body[0].id).satisfy(id1 => id1 > res.body[1].id)
    })

    it('Test Sort Result by Id = ASC', async function () {
        const res = await request.get('/users?sort=asc')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(usersSchema)
        expect(res.body[0].id).satisfy(id1 => id1 < res.body[1].id)
    })

    it('Test Add New User', async function () {
        const res = await request.post('/users', user)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleUserSchema)
    })

    it('Test Update a User', async function () {
        const res = await request.put('/users/7', user)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleUserSchema)
    })

    it('Test Delete a User', async function () {
        const res = await request.delete('/users/6')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleUserSchema)
    })
})