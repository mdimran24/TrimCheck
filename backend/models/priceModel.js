const mongoose= require('mongoose')

const Schema = mongoose.Schema

const priceSchema = new Schema({
    haircut: {
        type: Number,
        required: true
    },
    beard:{
        type: Number,
        require: true
    },
    skinFade:{
        type: Number,
        require: true
    },
    childrensCut: {
        type: Number,
        require: true
    }

}, { timestamps: true})

module.exports = mongoose.model('Price', priceSchema)
