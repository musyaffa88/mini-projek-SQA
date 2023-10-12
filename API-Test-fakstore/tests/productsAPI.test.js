const request = require('supertest')('https://fakestoreapi.com')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
const productsSchema = require('../schema/productsSchema.js')
const singleProductSchema = require('../schema/singleProductSchema.js')
const product = require('../payload/product.js')

chai.use(chaiJsonSchema)
const expect = chai.expect

describe('Products API', async function () {
    it('Test Get All Products', async function () {
        const res = await request.get('/products')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(productsSchema)
    })

    it('Test Get Single Products', async function () {
        const res = await request.get('/products/1')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleProductSchema)
        expect(res.body.id).equal(1)
    })

    it('Test Limit Result = 5', async function () {
        const res = await request.get('/products?limit=5')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(productsSchema)
        expect(res.body.length).equal(5)
    })

    it('Test Sort Result by Id = DESC', async function () {
        const res = await request.get('/products?sort=desc')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(productsSchema)
        expect(res.body[0].id).satisfy(id1 => id1 > res.body[1].id)
    })

    it('Test Sort Result by Id = ASC', async function () {
        const res = await request.get('/products?sort=asc')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(productsSchema)
        expect(res.body[0].id).satisfy(id1 => id1 < res.body[1].id)
    })

    it('Test Get All Categories', async function () {
        const res = await request.get('/products/categories')
        expect(res.statusCode).equal(200)
        // expect(res.body).have.jsonSchema(categoriesSchema)
        expect(res.body.length).equal(4)
    })

    it('Test Get Product in a Specific Category = jewelery', async function () {
        const res = await request.get('/products/category/jewelery')
        for(let i = 0 ; i < res.body.length; i++ ){
            expect(res.body[i].category).equal('jewelery')
        }
        // expect(res.body[0].category).equal('jewelery')
        // expect(res.body[2].category).equal('jewelery')
        expect(res.body).have.jsonSchema(productsSchema)
        expect(res.statusCode).equal(200)
    })

    it('Test Add New Product', async function () {
        const res = await request.post('/products', product)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleProductSchema)
    })

    it('Test Update a Product', async function () {
        const res = await request.put('/products/7', product)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleProductSchema)
    })

    it('Test Delete a Product', async function () {
        const res = await request.delete('/products/6')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleProductSchema)
    })
})