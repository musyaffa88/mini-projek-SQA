const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema)

const categoriesSchema = {
    type: 'boolean'
    // items: {
    //     type: 'number',
    // }
}

exports.modules = categoriesSchema