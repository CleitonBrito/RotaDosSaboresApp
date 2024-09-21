import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import pizzaImg from '../../assets/PizzaFlat.png'
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import './index.css'
import { useState } from "react";

export default function PizzaShopping(){
    const [count, setCount] = useState(0)

    return (
        <Layout>
            <div className="flex h-screen flex-col gap-2 bg-w">
                <section>
                    <Card title="Pizza de Calabresa" description="Calabresa, Tomate, Queijo e Orégano" image={pizzaImg} />
                </section>
                <form className="flex flex-col gap-5">
                    <section className="mt-5">
                        <span className="font-bold text-xl">Tamanho</span>
                        <div className="flex justify-evenly items-center bg-[#EAEAEA] shadow-[5px_5px_5px_rgb(0,0,0,0.25)] min-h-14 rounded-md">
                            <label htmlFor="tamanhoP">
                                <button type="button" className="group flex items-center font-bold text-white active:opacity-80 transition-opacity">
                                    <input id="tamanhoP" name="tamanho" value="p" type="hidden" />
                                    <span className="group-focus:ring ring-green-400 bg-green-600 size-8 text-xl rounded-md flex items-center justify-center">
                                        P
                                    </span>
                                    <span className="bg-green-950 text-sm opacity-95 h-5 px-1 py-3 rounded-[0em_1em_1em_0em] flex items-center">
                                        6 Fatias
                                    </span>
                                </button>
                            </label>
                            <label htmlFor="tamanhoM">
                                <button type="button" className="group flex items-center font-bold text-white active:opacity-80 transition-opacity">
                                    <input id="tamanhoM" name="tamanho" value="m" type="hidden" />
                                    <span className="group-focus:ring ring-orange-500 bg-orange-800 size-8 text-xl rounded-md flex items-center justify-center">
                                        M
                                    </span>
                                    <span className="bg-orange-950 text-sm opacity-95 h-5 px-1 py-3 rounded-[0em_1em_1em_0em] flex items-center">
                                        8  Fatias
                                    </span>
                                </button>
                            </label>
                            <label htmlFor="tamanhoG">
                                <button type="button" className="group flex items-center font-bold text-white active:opacity-80 transition-opacity">
                                    <input id="tamanhoG" name="tamanho" value="g" type="hidden" />
                                    <span className="group-focus:ring ring-blue-500 bg-blue-800 size-8 text-xl rounded-md flex items-center justify-center">
                                        G
                                    </span>
                                    <span className="group-focus:ring-[4px_4px_4px] ring-orange-500 bg-blue-950 text-sm opacity-95 h-5 px-1 py-3 rounded-[0em_1em_1em_0em] flex items-center">
                                        10  Fatias
                                    </span>
                                </button>
                            </label>
                        </div>
                    </section>
                    <section>
                        <div className="flex items-center justify-between px-3 bg-[#EAEAEA] shadow-[5px_5px_5px_rgb(0,0,0,0.25)] min-h-14 rounded-md">
                            <span className="font-bold text-xl">Quantidade</span>
                            <input type="hidden" name="quantidade" value={count} />
                            <div className="flex gap-2 items-center justify-center text-white">
                                <div onClick={() => { if(count > 0) setCount(count-1) }} className="flex justify-center items-center size-9 active:opacity-80 transition-opacity bg-red-800 rounded-md cursor-pointer">
                                    <RiSubtractFill />
                                </div>
                                <div className="flex justify-center items-center size-9 bg-white text-black font-bold text-2xl rounded-md">
                                    { count }
                                </div>
                                <div onClick={() => { if(count >= 0 && count < 15) setCount(count+1) }} className="flex justify-center items-center size-9 active:opacity-80 transition-opacity bg-green-800 rounded-md cursor-pointer">
                                    <FaPlus />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="flex justify-center ">
                            <button type="button" className="bg-gradient-to-r from-[#0aec77] to-[#068644] active:opacity-80 transition-opacity p-1 px-10 shadow-[inset_-3px_-2px_1px_1px_rgba(0,0,0,0.25),5px_5px_5px_rgb(0,0,0,0.25)] rounded-full text-white">Adicionar</button>
                        </div>
                    </section>
                </form>
            </div>
        </Layout>
    )
}