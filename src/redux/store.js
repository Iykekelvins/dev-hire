import { configureStore } from "@reduxjs/toolkit";
import devsReducer from "./devsSlice";

export const store = configureStore({
    reducer:{
        devs: devsReducer
    }
})