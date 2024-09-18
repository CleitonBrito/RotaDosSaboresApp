import Layout from "../../Components/Layout"
import Card from '../../Components/Card'
import { IoLocation  } from "react-icons/io5";
import pizzaImg from '../../assets/PizzaFlat.png'
import salgadosImg from '../../assets/Salgados.png'
import milkshakesImg from '../../assets/Milkshake.png'
import bebidasImg from '../../assets/Bebidas.png'
import './index.css'

export default function Home(){
    return (
        <Layout>
            <div className="flex flex-col sm:gap-y-1 gap-y-4 sm:w-7/12 mx-auto h-screen">
                <section className="leading-3 flex justify-center h-18 items-center flex-col">
                    <div className="flex gap-2 items-center">
                        <IoLocation size={18} color="red"/>
                        <span className="font-bold">Localização</span>
                    </div>
                    <span className="text-sm my-0 line-clamp-1">
                        Praça das Assembléias, Bairro Novo, Filadélfia - BA
                    </span>
                </section>
                <section className="mx-auto w-full grid grid-rows-none grid-cols-4 h-[12rem] items-center justify-items-center leading-4 bg-white rounded-md">
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
                <section className="py-2 px-4 pb-52 bg-white rounded-md overflow-y-scroll">
                    <div className="pb-10">
                        <div className="flex justify-between p-2 pb-0">
                            <h1 className="font-bold text-xl">Pizzas</h1>
                            <span className="font-bold text-[#bbab31]">A partir de R$33,00</span>
                        </div>
                        <Card title="Pizza de Calabresa" description="Calabresa, Tomate, Queijo e Orégano" image={pizzaImg} />
                        <Card title="Pizza de Carne Seca" description="Carne Seca, Tomate, Queijo, Azeitonas e Orégano" image={pizzaImg} />
                        <Card title="Pizza Mexicana" description="Calabresa, Bacon, Muçarela, Cebola e Orégano" image={pizzaImg} />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h1 className="font-bold text-xl">Salgados</h1>
                            <span className="font-bold text-[#bbab31]">A partir de R$4,00</span>
                        </div>
                        <Card title="Pastel de Frango" description="Frango, Queijo e Catupiry" image={salgadosImg} />
                        <Card title="Pastel de Presunto" description="Presunto e Queijo" image={salgadosImg} />
                        <Card title="Pastel de Calabresa" description="Calabresa e Queijo" image={salgadosImg} />
                    </div>
                </section>
            </div>
        </Layout>
    )
}