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

// const getSelectedStore = async (req, res) => {

//     const { id } = req.params;

//     try {

//         if(!id) {
//             return res.status(404).json({message : "No Store Selected"});
//         };

//         if(!mongoose.Types.ObjectId.isValid(id)){
//             return res.status(404).json({message : "Invalid Store ID"});
//         };

//         const store = await Store.findById(id);

//         if(!store) {
//             return res.status(404).json({message : "Store Not Found"});
//         };

//         return res.status(200).json(store);

//     } catch (err) {
//         return res.status(500).json({message : "Error fetching Store Data"});
//     }
// }

module.exports = { getStores };