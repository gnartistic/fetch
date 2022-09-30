const { Schema, model} = require("mongoose");

const petSchema = new Schema({
    petName: {
        type: String,
        required: true,
    },
    owner: {
        type: String, 
        required: true
    }, 
    petAge: {
        type: String,
        enum: [ '<1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' ],
        required: true
    },
    personalityTraits: {
        type: String,
        enum: [ 'Confident', 'Outgoing', 'Adaptable', 'Shy', 'Independent', 'Aggressive', 'Lone Wolf', 'Timid', 'Laid-back', 'Playful', 'Goofy', 'Active', 'Socialable' ],
        required: true
    },
    breed: String, 
    petGender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    favActivity: {
        type: String,

    },
    createdAt: Date,
    updatedAt: Date

});

module.exports = petSchema;