const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema)

const cartSchema = {
    type: 'object',
    properties: {
        id: {type: 'number'},
        userId: {type: 'number'},
        date: {type: 'string'},
        products: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    productId: {type: 'number'},
                    quantity: {type: 'number'}
                }
            }
        },
        __v: {type: 'number'},
    },
    required: ['id', 'userId', 'date', 'products']
}


exports.modules = cartSchema