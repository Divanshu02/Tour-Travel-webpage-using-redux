import { configureStore } from "@reduxjs/toolkit";
import countSliceReducer from "./Slices/countSlice";

const store=configureStore({
    reducer:countSliceReducer
})
export default store;