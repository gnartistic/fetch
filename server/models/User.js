const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pets: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Pet'
    },
    createdAt: Date,
    updatedAt: Date

});
module.exports = mongoose.model('User', userSchema); 