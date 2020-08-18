const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pollSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 0
    },
    description: {
        type: String,
        trim: true,
        minlength: 0
    },
    options: [{
        type: String,
        trim: true,
        unique: true,
        minlength: 0
    }]
}, {
    timestamps: true,
})

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;