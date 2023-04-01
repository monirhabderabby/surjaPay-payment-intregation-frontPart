import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";
import paymentSlice from "../features/Payment/paymentSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        payment: paymentSlice,
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(apiSlice.middleware),
});
