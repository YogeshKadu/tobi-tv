import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function SearchMovie(props) {
    const [active,setActive]= useState(true);
    // https://imdb-api.com/en/API/SearchMovie/k_4gnm15cg/demo
  const movie = {
    searchType: "Movie",
    expression: "demo",
    results: [
      {
        id: "tt9335498",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzJhMDY2NzUtYzE2Ny00YWVmLWI3YjQtODk2ZWQzYmEwMzJiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.7027_AL_.jpg",
        title: "Demon Slayer: Kimetsu no Yaiba",
        description: "2019– TV Series Natsuki Hanae, Zach Aguilar",
      },
      {
        id: "tt5917118",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BYWJjYTJjYTQtYWMyMC00ZWYyLWIwMTEtYTNjZDFlZDBjYTJlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzQ0MDg2OTI@._V1_Ratio0.7027_AL_.jpg",
        title: "Even Though I Don't Like It",
        description: "2016 Riko, Takuya Negishi",
      },
      {
        id: "tt0106697",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDBmNDhjOTYtZWVlMC00YzUwLWIyZjEtYzFjMWM5OTdiZDJkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_Ratio0.6757_AL_.jpg",
        title: "Demolition Man",
        description: "1993 Sylvester Stallone, Wesley Snipes",
      },
      {
        id: "tt11032374",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_Ratio0.6757_AL_.jpg",
        title: "Demon Slayer the Movie: Mugen Train",
        description: "2020 Natsuki Hanae, Akari Kitô",
      },
      {
        id: "tt2321542",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BOGJlZjU5YTAtYjkxMS00YWVhLWFjM2MtNDY3YTc2ZjJhMjM4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_Ratio0.6757_AL_.jpg",
        title: "Love, Chunibyo & Other Delusions",
        description: "2012– TV Series Jun Fukuyama, Maaya Uchida",
      },
      {
        id: "tt12198014",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzZhYjdjZTEtYzlkMC00M2I3LTliYjItNjVlZmQ5MGEyZjRlXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_Ratio0.6757_AL_.jpg",
        title: "Little Demon",
        description: "2022– TV Series Aubrey Plaza, Lucy DeVito",
      },
      {
        id: "tt1172049",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjM4ZGIyODQtNjEyZS00ODgzLWJhNGQtODlmMzRkZDg0OTE1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_Ratio0.6757_AL_.jpg",
        title: "Demolition",
        description: "2015 Jake Gyllenhaal, Naomi Watts",
      },
      {
        id: "tt13681676",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzkxYWNlOTItYjVhYS00YmNkLWI4NzctOTgzNzg5OGNmZjgwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6757_AL_.jpg",
        title: "No Demo Reno",
        description: "2021– TV Series",
      },
      {
        id: "tt16492678",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNThhYWViMjMtNDMzZC00YjliLTllYWYtYTdlOTM1MmNjMDE4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.7027_AL_.jpg",
        title: "Demon Slayer: Kimetsu no Yaiba - Tsuzumi Mansion Arc",
        description: "2021",
      },
      {
        id: "tt15262634",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjkzMDQwZDktMjU5NC00NzQxLTkxMDMtOGY5ZDczYzUxZGYzXkEyXkFqcGdeQXVyNTA1NTY4ODM@._V1_Ratio0.6757_AL_.jpg",
        title: "Sorry About the Demon",
        description: "2022 Jon Michael Simpson, Jeff McQuitty",
      },
      {
        id: "tt13392012",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTljMmEyZDUtYTc4ZC00YmE5LWEwZWUtMGI5YjYxYWYyZjNkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg",
        title: "Demonic",
        description: "2021 Carly Pope, Chris William Martin",
      },
      {
        id: "tt2543256",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNWQ2MTk5YTEtNTUzZi00OGU4LWJjNWItNWZmZmZjYmQ5YTgzXkEyXkFqcGdeQXVyMTQ4NDY5OTc@._V1_Ratio2.2703_AL_.jpg",
        title: "Demo Reel",
        description: "2012–2013 TV Series Doug Walker, Rachel Tietz",
      },
      {
        id: "tt0089013",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWE0NTAxOTMtOThkNC00MzZlLTgyODYtYjQ0YmJlYWE3NjEwXkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_Ratio0.6757_AL_.jpg",
        title: "Demons",
        description: "1985 Urbano Barberini, Natasha Hovey",
      },
      {
        id: "tt0099401",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTdlM2IxMjEtZWE0NS00MzY2LTk4Y2YtZjU0ZGNmZGYxNGMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6757_AL_.jpg",
        title: "Demon Wind",
        description: "1990 Eric Larson, Francine Lapensée",
      },
      {
        id: "tt2024544",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_Ratio0.6757_AL_.jpg",
        title: "12 Years a Slave",
        description: "2013 Chiwetel Ejiofor, Michael Kenneth Williams",
      },
      {
        id: "tt10470356",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2IyZDJiNTktZThiNC00YTM3LWExMWMtMjA3Y2U4MWU3NTAwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_Ratio0.7297_AL_.jpg",
        title:
          "Hensuki: Are you willing to fall in love with a pervert, as long as she's a cutie?",
        description: "2019– TV Series Keisuke Komoto, Hiro Shimono",
      },
      {
        id: "tt0075931",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzNjYWM5NDItZGI3My00OWUxLWE5NDgtYTc0NjJlZjRiNjJjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6757_AL_.jpg",
        title: "Demon Seed",
        description: "1977 Julie Christie, Fritz Weaver",
      },
      {
        id: "tt1974419",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTAyOTkxNTQ3NV5BMl5BanBnXkFtZTgwMjQ1NzQxOTE@._V1_Ratio0.6757_AL_.jpg",
        title: "The Neon Demon",
        description: "2016 Elle Fanning, Christina Hendricks",
      },
      {
        id: "tt21369498",
        resultType: "Movie",
        image: "",
        title: "Demo",
        description: "Short",
      },
      {
        id: "tt4948838",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BZGU4NmJmMjAtOWVlYi00NzkzLTg2MTQtOGIxODdkZTk2MDU0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTM5MzI2MDI@._V1_Ratio0.7027_AL_.jpg",
        title: "Sister of Mine",
        description: "2017 Ivana Baquero, Julio Perillán",
      },
      {
        id: "tt0408236",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTg3NjUxMzM5NV5BMl5BanBnXkFtZTcwMzQ1NjQzMw@@._V1_Ratio0.6757_AL_.jpg",
        title: "Sweeney Todd: The Demon Barber of Fleet Street",
        description: "2007 Johnny Depp, Helena Bonham Carter",
      },
      {
        id: "tt14888874",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2EwNTUwYWItZTY4ZC00N2Q1LWFhZWQtNjMwMDBkZDVmYThjXkEyXkFqcGdeQXVyOTA2OTk0MDg@._V1_Ratio0.6757_AL_.jpg",
        title: "Demon Slayer: Kimetsu no Yaiba - Mt. Natagumo Arc",
        description: "2020",
      },
      {
        id: "tt5658086",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWJlMGVlNzktMTM3Ni00YzdkLWI2YWUtMWU2NGZiOGZhNjZkXkEyXkFqcGdeQXVyMTgyMTYxOTc@._V1_Ratio0.6757_AL_.jpg",
        title: "The Demo",
        description: "2016 Anna Florence, Peter Dobson",
      },
      {
        id: "tt4130484",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjQwOTU0NTY0MV5BMl5BanBnXkFtZTgwMjQ4Njk2NDM@._V1_Ratio0.6757_AL_.jpg",
        title: "Demon House",
        description: "2019 Zak Bagans, Adam Ahlbrandt",
      },
      {
        id: "tt10671282",
        resultType: "Movie",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDBkZTJjYmEtYTViOS00ZGE1LWIxNGQtNTE5M2E3ZGNkOTVkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_Ratio0.6757_AL_.jpg",
        title: "High School Prodigies Have It Easy Even in Another World!",
        description: "2019– TV Series Cristina Valenzuela, Kira Buckland",
      },
    ],
    errorMessage: "",
  };
  return (
    <div className="w-full bg-transparent py-6 overflow-hidden border-t border-slate-700">
      <div className="flex items-end mx-5 md:mx-16 flex-row text-md my-3 sm:text-2xl font-semibold capitalize gap-1 hover:text-orange-500 cursor-pointer" onClick={() => setActive(isOpen=>!isOpen)}>
        <h2 className="mr-auto sm:mr-0">Movies </h2>
        {
            <FaChevronRight className={`transition-all delay-75 ${!active?'rotate-0':'rotate-90'}`} />
        }
      </div>
      <div className={`w-full  transition-all overflow-hidden ${!active&&'h-0'}`}>
        <div className="flex pt-3 sm:pt-6" >
          <div
            className="flex flex-wrap justify-evenly
            mx-5 md:mx-16
            gap-2 sm:gap-3"
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
            {movie.results.map((item) => (
              <div
                key={item.id}
                title={item.title}
                className="group cursor-pointer snap-center flex-shrink-0 w-28 sm:w-52 flex flex-col"
              >
                <div className="image-container w-full overflow-hidden rounded-sm bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover group-hover:scale-105 group-hover:transition-[0.5s] ease-in-out w-full aspect-[4/6] text-xs"
                  />
                </div>
                <div className="card-content py-2 text-sm sm:text-lg group-hover:text-orange-500">
                  <div className="card-title">
                    <h3 className="font-semibold truncate">{item.title}</h3>
                  </div>
                  <div className="card-other-contnet text-gray-400 group-hover:text-gray-200">
                    <p className="text-xs block truncate">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
