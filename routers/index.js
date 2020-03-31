const router = require('express').Router()
const tasks = require('./tasks')
const users = require('./user')
const api = require('./apiRoutes')

router.use('/tasks', tasks)
router.use('/users', users)
router.use('/features', api)

module.exports = router