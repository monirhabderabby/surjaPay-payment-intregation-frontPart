// Configuration
import React from "react";

// Third party packages
import { BsFillCartCheckFill } from "react-icons/bs";

// Components
import logo from "../../Assets/logo.png";

export const Navbar = () => {
    return (
        <div className="w-full shadow-lg">
            <div className="max-w-[1600px] mx-auto h-[80px] flex justify-between items-center">
                <div>
                    <img src={logo} className="w-[250px]" alt="logo" />
                </div>
                <div className="hover:bg-gray-100 p-3 rounded-full cursor-pointer">
                    <BsFillCartCheckFill className="text-[25px] text-[#00f3a2e9]" />
                </div>
            </div>
        </div>
    );
};
