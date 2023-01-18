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
    thoughts: { 
        type: [ _id ],
        ref: 'Thought'
    },
    friends: {
        type: [ _id ],
        ref: 'User'
    }
}, {
   toJSON: {
    virtuals: true,
   } 
});

userSchema.path('email').validate(value => match: [/.+@.+\..+/, 'Must match an email address!'])

userSchema.virtuals('friendcount')
    .get(function() {
        return `${this.[friends.length]}`
    })
    .set(function(value) {
        const [friends.length] = value.split(' ')
        this.set([ friends.length ])
    })

const User = mongoose.model('User', userSchema)

module.exports = User