const express = require('express')
const {
    getAppointment,
    getAppointments,
    getAppointmentsforBarber,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAllAppointments
} = require('../controllers/appointmentController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require Auth for Routes
router.use(requireAuth)

// GET All appointments
router.get('/', getAppointments)

// GET All appointments
router.get('/all', getAllAppointments)

//Get a single appointment
router.get('/:id', getAppointment)

//Get appointments for barber
router.get('/barber/:barber', getAppointmentsforBarber)

//Post an Appointment
router.post('/', createAppointment)

// DELETE an appointment
router.delete('/:id', deleteAppointment)

// UPDATE an appointment
router.patch('/:id', updateAppointment)


module.exports = router