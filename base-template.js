const request = require('supertest')('https://fakestoreapi.com')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema-Ajv');

chai.use(chaiJsonSchema)
const expect = chai.expect