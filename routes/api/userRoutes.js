const router = require('express').Router();
const userController = require('../../controllers/userController')

router.get('/', userController.getUsers);

router.get('/user/:userid', userController.getSingleUser);

router.post('/', userController.createUser);

router.post('/user/:userid/friends/:friendId', userController.createUser)

router.put('/update/:userid', userController.updateUser);

router.delete('/delete/:userid', userController.deleteUser)

router.delete('/user/:userid/friends/:friendId', userController.deleteUser)

module.exports = router