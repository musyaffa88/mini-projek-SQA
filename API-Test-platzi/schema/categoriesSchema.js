const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema)

const categoriesSchema = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: {type: 'number'},
            name: {type: 'number'},
            image: {type: 'string'},
            creationAt: {type: 'string'},
            updatedAt: {type: 'string'},
        },
        required: ['id', 'name', 'image']
    }
}

exports.modules = categoriesSchema