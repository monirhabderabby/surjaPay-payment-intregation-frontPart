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
                url: "https://surja-pay-payment-intregation-server.vercel.app/payment",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetProductsQuery, usePayMutation } = paymentApi;
