const mongoose = require("mongoose");
const dotenv = require("dotenv");

const mongoDB_URI = process.env.MONGODB_URI;

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDB_URI);
        console.log(`Successfully connected to MongoDB: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Errror connecting to MongDB: ${err}`);
        process.exit(1);
    }
};


module.exports = connectDB;