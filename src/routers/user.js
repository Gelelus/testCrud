const express = require('express')
const userController = require('../controllers/user-controller')

const router = new express.Router()

router.get('/', userController.getAllUser)
router.get('/:id', userController.getUser)

router.post('/', userController.addUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)


module.exports = router