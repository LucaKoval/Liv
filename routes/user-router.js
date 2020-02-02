const express = require('express')

const UserCtrl = require('../controllers/user-controller')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user/username/:username', UserCtrl.getUserByUsername)
router.get('/users', UserCtrl.getUsers)
router.post('/blast', UserCtrl.blast)

module.exports = router
