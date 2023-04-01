import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SelectedItemsTable = () => {
    const [grandTotal, setGrandTotal] = useState(0);
    const carts = useSelector(state => state.payment.cart);
    console.log(carts);

    useEffect(() => {
        const total = carts.reduce((prev, curr) => {
            return prev + curr.price;
        }, 0);
        setGrandTotal(total);
    }, [carts]);
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
                    {carts?.map(item => {
                        return (
                            <tr className="h-[50px]" key={item.id}>
                                <td className="text-center">{item?.title}</td>
                                <td className="text-center">{item?.price}</td>
                                <td className="text-center">{item?.price}</td>
                            </tr>
                        );
                    })}
                    <tr className="border-t-[1px] border-[rgba(0,243,161,.8)] h-[40px]">
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center font-semibold text-[18px]">{grandTotal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SelectedItemsTable;
