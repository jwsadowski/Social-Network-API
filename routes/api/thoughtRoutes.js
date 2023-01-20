const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController')

router.get('/', thoughtController.getThoughts);

router.get('/thought/:thoughtid', thoughtController.getSingleThought);

router.post('/thought/:thoughtid', thoughtController.createThought);

router.post('/thought/:thoughtid/reactions', thoughtController.createReaction);

router.put('/thought/:thoughtid', thoughtController.updateThought);

router.delete('/thought/:thoughtid', thoughtController.deleteThought);

router.delete('/thought/:thoughtid/reaction/:id', thoughtController.deleteReaction);


module.exports = router