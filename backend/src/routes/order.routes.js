const express = require('express');

const Cart = require('../schema/cart.schema');

const getCart = async (req, res) => {

    try {

        const cart = await Cart.find();

        return res.status(200).json(cart);

    } catch (err) {
        return res.status(500).json({message : "Error fetching Cart", error : err });
    }
};

module.exports = { getCart };