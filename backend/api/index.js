const express = require('express')
const cors = require("cors");
require('dotenv').config()

// express app
const app = express()
const mongoose = require('mongoose')
const appointmentRoutes = require('../routes/appointments')
const pricesRoutes = require("../routes/prices")
const userRoutes = require('../routes/user')

app.use(cors({
    origin: "https://trim-check-backend.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/appointments', appointmentRoutes)
app.use('/api/user', userRoutes)
app.use('/api/prices', pricesRoutes)



// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests
if(process.env.PORT){
app.listen(process.env.PORT, () =>{
    console.log('Listening on Port ' + process.env.PORT)
})
}


})

.catch((error) => {
    console.log(error)
})

module.exports = app