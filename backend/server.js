const express = require('express')
require('dotenv').config()

// express app
const app = express()
const mongoose = require('mongoose')
const appointmentRoutes = require('./routes/appointments')

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/appointments', appointmentRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests
app.listen(process.env.PORT, () =>{
    console.log('Listening on Port 4000')
})
})
.catch((error) => {
    console.log
})

