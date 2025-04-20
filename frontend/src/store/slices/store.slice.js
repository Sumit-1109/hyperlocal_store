import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name : "stores",
    initialState : [],
    reducers : {
        setStores : (state, action) => action.payload,
    },
});

export const { setStores } = storeSlice.actions;
export default storeSlice.reducer;