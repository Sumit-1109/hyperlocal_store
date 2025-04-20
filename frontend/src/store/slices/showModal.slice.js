import { createSlice } from "@reduxjs/toolkit";

const showModalSlice = createSlice({
    name: "showModal",
    initialState : false,
    reducers : {
        setShowModal : (state, action) => action.payload
    },
});

export const { setShowModal } = showModalSlice.actions;
export default showModalSlice.reducer;