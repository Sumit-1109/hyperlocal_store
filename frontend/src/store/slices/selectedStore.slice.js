import { createSlice } from "@reduxjs/toolkit";

const selectedStoreSlice = createSlice({
    name: "selectedStore",
    initialState : null,
    reducers: {
        setSelectedStore: (state, action) => action.payload,
        clearSelectedStore: () => null
    }
});

export const { setSelectedStore, clearSelectedStore } = selectedStoreSlice.actions;
export default selectedStoreSlice.reducer;