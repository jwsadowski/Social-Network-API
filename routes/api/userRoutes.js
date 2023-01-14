const router = require('express').Router();
const {
    getUsers,
    getUserId,
    postUser,
    putUserId,
    deleteUserId,
} = require('../../controllers/userController.js')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;