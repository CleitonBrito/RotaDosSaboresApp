import ItemCart from "../../Components/ItemCart"
import Layout from "../../Components/Layout"
import Button from "../../Components/Button";
import pizzaImg from '../../assets/PizzaFlat.png'
import salgadosImg from '../../assets/Salgados.png'
export default function CartShopping(){
    return (
        <Layout>
            <div className="flex h-screen flex-col gap-2">
                <section className="flex justify-between gap-2 px-4 items-center text-white min-h-20 bg-gradient-to-r from-[#41B133] to-[#085C6C] rounded-lg">
                    <div>
                        <h1 className="font-bold text-xl">Carrinho</h1>
                        <span>5 Itens</span>
                    </div>
                    <div className="flex gap-3 items-center font-bold text-xl">
                        <h1>Total</h1>
                        <div className="bg-white p-2 px-4 rounded-full">
                            <span className="bg-gradient-to-r from-[#0E7521] to-[#10DD10] text-transparent bg-clip-text font-extrabold">R$ 114,00</span>
                        </div>
                    </div>
                </section>
                <section className="mt-6">
                    <h1 className="text-xl font-bold">Itens</h1>
                    <div className="flex flex-col gap-3 overflow-y-scroll h-screen pb-80">
                        <ItemCart image={pizzaImg} title="Pizza de Calabresa" description="Calabresa, Tomate, Azeitons, Cebola e Orégano" size="P" quantity="1" subtotal="33,00" />
                        <ItemCart image={pizzaImg} title="Pizza de Frango" description="Frango Azeitons, Cebola e Orégano" size="M" quantity="1" subtotal="38,00" />
                        <ItemCart image={pizzaImg} title="Pizza de Carne Seca" description="Carme Seca Azeitons, Cebola e Orégano" size="G" quantity="1" subtotal="43,00" />
                        <ItemCart image={salgadosImg} title="Pastel de Frango" description="Frango e queijo" quantity="3" subtotal="12,00" />
                        <Button className="mt-4" title="Confirmar Pedido" />
                    </div>
                </section>
            </div>
        </Layout>
    )
}