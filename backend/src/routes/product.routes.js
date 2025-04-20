const express = require('express');
const { getProducts, searchAllProducts, searchStoreProducts } = require('../controllers/product.controller');
const router = express.Router();


router.get('/search', searchAllProducts);
router.get('/:storeId/search', searchStoreProducts);
router.get('/:storeId', getProducts);

module.exports = router;