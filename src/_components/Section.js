import React from "react";
import BoxOffice from "./BoxOffice";
import ComingSoon from "./ComingSoon";
import MostPopularMovies from "./MostPopularMovies";
// import HTTPService from "../__services/HTTPService";
function Section(props) {
	// const http = new HTTPService();
	// const [data, setData] = React.useState({
	// 	items: [
	// 	  {
	// 		id: "tt10648342",
	// 		rank: "2",
	// 		rankUpDown: "+26",
	// 		title: "Thor: Love and Thunder",
	// 		fullTitle: "Thor: Love and Thunder (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Taika Waititi (dir.), Chris Hemsworth, Natalie Portman",
	// 		imDbRating: "6.5",
	// 		imDbRatingCount: "237712",
	// 	  },
	// 	  {
	// 		id: "tt13833688",
	// 		rank: "1",
	// 		rankUpDown: "+77",
	// 		title: "The Whale",
	// 		fullTitle: "The Whale (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BZTMzY2I4MmYtOWEzMi00MTE4LWJmZjctODQ0NzYyMjk1NWMzXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Darren Aronofsky (dir.), Brendan Fraser, Sadie Sink",
	// 		imDbRating: "9.2",
	// 		imDbRatingCount: "2215",
	// 	  },
	// 	  {
	// 		id: "tt10731256",
	// 		rank: "3",
	// 		rankUpDown: "+15",
	// 		title: "Don't Worry Darling",
	// 		fullTitle: "Don't Worry Darling (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BMDMwYjY5OTItN2YyZC00Yjk3LWI4NDMtN2E5MjBhY2I3MjExXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Olivia Wilde (dir.), Florence Pugh, Olivia Wilde",
	// 		imDbRating: "3.6",
	// 		imDbRatingCount: "1993",
	// 	  },
	// 	  {
	// 		id: "tt4593060",
	// 		rank: "4",
	// 		rankUpDown: "+13",
	// 		title: "Pinocchio",
	// 		fullTitle: "Pinocchio (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BZDIyYjM3N2EtOTU1MC00YTA4LTgzNjctMTNjODcxZTZhODU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Robert Zemeckis (dir.), Joseph Gordon-Levitt, Tom Hanks",
	// 		imDbRating: "5.1",
	// 		imDbRatingCount: "18270",
	// 	  },
	// 	  {
	// 		id: "tt3704428",
	// 		rank: "5",
	// 		rankUpDown: "+3",
	// 		title: "Elvis",
	// 		fullTitle: "Elvis (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BYzMzNTJjYmMtZTkxNS00MjI4LWI3YmQtOTQ4MDZjZDJlZjQyXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Baz Luhrmann (dir.), Tom Hanks, Austin Butler",
	// 		imDbRating: "7.5",
	// 		imDbRatingCount: "113655",
	// 	  },
	// 	  {
	// 		id: "tt1745960",
	// 		rank: "6",
	// 		rankUpDown: "-3",
	// 		title: "Top Gun: Maverick",
	// 		fullTitle: "Top Gun: Maverick (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Joseph Kosinski (dir.), Tom Cruise, Jennifer Connelly",
	// 		imDbRating: "8.4",
	// 		imDbRatingCount: "363479",
	// 	  },
	// 	  {
	// 		id: "tt10954984",
	// 		rank: "7",
	// 		rankUpDown: "-6",
	// 		title: "Nope",
	// 		fullTitle: "Nope (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BNGM1MDc3ZjgtODlkOS00NmZjLWJlOTItNGQ5OGFhN2JlNjgxXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Jordan Peele (dir.), Daniel Kaluuya, Keke Palmer",
	// 		imDbRating: "7.0",
	// 		imDbRatingCount: "115407",
	// 	  },
	// 	  {
	// 		id: "tt15083184",
	// 		rank: "8",
	// 		rankUpDown: "+2",
	// 		title: "I Came By",
	// 		fullTitle: "I Came By (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BMzhjOWRmMGMtZjExNy00M2IxLWFmODQtM2I1MzBmZTcwOTgwXkEyXkFqcGdeQXVyNTg1MDQzMDU@._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Babak Anvari (dir.), Antonio Aakeel, Alicia Ambrose-Bayly",
	// 		imDbRating: "6.1",
	// 		imDbRatingCount: "13715",
	// 	  },
	// 	  {
	// 		id: "tt15325794",
	// 		rank: "9",
	// 		rankUpDown: "-2",
	// 		title: "Fall",
	// 		fullTitle: "Fall (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BNGI3MWYwYjItNzZhYi00ZWIzLTkyMzYtN2JmNjg3ODg1NTg4XkEyXkFqcGdeQXVyMTMwMDA5ODU3._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Scott Mann (dir.), Grace Caroline Currey, Virginia Gardner",
	// 		imDbRating: "6.4",
	// 		imDbRatingCount: "21030",
	// 	  },
	// 	  {
	// 		id: "tt15791034",
	// 		rank: "10",
	// 		rankUpDown: "+51",
	// 		title: "Barbarian",
	// 		fullTitle: "Barbarian (2022)",
	// 		year: "2022",
	// 		image:
	// 		  "https://m.media-amazon.com/images/M/MV5BN2M3Y2NhMGYtYjUxOS00M2UwLTlmMGUtYzY4MzFlNjZkYzY2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX128_CR0,12,128,176_AL_.jpg",
	// 		crew: "Zach Cregger (dir.), Georgina Campbell, Bill Skarsgård",
	// 		imDbRating: "7.6",
	// 		imDbRatingCount: "6996",
	// 	  },
	// 	],
	// 	title: "Action",
	//   });

	return (
        <>
            <div className="w-full h-52 md:h-40 lg:h-80 bg-gradient-to-br from-cyan-400 to-violet-700"></div>
            <div className="w-full h-52 md:h-80 bg-gradient-to-tr from-cyan-400 to-violet-700"></div>
            <section className="bg-transparent">
                <BoxOffice />
                <ComingSoon />
                <MostPopularMovies />
            </section>
        </>
	);
}

export default Section;
