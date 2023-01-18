const router = require('express').Router();
const thoughtController = require('../controllers/thoughtController')

router.get('/', thoughtController.find);

router.get('/thought/:thoughtid', thoughtController.find);

router.post('/thought/:thoughtid', thoughtController.create);

router.post('/thought/:thoughtid/reactions', thoughtController.create);

router.put('/thought/:thoughtid', thoughtController.update);

router.delete('/thought/:thoughtid', thoughtController.delete)

router.delete('/thought/:thoughtid/reaction/:id')



module.exports = router