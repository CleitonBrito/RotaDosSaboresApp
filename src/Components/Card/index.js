import React, { Component } from "react";

class Card extends Component {
    render(){
        return <div className={"grid grid-cols-[5rem_auto] items-center card rounded-2xl w-full min-h-16 sm:min-h-24 my-3 " + (this.props.isMake ? "to-[#06566F] from-[#2ABF2F] text-white" : "to-[#E8E8E8] from-[#F3F4F6]")}>
            <section className="flex justify-center">
                <img className="size-14" src={ this.props.image } alt="" />
            </section>
            <section className="p-2 px-3 relative">
                <h1 className={"font-bold text-xl lg:mt-0 " + (this.props.isMake ? "mt-0" : "mt-6")}>{ this.props.title }</h1>
                <span className="overflow-hidden text-base">{ this.props.description }</span>
                { (this.props.isMake) ? '' :
                    <section className="absolute top-2 sm:top-0 right-2">
                        <div className="bg-green-600 text-white text-sm px-3 rounded-full">
                            Disponível
                        </div>
                    </section>
                }
            </section>
        </div>
    }
}

export default Card;