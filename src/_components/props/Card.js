import { VscDebugStackframeDot } from"react-icons/vsc";
function Card
({
    id,
    rank,
    rankUpDown,
    title,
    fullTitle,
    year,
    image,
    crew,
    imDbRating,
    imDbRatingCount,
}) {
    return (
        <div className="snap-center flex-shrink-0 w-28 sm:w-52 flex flex-col">
            <div className="w-full h-full overflow-hidden rounded-sm">
                <img src={image} alt="demo" className="object-cover w-full "/>
            </div>
            <div className="title my-2">
                <h3 className="ml-1 font-bold w-full truncate text-sm sm:text-lg ">{title}</h3>
                <div className="hidden text-xs text-slate-400 sm:block mx-2">
                    <p className="flex items-center">
                        {year}
                        <VscDebugStackframeDot className="text-md mr-1"/>
                        {imDbRating}
                        <span className={`ml-auto ${rankUpDown>0?'text-green-400':'text-red-500'}`}>{rankUpDown}</span>
                    </p>
                    <p className="flex items-center h-4">IMDB Rating: {imDbRatingCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;