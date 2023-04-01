// Configuration
import React from "react";

// Third party packages
import { BsFillCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Components
import logo from "../../Assets/logo.png";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full shadow-lg bg-black">
            <div className="max-w-[1600px] mx-auto h-[80px] flex justify-between items-center">
                <div>
                    <img src={logo} className="w-[250px] cursor-pointer" alt="logo" onClick={() => navigate("/")} />
                </div>
                <div className="hover:bg-slate-50/25 p-3 rounded-full cursor-pointer" onClick={() => navigate("/checkout")}>
                    <BsFillCartCheckFill className="text-[25px] text-[#00f3a2e9]" />
                </div>
            </div>
        </div>
    );
};
