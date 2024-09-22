import React from "react"
import { TbArrowBackUp } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { Link} from 'react-router-dom';

export const Footer = () => {
    return <div className="sticky sm:m-auto bottom-0 h-12 w-full md:w-7/12 lg:w-6/12 xl:w-4/12 flex justify-center items-center bg-themeMainDefault text-white">
        <div className="flex w-6/12 justify-evenly">
            <Link to={-1} >
                <TbArrowBackUp size={30} color="#1E1B4B" className="bg-white rounded-md"/>
            </Link>
            <Link to="/">
                <TiHome size={30} color="#1E1B4B" className="p-1 bg-white rounded-md"/>
            </Link>
        </div>
    </div>
}

export default Footer;