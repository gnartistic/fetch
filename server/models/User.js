const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        required: true,
        uique: true, 
        lowercase: true 
    },
    password: {
        type: String, 
    }, 
    name: String,
    age: String,
    gender: String,
    city: String,
    state: String, 
    occupation: String, 
    pets: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Pet'
    },
    createdAt: Date,
    updatedAt: Date

});
module.exports = mongoose.model('User', userSchema); 