import React from "react";
import { FaChevronRight } from "react-icons/fa";
function BoxOffice(props) {
	return (
		<section className="w-full bg-transparent py-6 overflow-hidden border-t border-slate-700">
			<div className="flex items-end mx-5 md:mx-16 flex-row text-md my-3 sm:text-2xl font-bold gap-3 hover:text-orange-500 cursor-pointer">
				<h2 className="mr-auto sm:mr-0">Box Office</h2>
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
									<div key={item.id} className="snap-center flex-shrink-0 w-28 sm:w-52 flex flex-col">
										<div className="image-container w-full h-full overflow-hidden rounded-sm">
											<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
										</div>

									</div>
								)
							}
						{/* {popularMovieArray} */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default BoxOffice;
