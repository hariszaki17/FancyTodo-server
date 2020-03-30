const router = require('express').Router()
const tasks = require('./tasks')
const users = require('./user')

router.use('/tasks', tasks)
router.use('/users', users)

module.exports = router