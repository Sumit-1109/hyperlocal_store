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
        const store = await Store.findById(storeId);

        if (!store) {
            return res.status(404).json({ message: "Store not found" });
          }
          
        const products = await Products.find({storeName : store.name });

        if(!products || products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        };

        return res.status(200).json({ storeName : store.name, products });

    } catch (err) {
        return res.status(500).json({message : "Error fetching products" , error : err});
    };

};

const searchAllProducts = async (req, res) => {
    const { query } = req.query;

    try {
        const products = await Products.find({
            name : { $regex : query, $options : 'i' }
        });

        return res.status(200).json({products});
    } catch (err) {
        return res.status(500).json({message : 'Search Failed', err});
    }
};

const searchStoreProducts = async (req, res) => {
    const { query } = req.query;
    const { storeId } = req.params;

    try {
        const store = await Store.findById(storeId);
        const products = await Products.find({
          storeName: store.name,
          name: { $regex: query, $options: "i" },
        });
        return res.status(200).json({products});
      } catch (err) {
        return res.status(500).json({ message: "Search in store failed", err });
      }
};

module.exports = { getProducts, searchAllProducts, searchStoreProducts };