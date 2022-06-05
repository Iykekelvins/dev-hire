import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://api.terawork.com/service-categories/sellers-services/computer-software-development";

const initialState = {
    devs:[],
    favorites:[],
    status:"pending",
    error:null
}

export const fetchDevs = createAsyncThunk('devs/fetchDevs', async () => {
    const res = await axios.get(BASE_URL);
    return res.data.data.service_search_results.hits;
}) 


export const devsSlice = createSlice({
    name: "devs",
    initialState,
    reducers:{
        addToFav(state, action){
            const obj = state.favorites.find((value => value._id === action.payload._id));
            if(!obj){
                state.favorites.unshift(action.payload);
                toast.success(`${action.payload._source.display_name} has been added to favorites.`, {
                    position: "top-center",
                    theme: "colored",
                });
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
            }
            else{
                state.favorites = state.favorites.filter(item => item._id !== action.payload._id)
                toast.error(`${action.payload._source.display_name} has been removed from favorites.`, {
                    position: "top-center",
                    theme: "colored",
                  });
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchDevs.pending, (state, action) => {
            state.status = "pending"
        })
        builder
        .addCase(fetchDevs.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.devs = state.devs.concat(action.payload)
        })
        builder
        .addCase(fetchDevs.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        })
    }
})

export const {addToFav} = devsSlice.actions;

export const selectAllDevs = (state) => state.devs.devs;
export const selectFavorites = (state) => state.devs.favorites;
export const selectStatus = (state) => state.devs.status;
export const selectError = (state) => state.devs.error;

export default devsSlice.reducer;