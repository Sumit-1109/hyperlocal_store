const express = require("express");
const { addToCart, getCart, increaseCart, decreaseCart, clearCart, orderSuccessfull } = require("../controllers/order.controller");
const router = express.Router();

router.post('/addToCart', addToCart);
router.get('/cart', getCart);
router.put('/cart/increase/:id', increaseCart);
router.put('/cart/decrease/:id', decreaseCart);
router.delete('/cart/clear', clearCart);
router.post('/success', orderSuccessfull)

module.exports = router;
