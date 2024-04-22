const express = require('express')
const {
    getPrices,
    createPrices,
    deletePrices,
    updatePrices,
} = require('../controllers/priceController')


const router = express.Router()


// GET All appointments
router.get('/', getPrices)


router.post('/', createPrices)


router.delete('/', deletePrices)


router.patch('/:id', updatePrices)


module.exports = router