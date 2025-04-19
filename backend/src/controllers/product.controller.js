const express = require("express");
const mongoose = require("mongoose");

const Products = require('../schema/products.schema');
const Store = require("../schema/store.schema");

const getProducts = async (req, res) => {

    const { storeId } = req.params;

    if (!storeId) {
        return res.status(400).json({ message: "Store ID is required" });
    };

    if(!mongoose.Types.ObjectId.isValid(storeId)){
        return res.status(400).json({ message: "Invalid Store ID" });
    };

    try {

        const products = await Products.find({ storeName : storeId });

        if(!Products) {
            return res.status(404).json({ message: "No products found" });
        };

        return res.status(200).json(products);

    } catch (err) {
        return res.status(500).json({message : "Error fetching products" , error : err});
    };

};

module.exports = { getProducts };