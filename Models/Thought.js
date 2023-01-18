const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { monitorEventLoopDelay } = require('perf_hooks');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type : String, required: true},
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true},
    reactions: reactionSchema,
    reactionId: { type: ObjectId, default: ObjectId},
    reactionBody: { type: String, required: true, {280, 500} },
    username: { type: String, required: true},
    createdAt: {type: Date, default: Date.now }
    
}, {
    toJSON: {
        virtuals: true,
    }
})

ThoughtSchema.virtuals('reactioncount')
    .get(function() {
        return `${this.[reactions.length]}`
    })
    .set(function(value) {

    })

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought