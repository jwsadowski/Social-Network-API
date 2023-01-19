const Thought = require('../Models/Thought');
const userController = require('./userController');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) =>
        !thought
           ? res.status(404).json({ message: 'No thought found with that ID'})
           : res.json(thought)
           )
           .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json
        (err));
    },
    createReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.id, { $push: {reactions: req.body} })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    }
};