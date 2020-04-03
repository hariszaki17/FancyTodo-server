require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const routers = require('./routers')
const cors = require('cors')
const errorhandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routers)
app.use(errorhandler)
app.listen(PORT, () => {
    console.log('I love u ', PORT, new Date())
})
