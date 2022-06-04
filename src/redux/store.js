import { configureStore } from "@reduxjs/toolkit";
import devsReducer from "./devsSlice";
import currencyReducer from "./currencySlice";

export const store = configureStore({
    reducer:{
        devs: devsReducer,
        currency: currencyReducer
    }
})