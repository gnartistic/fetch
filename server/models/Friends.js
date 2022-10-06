const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendsSchema = new Schema({
    username: { 
        type: String, 
        ref: 'User'
    },
    
} )

module.exports = friendsSchema; 