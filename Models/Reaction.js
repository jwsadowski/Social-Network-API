const mongoose = require('mongoose');

const reactionSchema = new mongoose.schema({
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
})

reactionSchema.virtuals('reactioncontent')
    .get(function() {
        return `${this.reactionId} ${this.reactionBody}`
    })
    .set(function(value) {
        const [reactionId, reactionBody] = value.split(' ')
        this.set({ reactionId, reactionBody })
    })   

 module.exports = Reaction