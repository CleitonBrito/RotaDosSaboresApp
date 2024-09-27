import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";

export default function QuantityCart(){
    const [count, setCount] = useState(0)

    return (
        <section>
            <div className="flex items-center justify-between px-3 bg-[#EAEAEA] shadow-[5px_5px_5px_rgb(0,0,0,0.25)] min-h-14 rounded-md">
                <span className="font-bold text-xl">Quantidade</span>
                <input type="hidden" name="quantidade" value={count} />
                <div className="flex gap-2 items-center justify-center text-white">
                    <div onClick={() => { if(count > 0) setCount(count-1) }} className={"flex justify-center items-center size-9 transition-opacity bg-red-800 rounded-md " + (count === 0 ? "opacity-20" : "cursor-pointer active:opacity-80")}>
                        <RiSubtractFill />
                    </div>
                    <div className="flex justify-center items-center size-9 bg-white text-black font-bold text-2xl rounded-md">
                        { count }
                    </div>
                    <div onClick={() => { if(count >= 0 && count < 15) setCount(count+1) }} className={"flex justify-center items-center size-9 transition-opacity bg-green-800 rounded-md " + (count === 15 ? "opacity-20" : "cursor-pointer active:opacity-80")}>
                        <FaPlus />
                    </div>
                </div>
            </div>
        </section>
    )
}