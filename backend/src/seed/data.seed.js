const mongoose = require('mongoose');

const Store = require('../schema/store.schema');
const Product = require('../schema/products.schema');

const storeData = require("../../../sample-data/stores.json");
const productData = require("../../../sample-data/products.json");

const connectDB = require("../config/connectDB");

const seedDB = async () => {
    try {
        await connectDB();
        
        await Store.deleteMany();
        await Product.deleteMany();

        const stores = await Store.insertMany(storeData);
        console.log("Stores added to DB !");

        for (let product of productData) {

            const store = stores.find(store => store.name === product.storeName);

            if (store) {
                await Product.create({
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    storeName: store._id,
                });
            }
        }
        
        console.log("Products seeded !");
        process.exit();

    } catch (err) {
        console.error("Seeding error", err);
        process.exit(1);
    }
};

seedDB();