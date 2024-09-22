import { TiTick } from "react-icons/ti";

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
                            <label htmlFor="tease1" className="group">
                                <section className="flex justify-between font-bold text-xl w-full bg-[#E0E0E0] p-2 rounded-md">
                                    <input id="tease1" name="tease" type="checkbox" className="hidden appearance-none" />
                                    <div>Frango com Catupiry</div>
                                    <div type="button" className="flex justify-center items-center size-7 bg-white rounded-md">
                                        <TiTick className="group-has-[:checked]:opacity-100 opacity-0" />
                                    </div>
                                </section>
                            </label>
                            <label htmlFor="tease2" className="group">
                                <section className="flex justify-between font-bold text-xl w-full bg-[#E0E0E0] p-2 rounded-md">
                                    <input id="tease2" name="tease" type="checkbox" className="hidden appearance-none" />
                                    <div>Calabresa</div>
                                    <div type="button" className="flex justify-center items-center size-7 bg-white rounded-md">
                                        <TiTick className="group-has-[:checked]:opacity-100 opacity-0" />
                                    </div>
                                </section>
                            </label>
                            <label htmlFor="tease3" className="group">
                                <section className="flex justify-between font-bold text-xl w-full bg-[#E0E0E0] p-2 rounded-md">
                                    <input id="tease3" name="tease" type="checkbox" className="hidden appearance-none" />
                                    <div>Carne Seca</div>
                                    <div type="button" className="flex justify-center items-center size-7 bg-white rounded-md">
                                        <TiTick className="group-has-[:checked]:opacity-100 opacity-0" />
                                    </div>
                                </section>
                            </label>
                            <label htmlFor="tease4" className="group">
                                <section className="flex justify-between font-bold text-xl w-full bg-[#E0E0E0] p-2 rounded-md">
                                    <input id="tease4" name="tease" type="checkbox" className="hidden appearance-none" />
                                    <div>Mexicana</div>
                                    <div type="button" className="flex justify-center items-center size-7 bg-white rounded-md">
                                        <TiTick className="group-has-[:checked]:opacity-100 opacity-0" />
                                    </div>
                                </section>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}