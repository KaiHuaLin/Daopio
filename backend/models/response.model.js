const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const responseSchema = new Schema({
    pollID: {
        type: String,
        required: true,
    },
    choice: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trime: true,
        minlength: 0,
    }
}, {
    timestamps: true,
})

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;