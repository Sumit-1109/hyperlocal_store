const express = require("express");
const { addToCart, getCart, increaseCart, decreaseCart, clearCart } = require("../controllers/order.controller");
const router = express.Router();

router.post('/addToCart', addToCart);
router.get('/cart', getCart);
router.get('/cart/increase/:id', increaseCart);
router.get('/cart/decrease/:id', decreaseCart);
router.delete('/cart/clear', clearCart);

module.exports = router;
