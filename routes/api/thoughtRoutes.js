const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController')

router.get('/', thoughtController.getThoughts);

router.get('/thought/:thoughtid', thoughtController.getSingleThought);

router.post('/thought/:thoughtid', thoughtController.createThought);

router.post('/thought/:thoughtid/reactions', thoughtController.createThought);

router.put('/thought/:thoughtid', thoughtController.update);

router.delete('/thought/:thoughtid', thoughtController.delete)

router.delete('/thought/:thoughtid/reaction/:id')



module.exports = router