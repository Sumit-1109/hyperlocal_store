import { createSlice } from "@reduxjs/toolkit";

const customerNameSlice = createSlice({
    name: "customerName",
    initialState: '',
    reducers : {
        setCustomerName: (state, action) => action.payload,
        clearCustomerName : () => ''
    }
});

export const { setCustomerName, clearCustomerName } = customerNameSlice.actions;
export default customerNameSlice.reducer;