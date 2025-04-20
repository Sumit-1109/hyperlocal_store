const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    price : {
        type : Number,
    }, 
    quantity : {
        type : Number,
    },
    storeName : {
        type: String,
    }
});

module.exports = mongoose.model('Products', ProductSchema);