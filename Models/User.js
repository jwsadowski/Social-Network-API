const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, required: true, unique: true},
    thoughts: { [ _id: 'Thought']},
    friends: { [ _id: 'User']}
})