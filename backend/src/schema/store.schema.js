const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    location : {
        type : String,
    }
});

module.exports = mongoose.model("Store", StoreSchema);