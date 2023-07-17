const express = require('express')

const router = express.Router()


// GET All workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

module.exports = router