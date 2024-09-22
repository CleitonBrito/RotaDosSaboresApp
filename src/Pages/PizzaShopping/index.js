import Button from "../../Components/Button";
import Card from "../../Components/Card";
import PizzaCardSize from "../../Components/Card/PizzaCardSize";
import QuantityCart from "../../Components/Card/QuantityCard";
import Layout from "../../Components/Layout";
import pizzaImg from '../../assets/PizzaFlat.png'
import './index.css'

export default function PizzaShopping(){
    return (
        <Layout>
            <div className="flex h-screen flex-col gap-2 bg-w">
                <section>
                    <Card title="Pizza de Calabresa" description="Calabresa, Tomate, Queijo e Orégano" image={pizzaImg} />
                </section>
                <form className="flex flex-col gap-5">
                    <PizzaCardSize />
                    <QuantityCart />
                    <Button title="Adicionar"/>
                </form>
            </div>
        </Layout>
    )
}