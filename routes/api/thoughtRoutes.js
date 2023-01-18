const router = require('express').Router();
const {
    getThoughts,
    getThuoghtId,
    postThought,
    putThoughtId,
    deleteThoughtId,
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId').put(updateThought);

router.route()

module.exports = router;