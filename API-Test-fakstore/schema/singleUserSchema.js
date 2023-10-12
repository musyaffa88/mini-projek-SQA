const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema)

const singleUserSchema = {
    type: 'object',
    properties: {
        id: {type: 'number'},
        email: {type: 'string'},
        username: {type: 'string'},
        name: {
            type: 'object',
            properties: {
                firstname: {type: 'string'},
                lastname: {type: 'string'},
            },
        },
        address: {
            type: 'object',
            properties: {
                city: {type: 'string'},
                street: {type: 'string'},
                number: {type: 'number'},
                geolocation:{
                    type: 'object',
                    properties: {
                        lat: {type: 'string'},
                        long: {type: 'string'},
                    },
                },
            },
        },
        phone: {type: 'string'},
    },
    required: ['id', 'email', 'username', 'password', 'name', 'address', 'phone']
}

exports.modules = singleUserSchema