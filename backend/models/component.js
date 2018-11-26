const mongoose = require('mongoose');

const componentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    names: {
        type: Array,
        required: true
    },
    code: {
        type: Array,
        required: true
    },
    favorite: {
        type: Array
    },
    gitRepo: {
        type: String
    }
});

module.exports = mongoose.model('Component', componentSchema);