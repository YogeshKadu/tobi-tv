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
        <div className="shrink-0 snap-center">
            <div>
                <img src={image} alt="demo" className="object-cover"/>
            </div>
        </div>
    )
}

export default Card;