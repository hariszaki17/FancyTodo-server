const router = require('express').Router()
const { APIController } = require('../controllers/APIController')
const { authentication } = require('../middlewares/authentication')

router.use(authentication)
router.get('/check-holidays/:country', APIController.getHoliday)
router.get('/time', APIController.getTimePrayer)

module.exports = router
// db16bd3dd52cf906bd4122790b289a89
