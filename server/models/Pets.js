const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    breed: String, 
    gender: String,
    createdAt: Date,
    updatedAt: Date

});
module.exports = mongoose.model('Pet', petSchema); 