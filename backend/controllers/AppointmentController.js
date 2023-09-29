const Appointment = require('../models/appointmentModel')
const mongoose = require ('mongoose')

//get all appointments
const getAppointments = async (req, res) => {
    const appointments = await Appointment.find({}).sort({createdAt: -1})

    res.status(200).json(appointments)
}


//get a single appointment
const getAppointment = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such appointment'})
    }

    const appointment = await Appointment.findById(id)

    if(!appointment){
        return res.status(404).json({error: 'No such appointment'})
    }

    res.status(200).json(appointment)
}



//create new appointment
const createAppointment = async (req, res) => {
    const {appointee, date, barber} = req.body

    try { 
        const appointment = await Appointment.create({ appointee, date, barber })
        res.status(200).json(appointment)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a appointment
const deleteAppointment = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such appointment'})
    }

    const appointment = await Appointment.findOneAndDelete({_id: id})

    if(!appointment){
        return res.status(404).json({error: 'No such appointment'})
    }

    res.status(200).json(appointment)
}

//update a appointment
const updateAppointment = async (req, res) => {
    const { id }  = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such appointment'})
    }

    const appointment = await Appointment.findOneAndUpdate({_id: id}, {
        ...req.body
      })

    if(!appointment){
        return res.status(400).json({error: 'No such appointment'})
    }

    res.status(200).json(appointment)
}


module.exports = {
    getAppointment,
    getAppointments,
    createAppointment,
    deleteAppointment,
    updateAppointment
}