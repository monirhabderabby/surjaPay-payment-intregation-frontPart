import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addToCart: (state = initialState, action) => {
            state.cart.push(action.payload);
        },
    },
});

export default shopSlice.reducer;
export const { addToCart } = shopSlice.actions;
