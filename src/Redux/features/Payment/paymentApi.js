import apiSlice from "../../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => ({
                url: "https://dummyjson.com/products?limit=10",
            }),
        }),
        Pay: builder.mutation({
            query: data => ({
                url: "http://localhost:4000/payment",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetProductsQuery, usePayMutation } = paymentApi;
