import React, { Component } from "react";

class Card extends Component {
    render(){
        return <a className="cursor-pointer" href={this.props.link}>
            <div className="grid grid-cols-[5rem_auto] items-center bg-gradient-to-r to-[#E8E8E8] from-[#F3F4F6] hover:from-[#FFFFFF] hover:outline-1 hover:outline hover:outline-[#878787] hover:delay-100 drop-shadow-md shadow-red-600 transition-colors delay-100 rounded-2xl w-full min-h-16 sm:min-h-24 my-3">
                <section className="flex justify-center">
                    <img className="size-14" src={ this.props.image } alt="" />
                </section>
                <section className="p-2 px-3 relative">
                    <h1 className="font-bold text-xl mt-6 lg:mt-0">{ this.props.title }</h1>
                    <span className="overflow-hidden text-base">{ this.props.description }</span>
                    <section className="absolute top-2 sm:top-0 right-2">
                        <div className="bg-green-600 text-white text-sm px-3 rounded-full">
                            Disponível
                        </div>
                    </section>
                </section>
            </div>
        </a>
    }
}

export default Card;