import React, { Component } from "react";
import logo from '../../logo.svg'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

class Header extends Component {
    render(){
        return <div className="grid grid-cols-[1fr_3fr_1fr] w-full md:w-7/12 lg:w-6/12 xl:w-4/12 sm:m-auto h-20 p-2 justify-between justify-items-center items-center text-white bg-themeMainDefault">
                <img className="size-14" src={logo} alt="Logo" />
                <div className="flex flex-col h-full justify-center items-center">
                    <h1 className="font-bold text-xl flex-shrink-1">
                        Rota dos Sabores
                    </h1>
                    <span className="text-sm">Sorveteria e Pizzaria</span>
                </div>
                <Link to="/cart">
                    <FaCartShopping size={25} />
                </Link>
        </div>
    }
}

export default Header;