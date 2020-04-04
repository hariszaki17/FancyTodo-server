const router = require('express').Router()
const { APIController } = require('../controllers/APIController')
const { authentication } = require('../middlewares/authentication')

router.use(authentication)
router.get('/check-holidays/:year', APIController.getHoliday)
router.get('/time', APIController.getTimePrayer)

module.exports = router
