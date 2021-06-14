// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    name: String,
    email: {type:String, unique: true, required: true},
    password: {type: String, required: true}
}, {timestamps: true},
);

// User Model
const User = mongoose.model('User', userSchema);

// Export User Model
module.exports = User;