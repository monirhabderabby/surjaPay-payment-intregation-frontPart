// Configuration
import React from "react";

// components
import "../../App.css";
import { Navbar } from "./Navbar";

export const SuccessPage = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[600px] mx-auto h-[calc(100vh-80px)] flex justify-center items-center">
                <div>
                    <div className="flex flex-col gap-[20px] items-center">
                        <div className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center p-[5px]">
                            <svg className="tick" viewBox="0 0 50 50">
                                <path
                                    className="tick-path"
                                    d="M10,25 L20,35 L40,15"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </div>
                        <h4 className="text-[25px] font-semibold text-black font-manrope">Thanks for your order!</h4>
                    </div>
                    <p className="font-normal text-[18px] tracking-[-1.5%] text-center">
                        Your purchase was successful and we appreciate your business. We will begin processing your order immediately and will provide
                        updates on its status as necessary. If you have any questions or concerns, please don't hesitate to contact us. Again, thank
                        you for choosing us and we look forward to fulfilling your order.
                    </p>
                </div>
            </div>
        </div>
    );
};
