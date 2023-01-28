// import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import React from "react";
import HTTPService from "../__services/HTTPService";
import Card from './props/Card'
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { data } from "autoprefixer";
function Section(props) {
    const http = new HTTPService();
    const [popularMovieArray,setPopular]= React.useState([]);
    console.log(props)
    React.useEffect(()=>{
        setPopular(()=> {return props.items.map((item)=> 
            <Card key={item.id} {...item} />
        )})
    },[]);
    

    return (
        <section className="w-full py-6 overflow-hidden">
            <div className="mx-16 mb-6 flex h-14 items-center gap-4">
                <p className="text-2xl font-bold">Action</p> 
                <ChevronRightIcon className="w-6 font-bold" />
            </div>
            <div className="mx-16 flex items-center gap-2 md:gap-4 overflow-x-auto snap-mandatory scroll-smooth">
                {popularMovieArray}
            </div>
        </section>
    );
}

export default Section;