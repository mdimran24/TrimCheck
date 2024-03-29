const Price = require('../models/priceModel')
const mongoose = require ('mongoose')


//get all appointments

const getPrices = async (req, res) => {


    const prices = await Price.find({})


    if(!prices){
        return res.status(404).json({error: 'No such price'})
    }

    res.status(200).json(prices)
}



// //get a single appointment
// const getPrice = async (req, res) => {

//     const { id } = req.params
    
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such appointment'})
//     }

//     const appointment = await Appointment.findById(id)

//     if(!appointment){
//         return res.status(404).json({error: 'No such appointment'})
//     }

//     res.status(200).json(appointment)
// }



//create new appointment
const createPrices = async (req, res) => {
    const {haircut, beard, skinFade, childrensCut} = req.body

    try { 
        const prices = await Price.create({ haircut, beard, skinFade, childrensCut})
        res.status(200).json(prices)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a appointment
const deletePrices = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})
    }

    const prices = await Price.findOneAndDelete({_id: id})

    if(!appointment){
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(prices)
}

//update a appointment
const updatePrices = async (req, res) => {
    const { id }  = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such prices'})
    }

    const prices = await Price.findOneAndUpdate({_id: id}, {
        ...req.body
      })

    if(!prices){
        return res.status(400).json({error: 'No such prices'})
    }

    res.status(200).json(prices)
}


module.exports = {
    getPrices,
    createPrices,
    deletePrices,
    updatePrices,
}