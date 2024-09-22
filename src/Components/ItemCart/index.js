import { Component } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

class ItemCart extends Component{
render(){
    return <section id="card" className="flex justify-center items-center gap-2 sm:gap-4 p-4 px-3 bg-gradient-to-b from-[#f3f3f3] to-[#dadada] shadow-[inset_-2px_-3px_4px_2px_rgba(0,0,0,0.15)] rounded-xl">
        <img className="size-10" src={ this.props.image } alt="" />
        <div className="flex flex-col text-sm flex-1">
            <div className="flex items-center gap-x-2">
                { (this.props.size !== undefined && this.props.size !== "") ?
                <div className={"flex justify-center items-center size-7 px-2 text-white rounded-md " + (this.props.size === 'P' ? "bg-red-700" : (this.props.size === "M" ? "bg-green-700" : "bg-blue-600")) }>
                        <span>{ this.props.size }</span>
                </div>
                : ""
                }
                <h1 className="font-bold">{ this.props.title }</h1>
            </div>
            <span className="text-justify leading-none pr-3 mt-1">{ this.props.description }</span>
        </div>
        <div className="flex flex-col leading-0 flex-shrink-0 items-center justify-center text-sm">
            <section className="bg-[#0E7920] text-white py-1 px-3 rounded-full">Quantidade: { this.props.quantity }</section>
            <span className="mt-2 font-bold leading-0 mb-0">Subtotal</span>
            <span className="bg-gradient-to-r from-[#0E7521] to-[#10DD10] text-transparent bg-clip-text font-extrabold text-xl">R$ {this.props.subtotal }</span>
        </div>
        <Link className="px-1 group">
            <FaRegTrashAlt className="group-hover:opacity-70" color="#D50000"/>
        </Link>
    </section>
    }
}

export default ItemCart;