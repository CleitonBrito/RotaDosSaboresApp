import React from "react"
import { TbArrowBackUp } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    let navigate = useNavigate();
    return <div className="px-5 sticky bottom-0 h-12 w-screen sm:hidden flex justify-center items-center mx-auto bg-themeMainDefault text-white">
        <div className="flex w-6/12 justify-evenly">
            <button onClick={() => navigate(-1) } >
                <TbArrowBackUp size={30} color="#1E1B4B" className="bg-white rounded-md"/>
            </button>
            <button disabled={ window.location.pathname === "/" ? "disabled" : "" } onClick={() => navigate("/")}>
                <TiHome size={30} color="#1E1B4B" className="p-1 bg-white rounded-md"/>
            </button>
        </div>
    </div>
}

export default Footer;