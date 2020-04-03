const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const { authentication } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')

router.use(authentication)
router.get('/:id', TaskController.readOne)
router.delete('/:id', authorization, TaskController.delete)
router.put('/:id', authorization, TaskController.update)
router.get('/', TaskController.readAll)
router.post('/', TaskController.create)


module.exports = router