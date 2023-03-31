import apiSlice from "../../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => ({
                url: "https://dummyjson.com/products?limit=10",
            }),
        }),
    }),
});

export const { useGetProductsQuery } = paymentApi;
