import { Component } from "react";
import { Link } from "react-router-dom"
import './index.css'

class ResumeCart extends Component{
    render(){
    return <section className="overlay fixed bottom-0 flex flex-col justify-center -translate-y-11 min-h-24 w-full md:w-7/12 lg:w-6/12 xl:w-4/12 bg-gradient-to-t from-[#000]/80 backdrop-blur-[2px]">
        <section className="flex mt-3">
            <Link to="/cart" className="relative grid grid-cols-[2fr_3fr] px-7 min-h-16 justify-center items-center w-11/12 mx-auto sm:mr-5 bg-gradient-to-r from-[#1e1b4b] to-[#131135] hover:brightness-110 hover:cursor-pointer text-white rounded-xl">
                <div className="flex flex-col gap-0">
                    <span className="text-sm">Ver carrinho</span>
                    <h1 className="text-[#00FF25] text-base font-extrabold">5 Itens</h1>
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <h1 className="font-bold text-[#00FF25]">Subtotal</h1>
                    <span className="bg-white px-3 py-1 rounded-full">
                        <span className="font-extrabold bg-gradient-to-r from-[#0E7521] to-[#10DD10] text-transparent bg-clip-text sm:text-xl text-sm">R$ 33,00</span>
                    </span>
                </div>
            </Link>
        </section>
    </section>
    }
}

export default ResumeCart;