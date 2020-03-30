const router = require('express').Router()
const TaskController = require('../controllers/TaskController')

router.get('/:id', TaskController.readOne)
router.delete('/:id', TaskController.delete)
router.put('/:id', TaskController.update)
router.get('/', TaskController.readAll)
router.post('/', TaskController.create)

module.exports = router