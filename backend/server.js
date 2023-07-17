const express = require('express')
require('dotenv').config()

// express app
const app = express()
const workoutRoutes = require('./routes/workouts')

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.pathj, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () =>{
    console.log('Listening on Port 4000')
})