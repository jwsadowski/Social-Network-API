const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    reactionId: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: new mongoose.Schema.Types.ObjectId
    },
    reactionBody: { 
        type: String, 
        required: true
    },
    username: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
}, {
    toJSON: {
        virtuals: true,
    }
})

ReactionSchema.virtuals('reactioncontent')
    .get(function() {
        return `${this.reactionId} ${this.reactionBody}`
    })
    .set(function(value) {
        const [reactionId, reactionBody] = value.split(' ')
        this.set({ reactionId, reactionBody })
    })   

module.exports = { ReactionSchema };   