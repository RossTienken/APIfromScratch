const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')


router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.createSnack)
router.put('/:id', ctrl.updateSnack)
router.delete('/:id', ctrl.deleteSnack)


module.exports = router
