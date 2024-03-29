const express = require('express')
const {
    getPrices,
    createPrices,
    deletePrices,
    updatePrices,
} = require('../controllers/priceController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// // Require Auth for Routes
// router.use(requireAuth)

// GET All appointments
router.get('/', getPrices)


router.post('/', createPrices)


router.delete('/', deletePrices)


router.patch('/:id', updatePrices)


module.exports = router