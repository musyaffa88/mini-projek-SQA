const request = require('supertest')('https://api.escuelajs.co/api/v1')
const axios = require('axios')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
const categoriesSchema = require('../schema/categoriesSchema.js')
const singleCategorySchema = require('../schema/singleCategorySchema.js')
const category = require('../payload/category.js')

chai.use(chaiJsonSchema)
const expect = chai.expect

describe('Categories API', async function () {
    it('Test Get All Categories', async function () {
        const res = await request.get('/categories')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(categoriesSchema)
    })

    it('Test Get Single Category', async function () {
        const res = await request.get('/categories/1')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCategorySchema)
        expect(res.body.id).equal(1)
    })

    // it('Test Limit Result = 5', async function () {
    //     const res = await request.get('/categories?limit=5')
    //     expect(res.statusCode).equal(200)
    //     expect(res.body).have.jsonSchema(categoriesSchema)
    //     expect(res.body.length).equal(5)
    // })

    // it('Test Sort Result by Id = DESC', async function () {
    //     const res = await request.get('/categories?sort=desc')
    //     expect(res.statusCode).equal(200)
    //     expect(res.body).have.jsonSchema(categoriesSchema)
    //     expect(res.body[0].id).satisfy(id1 => id1 > res.body[1].id)
    // })

    // it('Test Sort Result by Id = ASC', async function () {
    //     const res = await request.get('/categories?sort=asc')
    //     expect(res.statusCode).equal(200)
    //     expect(res.body).have.jsonSchema(categoriesSchema)
    //     expect(res.body[0].id).satisfy(id1 => id1 < res.body[1].id)
    // })

    // it('Test Get All Categories', async function () {
    //     const res = await request.get('/categories/categories')
    //     expect(res.statusCode).equal(200)
    //     // expect(res.body).have.jsonSchema(categoriesSchema)
    //     expect(res.body.length).equal(4)
    // })

    // it('Test Get Product in a Specific Category = jewelery', async function () {
    //     const res = await request.get('/categories/category/jewelery')
    //     // for(let i = 0 ; i < res.body.length; i++ ){
    //     //     expect(res.body[i].category).equal('jewelery')
    //     // }
    //     expect(res.body[0].category).equal('jewelery')
    //     expect(res.body[2].category).equal('jewelery')
    //     expect(res.statusCode).equal(200)
    //     // expect(res.body).have.jsonSchema(categoriesSchema)
    // })

    it('Test Add New Product', async function () {
        const res = await request.post('/categories/', category)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCategorySchema)
    })

    it('Test Update a Product', async function () {
        const res = await request.put('/categories/3', category)
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCategorySchema)
    })

    it('Test Delete a Product', async function () {
        const res = await request.del('/categories/1')
        expect(res.statusCode).equal(200)
        expect(res.body).have.jsonSchema(singleCategorySchema)
    })
})