function sizeChecked(e){
    let elements = document.querySelectorAll('.size');
    elements.forEach(item => {
        item.classList.remove('ring');
    });

    if(e.target.nextSibling){
        if(e.target.nextSibling.tagName === "SPAN"){
            e.target.classList.toggle('ring');
        }
    }
    if (e.target.previousSibling){
        if(e.target.previousSibling.tagName === "SPAN"){
            e.target.previousSibling.classList.toggle('ring');
        }
    }
    
    
}

export default function PizzaCardSize(){
    return (
        <section className="mt-2">
            <span className="font-bold text-xl">Tamanho</span>
            <div className="relative z-[1] flex justify-evenly items-center bg-[#EAEAEA] shadow-[5px_5px_5px_rgb(0,0,0,0.25)] min-h-14 rounded-md">
                <label htmlFor="tamanhoP">
                    <button onClick={ sizeChecked.bind(this)} type="button" className="flex items-center font-bold text-white active:opacity-80 transition-opacity">
                        <input id="tamanhoP" name="tamanho" value="p" type="hidden" />
                        <span className="size ring-green-400 bg-green-600 size-8 text-xl rounded-md flex items-center justify-center">
                            P
                        </span>
                        <span className="ring-none bg-green-950 text-sm opacity-95 h-5 px-1 py-3 rounded-[0em_1em_1em_0em] flex items-center">
                            6 Fatias
                        </span>
                    </button>
                </label>
                <label onClick={ sizeChecked.bind(this) } htmlFor="tamanhoM">
                    <button type="button" className="group flex items-center font-bold text-white active:opacity-80 transition-opacity">
                        <input id="tamanhoM" name="tamanho" value="m" type="hidden" />
                        <span className="size ring-orange-500 bg-orange-800 size-8 text-xl rounded-md flex items-center justify-center">
                            M
                        </span>
                        <span className="bg-orange-950 text-sm opacity-95 h-5 px-1 py-3 rounded-[0em_1em_1em_0em] flex items-center">
                            8  Fatias
                        </span>
                    </button>
                </label>
                <label onClick={ sizeChecked.bind(this) } htmlFor="tamanhoG">
                    <button type="button" className="group flex items-center font-bold text-white active:opacity-80 transition-opacity">
                        <input id="tamanhoG" name="tamanho" value="g" type="hidden" />
                        <span className="size ring-blue-500 bg-blue-800 size-8 text-xl rounded-md flex items-center justify-center">
                            G
                        </span>
                        <span className="bg-blue-950 text-sm opacity-95 h-5 px-1 py-3 rounded-[0em_1em_1em_0em] flex items-center">
                            10  Fatias
                        </span>
                    </button>
                </label>
            </div>
            <div className="flex justify-between items-center p-3 px-5 mx-2 bg-[#DCDCDC] shadow font-bold rounded-[0_0_1em_1em]">
                <span className="text-green-600">R$ 33,00</span>
                <span className="text-red-700">R$ 38,00</span>
                <span className="text-blue-600">R$ 43,00</span>
            </div>
        </section>
    )
}