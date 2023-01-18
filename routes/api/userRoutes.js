const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/', userController.find);

router.get('/user/:userid', userController.find);

router.post('/', userController.create);

router.post('/user/:userid/friends/:friendId', userController.create)

router.put('/update/:userid', userController.update);

router.delete('/delete/:userid', userController.delete)

router.delete('/user/:userid/friends/:friendId', userController.delete)

module.exports = router