const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trimmed: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
    },
    thoughts: { [ _id: 'Thought']},
    friends: { [ _id: 'User']}
}, {
   toJSON: {
    virtuals: true,
   } 
});

userSchema.path('email').validate(value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)

UserSchema.virtuals('friendcount')
    .get(function() {
        return `${this.[friends.length]}`
    })
    .set(function(value) {
        
    })



const User = mongoose.model('User', userSchema)

module.exports = User