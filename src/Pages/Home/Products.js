// Configuration
import React from "react";

// Components
import { useGetProductsQuery } from "../../Redux/features/Payment/paymentApi";
import { ProductCard } from "../Shared/ProductCard";

const ProductsContainer = () => {
    // API Call > Get Products
    const { data, isLoading } = useGetProductsQuery();
    const { products } = data || {};

    // JS Variables
    let content;
    if (isLoading) {
        content = <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center text-[24px]">Loading...</div>;
    } else if (!isLoading && products) {
        content = (
            <div className="grid grid-cols-4 gap-[20px] max-w-[1600px] mx-auto mt-[50px]">
                {products?.map(product => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </div>
        );
    }
    return <div>{content}</div>;
};

export default ProductsContainer;
