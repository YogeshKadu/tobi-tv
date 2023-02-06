import React from "react";
import { AiOutlineInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
// import HTTPService from "../__services/HTTPService";
function Footer(props) {
	return (
        <footer className="border-t bg-transparent border-gray-700 pt-4 px-5 pb-4">
            <div className="container max-w-xl mx-auto">
                <div className="footer-title flex flex-row justify-between h-14 items-end border-gray-700 border-b">
                    <h1 className="logo text-3xl font-medium tracking-wider font-rightous text-whitepb-3 pr-12 pb-2">tobi</h1>
                    <div className="socialmedia text-2xl flex gap-2 pb-3 px-2">
                        <AiFillFacebook />
                        <AiOutlineInstagram />
                        <BsTwitter />
                        <AiFillLinkedin />
                    </div>
                </div>

            </div>
            <div className="container max-w-2xl mx-auto text-sm text-gray-700 flex flex-col items-center gap-2 pt-5 md:pt-10">
                <p className="font-medium">Copyright © 2023 xScientist.</p>
                <p className="text-xs">Made with ♥ by Bitloader0●0</p>
            </div>
        </footer>
	);
}

export default Footer;
