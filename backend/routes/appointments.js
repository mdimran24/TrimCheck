const express = require('express')
const {
    getAppointment,
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
} = require('../controllers/AppointmentController')

const router = express.Router()


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