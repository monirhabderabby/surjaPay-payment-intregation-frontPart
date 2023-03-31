import React from "react";

const SelectedItemsTable = () => {
    return (
        <div className="w-full max-w-[600px] h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[22px]">Selected Items:</h3>

            <table class="table-auto w-full mt-[12px]">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-[60px]">
                        <td className="text-center">Iphone</td>
                        <td className="text-center">1000</td>
                        <td className="text-center">1000</td>
                    </tr>
                    <tr className="border-t-[1px] border-[rgba(0,243,161,.8)] h-[50px]">
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center font-semibold text-[18px]">2000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SelectedItemsTable;
