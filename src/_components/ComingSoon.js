import React from "react";
import { FaChevronRight } from "react-icons/fa";
function BoxOffice(props) {
	// {
	// 	"id": "tt24807190",
	// 	"title": "BTS: Yet to Come in Cinemas",
	// 	"fullTitle": "BTS: Yet to Come in Cinemas (2023)",
	// 	"year": "2023",
	// 	"releaseState": "Feb 01, 2023",
	// 	"image": "https://m.media-amazon.com/images/M/MV5BMGM4MmUwMmItM2FhZC00YWJlLTg0YjUtMjJkYmEzOGM2ZDIxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6757_AL_.jpg",
	// 	"runtimeMins": null,
	// 	"runtimeStr": null,
	// 	"plot": null,
	// 	"contentRating": null,
	// 	"imDbRating": null,
	// 	"imDbRatingCount": null,
	// 	"metacriticRating": null,
	// 	"genres": "Music",
	// 	"genreList": [
	// 		{
	// 			"key": "Music",
	// 			"value": "Music"
	// 		}
	// 	],
	// 	"directors": null,
	// 	"directorList": [],
	// 	"stars": "BTS",
	// 	"starList": [
	// 		{
	// 			"id": null,
	// 			"name": "BTS"
	// 		}
	// 	]
	// }
	console.log(props);
	return (
		<section className="w-full bg-transparent py-6 overflow-hidden border-t border-slate-700">
			<div className="flex items-end mx-5 md:mx-16 flex-row text-md my-3 sm:text-2xl font-bold gap-3 hover:text-orange-500 cursor-pointer">
				<h2 className="mr-auto sm:mr-0">Coming Soon</h2>
				<FaChevronRight />
			</div>
			<div className="w-full py-3 sm:py-6">
				<div className="flex
					w-full
					overflow-x-scroll scrollbar-hide
					">
					<div className="flex
						mx-5 md:mx-16
						gap-2 sm:gap-3
						">
							{
								props.items.map((item) => 
	<div key={item.id} title={item.title} className="snap-center flex-shrink-0 w-28 sm:w-52 flex flex-col">
		<div className="image-container w-full overflow-hidden rounded-sm">
			<img src={item.image} alt={item.title} className="object-cover w-full aspect-[4/6]" />
		</div>
		<div className="card-content py-2 text-sm sm:text-lg ">
			<div className="card-title">
				<h3 className="font-semibold truncate">
					{item.title}
				</h3>
			</div>
			<div className="card-other-contnet text-gray-400">
				<p className="text-xs block truncate">{item.stars}</p>
			</div>
		</div>
	</div>
								)
							}
					</div>
				</div>
			</div>
		</section>
	);
}

export default BoxOffice;
