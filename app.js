require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const routers = require('./routers')
const cors = require('cors')
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const errorhandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routers)
app.use(errorhandler)

io.on('connection', (socket) => {
    socket.broadcast.emit('hai')
    console.log('a user connected')
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
})

app.listen(PORT, () => {
    console.log('I love u ', PORT, new Date())
})
