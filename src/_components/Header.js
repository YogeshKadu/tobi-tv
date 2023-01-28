import React from "react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
function Header() {
    // const onTop=React.useState(0);
    return (
        <header className="flex items-center px-6 md:px-16 w-full absolute top-0 h-24 bg-gradient-to-b from-[#10141fcc] to-[#10141f00] md:bg-gray-800">
            <div className="flex gap-3 mr-auto md:gap-5">
                <button className="px-3 py-2 bg-gray-800/50 md:hidden rounded-lg active:scale-95">
                    <Bars3Icon className="w-6 text-white" />
                </button>
                <h1 className="text-3xl font-medium tracking-wider font-rightous text-white">tubi</h1>
                <button className="px-3 py-2 hidden md:inline-block text-white text-sm tracking-wide font-bold">
                    Browse
                </button>
            </div>
            <div className="flex text-xs font-bold gap-1 md:gap-8">
                <div className=" hidden md:inline-flex border-2 border-slate-400/40 rounded-lg py-3 px-4 gap-3">
                    <button>
                        <MagnifyingGlassIcon className="w-5 text-white" />
                    </button>
                    <input type="text" name="" className="bg-transparent h-5 hidden lg:inline-block md:w-64 outline-none text-sm text-white" placeholder="Find movies, TV shows and more" />
                </div>
                <button className="active:scale-95 bg-white rounded-lg px-6 py-2 pb-3">Register</button>
                <button className="active:scale-95 text-white ml-2 pb-1">Sign In</button>
            </div>
        </header>
    );
}

export default Header;