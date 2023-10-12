const singleCategorySchema = {
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
    
exports.modules = singleCategorySchema