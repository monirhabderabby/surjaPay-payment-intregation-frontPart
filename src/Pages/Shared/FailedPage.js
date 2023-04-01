import React from "react";
import { VscClose } from "react-icons/vsc";
import "../../App.css";
import { Navbar } from "./Navbar";

export const FailedPage = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[600px] mx-auto h-[calc(100vh-80px)] flex justify-center items-center">
                <div>
                    <div className="flex flex-col gap-[20px] items-center">
                        <div className="w-[50px] h-[50px] bg-red-400 rounded-full flex justify-center items-center p-[5px] text-white text-[30px] tick">
                            <VscClose />
                        </div>
                        <h4 className="text-[25px] font-semibold text-red-500 font-manrope">Order failed!</h4>
                    </div>
                    <p className="font-normal mt-[12px] text-[18px] tracking-[-1.5%] text-center">
                        I'm sorry, but your order could not be processed at this time. We apologize for any inconvenience this may have caused. Please
                        double-check that all the information you provided is correct, including your payment information, and try placing your order
                        again. If the issue persists, please contact our customer support team for assistance. Thank you for considering us and we
                        hope to have the opportunity to serve you in the future.
                    </p>
                </div>
            </div>
        </div>
    );
};
