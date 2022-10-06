const { Schema } = require( 'mongoose' );

const reactionSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = Messages;