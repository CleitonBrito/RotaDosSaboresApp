import ItemSabor from "./ItemCard";

export default function SaboresCard({title}){
    return (
        <section>
            <div className="relative z-[1] flex items-center justify-between px-3 bg-[#EAEAEA] shadow-[5px_5px_5px_rgb(0,0,0,0.25)] min-h-14 rounded-md">
                <span className="font-bold text-xl">{ title }</span>
                <input type="hidden" name="quantity" />
                <div className="flex gap-2 items-center justify-center text-red-600 font-bold">
                    Até 2 sabores
                </div>
            </div>
            <div className="relative">
                <div className="relative flex z-[0] justify-center w-full">
                    <div className="flex flex-col justify-start items-center bg-gradient-to-b from-[#E5E5E5] to-[#F1F1F1] w-11/12 rounded-[0_0_1em_1em] shadow-[5px_5px_5px_rgb(0,0,0,0.25)]">
                        <div className="flex flex-col w-11/12 py-5 gap-2">
                            <ItemSabor id="tease1" title="Frango com Catupiry" />
                            <ItemSabor id="tease2" title="Calabresa" />
                            <ItemSabor id="tease3" title="Carne Seca" />
                            <ItemSabor id="tease4" title="Mexicana" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}