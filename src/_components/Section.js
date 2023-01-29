import React from "react";
import BoxOffice from "./BoxOfficeCard";
import ComingSoon from "./ComingSoon";
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
	const comingSoon = [
        {
            "id": "tt24807190",
            "title": "BTS: Yet to Come in Cinemas",
            "fullTitle": "BTS: Yet to Come in Cinemas (2023)",
            "year": "2023",
            "releaseState": "Feb 01, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMGM4MmUwMmItM2FhZC00YWJlLTg0YjUtMjJkYmEzOGM2ZDIxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Music",
            "genreList": [
                {
                    "key": "Music",
                    "value": "Music"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "BTS",
            "starList": [
                {
                    "id": null,
                    "name": "BTS"
                }
            ]
        },
        {
            "id": "tt18079362",
            "title": "80 for Brady",
            "fullTitle": "80 for Brady (2023)",
            "year": "2023",
            "releaseState": "Feb 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzY4MzQ1MTgtNGZiYS00Y2M5LWJmODUtYzIzNWFlOGZjMjk5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama, Sport",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Rita Moreno, Sally Field, Jane Fonda, Lily Tomlin",
            "starList": [
                {
                    "id": null,
                    "name": "Rita Moreno"
                },
                {
                    "id": null,
                    "name": "Sally Field"
                },
                {
                    "id": null,
                    "name": "Jane Fonda"
                },
                {
                    "id": null,
                    "name": "Lily Tomlin"
                }
            ]
        },
        {
            "id": "tt15679400",
            "title": "Knock at the Cabin",
            "fullTitle": "Knock at the Cabin (2023)",
            "year": "2023",
            "releaseState": "Feb 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZTc4MjU0MjMtYTEwNy00YjNlLTk2MGYtMjNlNzFjMmY4MjQ0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Mystery, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Dave Bautista, Jonathan Groff, Ben Aldridge, Nikki Amuka-Bird",
            "starList": [
                {
                    "id": null,
                    "name": "Dave Bautista"
                },
                {
                    "id": null,
                    "name": "Jonathan Groff"
                },
                {
                    "id": null,
                    "name": "Ben Aldridge"
                },
                {
                    "id": null,
                    "name": "Nikki Amuka-Bird"
                }
            ]
        },
        {
            "id": "tt10473036",
            "title": "The Amazing Maurice",
            "fullTitle": "The Amazing Maurice (2022)",
            "year": "2022",
            "releaseState": "Feb 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYWQ4NjQ1NjAtNTc3Yy00ZDVlLThlNmUtMzZjY2E3N2Y4Y2JmXkEyXkFqcGdeQXVyMjMwODE4ODI@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Hugh Laurie, Emilia Clarke, David Thewlis, Himesh Patel",
            "starList": [
                {
                    "id": null,
                    "name": "Hugh Laurie"
                },
                {
                    "id": null,
                    "name": "Emilia Clarke"
                },
                {
                    "id": null,
                    "name": "David Thewlis"
                },
                {
                    "id": null,
                    "name": "Himesh Patel"
                }
            ]
        },
        {
            "id": "tt11898882",
            "title": "Bosch & Rockit",
            "fullTitle": "Bosch & Rockit (2022)",
            "year": "2022",
            "releaseState": "Feb 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BY2I1ZTZlYmQtZjZiYS00ZWIzLWJmMjEtMWY2ZmExZGE0N2NhXkEyXkFqcGdeQXVyNTEwNjM1MjE@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Isabel Lucas, Luke Hemsworth, Rasmus King, Savannah La Rain",
            "starList": [
                {
                    "id": null,
                    "name": "Isabel Lucas"
                },
                {
                    "id": null,
                    "name": "Luke Hemsworth"
                },
                {
                    "id": null,
                    "name": "Rasmus King"
                },
                {
                    "id": null,
                    "name": "Savannah La Rain"
                }
            ]
        },
        {
            "id": "tt15830702",
            "title": "Sword Art Online the Movie: Progressive - Scherzo of Deep Night",
            "fullTitle": "Sword Art Online the Movie: Progressive - Scherzo of Deep Night (2022)",
            "year": "2022",
            "releaseState": "Feb 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzA4YWVkMmEtMGEwOS00ZGYxLTljODAtNzk4ZDA1MmQxN2Y5XkEyXkFqcGdeQXVyMTEwMjgyMzIz._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Haruka Tomatsu, Yoshitsugu Matsuoka, Shiori Izawa, Kaede Hondo",
            "starList": [
                {
                    "id": null,
                    "name": "Haruka Tomatsu"
                },
                {
                    "id": null,
                    "name": "Yoshitsugu Matsuoka"
                },
                {
                    "id": null,
                    "name": "Shiori Izawa"
                },
                {
                    "id": null,
                    "name": "Kaede Hondo"
                }
            ]
        },
        {
            "id": "tt2478478",
            "title": "Dreams of Darkness",
            "fullTitle": "Dreams of Darkness (2023)",
            "year": "2023",
            "releaseState": "Feb 04, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzVhZGRjZGItMDMyZS00MWRjLWFiOTAtY2ZlMzI1YTc1ZWFmXkEyXkFqcGdeQXVyOTA5MzA0NDI@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Miles Jonn-Dalton, Pia Bertucci, Renee Domenz, Libby Amato",
            "starList": [
                {
                    "id": null,
                    "name": "Miles Jonn-Dalton"
                },
                {
                    "id": null,
                    "name": "Pia Bertucci"
                },
                {
                    "id": null,
                    "name": "Renee Domenz"
                },
                {
                    "id": null,
                    "name": "Libby Amato"
                }
            ]
        },
        {
            "id": "tt23804728",
            "title": "He Killed in Ecstasy",
            "fullTitle": "He Killed in Ecstasy (2023)",
            "year": "2023",
            "releaseState": "Feb 04, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMmZjMzk2ODUtM2U1Yi00NDY3LTkzYzAtYjU5ZWVhMWQ4MjEzXkEyXkFqcGdeQXVyOTA5MzA0NDI@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Antonio Mayans, Ellen Wing, Miles Jonn-Dalton, Rinaldo Talamonti",
            "starList": [
                {
                    "id": null,
                    "name": "Antonio Mayans"
                },
                {
                    "id": null,
                    "name": "Ellen Wing"
                },
                {
                    "id": null,
                    "name": "Miles Jonn-Dalton"
                },
                {
                    "id": null,
                    "name": "Rinaldo Talamonti"
                }
            ]
        },
        {
            "id": "tt23871506",
            "title": "Facing the Laughter: Minnie Pearl",
            "fullTitle": "Facing the Laughter: Minnie Pearl (2023)",
            "year": "2023",
            "releaseState": "Feb 06, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOWYyY2YwNTktMDhlNS00MWY5LWFlMzctNzUzMGE3ZWQxMTFiXkEyXkFqcGdeQXVyMTM1NTcxNzYw._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Documentary",
            "genreList": [
                {
                    "key": "Documentary",
                    "value": "Documentary"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Reba McEntire, Paul Reubens, Barbi Benton, Dwight Yoakam",
            "starList": [
                {
                    "id": null,
                    "name": "Reba McEntire"
                },
                {
                    "id": null,
                    "name": "Paul Reubens"
                },
                {
                    "id": null,
                    "name": "Barbi Benton"
                },
                {
                    "id": null,
                    "name": "Dwight Yoakam"
                }
            ]
        },
        {
            "id": "tt16280138",
            "title": "Magic Mike's Last Dance",
            "fullTitle": "Magic Mike's Last Dance (2023)",
            "year": "2023",
            "releaseState": "Feb 10, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMTg4ZWZhODQtNWVhNC00NjA1LWJhZjgtZTFkY2JmNWJlYzU0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Salma Hayek, Channing Tatum, Caitlin Gerard, Nancy Carroll",
            "starList": [
                {
                    "id": null,
                    "name": "Salma Hayek"
                },
                {
                    "id": null,
                    "name": "Channing Tatum"
                },
                {
                    "id": null,
                    "name": "Caitlin Gerard"
                },
                {
                    "id": null,
                    "name": "Nancy Carroll"
                }
            ]
        },
        {
            "id": "tt11718516",
            "title": "Huesera: The Bone Woman",
            "fullTitle": "Huesera: The Bone Woman (2022)",
            "year": "2022",
            "releaseState": "Feb 10, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMTkxOWYxODItZmJhYi00NjllLWIzMWItMWZiYTQ3Mzc2MjY5XkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Horror",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Alfonso Dosal, Mayra Batalla, Mercedes Hernández, Natalia Solián",
            "starList": [
                {
                    "id": null,
                    "name": "Alfonso Dosal"
                },
                {
                    "id": null,
                    "name": "Mayra Batalla"
                },
                {
                    "id": null,
                    "name": "Mercedes Hernández"
                },
                {
                    "id": null,
                    "name": "Natalia Solián"
                }
            ]
        },
        {
            "id": "tt14905554",
            "title": "She Came from the Woods",
            "fullTitle": "She Came from the Woods (2022)",
            "year": "2022",
            "releaseState": "Feb 10, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZTQ1NmFhMTgtMGE1Ny00MzY5LWIwZTEtZDEwYzYzMDgwNTY1XkEyXkFqcGdeQXVyMjY3ODc2MTg@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Horror",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Cara Buono, Clare Foley, Spencer List, William Sadler",
            "starList": [
                {
                    "id": null,
                    "name": "Cara Buono"
                },
                {
                    "id": null,
                    "name": "Clare Foley"
                },
                {
                    "id": null,
                    "name": "Spencer List"
                },
                {
                    "id": null,
                    "name": "William Sadler"
                }
            ]
        },
        {
            "id": "tt6722802",
            "title": "Marlowe",
            "fullTitle": "Marlowe (2022)",
            "year": "2022",
            "releaseState": "Feb 15, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BM2EzNWEwNmYtMGE2NC00Y2NiLTk5NGEtZmRlZDE0Y2M0Yzg5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Crime, Mystery, Thriller",
            "genreList": [
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Liam Neeson, Diane Kruger, Jessica Lange, Adewale Akinnuoye-Agbaje",
            "starList": [
                {
                    "id": null,
                    "name": "Liam Neeson"
                },
                {
                    "id": null,
                    "name": "Diane Kruger"
                },
                {
                    "id": null,
                    "name": "Jessica Lange"
                },
                {
                    "id": null,
                    "name": "Adewale Akinnuoye-Agbaje"
                }
            ]
        },
        {
            "id": "tt10954600",
            "title": "Ant-Man and the Wasp: Quantumania",
            "fullTitle": "Ant-Man and the Wasp: Quantumania (2023)",
            "year": "2023",
            "releaseState": "Feb 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDY0Mjg1OTEtMDEyNS00OWM0LTg0YTYtNjA3YzY2NGRjYWJiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Paul Rudd, Evangeline Lilly, Jonathan Majors, Kathryn Newton",
            "starList": [
                {
                    "id": null,
                    "name": "Paul Rudd"
                },
                {
                    "id": null,
                    "name": "Evangeline Lilly"
                },
                {
                    "id": null,
                    "name": "Jonathan Majors"
                },
                {
                    "id": null,
                    "name": "Kathryn Newton"
                }
            ]
        },
        {
            "id": "tt11952084",
            "title": "Who Are You People",
            "fullTitle": "Who Are You People (2023)",
            "year": "2023",
            "releaseState": "Feb 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzBjNjU0OGQtZGJlMS00MDIwLWIyMDUtN2JiYmYzMDIyYWM5XkEyXkFqcGdeQXVyMTU5MzU3MDk@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Alyssa Milano, Devon Sawa, Ema Horvath, Yeardley Smith",
            "starList": [
                {
                    "id": null,
                    "name": "Alyssa Milano"
                },
                {
                    "id": null,
                    "name": "Devon Sawa"
                },
                {
                    "id": null,
                    "name": "Ema Horvath"
                },
                {
                    "id": null,
                    "name": "Yeardley Smith"
                }
            ]
        },
        {
            "id": "tt26345845",
            "title": "Devil's Peak",
            "fullTitle": "Devil's Peak (2023)",
            "year": "2023",
            "releaseState": "Feb 17, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Crime, Thriller",
            "genreList": [
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jackie Earle Haley, Hopper Penn, Billy Bob Thornton, Robin Wright",
            "starList": [
                {
                    "id": null,
                    "name": "Jackie Earle Haley"
                },
                {
                    "id": null,
                    "name": "Hopper Penn"
                },
                {
                    "id": null,
                    "name": "Billy Bob Thornton"
                },
                {
                    "id": null,
                    "name": "Robin Wright"
                }
            ]
        },
        {
            "id": "tt25391092",
            "title": "Welcome to Valentine",
            "fullTitle": "Welcome to Valentine (2023)",
            "year": "2023",
            "releaseState": "Feb 18, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Romance",
            "genreList": [
                {
                    "key": "Romance",
                    "value": "Romance"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Kathryn Davis, Markian Tarasiuk, Sophie Bastelle, Baeyen Hoffman",
            "starList": [
                {
                    "id": null,
                    "name": "Kathryn Davis"
                },
                {
                    "id": null,
                    "name": "Markian Tarasiuk"
                },
                {
                    "id": null,
                    "name": "Sophie Bastelle"
                },
                {
                    "id": null,
                    "name": "Baeyen Hoffman"
                }
            ]
        },
        {
            "id": "tt14209916",
            "title": "Cocaine Bear",
            "fullTitle": "Cocaine Bear (2023)",
            "year": "2023",
            "releaseState": "Feb 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzlhY2NiNWItYTAyNS00YjhmLTgxNzgtZWNjMjQ4YmMyYmM4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Thriller",
            "genreList": [
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Ray Liotta, Keri Russell, Margo Martindale, Matthew Rhys",
            "starList": [
                {
                    "id": null,
                    "name": "Ray Liotta"
                },
                {
                    "id": null,
                    "name": "Keri Russell"
                },
                {
                    "id": null,
                    "name": "Margo Martindale"
                },
                {
                    "id": null,
                    "name": "Matthew Rhys"
                }
            ]
        },
        {
            "id": "tt10098448",
            "title": "Jesus Revolution",
            "fullTitle": "Jesus Revolution (2023)",
            "year": "2023",
            "releaseState": "Feb 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMDkzM2I5NmEtMTE4My00NWVlLWJmZjctYWM0YTE2MzhkNjc3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Kimberly Williams-Paisley, Jonathan Roumie, Kelsey Grammer, Joel Courtney",
            "starList": [
                {
                    "id": null,
                    "name": "Kimberly Williams-Paisley"
                },
                {
                    "id": null,
                    "name": "Jonathan Roumie"
                },
                {
                    "id": null,
                    "name": "Kelsey Grammer"
                },
                {
                    "id": null,
                    "name": "Joel Courtney"
                }
            ]
        },
        {
            "id": "tt23177868",
            "title": "Mummies",
            "fullTitle": "Mummies (2023)",
            "year": "2023",
            "releaseState": "Feb 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZWU0ZjJiOGItZDUwNy00MDE1LTk2ZjEtY2YwMzQxZGJjYjFjXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Comedy, Family",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Sean Bean, Joe Thomas, Eleanor Tomlinson, Santiago Winder",
            "starList": [
                {
                    "id": null,
                    "name": "Sean Bean"
                },
                {
                    "id": null,
                    "name": "Joe Thomas"
                },
                {
                    "id": null,
                    "name": "Eleanor Tomlinson"
                },
                {
                    "id": null,
                    "name": "Santiago Winder"
                }
            ]
        },
        {
            "id": "tt24850716",
            "title": "Quackers",
            "fullTitle": "Quackers (2023)",
            "year": "2023",
            "releaseState": "Feb 24, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Stella Stevens, Kimiko Glenn, Ali Wong, Ted Raimi",
            "starList": [
                {
                    "id": null,
                    "name": "Stella Stevens"
                },
                {
                    "id": null,
                    "name": "Kimiko Glenn"
                },
                {
                    "id": null,
                    "name": "Ali Wong"
                },
                {
                    "id": null,
                    "name": "Ted Raimi"
                }
            ]
        },
        {
            "id": "tt21030012",
            "title": "Primary Position",
            "fullTitle": "Primary Position (2023)",
            "year": "2023",
            "releaseState": "Mar 01, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZjMzZTc0MDAtMGNiNy00M2MxLTkyNjMtODVhMTYyMjZhYmFiXkEyXkFqcGdeQXVyMTUzNjE3OTYx._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Drama, War",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "War",
                    "value": "War"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Robert Amparan, Omar Gooding, Kris D. Lofton, Antwon Tanner",
            "starList": [
                {
                    "id": null,
                    "name": "Robert Amparan"
                },
                {
                    "id": null,
                    "name": "Omar Gooding"
                },
                {
                    "id": null,
                    "name": "Kris D. Lofton"
                },
                {
                    "id": null,
                    "name": "Antwon Tanner"
                }
            ]
        },
        {
            "id": "tt11145118",
            "title": "Creed III",
            "fullTitle": "Creed III (2023)",
            "year": "2023",
            "releaseState": "Mar 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDNlZmRkM2UtZTBiYy00YTlhLThkZmEtM2YwY2FkMTUwZjViXkEyXkFqcGdeQXVyMTMzNDE5NDM2._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Sport",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jonathan Majors, Michael B. Jordan, Tessa Thompson, Wood Harris",
            "starList": [
                {
                    "id": null,
                    "name": "Jonathan Majors"
                },
                {
                    "id": null,
                    "name": "Michael B. Jordan"
                },
                {
                    "id": null,
                    "name": "Tessa Thompson"
                },
                {
                    "id": null,
                    "name": "Wood Harris"
                }
            ]
        },
        {
            "id": "tt19363554",
            "title": "Sound of Silence",
            "fullTitle": "Sound of Silence (2023)",
            "year": "2023",
            "releaseState": "Mar 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMWFjYzI0MzAtMzQwNS00M2E3LWI2YzUtNTg4ZDJmZTBmNDk3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Daniele De Martino, Rocco Marazzita, Lucia Caporaso, Penelope Sangiorgi",
            "starList": [
                {
                    "id": null,
                    "name": "Daniele De Martino"
                },
                {
                    "id": null,
                    "name": "Rocco Marazzita"
                },
                {
                    "id": null,
                    "name": "Lucia Caporaso"
                },
                {
                    "id": null,
                    "name": "Penelope Sangiorgi"
                }
            ]
        },
        {
            "id": "tt15213120",
            "title": "No Family Without Blood",
            "fullTitle": "No Family Without Blood (2023)",
            "year": "2023",
            "releaseState": "Mar 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYjgzNjMzNDAtNjRkZC00OTZlLWJjNjctMGUzYWRjY2E4Y2Q4XkEyXkFqcGdeQXVyMTI0Njk2MTU5._V1_Ratio0.9459_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Adventure, Mystery, Thriller",
            "genreList": [
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Philip Michael Thomas, Chance the Rapper, Aaron D. Spears, Michael Emery",
            "starList": [
                {
                    "id": null,
                    "name": "Philip Michael Thomas"
                },
                {
                    "id": null,
                    "name": "Chance the Rapper"
                },
                {
                    "id": null,
                    "name": "Aaron D. Spears"
                },
                {
                    "id": null,
                    "name": "Michael Emery"
                }
            ]
        },
        {
            "id": "tt20848830",
            "title": "Hunt Her, Kill Her",
            "fullTitle": "Hunt Her, Kill Her (2022)",
            "year": "2022",
            "releaseState": "Mar 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNTVmNWZkODMtOGZhNC00ZGI0LTkyNmMtYjgxNDhiOTBhNGY0XkEyXkFqcGdeQXVyODcyNDIxMDE@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Natalie Terrazzino, JC Oakley III, Larry Bunton, Philip Zimny",
            "starList": [
                {
                    "id": null,
                    "name": "Natalie Terrazzino"
                },
                {
                    "id": null,
                    "name": "JC Oakley III"
                },
                {
                    "id": null,
                    "name": "Larry Bunton"
                },
                {
                    "id": null,
                    "name": "Philip Zimny"
                }
            ]
        },
        {
            "id": "tt15548424",
            "title": "Helvellyn Edge",
            "fullTitle": "Helvellyn Edge (2023)",
            "year": "2023",
            "releaseState": "Mar 06, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Fantasy",
            "genreList": [
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Ever Anderson, Amita Suman, Sam Strike, David Iacono",
            "starList": [
                {
                    "id": null,
                    "name": "Ever Anderson"
                },
                {
                    "id": null,
                    "name": "Amita Suman"
                },
                {
                    "id": null,
                    "name": "Sam Strike"
                },
                {
                    "id": null,
                    "name": "David Iacono"
                }
            ]
        },
        {
            "id": "tt17663992",
            "title": "Scream VI",
            "fullTitle": "Scream VI (2023)",
            "year": "2023",
            "releaseState": "Mar 10, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYTQ5OTkxNGEtZjZkMS00ZjBlLWE2OWYtM2ZkOTU3MjRlNzAxXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_Ratio0.8108_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Mystery, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Melissa Barrera, Jenna Ortega, Courteney Cox, Jasmin Savoy Brown",
            "starList": [
                {
                    "id": null,
                    "name": "Melissa Barrera"
                },
                {
                    "id": null,
                    "name": "Jenna Ortega"
                },
                {
                    "id": null,
                    "name": "Courteney Cox"
                },
                {
                    "id": null,
                    "name": "Jasmin Savoy Brown"
                }
            ]
        },
        {
            "id": "tt15339570",
            "title": "Champions",
            "fullTitle": "Champions (2023)",
            "year": "2023",
            "releaseState": "Mar 10, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMjY5OTljZjEtZjE4OC00OTNjLTkwMzItN2Q1NmRmYjMwY2U5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio2.4054_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama, Sport",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Woody Harrelson, Ernie Hudson, Cheech Marin, Matt Cook",
            "starList": [
                {
                    "id": null,
                    "name": "Woody Harrelson"
                },
                {
                    "id": null,
                    "name": "Ernie Hudson"
                },
                {
                    "id": null,
                    "name": "Cheech Marin"
                },
                {
                    "id": null,
                    "name": "Matt Cook"
                }
            ]
        },
        {
            "id": "tt8010064",
            "title": "Bunker",
            "fullTitle": "Bunker (2022)",
            "year": "2022",
            "releaseState": "Mar 10, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOGI2NWMyMmYtNmFiNS00NmYwLTlmZWEtNTI5NWIxZTAyMjcxXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Roger Clark, Kayla Radomski, Luke Baines, Sean Cullen",
            "starList": [
                {
                    "id": null,
                    "name": "Roger Clark"
                },
                {
                    "id": null,
                    "name": "Kayla Radomski"
                },
                {
                    "id": null,
                    "name": "Luke Baines"
                },
                {
                    "id": null,
                    "name": "Sean Cullen"
                }
            ]
        },
        {
            "id": "tt14781036",
            "title": "Inside",
            "fullTitle": "Inside (2023)",
            "year": "2023",
            "releaseState": "Mar 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOWU0MjdiMmQtMTQ2OC00YzY4LWEzN2ItOTE4NjIwNmJjMWZmXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Willem Dafoe, Gene Bervoets, Eliza Stuyck, Josia Krug",
            "starList": [
                {
                    "id": null,
                    "name": "Willem Dafoe"
                },
                {
                    "id": null,
                    "name": "Gene Bervoets"
                },
                {
                    "id": null,
                    "name": "Eliza Stuyck"
                },
                {
                    "id": null,
                    "name": "Josia Krug"
                }
            ]
        },
        {
            "id": "tt12261776",
            "title": "65",
            "fullTitle": "65 (2023)",
            "year": "2023",
            "releaseState": "Mar 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYzFhM2M1MDUtNDhmNC00YzEzLThiMzctYWYxZTc0MGJhNWYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.8108_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Adventure, Drama, Sci-Fi",
            "genreList": [
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sci-Fi",
                    "value": "Sci-Fi"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Adam Driver, Ariana Greenblatt, Chloe Coleman, Nika King",
            "starList": [
                {
                    "id": null,
                    "name": "Adam Driver"
                },
                {
                    "id": null,
                    "name": "Ariana Greenblatt"
                },
                {
                    "id": null,
                    "name": "Chloe Coleman"
                },
                {
                    "id": null,
                    "name": "Nika King"
                }
            ]
        },
        {
            "id": "tt10151854",
            "title": "Shazam! Fury of the Gods",
            "fullTitle": "Shazam! Fury of the Gods (2023)",
            "year": "2023",
            "releaseState": "Mar 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZTJkMTBjZWEtMzhhMy00MjlkLTkyNTYtNGZjNGM4Mjk5YTEyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.8108_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Helen Mirren, Grace Caroline Currey, Zachary Levi, Lucy Liu",
            "starList": [
                {
                    "id": null,
                    "name": "Helen Mirren"
                },
                {
                    "id": null,
                    "name": "Grace Caroline Currey"
                },
                {
                    "id": null,
                    "name": "Zachary Levi"
                },
                {
                    "id": null,
                    "name": "Lucy Liu"
                }
            ]
        },
        {
            "id": "tt6722400",
            "title": "Fast Charlie",
            "fullTitle": "Fast Charlie (2023)",
            "year": "2023",
            "releaseState": "Mar 17, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Morena Baccarin, Pierce Brosnan, James Caan, Brennan Keel Cook",
            "starList": [
                {
                    "id": null,
                    "name": "Morena Baccarin"
                },
                {
                    "id": null,
                    "name": "Pierce Brosnan"
                },
                {
                    "id": null,
                    "name": "James Caan"
                },
                {
                    "id": null,
                    "name": "Brennan Keel Cook"
                }
            ]
        },
        {
            "id": "tt6615224",
            "title": "A Snowy Day in Oakland",
            "fullTitle": "A Snowy Day in Oakland (2023)",
            "year": "2023",
            "releaseState": "Mar 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNmQ1ZDU1MjAtZjU0My00YzZjLTkzODQtODgyZWZlMDRmOWJjXkEyXkFqcGdeQXVyMTE1MjE4Mw@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Nicole Ari Parker, Evan Ross, Arden Myrin, Roger Cross",
            "starList": [
                {
                    "id": null,
                    "name": "Nicole Ari Parker"
                },
                {
                    "id": null,
                    "name": "Evan Ross"
                },
                {
                    "id": null,
                    "name": "Arden Myrin"
                },
                {
                    "id": null,
                    "name": "Roger Cross"
                }
            ]
        },
        {
            "id": "tt10366206",
            "title": "John Wick: Chapter 4",
            "fullTitle": "John Wick: Chapter 4 (2023)",
            "year": "2023",
            "releaseState": "Mar 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Crime, Thriller",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Keanu Reeves, Donnie Yen, Bill Skarsgård, Laurence Fishburne",
            "starList": [
                {
                    "id": null,
                    "name": "Keanu Reeves"
                },
                {
                    "id": null,
                    "name": "Donnie Yen"
                },
                {
                    "id": null,
                    "name": "Bill Skarsgård"
                },
                {
                    "id": null,
                    "name": "Laurence Fishburne"
                }
            ]
        },
        {
            "id": "tt14153080",
            "title": "A Good Person",
            "fullTitle": "A Good Person (2023)",
            "year": "2023",
            "releaseState": "Mar 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNjhhM2U4OGQtZTAxMi00OWJiLWIxZWQtYjQ1M2RiYmQxMjE1XkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Florence Pugh, Morgan Freeman, Celeste O'Connor, Molly Shannon",
            "starList": [
                {
                    "id": null,
                    "name": "Florence Pugh"
                },
                {
                    "id": null,
                    "name": "Morgan Freeman"
                },
                {
                    "id": null,
                    "name": "Celeste O'Connor"
                },
                {
                    "id": null,
                    "name": "Molly Shannon"
                }
            ]
        },
        {
            "id": "tt10294634",
            "title": "Wildfire: The Legend of the Cherokee Ghost Horse",
            "fullTitle": "Wildfire: The Legend of the Cherokee Ghost Horse (2023)",
            "year": "2023",
            "releaseState": "Mar 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNmQxN2Q1MmEtMmJmZC00Y2JkLWE4YzQtNWUwNTI5ZjZhZGQ2XkEyXkFqcGdeQXVyMjgzODgyNQ@@._V1_Ratio1.0000_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Family",
            "genreList": [
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Anne Heche, Mo Brings Plenty, Adrian Paul, Robert Rusler",
            "starList": [
                {
                    "id": null,
                    "name": "Anne Heche"
                },
                {
                    "id": null,
                    "name": "Mo Brings Plenty"
                },
                {
                    "id": null,
                    "name": "Adrian Paul"
                },
                {
                    "id": null,
                    "name": "Robert Rusler"
                }
            ]
        },
        {
            "id": "tt22017230",
            "title": "Soft",
            "fullTitle": "Soft (2022)",
            "year": "2022",
            "releaseState": "Mar 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZmExYmFiOTktYjUxZi00MDhkLTlhYTctMWI3MWVjYjZjZTI4XkEyXkFqcGdeQXVyMTEwMTQ0Njk3._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Matteus Lunot, Harlow Joy, Zion Matheson, Miyoko Anderson",
            "starList": [
                {
                    "id": null,
                    "name": "Matteus Lunot"
                },
                {
                    "id": null,
                    "name": "Harlow Joy"
                },
                {
                    "id": null,
                    "name": "Zion Matheson"
                },
                {
                    "id": null,
                    "name": "Miyoko Anderson"
                }
            ]
        },
        {
            "id": "tt24079736",
            "title": "Nam June Paik: Moon Is the Oldest TV",
            "fullTitle": "Nam June Paik: Moon Is the Oldest TV (2023)",
            "year": "2023",
            "releaseState": "Mar 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYWIyYmRjZmYtNDUwNS00NjkzLWE0N2EtZTQyYWNlODY4YTgzXkEyXkFqcGdeQXVyMTU0ODMwNjg2._V1_Ratio1.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Documentary",
            "genreList": [
                {
                    "key": "Documentary",
                    "value": "Documentary"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Nam June Paik",
            "starList": [
                {
                    "id": null,
                    "name": "Nam June Paik"
                }
            ]
        },
        {
            "id": "tt21871988",
            "title": "The Bogman",
            "fullTitle": "The Bogman (2023)",
            "year": "2023",
            "releaseState": "Mar 25, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BY2MwMDUyMjgtN2FlMS00NDZlLTlmOGYtMzE2YTFjZTcwMmRkXkEyXkFqcGdeQXVyMTUzNDEyNzE2._V1_Ratio1.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Mike Myers, Frankie Thomas, Mitch Laing, Christian Gross",
            "starList": [
                {
                    "id": null,
                    "name": "Mike Myers"
                },
                {
                    "id": null,
                    "name": "Frankie Thomas"
                },
                {
                    "id": null,
                    "name": "Mitch Laing"
                },
                {
                    "id": null,
                    "name": "Christian Gross"
                }
            ]
        },
        {
            "id": "tt2906216",
            "title": "Dungeons & Dragons: Honor Among Thieves",
            "fullTitle": "Dungeons & Dragons: Honor Among Thieves (2023)",
            "year": "2023",
            "releaseState": "Mar 31, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZjAyMGMwYTEtNDk4ZS00YmY0LThhZjUtOWI4ZjFmZmU4N2I3XkEyXkFqcGdeQXVyMTEyNzQ1MTk0._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Fantasy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith",
            "starList": [
                {
                    "id": null,
                    "name": "Chris Pine"
                },
                {
                    "id": null,
                    "name": "Michelle Rodriguez"
                },
                {
                    "id": null,
                    "name": "Regé-Jean Page"
                },
                {
                    "id": null,
                    "name": "Justice Smith"
                }
            ]
        },
        {
            "id": "tt14555174",
            "title": "Assassin",
            "fullTitle": "Assassin (2023)",
            "year": "2023",
            "releaseState": "Mar 31, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNDNiMDJjZjUtMDg1Zi00MjU4LThiZWEtMmNmYTZkNmU1NjZiXkEyXkFqcGdeQXVyNzUwMDA5NDE@._V1_Ratio1.5946_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Crime, Thriller",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Bruce Willis, Andy Allo, Dominic Purcell, Mustafa Shakir",
            "starList": [
                {
                    "id": null,
                    "name": "Bruce Willis"
                },
                {
                    "id": null,
                    "name": "Andy Allo"
                },
                {
                    "id": null,
                    "name": "Dominic Purcell"
                },
                {
                    "id": null,
                    "name": "Mustafa Shakir"
                }
            ]
        },
        {
            "id": "tt12311970",
            "title": "A Walking Miracle",
            "fullTitle": "A Walking Miracle (2023)",
            "year": "2023",
            "releaseState": "Apr 04, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BY2Y3MDFiZjEtZDIxMS00ZjU5LTkwYjItM2FkMmRlNjcwZWZhXkEyXkFqcGdeQXVyNjgyMTA4NzQ@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Johnny Valentine, William Baldwin, Denise Richards, Stephen Baldwin",
            "starList": [
                {
                    "id": null,
                    "name": "Johnny Valentine"
                },
                {
                    "id": null,
                    "name": "William Baldwin"
                },
                {
                    "id": null,
                    "name": "Denise Richards"
                },
                {
                    "id": null,
                    "name": "Stephen Baldwin"
                }
            ]
        },
        {
            "id": "tt13929998",
            "title": "On a Wing and a Prayer",
            "fullTitle": "On a Wing and a Prayer (2023)",
            "year": "2023",
            "releaseState": "Apr 05, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZGM3ZmYwMDctMDM1Ni00ZjdjLTg1YjgtM2I0NWQ1ZDY4YzMzXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_Ratio0.7297_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Heather Graham, Dennis Quaid, Anna Enger Ritch, Jesse Metcalfe",
            "starList": [
                {
                    "id": null,
                    "name": "Heather Graham"
                },
                {
                    "id": null,
                    "name": "Dennis Quaid"
                },
                {
                    "id": null,
                    "name": "Anna Enger Ritch"
                },
                {
                    "id": null,
                    "name": "Jesse Metcalfe"
                }
            ]
        },
        {
            "id": "tt6718170",
            "title": "The Super Mario Bros. Movie",
            "fullTitle": "The Super Mario Bros. Movie (2023)",
            "year": "2023",
            "releaseState": "Apr 07, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BN2IwMDllYjItZWZhMy00MTk3LWE5ZjUtM2ZlMWQxODM4N2I4XkEyXkFqcGdeQXVyMTUxNTU1NzEz._V1_Ratio0.7568_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black",
            "starList": [
                {
                    "id": null,
                    "name": "Chris Pratt"
                },
                {
                    "id": null,
                    "name": "Anya Taylor-Joy"
                },
                {
                    "id": null,
                    "name": "Charlie Day"
                },
                {
                    "id": null,
                    "name": "Jack Black"
                }
            ]
        },
        {
            "id": "tt12758486",
            "title": "Chevalier",
            "fullTitle": "Chevalier (2022)",
            "year": "2022",
            "releaseState": "Apr 07, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNDU5OTBhNzEtYjllNS00Y2RkLWEzYTgtOTRmMGZhOTYyYmMwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography, Drama, History",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "History",
                    "value": "History"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Lucy Boynton, Samara Weaving, Minnie Driver, Marton Csokas",
            "starList": [
                {
                    "id": null,
                    "name": "Lucy Boynton"
                },
                {
                    "id": null,
                    "name": "Samara Weaving"
                },
                {
                    "id": null,
                    "name": "Minnie Driver"
                },
                {
                    "id": null,
                    "name": "Marton Csokas"
                }
            ]
        },
        {
            "id": "tt18550182",
            "title": "R.M.N.",
            "fullTitle": "R.M.N. (2022)",
            "year": "2022",
            "releaseState": "Apr 07, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BN2VkNjg0NjUtNTI5OC00NmQ2LThhMzgtYjA4MGMxYzQ2MGUzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_Ratio0.7297_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Marin Grigore, Judith State, Macrina Barladeanu, Orsolya Moldován",
            "starList": [
                {
                    "id": null,
                    "name": "Marin Grigore"
                },
                {
                    "id": null,
                    "name": "Judith State"
                },
                {
                    "id": null,
                    "name": "Macrina Barladeanu"
                },
                {
                    "id": null,
                    "name": "Orsolya Moldován"
                }
            ]
        },
        {
            "id": "tt13375076",
            "title": "The Pope's Exorcist",
            "fullTitle": "The Pope's Exorcist (2023)",
            "year": "2023",
            "releaseState": "Apr 07, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Russell Crowe, Franco Nero, Alex Essoe, Daniel Zovatto",
            "starList": [
                {
                    "id": null,
                    "name": "Russell Crowe"
                },
                {
                    "id": null,
                    "name": "Franco Nero"
                },
                {
                    "id": null,
                    "name": "Alex Essoe"
                },
                {
                    "id": null,
                    "name": "Daniel Zovatto"
                }
            ]
        },
        {
            "id": "tt2316548",
            "title": "Beautiful Disaster",
            "fullTitle": "Beautiful Disaster (2023)",
            "year": "2023",
            "releaseState": "Apr 12, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMjc2NjkzMGUtODUyMi00MTcyLWIwNzgtYzBiNjY1MTMwOGQ5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Romance",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Romance",
                    "value": "Romance"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Virginia Gardner, Autumn Reeser, Brian Austin Green, Dylan Sprouse",
            "starList": [
                {
                    "id": null,
                    "name": "Virginia Gardner"
                },
                {
                    "id": null,
                    "name": "Autumn Reeser"
                },
                {
                    "id": null,
                    "name": "Brian Austin Green"
                },
                {
                    "id": null,
                    "name": "Dylan Sprouse"
                }
            ]
        },
        {
            "id": "tt11358390",
            "title": "Renfield",
            "fullTitle": "Renfield (2023)",
            "year": "2023",
            "releaseState": "Apr 14, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNDIwYjVjMDMtOGYxMy00ZTRiLWE0YzktMjIwYmNhOGE4NGQ4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Fantasy, Horror",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Nicolas Cage, Nicholas Hoult, Ben Schwartz, Awkwafina",
            "starList": [
                {
                    "id": null,
                    "name": "Nicolas Cage"
                },
                {
                    "id": null,
                    "name": "Nicholas Hoult"
                },
                {
                    "id": null,
                    "name": "Ben Schwartz"
                },
                {
                    "id": null,
                    "name": "Awkwafina"
                }
            ]
        },
        {
            "id": "tt16428256",
            "title": "Suzume no tojimari",
            "fullTitle": "Suzume no tojimari (2022)",
            "year": "2022",
            "releaseState": "Apr 14, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODhhY2M5NjEtZTc0OC00MDE5LWJiMWQtYTZkMTMwMTA0NmZjXkEyXkFqcGdeQXVyMTEwMjgyMzIz._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Action, Adventure",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Nanoka Hara, Hokuto Matsumura, Eri Fukatsu, Kôshirô Matsumoto",
            "starList": [
                {
                    "id": null,
                    "name": "Nanoka Hara"
                },
                {
                    "id": null,
                    "name": "Hokuto Matsumura"
                },
                {
                    "id": null,
                    "name": "Eri Fukatsu"
                },
                {
                    "id": null,
                    "name": "Kôshirô Matsumoto"
                }
            ]
        },
        {
            "id": "tt2365971",
            "title": "Sweetwater",
            "fullTitle": "Sweetwater (2023)",
            "year": "2023",
            "releaseState": "Apr 14, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Sport",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Cary Elwes, Eric Roberts, Richard Dreyfuss, Kevin Pollak",
            "starList": [
                {
                    "id": null,
                    "name": "Cary Elwes"
                },
                {
                    "id": null,
                    "name": "Eric Roberts"
                },
                {
                    "id": null,
                    "name": "Richard Dreyfuss"
                },
                {
                    "id": null,
                    "name": "Kevin Pollak"
                }
            ]
        },
        {
            "id": "tt6048442",
            "title": "Back on the Strip",
            "fullTitle": "Back on the Strip (2023)",
            "year": "2023",
            "releaseState": "Apr 14, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNmVkNDFiYmMtNjE4Mi00MWI0LTlkZmQtOTgxMjUzYTJlOWNhXkEyXkFqcGdeQXVyMjU2MjcxOQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Colleen Camp, Kevin Hart, Wesley Snipes, Tiffany Haddish",
            "starList": [
                {
                    "id": null,
                    "name": "Colleen Camp"
                },
                {
                    "id": null,
                    "name": "Kevin Hart"
                },
                {
                    "id": null,
                    "name": "Wesley Snipes"
                },
                {
                    "id": null,
                    "name": "Tiffany Haddish"
                }
            ]
        },
        {
            "id": "tt8277246",
            "title": "His Only Son",
            "fullTitle": "His Only Son (2023)",
            "year": "2023",
            "releaseState": "Apr 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzVkMTEzNTQtNWU3MC00NjM4LWIyODItOGFiMGQ3YmEyNmM3XkEyXkFqcGdeQXVyMjM2ODUxNjc@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, History",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "History",
                    "value": "History"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Sara Seyed, Nicolas Mouawad, Scot Cooper, Luis Fernandez-Gil",
            "starList": [
                {
                    "id": null,
                    "name": "Sara Seyed"
                },
                {
                    "id": null,
                    "name": "Nicolas Mouawad"
                },
                {
                    "id": null,
                    "name": "Scot Cooper"
                },
                {
                    "id": null,
                    "name": "Luis Fernandez-Gil"
                }
            ]
        },
        {
            "id": "tt13521006",
            "title": "Beau Is Afraid",
            "fullTitle": "Beau Is Afraid (2023)",
            "year": "2023",
            "releaseState": "Apr 21, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYTNhNWRmMDctYzE4OS00MzczLWJkODgtNzYxZTQxM2Y1YmM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama, Horror",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Joaquin Phoenix, Parker Posey, Amy Ryan, Richard Kind",
            "starList": [
                {
                    "id": null,
                    "name": "Joaquin Phoenix"
                },
                {
                    "id": null,
                    "name": "Parker Posey"
                },
                {
                    "id": null,
                    "name": "Amy Ryan"
                },
                {
                    "id": null,
                    "name": "Richard Kind"
                }
            ]
        },
        {
            "id": "tt13345606",
            "title": "Evil Dead Rise",
            "fullTitle": "Evil Dead Rise (2023)",
            "year": "2023",
            "releaseState": "Apr 21, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Alyssa Sutherland, Lily Sullivan, Morgan Davies, Nell Fisher",
            "starList": [
                {
                    "id": null,
                    "name": "Alyssa Sutherland"
                },
                {
                    "id": null,
                    "name": "Lily Sullivan"
                },
                {
                    "id": null,
                    "name": "Morgan Davies"
                },
                {
                    "id": null,
                    "name": "Nell Fisher"
                }
            ]
        },
        {
            "id": "tt4873118",
            "title": "The Covenant",
            "fullTitle": "The Covenant (2023)",
            "year": "2023",
            "releaseState": "Apr 21, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Crime, Thriller",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jake Gyllenhaal, Antony Starr, Alexander Ludwig, Emily Beecham",
            "starList": [
                {
                    "id": null,
                    "name": "Jake Gyllenhaal"
                },
                {
                    "id": null,
                    "name": "Antony Starr"
                },
                {
                    "id": null,
                    "name": "Alexander Ludwig"
                },
                {
                    "id": null,
                    "name": "Emily Beecham"
                }
            ]
        },
        {
            "id": "tt9185206",
            "title": "Are You There God? It's Me, Margaret.",
            "fullTitle": "Are You There God? It's Me, Margaret. (2023)",
            "year": "2023",
            "releaseState": "Apr 28, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMmNjYTk0MjItYjYyMi00Y2RlLThmOGUtMTkyMWI1NTU2M2Q4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Rachel McAdams, Kathy Bates, Abby Ryder Fortson, Benny Safdie",
            "starList": [
                {
                    "id": null,
                    "name": "Rachel McAdams"
                },
                {
                    "id": null,
                    "name": "Kathy Bates"
                },
                {
                    "id": null,
                    "name": "Abby Ryder Fortson"
                },
                {
                    "id": null,
                    "name": "Benny Safdie"
                }
            ]
        },
        {
            "id": "tt18257464",
            "title": "Polite Society",
            "fullTitle": "Polite Society (2023)",
            "year": "2023",
            "releaseState": "Apr 28, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNTViYzZjMGItNmRiNS00MzI4LTkwZDAtZjNmYzA1MTk2NjU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Comedy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Priya Kansara, Ritu Arya, Renu Brindle, Rekha John-Cheriyan",
            "starList": [
                {
                    "id": null,
                    "name": "Priya Kansara"
                },
                {
                    "id": null,
                    "name": "Ritu Arya"
                },
                {
                    "id": null,
                    "name": "Renu Brindle"
                },
                {
                    "id": null,
                    "name": "Rekha John-Cheriyan"
                }
            ]
        },
        {
            "id": "tt12226632",
            "title": "Heart of a Lion",
            "fullTitle": "Heart of a Lion (2023)",
            "year": "2023",
            "releaseState": "Apr 28, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMmVhZjAxMjctZDA1Yy00OWJjLTg5YzMtYWM5YTAxMTdiM2Y4XkEyXkFqcGdeQXVyMTQ0NTkwNzgw._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography, Drama, Sport",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Sonja Sohn, Forest Whitaker, Matthew Glave, John Magaro",
            "starList": [
                {
                    "id": null,
                    "name": "Sonja Sohn"
                },
                {
                    "id": null,
                    "name": "Forest Whitaker"
                },
                {
                    "id": null,
                    "name": "Matthew Glave"
                },
                {
                    "id": null,
                    "name": "John Magaro"
                }
            ]
        },
        {
            "id": "tt15665274",
            "title": "The Channel",
            "fullTitle": "The Channel (2023)",
            "year": "2023",
            "releaseState": "May 01, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNTRjNDgzNjEtZWJkMi00ODUzLThjZjktNDU3MjA3NmJhMjE1XkEyXkFqcGdeQXVyOTEzMTE4MDM@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Max Martini, Clayne Crawford, Paul Rae, Fabiola Andújar",
            "starList": [
                {
                    "id": null,
                    "name": "Max Martini"
                },
                {
                    "id": null,
                    "name": "Clayne Crawford"
                },
                {
                    "id": null,
                    "name": "Paul Rae"
                },
                {
                    "id": null,
                    "name": "Fabiola Andújar"
                }
            ]
        },
        {
            "id": "tt6791350",
            "title": "Guardians of the Galaxy Vol. 3",
            "fullTitle": "Guardians of the Galaxy Vol. 3 (2023)",
            "year": "2023",
            "releaseState": "May 05, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNmFlMThmYTYtOWNhMi00N2Y5LTljZWItMWQxN2U5OTA5MmFjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
            "starList": [
                {
                    "id": null,
                    "name": "Chris Pratt"
                },
                {
                    "id": null,
                    "name": "Zoe Saldana"
                },
                {
                    "id": null,
                    "name": "Dave Bautista"
                },
                {
                    "id": null,
                    "name": "Vin Diesel"
                }
            ]
        },
        {
            "id": "tt9832636",
            "title": "Zombie Traveler",
            "fullTitle": "Zombie Traveler (2023)",
            "year": "2023",
            "releaseState": "May 05, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BN2ZmZmRmZGMtOTNmYi00ZGYwLWI0NTMtMzU4NDc5MmYwNTZkXkEyXkFqcGdeQXVyNjk1MTU4ODI@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Addison Dawn Perry-Franks, Lacey Franks, Cody Gregory, Danni Perry-Franks",
            "starList": [
                {
                    "id": null,
                    "name": "Addison Dawn Perry-Franks"
                },
                {
                    "id": null,
                    "name": "Lacey Franks"
                },
                {
                    "id": null,
                    "name": "Cody Gregory"
                },
                {
                    "id": null,
                    "name": "Danni Perry-Franks"
                }
            ]
        },
        {
            "id": "tt10276482",
            "title": "Love Again",
            "fullTitle": "Love Again (2023)",
            "year": "2023",
            "releaseState": "May 12, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMzYxYWY4NTEtMGU5Yy00YmUxLTk0ZmEtNDVlOGI1NjM1YjFkXkEyXkFqcGdeQXVyMTA3NjIzNzkx._V1_Ratio1.5405_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama, Romance",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Romance",
                    "value": "Romance"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Sam Heughan, Priyanka Chopra Jonas, Russell Tovey, Lydia West",
            "starList": [
                {
                    "id": null,
                    "name": "Sam Heughan"
                },
                {
                    "id": null,
                    "name": "Priyanka Chopra Jonas"
                },
                {
                    "id": null,
                    "name": "Russell Tovey"
                },
                {
                    "id": null,
                    "name": "Lydia West"
                }
            ]
        },
        {
            "id": "tt20768712",
            "title": "Book Club: The Next Chapter",
            "fullTitle": "Book Club: The Next Chapter (2023)",
            "year": "2023",
            "releaseState": "May 12, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOThiZTIxZDctMzIwYy00ZWJlLWFjYTItMjkzYTQxOGJmNWRmXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jane Fonda, Diane Keaton, Mary Steenburgen, Andy Garcia",
            "starList": [
                {
                    "id": null,
                    "name": "Jane Fonda"
                },
                {
                    "id": null,
                    "name": "Diane Keaton"
                },
                {
                    "id": null,
                    "name": "Mary Steenburgen"
                },
                {
                    "id": null,
                    "name": "Andy Garcia"
                }
            ]
        },
        {
            "id": "tt5433140",
            "title": "Fast X",
            "fullTitle": "Fast X (2023)",
            "year": "2023",
            "releaseState": "May 19, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYWY2Yzg4OTktYzIzMS00MGM4LWJiZmEtN2I0ZTg4NjYxYzY5XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.8108_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Crime, Mystery",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Rita Moreno, Charlize Theron, Alan Ritchson, Helen Mirren",
            "starList": [
                {
                    "id": null,
                    "name": "Rita Moreno"
                },
                {
                    "id": null,
                    "name": "Charlize Theron"
                },
                {
                    "id": null,
                    "name": "Alan Ritchson"
                },
                {
                    "id": null,
                    "name": "Helen Mirren"
                }
            ]
        },
        {
            "id": "tt5971474",
            "title": "The Little Mermaid",
            "fullTitle": "The Little Mermaid (2023)",
            "year": "2023",
            "releaseState": "May 26, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZWUxOGRjNTgtMjhjZC00YjRhLTk4YzEtN2IwMGFiYjZhOTBiXkEyXkFqcGdeQXVyMTA4ODY5NzE0._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Adventure, Family, Fantasy",
            "genreList": [
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Family",
                    "value": "Family"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Halle Bailey, Jonah Hauer-King, Melissa McCarthy, Javier Bardem",
            "starList": [
                {
                    "id": null,
                    "name": "Halle Bailey"
                },
                {
                    "id": null,
                    "name": "Jonah Hauer-King"
                },
                {
                    "id": null,
                    "name": "Melissa McCarthy"
                },
                {
                    "id": null,
                    "name": "Javier Bardem"
                }
            ]
        },
        {
            "id": "tt11040844",
            "title": "The Machine",
            "fullTitle": "The Machine (2023)",
            "year": "2023",
            "releaseState": "May 26, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYThiNDc4YWItODkzNS00NjBkLWI1MzUtYjY0NmEyN2ZjNjNkXkEyXkFqcGdeQXVyNjc1NDY3NzU@._V1_Ratio1.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Comedy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Mark Hamill, Stephanie Kurtzuba, Jimmy Tatro, Martyn Ford",
            "starList": [
                {
                    "id": null,
                    "name": "Mark Hamill"
                },
                {
                    "id": null,
                    "name": "Stephanie Kurtzuba"
                },
                {
                    "id": null,
                    "name": "Jimmy Tatro"
                },
                {
                    "id": null,
                    "name": "Martyn Ford"
                }
            ]
        },
        {
            "id": "tt8373206",
            "title": "About My Father",
            "fullTitle": "About My Father (2023)",
            "year": "2023",
            "releaseState": "May 26, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Robert De Niro, Leslie Bibb, Kim Cattrall, Anders Holm",
            "starList": [
                {
                    "id": null,
                    "name": "Robert De Niro"
                },
                {
                    "id": null,
                    "name": "Leslie Bibb"
                },
                {
                    "id": null,
                    "name": "Kim Cattrall"
                },
                {
                    "id": null,
                    "name": "Anders Holm"
                }
            ]
        },
        {
            "id": "tt21052212",
            "title": "By Invitation Only",
            "fullTitle": "By Invitation Only (2023)",
            "year": "2023",
            "releaseState": "May 26, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYWU2YTI5ZGItYzc2MC00Zjc0LWIyYTAtNDE2ZjM1OWFiNzQ3XkEyXkFqcGdeQXVyMzg2MjY4Ng@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Mystery",
            "genreList": [
                {
                    "key": "Mystery",
                    "value": "Mystery"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Angel Fabián Rivera, Juliana Edge, Roy Bercier, LaMarr Allen",
            "starList": [
                {
                    "id": null,
                    "name": "Angel Fabián Rivera"
                },
                {
                    "id": null,
                    "name": "Juliana Edge"
                },
                {
                    "id": null,
                    "name": "Roy Bercier"
                },
                {
                    "id": null,
                    "name": "LaMarr Allen"
                }
            ]
        },
        {
            "id": "tt9362722",
            "title": "Spider-Man: Across the Spider-Verse",
            "fullTitle": "Spider-Man: Across the Spider-Verse (2023)",
            "year": "2023",
            "releaseState": "Jun 02, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNjk5YTU0OTAtMTM1NC00Zjc1LWEzZjAtOWJkYzcxOGRhNWNhXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Action, Adventure",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
            "starList": [
                {
                    "id": null,
                    "name": "Shameik Moore"
                },
                {
                    "id": null,
                    "name": "Hailee Steinfeld"
                },
                {
                    "id": null,
                    "name": "Oscar Isaac"
                },
                {
                    "id": null,
                    "name": "Jake Johnson"
                }
            ]
        },
        {
            "id": "tt3427252",
            "title": "The Boogeyman",
            "fullTitle": "The Boogeyman (2023)",
            "year": "2023",
            "releaseState": "Jun 02, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Mystery, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Chris Messina, Sophie Thatcher, David Dastmalchian, Marin Ireland",
            "starList": [
                {
                    "id": null,
                    "name": "Chris Messina"
                },
                {
                    "id": null,
                    "name": "Sophie Thatcher"
                },
                {
                    "id": null,
                    "name": "David Dastmalchian"
                },
                {
                    "id": null,
                    "name": "Marin Ireland"
                }
            ]
        },
        {
            "id": "tt5090568",
            "title": "Transformers: Rise of the Beasts",
            "fullTitle": "Transformers: Rise of the Beasts (2023)",
            "year": "2023",
            "releaseState": "Jun 09, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BN2FkOWQ3YzItNmNhZi00ZWNlLThjYTMtZWIyZDc2YjQzMjk3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Sci-Fi",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Sci-Fi",
                    "value": "Sci-Fi"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Michelle Yeoh, Ron Perlman, Pete Davidson, Peter Dinklage",
            "starList": [
                {
                    "id": null,
                    "name": "Michelle Yeoh"
                },
                {
                    "id": null,
                    "name": "Ron Perlman"
                },
                {
                    "id": null,
                    "name": "Pete Davidson"
                },
                {
                    "id": null,
                    "name": "Peter Dinklage"
                }
            ]
        },
        {
            "id": "tt0439572",
            "title": "The Flash",
            "fullTitle": "The Flash (2023)",
            "year": "2023",
            "releaseState": "Jun 16, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOWNhMGU5MjEtMGVkYi00M2RiLWE5NjUtY2U5NDAxZTcwNDY0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Fantasy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Antje Traue, Michael Shannon, Ben Affleck, Ezra Miller",
            "starList": [
                {
                    "id": null,
                    "name": "Antje Traue"
                },
                {
                    "id": null,
                    "name": "Michael Shannon"
                },
                {
                    "id": null,
                    "name": "Ben Affleck"
                },
                {
                    "id": null,
                    "name": "Ezra Miller"
                }
            ]
        },
        {
            "id": "tt15789038",
            "title": "Elemental",
            "fullTitle": "Elemental (2023)",
            "year": "2023",
            "releaseState": "Jun 16, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNjRiMzM1N2UtMWE1ZC00MGMxLThkM2UtMGIyNWFiZWY3OGE4XkEyXkFqcGdeQXVyMTUzMzY2NDQy._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Mamoudou Athie, Leah Lewis",
            "starList": [
                {
                    "id": null,
                    "name": "Mamoudou Athie"
                },
                {
                    "id": null,
                    "name": "Leah Lewis"
                }
            ]
        },
        {
            "id": "tt11703244",
            "title": "The Blackening",
            "fullTitle": "The Blackening (2022)",
            "year": "2022",
            "releaseState": "Jun 16, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Horror",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Antoinette Robertson, Dewayne Perkins, Sinqua Walls, Grace Byers",
            "starList": [
                {
                    "id": null,
                    "name": "Antoinette Robertson"
                },
                {
                    "id": null,
                    "name": "Dewayne Perkins"
                },
                {
                    "id": null,
                    "name": "Sinqua Walls"
                },
                {
                    "id": null,
                    "name": "Grace Byers"
                }
            ]
        },
        {
            "id": "tt4671296",
            "title": "The Magnificent Raiders of Dimension War One",
            "fullTitle": "The Magnificent Raiders of Dimension War One (2023)",
            "year": "2023",
            "releaseState": "Jun 21, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMjRjZTliNDktMTBmNy00NmZkLTk2ZDYtOTgzN2JhNDBkYTM4XkEyXkFqcGdeQXVyMTk5NjA5MTE@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Sci-Fi",
            "genreList": [
                {
                    "key": "Sci-Fi",
                    "value": "Sci-Fi"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Bai Ling, Tom Sizemore, Gigi Edgley, Robert LaSardo",
            "starList": [
                {
                    "id": null,
                    "name": "Bai Ling"
                },
                {
                    "id": null,
                    "name": "Tom Sizemore"
                },
                {
                    "id": null,
                    "name": "Gigi Edgley"
                },
                {
                    "id": null,
                    "name": "Robert LaSardo"
                }
            ]
        },
        {
            "id": "tt14230388",
            "title": "Asteroid City",
            "fullTitle": "Asteroid City (2023)",
            "year": "2023",
            "releaseState": "Jun 23, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Romance",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Romance",
                    "value": "Romance"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Margot Robbie, Tom Hanks, Hong Chau, Edward Norton",
            "starList": [
                {
                    "id": null,
                    "name": "Margot Robbie"
                },
                {
                    "id": null,
                    "name": "Tom Hanks"
                },
                {
                    "id": null,
                    "name": "Hong Chau"
                },
                {
                    "id": null,
                    "name": "Edward Norton"
                }
            ]
        },
        {
            "id": "tt15671028",
            "title": "No Hard Feelings",
            "fullTitle": "No Hard Feelings (2023)",
            "year": "2023",
            "releaseState": "Jun 23, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jennifer Lawrence, Ebon Moss-Bachrach, Natalie Morales, Matthew Broderick",
            "starList": [
                {
                    "id": null,
                    "name": "Jennifer Lawrence"
                },
                {
                    "id": null,
                    "name": "Ebon Moss-Bachrach"
                },
                {
                    "id": null,
                    "name": "Natalie Morales"
                },
                {
                    "id": null,
                    "name": "Matthew Broderick"
                }
            ]
        },
        {
            "id": "tt15268244",
            "title": "Untitled Adele Lim/Lionsgate Comedy Project",
            "fullTitle": "Untitled Adele Lim/Lionsgate Comedy Project (2023)",
            "year": "2023",
            "releaseState": "Jun 23, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Stephanie Hsu, Ashley Park, David Denman, Annie Mumolo",
            "starList": [
                {
                    "id": null,
                    "name": "Stephanie Hsu"
                },
                {
                    "id": null,
                    "name": "Ashley Park"
                },
                {
                    "id": null,
                    "name": "David Denman"
                },
                {
                    "id": null,
                    "name": "Annie Mumolo"
                }
            ]
        },
        {
            "id": "tt12942328",
            "title": "Maintaining Mac Messings",
            "fullTitle": "Maintaining Mac Messings (2023)",
            "year": "2023",
            "releaseState": "Jun 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNmMwNWI3NjMtYmEzYy00MzY3LTkyNzctZjFjYTM3MTkyMjU4XkEyXkFqcGdeQXVyNDM4NTUyNTE@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Horror",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Mehdi El Hebil, Bonnie Ryerson, Victoria Russell, Kendrick Mays",
            "starList": [
                {
                    "id": null,
                    "name": "Mehdi El Hebil"
                },
                {
                    "id": null,
                    "name": "Bonnie Ryerson"
                },
                {
                    "id": null,
                    "name": "Victoria Russell"
                },
                {
                    "id": null,
                    "name": "Kendrick Mays"
                }
            ]
        },
        {
            "id": "tt1462764",
            "title": "Indiana Jones and the Dial of Destiny",
            "fullTitle": "Indiana Jones and the Dial of Destiny (2023)",
            "year": "2023",
            "releaseState": "Jun 30, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYTYyY2JkOWMtMDNjZC00ZTgzLWJhNDAtM2YzMWY3MjM2N2VjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Harrison Ford, Antonio Banderas, Boyd Holbrook, Mads Mikkelsen",
            "starList": [
                {
                    "id": null,
                    "name": "Harrison Ford"
                },
                {
                    "id": null,
                    "name": "Antonio Banderas"
                },
                {
                    "id": null,
                    "name": "Boyd Holbrook"
                },
                {
                    "id": null,
                    "name": "Mads Mikkelsen"
                }
            ]
        },
        {
            "id": "tt1609486",
            "title": "Harold and the Purple Crayon",
            "fullTitle": "Harold and the Purple Crayon (2023)",
            "year": "2023",
            "releaseState": "Jun 30, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Family, Fantasy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Family",
                    "value": "Family"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Zooey Deschanel, Zachary Levi, Camille Guaty, Lil Rel Howery",
            "starList": [
                {
                    "id": null,
                    "name": "Zooey Deschanel"
                },
                {
                    "id": null,
                    "name": "Zachary Levi"
                },
                {
                    "id": null,
                    "name": "Camille Guaty"
                },
                {
                    "id": null,
                    "name": "Lil Rel Howery"
                }
            ]
        },
        {
            "id": "tt13405778",
            "title": "Insidious 5",
            "fullTitle": "Insidious 5 (2023)",
            "year": "2023",
            "releaseState": "Jul 07, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Horror, Mystery",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Ty Simpkins, Patrick Wilson, Rose Byrne, Andrew Astor",
            "starList": [
                {
                    "id": null,
                    "name": "Ty Simpkins"
                },
                {
                    "id": null,
                    "name": "Patrick Wilson"
                },
                {
                    "id": null,
                    "name": "Rose Byrne"
                },
                {
                    "id": null,
                    "name": "Andrew Astor"
                }
            ]
        },
        {
            "id": "tt7347248",
            "title": "Summer Gold",
            "fullTitle": "Summer Gold (2023)",
            "year": "2023",
            "releaseState": "Jul 07, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYzA3Zjg0ZWYtNzYyZC00ZTE0LTk1ZmEtZTFkYWZjNTE3NjQwXkEyXkFqcGdeQXVyOTYyNDA1Nzg@._V1_Ratio0.7297_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Adventure, Comedy, Family",
            "genreList": [
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jerry O'Connell, Jenna Kanell, Jay Huguley, Nicholas Logan",
            "starList": [
                {
                    "id": null,
                    "name": "Jerry O'Connell"
                },
                {
                    "id": null,
                    "name": "Jenna Kanell"
                },
                {
                    "id": null,
                    "name": "Jay Huguley"
                },
                {
                    "id": null,
                    "name": "Nicholas Logan"
                }
            ]
        },
        {
            "id": "tt9603212",
            "title": "Mission: Impossible - Dead Reckoning - Part One",
            "fullTitle": "Mission: Impossible - Dead Reckoning - Part One (2023)",
            "year": "2023",
            "releaseState": "Jul 14, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZmM1MmI1MjctOTkyMi00MjZhLWEwN2MtYjEwNGRjNmUxZmVjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Thriller",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Tom Cruise, Rebecca Ferguson, Vanessa Kirby, Pom Klementieff",
            "starList": [
                {
                    "id": null,
                    "name": "Tom Cruise"
                },
                {
                    "id": null,
                    "name": "Rebecca Ferguson"
                },
                {
                    "id": null,
                    "name": "Vanessa Kirby"
                },
                {
                    "id": null,
                    "name": "Pom Klementieff"
                }
            ]
        },
        {
            "id": "tt15398776",
            "title": "Oppenheimer",
            "fullTitle": "Oppenheimer (2023)",
            "year": "2023",
            "releaseState": "Jul 21, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZmE0NzdlZmMtNjJmMy00NjM2LTgzZGYtN2JhZmNhNzBmN2YwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography, Drama, History",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "History",
                    "value": "History"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
            "starList": [
                {
                    "id": null,
                    "name": "Cillian Murphy"
                },
                {
                    "id": null,
                    "name": "Emily Blunt"
                },
                {
                    "id": null,
                    "name": "Matt Damon"
                },
                {
                    "id": null,
                    "name": "Robert Downey Jr."
                }
            ]
        },
        {
            "id": "tt1517268",
            "title": "Barbie",
            "fullTitle": "Barbie (2023)",
            "year": "2023",
            "releaseState": "Jul 21, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMzQ3NTRjZDUtNGVhYS00OWQ0LTljMjEtYzJkOGJhYWViNjIxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Adventure, Comedy, Fantasy",
            "genreList": [
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Margot Robbie, Ryan Gosling, Marisa Abela, Helen Mirren",
            "starList": [
                {
                    "id": null,
                    "name": "Margot Robbie"
                },
                {
                    "id": null,
                    "name": "Ryan Gosling"
                },
                {
                    "id": null,
                    "name": "Marisa Abela"
                },
                {
                    "id": null,
                    "name": "Helen Mirren"
                }
            ]
        },
        {
            "id": "tt1756855",
            "title": "Coyote v. Acme",
            "fullTitle": "Coyote v. Acme (2023)",
            "year": "2023",
            "releaseState": "Jul 21, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "John Cena, Will Forte, Lana Condor, P.J. Byrne",
            "starList": [
                {
                    "id": null,
                    "name": "John Cena"
                },
                {
                    "id": null,
                    "name": "Will Forte"
                },
                {
                    "id": null,
                    "name": "Lana Condor"
                },
                {
                    "id": null,
                    "name": "P.J. Byrne"
                }
            ]
        },
        {
            "id": "tt10676048",
            "title": "The Marvels",
            "fullTitle": "The Marvels (2023)",
            "year": "2023",
            "releaseState": "Jul 28, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNjQ4NzQ2MmUtMTUwYi00ZTVhLWI5Y2MtYWM3ZmM5MTc1OGEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Fantasy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Brie Larson, Samuel L. Jackson, Zawe Ashton, Iman Vellani",
            "starList": [
                {
                    "id": null,
                    "name": "Brie Larson"
                },
                {
                    "id": null,
                    "name": "Samuel L. Jackson"
                },
                {
                    "id": null,
                    "name": "Zawe Ashton"
                },
                {
                    "id": null,
                    "name": "Iman Vellani"
                }
            ]
        },
        {
            "id": "tt9224104",
            "title": "The Meg 2: The Trench",
            "fullTitle": "The Meg 2: The Trench (2023)",
            "year": "2023",
            "releaseState": "Aug 04, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZmNjMzkyODYtZjgxNS00ZDJiLTlmYzQtZGEzNDdmOTZjZTIxXkEyXkFqcGdeQXVyMTU0ODY5OTAx._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Horror",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jason Statham, Cliff Curtis, Sienna Guillory, Skyler Samuels",
            "starList": [
                {
                    "id": null,
                    "name": "Jason Statham"
                },
                {
                    "id": null,
                    "name": "Cliff Curtis"
                },
                {
                    "id": null,
                    "name": "Sienna Guillory"
                },
                {
                    "id": null,
                    "name": "Skyler Samuels"
                }
            ]
        },
        {
            "id": "tt8589698",
            "title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
            "fullTitle": "Teenage Mutant Ninja Turtles: Mutant Mayhem (2023)",
            "year": "2023",
            "releaseState": "Aug 04, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNDhhZWYwYzItNjI1OC00MzNkLTgxZjctNTEzNzZmYjg4NjJkXkEyXkFqcGdeQXVyMTA0NTM2MjA2._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Action, Adventure",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Seth Rogen, Shamon Brown Jr.",
            "starList": [
                {
                    "id": null,
                    "name": "Seth Rogen"
                },
                {
                    "id": null,
                    "name": "Shamon Brown Jr."
                }
            ]
        },
        {
            "id": "tt1695843",
            "title": "Haunted Mansion",
            "fullTitle": "Haunted Mansion (2023)",
            "year": "2023",
            "releaseState": "Aug 11, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOTg0YzViNTktNWRkZi00YTgwLWI4NTUtYzJjNmU4ZjYyY2U3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama, Family",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jamie Lee Curtis, Jared Leto, Winona Ryder, Owen Wilson",
            "starList": [
                {
                    "id": null,
                    "name": "Jamie Lee Curtis"
                },
                {
                    "id": null,
                    "name": "Jared Leto"
                },
                {
                    "id": null,
                    "name": "Winona Ryder"
                },
                {
                    "id": null,
                    "name": "Owen Wilson"
                }
            ]
        },
        {
            "id": "tt4495098",
            "title": "Gran Turismo",
            "fullTitle": "Gran Turismo (2023)",
            "year": "2023",
            "releaseState": "Aug 11, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMTg5OGFhOTYtZGVjNi00YTRmLTgxNDktMTdjNjM5ZmFhMTEyXkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_Ratio1.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Drama",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "David Harbour, Orlando Bloom, Djimon Hounsou, Darren Barnet",
            "starList": [
                {
                    "id": null,
                    "name": "David Harbour"
                },
                {
                    "id": null,
                    "name": "Orlando Bloom"
                },
                {
                    "id": null,
                    "name": "Djimon Hounsou"
                },
                {
                    "id": null,
                    "name": "Darren Barnet"
                }
            ]
        },
        {
            "id": "tt1001520",
            "title": "Last Voyage of the Demeter",
            "fullTitle": "Last Voyage of the Demeter (2023)",
            "year": "2023",
            "releaseState": "Aug 11, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODMwZDczNzQtYWE0My00MWNkLTg0MzgtNDA5YzcxYTkzMzcyXkEyXkFqcGdeQXVyNzU0NzQxNTE@._V1_Ratio1.5135_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "David Dastmalchian, Aisling Franciosi, Liam Cunningham, Corey Hawkins",
            "starList": [
                {
                    "id": null,
                    "name": "David Dastmalchian"
                },
                {
                    "id": null,
                    "name": "Aisling Franciosi"
                },
                {
                    "id": null,
                    "name": "Liam Cunningham"
                },
                {
                    "id": null,
                    "name": "Corey Hawkins"
                }
            ]
        },
        {
            "id": "tt16426418",
            "title": "Challengers",
            "fullTitle": "Challengers (2023)",
            "year": "2023",
            "releaseState": "Aug 11, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Romance, Sport",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Romance",
                    "value": "Romance"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Zendaya, Josh O'Connor, Mike Faist, Scottie DiGiacomo",
            "starList": [
                {
                    "id": null,
                    "name": "Zendaya"
                },
                {
                    "id": null,
                    "name": "Josh O'Connor"
                },
                {
                    "id": null,
                    "name": "Mike Faist"
                },
                {
                    "id": null,
                    "name": "Scottie DiGiacomo"
                }
            ]
        },
        {
            "id": "tt9362930",
            "title": "Blue Beetle",
            "fullTitle": "Blue Beetle (2023)",
            "year": "2023",
            "releaseState": "Aug 18, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMjY4ODA0ZWMtNGY2OC00NjUxLThiOGQtNjAyZjdhNjMyZWY4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Sci-Fi",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Sci-Fi",
                    "value": "Sci-Fi"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Harvey Guillén, Susan Sarandon, Xolo Maridueña, Raoul Max Trujillo",
            "starList": [
                {
                    "id": null,
                    "name": "Harvey Guillén"
                },
                {
                    "id": null,
                    "name": "Susan Sarandon"
                },
                {
                    "id": null,
                    "name": "Xolo Maridueña"
                },
                {
                    "id": null,
                    "name": "Raoul Max Trujillo"
                }
            ]
        },
        {
            "id": "tt8051894",
            "title": "The Hill",
            "fullTitle": "The Hill (2023)",
            "year": "2023",
            "releaseState": "Aug 18, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNThmMGIxN2QtMjBiMC00ODBiLWIyZTEtNDczMGEyZWU0MTJmXkEyXkFqcGdeQXVyNzc3ODAyNjE@._V1_Ratio0.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography, Drama, Sport",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Dennis Quaid, Bonnie Bedelia, Scott Glenn, Colin Ford",
            "starList": [
                {
                    "id": null,
                    "name": "Dennis Quaid"
                },
                {
                    "id": null,
                    "name": "Bonnie Bedelia"
                },
                {
                    "id": null,
                    "name": "Scott Glenn"
                },
                {
                    "id": null,
                    "name": "Colin Ford"
                }
            ]
        },
        {
            "id": "tt21335356",
            "title": "Untitled Please Don't Destroy Project",
            "fullTitle": "Untitled Please Don't Destroy Project (2023)",
            "year": "2023",
            "releaseState": "Aug 18, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Nichole Sakura, John Higgins, Jordan Mendoza, Conan O'Brien",
            "starList": [
                {
                    "id": null,
                    "name": "Nichole Sakura"
                },
                {
                    "id": null,
                    "name": "John Higgins"
                },
                {
                    "id": null,
                    "name": "Jordan Mendoza"
                },
                {
                    "id": null,
                    "name": "Conan O'Brien"
                }
            ]
        },
        {
            "id": "tt14454876",
            "title": "Golda",
            "fullTitle": "Golda (2023)",
            "year": "2023",
            "releaseState": "Aug 25, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYzhlZjE1NDItOTUwOS00NTFmLWJjOTYtZjg2NTNmYzg0MTIxXkEyXkFqcGdeQXVyNDQ5MjYzNzE@._V1_Ratio1.5676_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography, Drama, History",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "History",
                    "value": "History"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Helen Mirren, Liev Schreiber, Camille Cottin, Ed Stoppard",
            "starList": [
                {
                    "id": null,
                    "name": "Helen Mirren"
                },
                {
                    "id": null,
                    "name": "Liev Schreiber"
                },
                {
                    "id": null,
                    "name": "Camille Cottin"
                },
                {
                    "id": null,
                    "name": "Ed Stoppard"
                }
            ]
        },
        {
            "id": "tt11068094",
            "title": "White Bird: A Wonder Story",
            "fullTitle": "White Bird: A Wonder Story (2023)",
            "year": "2023",
            "releaseState": "Aug 25, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMGE4NDRjYmMtMjM5ZC00YjI3LWJlNWMtZGRjOWYyZTE5N2Y2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography, Drama, Family",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Gillian Anderson, Helen Mirren, Stuart McQuarrie, Olivia Ross",
            "starList": [
                {
                    "id": null,
                    "name": "Gillian Anderson"
                },
                {
                    "id": null,
                    "name": "Helen Mirren"
                },
                {
                    "id": null,
                    "name": "Stuart McQuarrie"
                },
                {
                    "id": null,
                    "name": "Olivia Ross"
                }
            ]
        },
        {
            "id": "tt18310174",
            "title": "Dark Dinosaur Gets Grounded the Movie",
            "fullTitle": "Dark Dinosaur Gets Grounded the Movie (2023)",
            "year": "2023",
            "releaseState": "Aug 25, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYTcyODY5MGItZTU1Mi00OTZjLWFjYjUtNzMzYjdiZWU4NjE2XkEyXkFqcGdeQXVyMTQxNzY5MzU2._V1_Ratio0.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Action, Comedy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Rod: 6th Pitch",
            "starList": [
                {
                    "id": null,
                    "name": "Rod: 6th Pitch"
                }
            ]
        },
        {
            "id": "tt17024450",
            "title": "The Equalizer 3",
            "fullTitle": "The Equalizer 3 (2023)",
            "year": "2023",
            "releaseState": "Sep 01, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Crime, Thriller",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Denzel Washington, Dakota Fanning, David Denman, Eugenio Mastrandrea",
            "starList": [
                {
                    "id": null,
                    "name": "Denzel Washington"
                },
                {
                    "id": null,
                    "name": "Dakota Fanning"
                },
                {
                    "id": null,
                    "name": "David Denman"
                },
                {
                    "id": null,
                    "name": "Eugenio Mastrandrea"
                }
            ]
        },
        {
            "id": "tt10160976",
            "title": "The Nun 2",
            "fullTitle": "The Nun 2 (2023)",
            "year": "2023",
            "releaseState": "Sep 08, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODA5ZjBiYWMtNjkwZC00NDU5LTk3MWQtOTIxMTgwYWFiYzdlXkEyXkFqcGdeQXVyMTU4OTE4NDg2._V1_Ratio0.8649_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror, Mystery, Thriller",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Storm Reid, Anna Popplewell, Taissa Farmiga, Bonnie Aarons",
            "starList": [
                {
                    "id": null,
                    "name": "Storm Reid"
                },
                {
                    "id": null,
                    "name": "Anna Popplewell"
                },
                {
                    "id": null,
                    "name": "Taissa Farmiga"
                },
                {
                    "id": null,
                    "name": "Bonnie Aarons"
                }
            ]
        },
        {
            "id": "tt22687790",
            "title": "A Haunting in Venice",
            "fullTitle": "A Haunting in Venice (2023)",
            "year": "2023",
            "releaseState": "Sep 15, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOTA2MDc4NmYtNTViYS00Njc1LTg0NmQtNzRiNTkxNDk3OGE4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Crime, Drama, Mystery",
            "genreList": [
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Mystery",
                    "value": "Mystery"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Kelly Reilly, Michelle Yeoh, Emma Laird, Jamie Dornan",
            "starList": [
                {
                    "id": null,
                    "name": "Kelly Reilly"
                },
                {
                    "id": null,
                    "name": "Michelle Yeoh"
                },
                {
                    "id": null,
                    "name": "Emma Laird"
                },
                {
                    "id": null,
                    "name": "Jamie Dornan"
                }
            ]
        },
        {
            "id": "tt3291150",
            "title": "The Expendables 4",
            "fullTitle": "The Expendables 4 (2023)",
            "year": "2023",
            "releaseState": "Sep 22, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNGIzNjU5YTctMDllZi00MGU2LWI5MTYtYzc4ZGFjNzY5ZjYyXkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_Ratio2.5135_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Thriller",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren",
            "starList": [
                {
                    "id": null,
                    "name": "Jason Statham"
                },
                {
                    "id": null,
                    "name": "50 Cent"
                },
                {
                    "id": null,
                    "name": "Megan Fox"
                },
                {
                    "id": null,
                    "name": "Dolph Lundgren"
                }
            ]
        },
        {
            "id": "tt10767052",
            "title": "Next Goal Wins",
            "fullTitle": "Next Goal Wins (2023)",
            "year": "2023",
            "releaseState": "Sep 22, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMjUxNzQ2NWItN2MyYS00NjU1LTk2ODEtMDU0MGJmNTU1NGIzXkEyXkFqcGdeQXVyMTI2Mjg4MjMz._V1_Ratio1.5135_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Drama, Sport",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Sport",
                    "value": "Sport"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Michael Fassbender, Rhys Darby, Elisabeth Moss, Will Arnett",
            "starList": [
                {
                    "id": null,
                    "name": "Michael Fassbender"
                },
                {
                    "id": null,
                    "name": "Rhys Darby"
                },
                {
                    "id": null,
                    "name": "Elisabeth Moss"
                },
                {
                    "id": null,
                    "name": "Will Arnett"
                }
            ]
        },
        {
            "id": "tt16374352",
            "title": "The Blind",
            "fullTitle": "The Blind (2023)",
            "year": "2023",
            "releaseState": "Sep 22, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Kerry Knuppe, Amelia Eve, Trish Cook, Todd Terry",
            "starList": [
                {
                    "id": null,
                    "name": "Kerry Knuppe"
                },
                {
                    "id": null,
                    "name": "Amelia Eve"
                },
                {
                    "id": null,
                    "name": "Trish Cook"
                },
                {
                    "id": null,
                    "name": "Todd Terry"
                }
            ]
        },
        {
            "id": "tt12349832",
            "title": "Cuckoo",
            "fullTitle": "Cuckoo (2023)",
            "year": "2023",
            "releaseState": "Sep 29, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYzBkZGEzYTQtMTFiMS00NDg3LWIyNGItYjNkZDM0NjgwMmQ2XkEyXkFqcGdeQXVyNjYwMzM1MjM@._V1_Ratio2.0000_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Hunter Schafer, Dan Stevens, Jessica Henwick, Marton Csokas",
            "starList": [
                {
                    "id": null,
                    "name": "Hunter Schafer"
                },
                {
                    "id": null,
                    "name": "Dan Stevens"
                },
                {
                    "id": null,
                    "name": "Jessica Henwick"
                },
                {
                    "id": null,
                    "name": "Marton Csokas"
                }
            ]
        },
        {
            "id": "tt12806322",
            "title": "Skelly",
            "fullTitle": "Skelly (2023)",
            "year": "2023",
            "releaseState": "Oct 01, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Family",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Brian Cox, Torrey DeVitto, Andy Comeau, Devin Trey Campbell",
            "starList": [
                {
                    "id": null,
                    "name": "Brian Cox"
                },
                {
                    "id": null,
                    "name": "Torrey DeVitto"
                },
                {
                    "id": null,
                    "name": "Andy Comeau"
                },
                {
                    "id": null,
                    "name": "Devin Trey Campbell"
                }
            ]
        },
        {
            "id": "tt8790086",
            "title": "Kraven the Hunter",
            "fullTitle": "Kraven the Hunter (2023)",
            "year": "2023",
            "releaseState": "Oct 06, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYzRmOTBjY2ItY2I1My00YjRkLTk1Y2MtZmYzZTExMTk3NDI5XkEyXkFqcGdeQXVyNTc2MDc2ODQ@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Sci-Fi",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Sci-Fi",
                    "value": "Sci-Fi"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Aaron Taylor-Johnson, Fred Hechinger, Russell Crowe, Christopher Abbott",
            "starList": [
                {
                    "id": null,
                    "name": "Aaron Taylor-Johnson"
                },
                {
                    "id": null,
                    "name": "Fred Hechinger"
                },
                {
                    "id": null,
                    "name": "Russell Crowe"
                },
                {
                    "id": null,
                    "name": "Christopher Abbott"
                }
            ]
        },
        {
            "id": "tt11858890",
            "title": "True Love",
            "fullTitle": "True Love (2023)",
            "year": "2023",
            "releaseState": "Oct 06, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Crime, Drama",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Amar Chadha-Patel, Allison Janney, John David Washington, Gemma Chan",
            "starList": [
                {
                    "id": null,
                    "name": "Amar Chadha-Patel"
                },
                {
                    "id": null,
                    "name": "Allison Janney"
                },
                {
                    "id": null,
                    "name": "John David Washington"
                },
                {
                    "id": null,
                    "name": "Gemma Chan"
                }
            ]
        },
        {
            "id": "tt12921446",
            "title": "The Exorcist",
            "fullTitle": "The Exorcist (2023)",
            "year": "2023",
            "releaseState": "Oct 13, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMGM0N2FhODctZmNkMS00Y2ZlLWJlNjQtZWM2M2YyNTQ1MWEwXkEyXkFqcGdeQXVyMzg2NDQ3ODE@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Leslie Odom Jr., Ann Dowd, Ellen Burstyn, Rory Gross",
            "starList": [
                {
                    "id": null,
                    "name": "Leslie Odom Jr."
                },
                {
                    "id": null,
                    "name": "Ann Dowd"
                },
                {
                    "id": null,
                    "name": "Ellen Burstyn"
                },
                {
                    "id": null,
                    "name": "Rory Gross"
                }
            ]
        },
        {
            "id": "tt15837338",
            "title": "PAW Patrol: The Mighty Movie",
            "fullTitle": "PAW Patrol: The Mighty Movie (2023)",
            "year": "2023",
            "releaseState": "Oct 13, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDRhNTBkNTktNmJhYi00MDc0LWJkYTQtMjA0MGMxMzQ1MjllXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Action, Adventure",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Mckenna Grace, Kristen Bell, James Marsden, Taraji P. Henson",
            "starList": [
                {
                    "id": null,
                    "name": "Mckenna Grace"
                },
                {
                    "id": null,
                    "name": "Kristen Bell"
                },
                {
                    "id": null,
                    "name": "James Marsden"
                },
                {
                    "id": null,
                    "name": "Taraji P. Henson"
                }
            ]
        },
        {
            "id": "tt21807222",
            "title": "Saw 10",
            "fullTitle": "Saw 10 (2023)",
            "year": "2023",
            "releaseState": "Oct 27, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Crime, Drama, Horror",
            "genreList": [
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Michael Beach, Tobin Bell, Steven Brand, Synnøve Macody Lund",
            "starList": [
                {
                    "id": null,
                    "name": "Michael Beach"
                },
                {
                    "id": null,
                    "name": "Tobin Bell"
                },
                {
                    "id": null,
                    "name": "Steven Brand"
                },
                {
                    "id": null,
                    "name": "Synnøve Macody Lund"
                }
            ]
        },
        {
            "id": "tt7365436",
            "title": "Listen Carefully",
            "fullTitle": "Listen Carefully (2023)",
            "year": "2023",
            "releaseState": "Oct 31, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMzkxMjIyMDEtZjdhMC00NzJmLWEyZmYtZGE0OTFlYmQ3ODEzXkEyXkFqcGdeQXVyMTY2NzE3Ng@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Ryan Barton-Grimley, Ari Schneider, Simone Barton-Grimley, David Rickabaugh",
            "starList": [
                {
                    "id": null,
                    "name": "Ryan Barton-Grimley"
                },
                {
                    "id": null,
                    "name": "Ari Schneider"
                },
                {
                    "id": null,
                    "name": "Simone Barton-Grimley"
                },
                {
                    "id": null,
                    "name": "David Rickabaugh"
                }
            ]
        },
        {
            "id": "tt4918142",
            "title": "There Is No Sanctuary",
            "fullTitle": "There Is No Sanctuary (2023)",
            "year": "2023",
            "releaseState": "Oct 31, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODZhNzg4NWUtNTRmMi00ZTQwLWI4ZTQtZTA0ZjhmYmZjMzZhXkEyXkFqcGdeQXVyNDU3NzY0NTk@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jaime Reborn, Brittni Carraway",
            "starList": [
                {
                    "id": null,
                    "name": "Jaime Reborn"
                },
                {
                    "id": null,
                    "name": "Brittni Carraway"
                }
            ]
        },
        {
            "id": "tt15239678",
            "title": "Dune: Part Two",
            "fullTitle": "Dune: Part Two (2023)",
            "year": "2023",
            "releaseState": "Nov 03, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYjFkM2RhZjUtN2U0MC00NTMxLTk1MjktZDkwNjg3MjI0NmYxXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Drama",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Timothée Chalamet, Rebecca Ferguson, Zendaya, Javier Bardem",
            "starList": [
                {
                    "id": null,
                    "name": "Timothée Chalamet"
                },
                {
                    "id": null,
                    "name": "Rebecca Ferguson"
                },
                {
                    "id": null,
                    "name": "Zendaya"
                },
                {
                    "id": null,
                    "name": "Javier Bardem"
                }
            ]
        },
        {
            "id": "tt10115998",
            "title": "The Cincinnati Spin",
            "fullTitle": "The Cincinnati Spin (2023)",
            "year": "2023",
            "releaseState": "Nov 10, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNDg3ZTUwOTAtNGZhZC00YTFmLWEzNzQtYjIyMDNjZWIzZWJkXkEyXkFqcGdeQXVyNDc4NjUyODI@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Comedy, Crime, Drama",
            "genreList": [
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Crime",
                    "value": "Crime"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Joseph D. Reitman, Vas Blackwood, Charlie McElveen, Rob LaColla Jr.",
            "starList": [
                {
                    "id": null,
                    "name": "Joseph D. Reitman"
                },
                {
                    "id": null,
                    "name": "Vas Blackwood"
                },
                {
                    "id": null,
                    "name": "Charlie McElveen"
                },
                {
                    "id": null,
                    "name": "Rob LaColla Jr."
                }
            ]
        },
        {
            "id": "tt10414276",
            "title": "American Cherry",
            "fullTitle": "American Cherry (2023)",
            "year": "2023",
            "releaseState": "Nov 13, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZWRjNmQ1NTctZTAwMi00MWJkLTliM2MtMGVmY2QyZDczZWQ0XkEyXkFqcGdeQXVyOTM2MzgyODc@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Romance, Thriller",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Romance",
                    "value": "Romance"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Leonor Varela, Matty Cardarople, Larsen Thompson, Hart Denton",
            "starList": [
                {
                    "id": null,
                    "name": "Leonor Varela"
                },
                {
                    "id": null,
                    "name": "Matty Cardarople"
                },
                {
                    "id": null,
                    "name": "Larsen Thompson"
                },
                {
                    "id": null,
                    "name": "Hart Denton"
                }
            ]
        },
        {
            "id": "tt10545296",
            "title": "The Hunger Games: The Ballad of Songbirds and Snakes",
            "fullTitle": "The Hunger Games: The Ballad of Songbirds and Snakes (2023)",
            "year": "2023",
            "releaseState": "Nov 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMWNiYWNkYWYtZWYwMi00NjNjLTk2ZTAtYmMwNzExNjYwY2U2XkEyXkFqcGdeQXVyMTMzMTc1NzU2._V1_Ratio0.7297_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Drama",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Hunter Schafer, Viola Davis, Peter Dinklage, Burn Gorman",
            "starList": [
                {
                    "id": null,
                    "name": "Hunter Schafer"
                },
                {
                    "id": null,
                    "name": "Viola Davis"
                },
                {
                    "id": null,
                    "name": "Peter Dinklage"
                },
                {
                    "id": null,
                    "name": "Burn Gorman"
                }
            ]
        },
        {
            "id": "tt14362112",
            "title": "Trolls 3",
            "fullTitle": "Trolls 3 (2023)",
            "year": "2023",
            "releaseState": "Nov 17, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNWU0YmYyY2MtMDdhZC00NDE4LWE0MTAtMjEwZmE0OTc5NGFiXkEyXkFqcGdeQXVyMTU3NDkzNTcx._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Comedy, Family",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Anna Kendrick, Justin Timberlake, Rolando Davila-Beltran",
            "starList": [
                {
                    "id": null,
                    "name": "Anna Kendrick"
                },
                {
                    "id": null,
                    "name": "Justin Timberlake"
                },
                {
                    "id": null,
                    "name": "Rolando Davila-Beltran"
                }
            ]
        },
        {
            "id": "tt11304740",
            "title": "Wish",
            "fullTitle": "Wish (2023)",
            "year": "2023",
            "releaseState": "Nov 22, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzY0MTEzMWUtOWQ1Ny00MTAzLWE4MmYtYWJhODQyMzMzNjVkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Adventure, Comedy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Alan Tudyk, Ariana DeBose",
            "starList": [
                {
                    "id": null,
                    "name": "Alan Tudyk"
                },
                {
                    "id": null,
                    "name": "Ariana DeBose"
                }
            ]
        },
        {
            "id": "tt10994300",
            "title": "A Figgly Christmas",
            "fullTitle": "A Figgly Christmas (2023)",
            "year": "2023",
            "releaseState": "Nov 24, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNTBkYjdmMjItNWRhZC00NjI1LThmMDUtZmUzYzMzYWZiODMwXkEyXkFqcGdeQXVyMzE2NDI5NzI@._V1_Ratio0.8378_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Family, Fantasy",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Family",
                    "value": "Family"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Matthew Clark \"Ghost\", Tesha Clark, Steven W Lowe",
            "starList": [
                {
                    "id": null,
                    "name": "Matthew Clark \"Ghost\""
                },
                {
                    "id": null,
                    "name": "Tesha Clark"
                },
                {
                    "id": null,
                    "name": "Steven W Lowe"
                }
            ]
        },
        {
            "id": "tt13499272",
            "title": "From the Ashes",
            "fullTitle": "From the Ashes (2023)",
            "year": "2023",
            "releaseState": "Dec 01, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMDQxOWJiMGUtMzhjZi00NTNjLThhYmItNGU1YjM2MGM2ZmE4XkEyXkFqcGdeQXVyMTI2NDQyOTI0._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jeanne Neilson, Paul du Toit, Syreeta Banks, Jeremy John Wells",
            "starList": [
                {
                    "id": null,
                    "name": "Jeanne Neilson"
                },
                {
                    "id": null,
                    "name": "Paul du Toit"
                },
                {
                    "id": null,
                    "name": "Syreeta Banks"
                },
                {
                    "id": null,
                    "name": "Jeremy John Wells"
                }
            ]
        },
        {
            "id": "tt19556180",
            "title": "21st Century Cleo",
            "fullTitle": "21st Century Cleo (2023)",
            "year": "2023",
            "releaseState": "Dec 01, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNmI0MTZjNDEtNGRhNy00N2IxLThjY2MtYzU4YjMxNjRhZjU1XkEyXkFqcGdeQXVyMTMzMDA2NDA2._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Drama, Family",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Julian Seager, Miray Dogan, Gloria El-Achkar, Jaclyn White",
            "starList": [
                {
                    "id": null,
                    "name": "Julian Seager"
                },
                {
                    "id": null,
                    "name": "Miray Dogan"
                },
                {
                    "id": null,
                    "name": "Gloria El-Achkar"
                },
                {
                    "id": null,
                    "name": "Jaclyn White"
                }
            ]
        },
        {
            "id": "tt8134336",
            "title": "A Night Without Tears",
            "fullTitle": "A Night Without Tears (2023)",
            "year": "2023",
            "releaseState": "Dec 01, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYmQ5YWRiYmYtNzQyMi00NTkwLTkzMDctZjBhY2I2YWM4MDJjXkEyXkFqcGdeQXVyMjI4NTMzOQ@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Mystery",
            "genreList": [
                {
                    "key": "Mystery",
                    "value": "Mystery"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Marta Levenfeld, Elia Fernández, Gonzalo Ramos, Victor Ramos",
            "starList": [
                {
                    "id": null,
                    "name": "Marta Levenfeld"
                },
                {
                    "id": null,
                    "name": "Elia Fernández"
                },
                {
                    "id": null,
                    "name": "Gonzalo Ramos"
                },
                {
                    "id": null,
                    "name": "Victor Ramos"
                }
            ]
        },
        {
            "id": "tt15212880",
            "title": "Fuck Them All! The Story of Heaven and Hell. The Making of a Ballet",
            "fullTitle": "Fuck Them All! The Story of Heaven and Hell. The Making of a Ballet (2023)",
            "year": "2023",
            "releaseState": "Dec 01, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZWY5YjRhYzMtNDg3MS00MDFmLTgwNjItODc1OWI5OWU0OGFhXkEyXkFqcGdeQXVyMzQxOTczNg@@._V1_Ratio1.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Old-Nick, Sophie Fournier, John Waterhouse, Jack Parry",
            "starList": [
                {
                    "id": null,
                    "name": "Old-Nick"
                },
                {
                    "id": null,
                    "name": "Sophie Fournier"
                },
                {
                    "id": null,
                    "name": "John Waterhouse"
                },
                {
                    "id": null,
                    "name": "Jack Parry"
                }
            ]
        },
        {
            "id": "tt14960442",
            "title": "A Small Town Christmas",
            "fullTitle": "A Small Town Christmas (2023)",
            "year": "2023",
            "releaseState": "Dec 11, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOGM1MTJmYTYtYzc2MS00ZWIxLWEzYzUtZTI1OWI4ZTNiNzQ1XkEyXkFqcGdeQXVyMzkyNDMzOTA@._V1_Ratio0.7027_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Gin Blanton",
            "starList": [
                {
                    "id": null,
                    "name": "Gin Blanton"
                }
            ]
        },
        {
            "id": "tt21154928",
            "title": "Mia's Bridge",
            "fullTitle": "Mia's Bridge (2023)",
            "year": "2023",
            "releaseState": "Dec 12, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODE5YTU4NDAtOTEyNi00MWEwLTgzMzItMDFmMmEwZmNjMzQyXkEyXkFqcGdeQXVyNjczNDA2ODM@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "David J. Paul, Andrew Jacob Brown, William H. Burns, Randy Watson Jr.",
            "starList": [
                {
                    "id": null,
                    "name": "David J. Paul"
                },
                {
                    "id": null,
                    "name": "Andrew Jacob Brown"
                },
                {
                    "id": null,
                    "name": "William H. Burns"
                },
                {
                    "id": null,
                    "name": "Randy Watson Jr."
                }
            ]
        },
        {
            "id": "tt6166392",
            "title": "Wonka",
            "fullTitle": "Wonka (2023)",
            "year": "2023",
            "releaseState": "Dec 15, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMTY0NjQ1ZmItNDE0Ni00MDQ5LTkxZDItYmU3MTY0ZjhiNjNlXkEyXkFqcGdeQXVyMTQ4MTE5NTE1._V1_Ratio0.8108_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Adventure, Comedy, Family",
            "genreList": [
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Family",
                    "value": "Family"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Timothée Chalamet, Olivia Colman, Sally Hawkins, Rowan Atkinson",
            "starList": [
                {
                    "id": null,
                    "name": "Timothée Chalamet"
                },
                {
                    "id": null,
                    "name": "Olivia Colman"
                },
                {
                    "id": null,
                    "name": "Sally Hawkins"
                },
                {
                    "id": null,
                    "name": "Rowan Atkinson"
                }
            ]
        },
        {
            "id": "tt7418180",
            "title": "Happy Suicide",
            "fullTitle": "Happy Suicide (2023)",
            "year": "2023",
            "releaseState": "Dec 15, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOGYzNWQwMjAtNjM3OS00ODg2LWE1ZWQtMGUxOTE3MjY4NDMwXkEyXkFqcGdeQXVyMjAzODM0MzE@._V1_Ratio1.2973_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Thriller",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Johann Urb, Craig Stark, Reila Aphrodite, Tim Neff",
            "starList": [
                {
                    "id": null,
                    "name": "Johann Urb"
                },
                {
                    "id": null,
                    "name": "Craig Stark"
                },
                {
                    "id": null,
                    "name": "Reila Aphrodite"
                },
                {
                    "id": null,
                    "name": "Tim Neff"
                }
            ]
        },
        {
            "id": "tt21235248",
            "title": "Untitled Ghostbusters Afterlife Sequel",
            "fullTitle": "Untitled Ghostbusters Afterlife Sequel (2023)",
            "year": "2023",
            "releaseState": "Dec 20, 2023",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Adventure, Comedy, Fantasy",
            "genreList": [
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Comedy",
                    "value": "Comedy"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Mckenna Grace, Carrie Coon, Paul Rudd, Finn Wolfhard",
            "starList": [
                {
                    "id": null,
                    "name": "Mckenna Grace"
                },
                {
                    "id": null,
                    "name": "Carrie Coon"
                },
                {
                    "id": null,
                    "name": "Paul Rudd"
                },
                {
                    "id": null,
                    "name": "Finn Wolfhard"
                }
            ]
        },
        {
            "id": "tt1200263",
            "title": "The Color Purple",
            "fullTitle": "The Color Purple (2023)",
            "year": "2023",
            "releaseState": "Dec 20, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMWJkYTlmN2QtYTM0Ny00OTAzLWI3M2YtZjE1NmZlNzZmYjA0XkEyXkFqcGdeQXVyNTk5NTQzNDI@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Musical",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Musical",
                    "value": "Musical"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Taraji P. Henson, Halle Bailey, Elizabeth Marvel, Danielle Brooks",
            "starList": [
                {
                    "id": null,
                    "name": "Taraji P. Henson"
                },
                {
                    "id": null,
                    "name": "Halle Bailey"
                },
                {
                    "id": null,
                    "name": "Elizabeth Marvel"
                },
                {
                    "id": null,
                    "name": "Danielle Brooks"
                }
            ]
        },
        {
            "id": "tt9663764",
            "title": "Aquaman and the Lost Kingdom",
            "fullTitle": "Aquaman and the Lost Kingdom (2023)",
            "year": "2023",
            "releaseState": "Dec 25, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BM2QyYTRkMjMtMDk5NC00OTc0LWIyYTYtNGNhMzRjMTNhNGNkXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_Ratio1.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Fantasy",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Jason Momoa, Ben Affleck, Patrick Wilson, Yahya Abdul-Mateen II",
            "starList": [
                {
                    "id": null,
                    "name": "Jason Momoa"
                },
                {
                    "id": null,
                    "name": "Ben Affleck"
                },
                {
                    "id": null,
                    "name": "Patrick Wilson"
                },
                {
                    "id": null,
                    "name": "Yahya Abdul-Mateen II"
                }
            ]
        },
        {
            "id": "tt8035464",
            "title": "Target Number One",
            "fullTitle": "Target Number One (2023)",
            "year": "2023",
            "releaseState": "Dec 25, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMTI3ODRhMTAtNGEyNy00MmU0LTliZTUtMjI0MTQ1MDNiOGJiXkEyXkFqcGdeQXVyODk2MDA4MA@@._V1_Ratio0.7838_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Thriller",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Thriller",
                    "value": "Thriller"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Arben Bajraktaraj, Andy Deliana, Michael Segal, Klodian Hoxha",
            "starList": [
                {
                    "id": null,
                    "name": "Arben Bajraktaraj"
                },
                {
                    "id": null,
                    "name": "Andy Deliana"
                },
                {
                    "id": null,
                    "name": "Michael Segal"
                },
                {
                    "id": null,
                    "name": "Klodian Hoxha"
                }
            ]
        },
        {
            "id": "tt12053936",
            "title": "Eternal Oath",
            "fullTitle": "Eternal Oath (2023)",
            "year": "2023",
            "releaseState": "Dec 25, 2023",
            "image": "https://m.media-amazon.com/images/M/MV5BN2Y3NDYyMmQtZDJhZC00ZDEwLWFmMTEtMzE4YTA2NjZlZDMzXkEyXkFqcGdeQXVyMzg0NDUyNw@@._V1_Ratio0.6757_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Drama, Fantasy, Romance",
            "genreList": [
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Fantasy",
                    "value": "Fantasy"
                },
                {
                    "key": "Romance",
                    "value": "Romance"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Kathryn Melton, Margarita Reyes, Robyn Von Arx, Mustafa Haidari",
            "starList": [
                {
                    "id": null,
                    "name": "Kathryn Melton"
                },
                {
                    "id": null,
                    "name": "Margarita Reyes"
                },
                {
                    "id": null,
                    "name": "Robyn Von Arx"
                },
                {
                    "id": null,
                    "name": "Mustafa Haidari"
                }
            ]
        },
        {
            "id": "tt8521778",
            "title": "Untitled Bob Marley Biopic",
            "fullTitle": "Untitled Bob Marley Biopic (2024)",
            "year": "2024",
            "releaseState": "Jan 12, 2024",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Biography, Drama, Music",
            "genreList": [
                {
                    "key": "Biography",
                    "value": "Biography"
                },
                {
                    "key": "Drama",
                    "value": "Drama"
                },
                {
                    "key": "Music",
                    "value": "Music"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Lashana Lynch, Kingsley Ben-Adir",
            "starList": [
                {
                    "id": null,
                    "name": "Lashana Lynch"
                },
                {
                    "id": null,
                    "name": "Kingsley Ben-Adir"
                }
            ]
        },
        {
            "id": "tt19845348",
            "title": "El Muerto",
            "fullTitle": "El Muerto (2024)",
            "year": "2024",
            "releaseState": "Jan 12, 2024",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Action, Adventure, Sci-Fi",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                },
                {
                    "key": "Sci-Fi",
                    "value": "Sci-Fi"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Bad Bunny",
            "starList": [
                {
                    "id": null,
                    "name": "Bad Bunny"
                }
            ]
        },
        {
            "id": "tt5834410",
            "title": "The Tiger's Apprentice",
            "fullTitle": "The Tiger's Apprentice (2024)",
            "year": "2024",
            "releaseState": "Jan 19, 2024",
            "image": "https://m.media-amazon.com/images/M/MV5BOTE3NzAyZDAtYzI0My00M2Y3LWI0NTgtYTllMmY4NWI5MWU3XkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_Ratio2.1892_AL_.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Animation, Action, Adventure",
            "genreList": [
                {
                    "key": "Animation",
                    "value": "Animation"
                },
                {
                    "key": "Action",
                    "value": "Action"
                },
                {
                    "key": "Adventure",
                    "value": "Adventure"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Michelle Yeoh, Henry Golding, Sandra Oh, Patrick Gallagher",
            "starList": [
                {
                    "id": null,
                    "name": "Michelle Yeoh"
                },
                {
                    "id": null,
                    "name": "Henry Golding"
                },
                {
                    "id": null,
                    "name": "Sandra Oh"
                },
                {
                    "id": null,
                    "name": "Patrick Gallagher"
                }
            ]
        },
        {
            "id": "tt9682428",
            "title": "Night Swim",
            "fullTitle": "Night Swim (2024)",
            "year": "2024",
            "releaseState": "Jan 19, 2024",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "runtimeMins": null,
            "runtimeStr": null,
            "plot": null,
            "contentRating": null,
            "imDbRating": null,
            "imDbRatingCount": null,
            "metacriticRating": null,
            "genres": "Horror",
            "genreList": [
                {
                    "key": "Horror",
                    "value": "Horror"
                }
            ],
            "directors": null,
            "directorList": [],
            "stars": "Kerry Condon, Wyatt Russell",
            "starList": [
                {
                    "id": null,
                    "name": "Kerry Condon"
                },
                {
                    "id": null,
                    "name": "Wyatt Russell"
                }
            ]
        }
    ];
	  const boxOffice = [
		  {
			id: "tt1630029",
			rank: "1",
			title: "Avatar: The Way of Water",
			image:
			  "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_Ratio0.7015_AL_.jpg",
			weekend: "$20.1M",
			gross: "$598.4M",
			weeks: "6",
		  },
		  {
			id: "tt3915174",
			rank: "2",
			title: "Puss in Boots: The Last Wish",
			image:
			  "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_Ratio0.6716_AL_.jpg",
			weekend: "$11.8M",
			gross: "$126.8M",
			weeks: "5",
		  },
		  {
			id: "tt8760708",
			rank: "3",
			title: "M3GAN",
			image:
			  "https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6716_AL_.jpg",
			weekend: "$9.7M",
			gross: "$73.2M",
			weeks: "3",
		  },
		  {
			id: "tt10855768",
			rank: "4",
			title: "Missing",
			image:
			  "https://m.media-amazon.com/images/M/MV5BNzI3MmU1NjQtZmM2ZC00Y2NkLWFhMDMtZmVhYTc1NTFjZTFhXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_Ratio0.7910_AL_.jpg",
			weekend: "$9.2M",
			gross: "$9.2M",
			weeks: "1",
		  },
		  {
			id: "tt7405458",
			rank: "5",
			title: "A Man Called Otto",
			image:
			  "https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.7910_AL_.jpg",
			weekend: "$8.8M",
			gross: "$35.1M",
			weeks: "4",
		  },
		  {
			id: "tt5884796",
			rank: "6",
			title: "Plane",
			image:
			  "https://m.media-amazon.com/images/M/MV5BZDc4MzVkNzYtZTRiZC00ODYwLWJjZmMtMDIyNjQ1M2M1OGM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.6716_AL_.jpg",
			weekend: "$5.3M",
			gross: "$19.5M",
			weeks: "2",
		  },
		  {
			id: "tt8005118",
			rank: "7",
			title: "House Party",
			image:
			  "https://m.media-amazon.com/images/M/MV5BZDgyYjYwNjAtOWY4MS00YzBkLWFlNTktNDk5ZmQwZGI2OWQwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7910_AL_.jpg",
			weekend: "$1.7M",
			gross: "$7.1M",
			weeks: "2",
		  },
		  {
			id: "tt15467380",
			rank: "8",
			title: "Gekijôban Tensei shitara slime datta ken",
			image:
			  "https://m.media-amazon.com/images/M/MV5BMTRlMjMzNjItYjJmMi00NjBhLTgxZmYtMzhlYjE1ODlhNjE1XkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_Ratio0.7015_AL_.jpg",
			weekend: "$1.6M",
			gross: "$1.6M",
			weeks: "1",
		  },
		  {
			id: "tt9114286",
			rank: "9",
			title: "Black Panther: Wakanda Forever",
			image:
			  "https://m.media-amazon.com/images/M/MV5BY2FlN2U2NzMtOWE2Ni00MWIyLTk3YzQtM2RjNDFkNTlhYTZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6716_AL_.jpg",
			weekend: "$1.4M",
			gross: "$451.8M",
			weeks: "11",
		  },
		  {
			id: "tt13833688",
			rank: "10",
			title: "The Whale",
			image:
			  "https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.7015_AL_.jpg",
			weekend: "$1.3M",
			gross: "$13.2M",
			weeks: "7",
		  },
		];

	return (
		<section className="bg-transparent">
			{comingSoon.length > 0 && <ComingSoon items={[...comingSoon]} />}
			{boxOffice.length > 0 && <BoxOffice items={[...boxOffice]} />}
		</section>
	);
}

export default Section;
