const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    owner: {
        type: String,
        required: true,
    },
    name: {
        type: String, 
        required: true
    }, 
    age: Number, 
    gender: String, 
    breed: String,
    activity: String, 
    traits: [String], 
    createdAt: Date,
    updatedAt: Date

});
module.exports = mongoose.model('Pet', petSchema); 