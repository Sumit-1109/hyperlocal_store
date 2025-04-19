const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/connectDB");

const storeRoute = require('./routes/store.routes');
const productRoute = require('./routes/product.routes');
const orderRoute = require('./routes/order.routes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/stores', storeRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(PORT, (err) => {
        if(err) {
            console.log(`Failed to connect to PORT: ${err}`);
        };

        console.log(`Server is running successfully on PORT: ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
});