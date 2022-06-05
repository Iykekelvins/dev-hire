import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.terawork.com/resources";

const initialState = {
    currencies:[],
    status:"pending",
    error:null,
    convertInfo:{
        symbol:"₦",
        divider:"1"
    }
}

export const fetchCurrencies = createAsyncThunk('currency/fetchDevs', async () => {
    const res = await axios.get(BASE_URL);
    return res.data.data.currencies
}) 

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers:{
        switchCurrency(state, action){
            state.convertInfo.divider = action.payload.divider;
            state.convertInfo.symbol = action.payload.symbol;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchCurrencies.pending, (state, action) => {
            state.status = "pending"
        })
        builder
        .addCase(fetchCurrencies.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.currencies = state.currencies.concat(action.payload)
        })
        builder
        .addCase(fetchCurrencies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        })
    }
})

export const {switchCurrency} = currencySlice.actions;

export const selectAllCurrency = (state) => state.currency.currencies;
export const selectStatus = (state) => state.currency.status;
export const selectError = (state) => state.currency.error;
export const selectConvertInfo = (state) => state.currency.convertInfo;

export default currencySlice.reducer;