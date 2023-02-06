import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header(props) {
    const HandleIP = (event) => {
        props.handleInput(event.target.value);
    }
    return (
        <header className="flex items-center px-6 md:px-16 w-full absolute top-0 h-24 bg-gradient-to-b from-[#10141fcc] to-[#10141f00] md:bg-gray-800 ">
            <div className="flex gap-3 mr-auto md:gap-5">
                <button className="px-3 py-2 bg-gray-800/50 text-2xl md:hidden rounded-lg active:scale-95">
                    <IoMenuSharp />
                </button>
                <Link to={'/'} >
                    <h1 className="text-3xl font-medium tracking-wider font-rightous text-white">tobi</h1>
                </Link>
                <button className="px-3 py-2 hidden md:inline-block text-white text-sm tracking-wide font-bold">
                    Browse
                </button>
            </div>
            <div className="flex text-xs font-bold gap-1 md:gap-8">
                <form className="hidden lg:inline-flex border-2 border-slate-400/40 rounded-lg py-3 px-4 gap-3" onSubmit={(e)=> {e.preventDefault(); props.handleSearch()}}>
                    {/* <div className="hidden md:inline-flex border-2 border-slate-400/40 rounded-lg py-3 px-4 gap-3"> */}
                        <button className="text-xl">
                            <BiSearchAlt />
                        </button>
                        <input type="text" name="search" className={`bg-transparent h-5 md:w-64 outline-none text-sm text-white`} placeholder="Find movies, TV shows and more" value={props.input} onChange={(e)=>HandleIP(e)} />
                    {/* </div> */}
                </form>
                <button className="active:scale-95 bg-white text-gray-900 rounded-lg px-6 py-2 pb-3">Register</button>
                <button className="active:scale-95 text-white ml-2 pb-1">Sign In</button>
            </div>
        </header>
    );
}

export default Header;