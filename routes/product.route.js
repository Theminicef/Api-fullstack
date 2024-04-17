const express = require("express");
const Product = require('../models/product.models');
const router = express.Router();
const {getProducts,getProduct, createProduct,updatedProduct,deleteProduct}= require('../controllers/product.controller');

// Show a product
router.get('/', getProducts);
router.get('/:id', getProduct);

// Create
router.post('/', createProduct);

//update a product
router.put('/:id', updatedProduct);

//delete a product
router.delete('/:id', deleteProduct);

module.exports = router;