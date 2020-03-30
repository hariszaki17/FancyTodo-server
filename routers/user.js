const router = require('express').Router()
const UserCcontroller =  require('../controllers/UserController')
router.post('/signup', UserCcontroller.signup)
router.post('/signin', UserCcontroller.signin)

module.exports = router