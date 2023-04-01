import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePayMutation } from "../../Redux/features/Payment/paymentApi";

export const BillingDetailes = () => {
    const navigate = useNavigate();
    const carts = useSelector(state => state.payment.cart);
    //API
    const [Pay, { data, isLoading }] = usePayMutation();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const total = carts.reduce((prev, curr) => {
            return prev + curr.price;
        }, 0);

        // inject grand total and api called
        data["amount"] = total;
        Pay(data);
    };

    useEffect(() => {
        if (data?.success) {
            const { checkout_url } = data || {};
            window.location.replace(checkout_url);
        }
    }, [data, navigate]);

    return (
        <div className="w-full max-w-[600px] h-auto shadow-[0px_2px_6px_rgba(0,0,0,0.14)] p-[20px] rounded-[4px] bg-white">
            <h3 className="text-[#000000] font-bold font-sans text-[16px]">Billing Address</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full grid grid-cols-2 gap-x-[18px] gap-y-[16px] mt-[20px]">
                    <input
                        type="text"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Full Name"
                        {...register("customer_name")}
                    />
                    <input
                        type="email"
                        id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                        {...register("customer_email")}
                    />
                    <input
                        type="text"
                        id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                        {...register("customer_address")}
                    />
                    <input
                        type="text"
                        id="city"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="City"
                        {...register("customer_city")}
                    />
                    <input
                        type="text"
                        id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Phone"
                        {...register("customer_phone")}
                    />

                    <input
                        type="text"
                        id="postalCode"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="postal Code"
                        {...register("customer_postcode")}
                    />
                    <input
                        type="submit"
                        value={isLoading ? "Processing" : "Pay Now"}
                        className="w-full col-span-2 bg-gradient-to-r from-[rgba(0,243,161,.8)] to-[rgba(0,243,161,0.4)] rounded-[4px] hover:bg-[rgba(0,243,161,.7)] h-[40px] duration-150"
                    />
                </div>
            </form>
        </div>
    );
};
