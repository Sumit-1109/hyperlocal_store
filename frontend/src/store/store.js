import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './slices/store.slice';
import productsReducer from './slices/products.slice';
import cartReducer from './slices/cart.slice';
import selectedStoreReducer from './slices/selectedStore.slice';
import customerNameReducer  from "./slices/customerName.slice";
import showModalReducer from "./slices/showModal.slice";

const store = configureStore({
    reducer : {
        stores : storeReducer ,
        products : productsReducer ,
        cart : cartReducer,
        selectedStore : selectedStoreReducer,
        customerName:  customerNameReducer, 
        showModal : showModalReducer ,
    },
});

export default store;