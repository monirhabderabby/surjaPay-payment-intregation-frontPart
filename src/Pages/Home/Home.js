import React from "react";
import { Navbar } from "../Shared/Navbar";
import ProductsContainer from "./Products";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <ProductsContainer />
        </div>
    );
};
