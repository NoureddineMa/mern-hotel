const express = require('express')
const app = express()
const db=require('./db')
app.use(express.json())
const path = require('path')
const roomsRoutes = require('./routes/roomsRoute')
const userRoute = require('./routes/userRoute')
const bookingsRoute=require('./routes/bookingsRoute')
app.use('/api/rooms',roomsRoutes)
app.use('/api/users' , userRoute)
app.use('/api/bookings' , bookingsRoute)



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Node JS Server Started`))
