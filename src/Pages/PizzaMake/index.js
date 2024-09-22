import Button from "../../Components/Button";
import Card from "../../Components/Card";
import PizzaCardSize from "../../Components/Card/PizzaCardSize";
import QuantityCart from "../../Components/Card/QuantityCard";
import SaboresCard from "../../Components/Card/SaboresCard";
import Layout from "../../Components/Layout";
import pizzaImg from '../../assets/PizzaFlat.png'

export default function PizzaShopping(){
    return (
        <Layout>
            <div className="flex h-screen flex-col gap-2">
                <section>
                    <Card isMake={true} className="!bg-white" title="Monte sua Pizza" description="Escolha o tamanho, sabores e quantidade." image={pizzaImg} />
                </section>
                <form className="flex overflow-y-scroll z-0 px-2 pb-52 flex-col gap-5">
                    <PizzaCardSize />
                    <QuantityCart />
                    <SaboresCard title="Sabores" />
                    <Button title="Adicionar"/>
                </form>
            </div>
        </Layout>
    )
}