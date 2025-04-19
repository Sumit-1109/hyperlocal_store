const express = require('express');
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectID,
        ref : "Products"
    },
    quantity : {
        type : Number
    },
    price : {
        type : Number
    },
    name : {
        type : String
    }
});

module.exports = mongoose.model('Cart', cartSchema);