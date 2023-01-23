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
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    thoughts: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'}
    ],
    friends: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'}
    ]
}, {
   toJSON: {
    virtuals: true,
   },
   id: false
});

userSchema.virtual('friendcount')
    .get(function() {
        return this.friends.length
    })  

const User = mongoose.model('User', userSchema)

module.exports = User