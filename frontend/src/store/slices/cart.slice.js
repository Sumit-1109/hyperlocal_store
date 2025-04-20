import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: [],
    reducers : {
        setCart : (state, action) => {
            return action.payload;
        },
        addToCart : (state, action) => {
            const item = state.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else { 
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart : (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        increase : (state, action) => {
            const item = state.find(product => product.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        } ,
        decrease : (state, action) => {
            const item = state.find(product => product.id === action.payload);
            if (item && item.quantity > 1){
                item.quantity -= 1;
            } else {
                return state.filter(product => product.id !== action.payload)
            }
        } ,
        clearCart: () => [],
    }
});

export const selectTotalCartItems = (state) => state.cart.reduce((total, item) => total + item.quantity, 0);
export const selectTotalAmount = (state) => state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
export const { setCart, addToCart, removeFromCart, increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;