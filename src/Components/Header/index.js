import React, { Component } from "react";
import logo from '../../logo.svg'
import { FaCartShopping } from "react-icons/fa6";

class Header extends Component {
    render(){
        return <div className="grid w-full h-20 p-2 justify-items-center text-white bg-themeMainDefault">
            <div className="grid grid-cols-[15vmin_65vmin_15vmin] justify-center sm:w-8/12 items-center">
                <img className="size-14" src={logo} alt="Logo" />
                <div className="flex flex-col h-full justify-center items-center">
                    <h1 className="font-bold text-xl">
                        Rota dos Sabores
                    </h1>
                    <span className="text-sm">Sorveteria e Pizzaria</span>
                </div>
                <div>
                    <FaCartShopping size={25} />
                </div>
            </div>
        </div>
    }
}

export default Header;