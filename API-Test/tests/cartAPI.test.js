const request = require('supertest')('https://fakestoreapi.com')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
const cartsSchema = require('../schema/cartsSchema.js')
const singleCartSchema = require('../schema/singleCartSchema.js')
const cart = require('../payload/cart.js')

chai.use(chaiJsonSchema)
const expect = chai.expect

describe('Cart API', async function () {
    it('Test Get All Carts', async function () {
        const res = await request.get('/carts')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(cartsSchema)
    })

    it('Test Get Single Cart', async function () {
        const res = await request.get('/carts/5')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCartSchema)
        expect(res.body.id).equal(5)
    })

    it('Test Limit Result = 5', async function () {
        const res = await request.get('/carts?limit=5')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(cartsSchema)
        expect(res.body.length).equal(5)
    })

    it('Test Sort Result by Id = DESC', async function () {
        const res = await request.get('/carts?sort=desc')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(cartsSchema)
        expect(res.body[0].id).satisfy(id1 => id1 > res.body[1].id)
    })

    it('Test Sort Result by Id = ASC', async function () {
        const res = await request.get('/carts?sort=asc')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(cartsSchema)
        expect(res.body[0].id).satisfy(id1 => id1 < res.body[1].id)
    })

    it('Test Get Carts in a Date Range startdate=2019-12-10 & enddate=2020-10-10 ', async function () {
        const res = await request.get('/carts?startdate=2019-12-10&enddate=2020-10-10')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(cartsSchema)
        expect(res.body[0].date).include('2020-03-02')
        // expect(res.body[0].date).include('2019-12-10')
        // expect(res.body[6].date).include('2019-12-10')
        expect(res.body[6].date).include('2020-03-01')
    })

    it('Test Get User Carts', async function () {
        const res = await request.get('/carts/user/2')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCartSchema)
        expect(res.body[0].userId).to.equal(2)
    })

    it('Test Add New Cart', async function () {
        const res = await request.post('/carts', cart)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCartSchema)
    })

    it('Test Update a Cart', async function () {
        const res = await request.put('/carts/7', cart)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCartSchema)
    })

    it('Test Delete a Cart', async function () {
        const res = await request.delete('/carts/7')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCartSchema)
    })
})