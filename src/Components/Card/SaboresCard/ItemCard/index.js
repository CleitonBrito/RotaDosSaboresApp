import { Component } from "react";
import { TiTick } from "react-icons/ti";

class ItemSabor extends Component{
    render(){
        return <label htmlFor={ this.props.id } className="group">
            <section className="flex justify-between font-bold text-xl w-full bg-[#E0E0E0] p-2 rounded-md cursor-pointer hover:bg-[#D0D0D0] transition-colors">
                <input id={ this.props.id } name="tease" type="checkbox" className="hidden appearance-none" />
                <div>{ this.props.title }</div>
                <div type="button" className="flex justify-center items-center size-7 bg-white rounded-md">
                    <TiTick className="group-has-[:checked]:opacity-100 opacity-0" />
                </div>
            </section>
        </label>
    }
}

export default ItemSabor;