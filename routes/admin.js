const express = require('express')

const router = express.Router()

const adminController = require('../controllers/admin')

router.get('/add-product', adminController.getEditProduct)
router.post('/add-product', adminController.postAddProduct)
router.post('/edit-product', adminController.postEditProduct)
router.get('/products', adminController.getProducts)
router.get('/edit-product/:productid', adminController.getEditProduct)

exports.routes = router
