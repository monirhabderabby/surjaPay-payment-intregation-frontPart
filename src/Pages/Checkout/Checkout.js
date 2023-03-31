// Configuration
import React from "react";

// components
import { Navbar } from "../Shared/Navbar";
import { BillingDetailes } from "./BillingDetailes";
import SelectedItemsTable from "./SelectedItemsTable";

export const Checkout = () => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-2 gap-x-[40px] max-w-[1400px] mx-auto mt-[30px]">
                <div>
                    <BillingDetailes />
                </div>
                <div>
                    <SelectedItemsTable />
                </div>
            </div>
        </div>
    );
};
