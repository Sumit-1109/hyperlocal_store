const express = require('express');

const Store = require('../schema/store.schema');
const Products = require('../schema/products.schema');

const getStores = async (req, res) => {

    try {

        const stores = await Store.find();

        return res.status(200).json(stores);

    } catch (err) {
        return res.status(500).json({ message: 'Error fetching stores', err });
    };

};


module.exports = { getStores };