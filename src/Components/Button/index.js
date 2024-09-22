export default function Button({title}){
    return (
        <section>
            <div className="flex justify-center ">
                <button type="button" className="bg-gradient-to-r from-[#0aec77] to-[#068644] active:opacity-80 transition-opacity p-1 px-10 shadow-[inset_-3px_-2px_1px_1px_rgba(0,0,0,0.25),5px_5px_5px_rgb(0,0,0,0.25)] rounded-full text-white">{ title }</button>
            </div>
        </section>
    )
}