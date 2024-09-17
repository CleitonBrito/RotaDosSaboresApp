import Layout from "../../Components/Layout"
import { IoLocation  } from "react-icons/io5";
import pizzaImg from '../../assets/PizzaFlat.png'
import salgadosImg from '../../assets/Salgados.png'
import milkshakesImg from '../../assets/Milkshake.png'
import bebidasImg from '../../assets/Bebidas.png'
import './index.css'

export default function Home(){
    return (
        <Layout>
            <div className="grid grid-rows-[8vh_14vh_78vh]">
                <section className="leading-3 flex justify-center items-center flex-col">
                    <div className="flex gap-2 items-center">
                        <IoLocation size={18} color="red"/>
                        <span className="font-bold">Localização</span>
                    </div>
                    <span className="text-sm my-0 line-clamp-1">
                        Praça das Assembléias, Bairro Novo, Filadélfia - BA
                    </span>
                </section>
                <section className="grid grid-cols-4 items-center justify-items-center leading-4 bg-white rounded-md">
                    <div className="flex flex-col items-center">
                        <div className="size-14 rounded-full products-img flex justify-center items-center">
                            <img className="size-12 rounded-full products-img object-scale-down" src={ pizzaImg } alt="" />
                        </div>
                        <span className="text-sm">Pizzas</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="size-14 rounded-full products-img flex justify-center items-center">
                            <img className="size-12" src={ salgadosImg } alt="" />
                        </div>
                        <span className="text-sm">Salgados</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="size-14 rounded-full products-img flex justify-center items-center">
                            <img className="size-12 rounded-full products-img" src={ milkshakesImg } alt="" />
                        </div>
                        <span className="text-sm">Milkshakes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="size-14 rounded-full products-img flex justify-center items-center">
                            <img className="size-12 rounded-full products-img" src={ bebidasImg } alt="" />
                        </div>
                        <span className="text-sm">Bebidas</span>
                    </div>
                </section>
                <section className="main">
                </section>
            </div>
        </Layout>
    )
}