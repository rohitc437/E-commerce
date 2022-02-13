const express = require('express')
const { getAllProducts, createProduct, updateProduct } = require('../controllers/productController')

const router = express.Router()

//products routes
router.route("/products").get(getAllProducts);

router.route('/products/new').post(createProduct);

router.route('/products/:id').put(updateProduct);

module.exports = router