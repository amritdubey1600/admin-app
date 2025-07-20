import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/user/userSlice"; //default exported reducer

export const store=configureStore({
    reducer:{
        user: userSliceReducer,
    }
});