const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
    },
});
const Card = model('Card', cardSchema);

module.exports = Card;