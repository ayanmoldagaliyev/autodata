const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = model('Embraces', schema)