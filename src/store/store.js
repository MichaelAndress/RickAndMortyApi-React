import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../rmapp/slice/apiSlice";
import { counterSlice } from "../rmapp/slice/counterSlice";

export const store = configureStore({

    reducer:{
        counter: counterSlice.reducer,
        api: apiSlice.reducer,
    }

})

