const singleProductSchema = {
        type: 'object',
        properties: {
            id: {type: 'number'},
            title: {type: 'string'},
            price: {type: 'number'},
            description: {type: 'string'},
            image: {
                type: 'array',
                items: {
                    type: 'string'
                },
            creationAt:{type: 'string'},
            updatedAt:{type: 'string'},
            category: {
                type: 'obaject',
                properties: {
                    id: {type: 'number'},
                    name: {type: 'string'},
                    image: {type: 'string'},
                    creationAt:{type: 'string'},
                    updatedAt:{type: 'string'},
                },
            },
        },
        required: ['id', 'title', 'price', 'description', 'image','category'],
    },
}
exports.modules = singleProductSchema