const express = require('express')
const {
    getAppointment,
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
} = require('../controllers/appointmentController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require Auth for Routes
router.use(requireAuth)

// GET All appointments
router.get('/', getAppointments)

//Get a single appointment
router.get('/:id', getAppointment)

//Post an Appointment
router.post('/', createAppointment)

// DELETE a appointment
router.delete('/:id', deleteAppointment)

// UPDATE a appointment
router.patch('/:id', updateAppointment)


module.exports = router