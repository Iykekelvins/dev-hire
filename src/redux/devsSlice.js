import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    devs:[],
    status:"idle",
    error:null
}

export const devsSlice = createSlice({
    name: "devs",
    initialState,
    reducers:{
    }
})

export const {} = devsSlice.actions;

export const selectAllDevs = (state) => state.devs.devs;

export default devsSlice.reducer;