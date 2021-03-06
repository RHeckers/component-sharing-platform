const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    favorites: { 
        type: Array,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);