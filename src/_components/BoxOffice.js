import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function BoxOffice(props) {
  // https://imdb-api.com/en/API/BoxOffice/k_4gnm15cg

  // {
  // 	"id": "tt3915174",
  // 	"rank": "2",
  // 	"title": "Puss in Boots: The Last Wish",
  // 	"image": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_UX128_CR0,12,128,176_AL_.jpg",
  // 	"weekend": "$10.5M",
  // 	"gross": "$140.7M",
  // 	"weeks": "6"
  //   },

  const boxOffice = {
	"items": [
	  {
		"id": "tt1630029",
		"rank": "1",
		"title": "Avatar: The Way of Water",
		"image": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_Ratio0.7015_AL_.jpg",
		"weekend": "$16.0M",
		"gross": "$620.8M",
		"weeks": "7"
	  },
	  {
		"id": "tt3915174",
		"rank": "2",
		"title": "Puss in Boots: The Last Wish",
		"image": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_Ratio0.6716_AL_.jpg",
		"weekend": "$10.5M",
		"gross": "$140.7M",
		"weeks": "6"
	  },
	  {
		"id": "tt12844910",
		"rank": "3",
		"title": "Pathaan",
		"image": "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_Ratio0.7313_AL_.jpg",
		"weekend": "$6.9M",
		"gross": "$9.5M",
		"weeks": "1"
	  },
	  {
		"id": "tt7405458",
		"rank": "4",
		"title": "A Man Called Otto",
		"image": "https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.7910_AL_.jpg",
		"weekend": "$6.7M",
		"gross": "$46.0M",
		"weeks": "5"
	  },
	  {
		"id": "tt8760708",
		"rank": "5",
		"title": "M3GAN",
		"image": "https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6716_AL_.jpg",
		"weekend": "$6.3M",
		"gross": "$82.2M",
		"weeks": "4"
	  },
	  {
		"id": "tt10855768",
		"rank": "6",
		"title": "Missing",
		"image": "https://m.media-amazon.com/images/M/MV5BNzI3MmU1NjQtZmM2ZC00Y2NkLWFhMDMtZmVhYTc1NTFjZTFhXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_Ratio0.7910_AL_.jpg",
		"weekend": "$5.7M",
		"gross": "$17.6M",
		"weeks": "2"
	  },
	  {
		"id": "tt5884796",
		"rank": "7",
		"title": "Plane",
		"image": "https://m.media-amazon.com/images/M/MV5BZDc4MzVkNzYtZTRiZC00ODYwLWJjZmMtMDIyNjQ1M2M1OGM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.6716_AL_.jpg",
		"weekend": "$3.8M",
		"gross": "$25.4M",
		"weeks": "3"
	  },
	  {
		"id": "tt16174868",
		"rank": "8",
		"title": "Left Behind: Rise of the Antichrist",
		"image": "https://m.media-amazon.com/images/M/MV5BNzQzNDUxZjgtYjZkZS00MWI1LTkyN2UtYmFlM2UyYjNhYjhlXkEyXkFqcGdeQXVyMTkwMjkyMDQ@._V1_Ratio0.7612_AL_.jpg",
		"weekend": "$2.6M",
		"gross": "$3.2M",
		"weeks": "1"
	  },
	  {
		"id": "tt10365998",
		"rank": "9",
		"title": "Infinity Pool",
		"image": "https://m.media-amazon.com/images/M/MV5BZDQxZTY0ZDItY2Y0Yy00OTIzLTkwYTgtNmNkODhiYTk4MzUwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.6716_AL_.jpg",
		"weekend": "$2.5M",
		"gross": "$2.5M",
		"weeks": "1"
	  },
	  {
		"id": "tt13539646",
		"rank": "10",
		"title": "The Wandering Earth 2",
		"image": "https://m.media-amazon.com/images/M/MV5BN2IzY2E2MTQtNTMxMy00YTJjLTkzYTEtYzAyM2VlYjFjZDQzXkEyXkFqcGdeQXVyMTI5ODA1OTU0._V1_Ratio0.6716_AL_.jpg",
		"weekend": "$1.4M",
		"gross": "$3.0M",
		"weeks": "2"
	  }
	],
	"errorMessage": ""
  };

  return (
    <section className="w-full bg-transparent py-6 overflow-hidden border-t border-slate-700">
      <div className="flex items-end mx-5 md:mx-16 flex-row text-md my-3 sm:text-2xl font-bold gap-3 hover:text-orange-500 cursor-pointer">
        <h2 className="mr-auto sm:mr-0">Box Office</h2>
        <FaChevronRight />
      </div>
      <div className="w-full py-3 sm:py-6">
        <div
          className="flex
					w-full
					overflow-x-scroll scrollbar-hide
					"
        >
          <div
            className="flex
						mx-5 md:mx-16
						gap-2 sm:gap-3
						"
          >
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                title="loading ......"
                className={`group cursor-pointer snap-center flex-shrink-0 w-28 sm:w-52 flex flex-col animate-pulse`}
              >
                <div className="image-container w-full overflow-hidden rounded-md">
                  <div className="bg-slate-800 w-full aspect-[4/6]" />
                </div>
                <div className="card-content py-2 text-sm sm:text-lg group-hover:text-orange-500">
                  <div className="card-title">
                    <div className="w-10/12 bg-slate-800 rounded-md mt-1 h-5" />
                  </div>
                  <div className="card-other-contnet">
                    <p className="w-20 bg-slate-800 rounded-md mt-2 h-3"></p>
                  </div>
                </div>
              </div>
            ))}
            {boxOffice.items.map((item) => (
              <Link
				to={`watch/${item.id}`}
                key={item.id}
                title={item.title}
                className="group cursor-pointer snap-center flex-shrink-0 w-28 sm:w-52 flex flex-col"
              >
                <div className="image-container w-full overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover group-hover:scale-105  group-hover:transition-[0.5s] ease-in-out w-full aspect-[4/6]"
                  />
                </div>
                <div className="card-content py-2 text-sm sm:text-lg group-hover:text-orange-500">
                  <div className="card-title">
                    <h3 className="font-semibold truncate">{item.title}</h3>
                  </div>
                  <div className="card-other-contnet text-gray-400 group-hover:text-gray-200 ">
                    <div className="flex flex-row gap-2 sm:gap-5">
                      <p className="text-xs">{item.weekend}</p>
                      <span className="text-xs">{item.gross}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoxOffice;
