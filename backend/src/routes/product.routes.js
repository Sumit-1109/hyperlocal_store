const express = require('express');
const { getProducts } = require('../controllers/product.controller');
const router = express.Router();

router.get('/:storeId', getProducts);

module.exports = router;