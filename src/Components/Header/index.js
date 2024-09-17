import React, { Component } from "react";
import logo from '../../logo.svg'
import { FaCartShopping } from "react-icons/fa6";

class Header extends Component {
    render(){
        return <div className="grid w-full h-full justify-items-center text-white bg-themeMainDefault">
            <div className="flex w-full sm:w-8/12 justify-around items-center p-2">
                <img className="w-14" src={logo} alt="Logo" />
                <div className="flex flex-col h-full justify-end items-center">
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