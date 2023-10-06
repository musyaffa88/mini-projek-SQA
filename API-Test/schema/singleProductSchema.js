const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema)

const productSchema = {
    type: 'object',
    properties: {
        id: {type: 'number'},
        title: {type: 'string'},
        price: {type: 'number'},
        description: {type: 'string'},
        image: {type: 'string'},
        category: {type: 'string'},
    },
    required: ['id', 'title', 'price', 'description', 'category']
}


exports.modules = productSchema