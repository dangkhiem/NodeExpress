const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: { type: String, maxlength: 255 },
    lastName: { type: String, maxlength: 255 },
    age: { type: String, min: 1, max: 100 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);