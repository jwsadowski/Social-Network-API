const mongoose = require('mongoose');
const ReactionSchema = require('./Reaction.js')

const thoughtSchema = new mongoose.Schema({
    thoughtText: { 
        type : String, 
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    username: { 
        type: String, 
        required: true
    },
    reactions: [ReactionSchema]
}, {
    toJSON: {
        virtuals: true,
    }
});

thoughtSchema.virtual('reactioncount')
    .get(function() {
        return this.reactions.length
    })

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought