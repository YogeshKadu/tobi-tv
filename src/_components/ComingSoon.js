import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function ComingSoon(props) {
  // https://imdb-api.com/en/API/BoxOffice/k_4gnm15cg

  //   {
  //     "id": "tt23871506",
  //     "title": "Facing the Laughter: Minnie Pearl",
  //     "fullTitle": "Facing the Laughter: Minnie Pearl (2023)",
  //     "year": "2023",
  //     "releaseState": "Feb 06, 2023",
  //     "image": "https://m.media-amazon.com/images/M/MV5BOWYyY2YwNTktMDhlNS00MWY5LWFlMzctNzUzMGE3ZWQxMTFiXkEyXkFqcGdeQXVyMTM1NTcxNzYw._V1_UX128_CR0,3,128,176_AL_.jpg",
  //     "runtimeMins": null,
  //     "runtimeStr": null,
  //     "plot": null,
  //     "contentRating": null,
  //     "imDbRating": null,
  //     "imDbRatingCount": null,
  //     "metacriticRating": null,
  //     "genres": "Documentary",
  //     "genreList": [
  //       {
  //         "key": "Documentary",
  //         "value": "Documentary"
  //       }
  //     ],
  //     "directors": null,
  //     "directorList": [],
  //     "stars": "Barbi Benton, Reba McEntire, Paul Reubens, Dwight Yoakam",
  //     "starList": [
  //       {
  //         "id": null,
  //         "name": "Barbi Benton"
  //       },
  //       {
  //         "id": null,
  //         "name": "Reba McEntire"
  //       },
  //       {
  //         "id": null,
  //         "name": "Paul Reubens"
  //       },
  //       {
  //         "id": null,
  //         "name": "Dwight Yoakam"
  //       }
  //     ]
  //   },

  const comingSoon = {
    items: [
      {
        id: "tt23871506",
        title: "Facing the Laughter: Minnie Pearl",
        fullTitle: "Facing the Laughter: Minnie Pearl (2023)",
        year: "2023",
        releaseState: "Feb 06, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOWYyY2YwNTktMDhlNS00MWY5LWFlMzctNzUzMGE3ZWQxMTFiXkEyXkFqcGdeQXVyMTM1NTcxNzYw._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Documentary",
        genreList: [
          {
            key: "Documentary",
            value: "Documentary",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Barbi Benton, Reba McEntire, Paul Reubens, Dwight Yoakam",
        starList: [
          {
            id: null,
            name: "Barbi Benton",
          },
          {
            id: null,
            name: "Reba McEntire",
          },
          {
            id: null,
            name: "Paul Reubens",
          },
          {
            id: null,
            name: "Dwight Yoakam",
          },
        ],
      },
      {
        id: "tt16280138",
        title: "Magic Mike's Last Dance",
        fullTitle: "Magic Mike's Last Dance (2023)",
        year: "2023",
        releaseState: "Feb 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTg4ZWZhODQtNWVhNC00NjA1LWJhZjgtZTFkY2JmNWJlYzU0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Salma Hayek, Channing Tatum, Caitlin Gerard, Nancy Carroll",
        starList: [
          {
            id: null,
            name: "Salma Hayek",
          },
          {
            id: null,
            name: "Channing Tatum",
          },
          {
            id: null,
            name: "Caitlin Gerard",
          },
          {
            id: null,
            name: "Nancy Carroll",
          },
        ],
      },
      {
        id: "tt4586828",
        title: "Seriously Red",
        fullTitle: "Seriously Red (2022)",
        year: "2022",
        releaseState: "Feb 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDQzZTVmZWMtYWJkNy00ZGViLThiNzctMzEwMmNmMDY5NWI2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama, Music",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Music",
            value: "Music",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Krew Boylan, Daniel Webber, Rose Byrne, Celeste Barber",
        starList: [
          {
            id: null,
            name: "Krew Boylan",
          },
          {
            id: null,
            name: "Daniel Webber",
          },
          {
            id: null,
            name: "Rose Byrne",
          },
          {
            id: null,
            name: "Celeste Barber",
          },
        ],
      },
      {
        id: "tt11718516",
        title: "Huesera: The Bone Woman",
        fullTitle: "Huesera: The Bone Woman (2022)",
        year: "2022",
        releaseState: "Feb 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTkxOWYxODItZmJhYi00NjllLWIzMWItMWZiYTQ3Mzc2MjY5XkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Horror",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Alfonso Dosal, Mayra Batalla, Natalia Solián, Sonia Couoh",
        starList: [
          {
            id: null,
            name: "Alfonso Dosal",
          },
          {
            id: null,
            name: "Mayra Batalla",
          },
          {
            id: null,
            name: "Natalia Solián",
          },
          {
            id: null,
            name: "Sonia Couoh",
          },
        ],
      },
      {
        id: "tt14905554",
        title: "She Came from the Woods",
        fullTitle: "She Came from the Woods (2022)",
        year: "2022",
        releaseState: "Feb 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTQ1NmFhMTgtMGE1Ny00MzY5LWIwZTEtZDEwYzYzMDgwNTY1XkEyXkFqcGdeQXVyMjY3ODc2MTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Horror",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Cara Buono, Clare Foley, Spencer List, William Sadler",
        starList: [
          {
            id: null,
            name: "Cara Buono",
          },
          {
            id: null,
            name: "Clare Foley",
          },
          {
            id: null,
            name: "Spencer List",
          },
          {
            id: null,
            name: "William Sadler",
          },
        ],
      },
      {
        id: "tt13528122",
        title: "iMordecai",
        fullTitle: "iMordecai (2022)",
        year: "2022",
        releaseState: "Feb 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDcxZjkxMGMtZDkwMS00MWExLThlMTctYWZjNjg0YzE1YmUwXkEyXkFqcGdeQXVyMTA2NDY0MTY1._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama, Family",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Judd Hirsch, Carol Kane, Sean Astin, Nick Puga",
        starList: [
          {
            id: null,
            name: "Judd Hirsch",
          },
          {
            id: null,
            name: "Carol Kane",
          },
          {
            id: null,
            name: "Sean Astin",
          },
          {
            id: null,
            name: "Nick Puga",
          },
        ],
      },
      {
        id: "tt6722802",
        title: "Marlowe",
        fullTitle: "Marlowe (2022)",
        year: "2022",
        releaseState: "Feb 15, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2EzNWEwNmYtMGE2NC00Y2NiLTk5NGEtZmRlZDE0Y2M0Yzg5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Crime, Mystery, Thriller",
        genreList: [
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Liam Neeson, Diane Kruger, Jessica Lange, Adewale Akinnuoye-Agbaje",
        starList: [
          {
            id: null,
            name: "Liam Neeson",
          },
          {
            id: null,
            name: "Diane Kruger",
          },
          {
            id: null,
            name: "Jessica Lange",
          },
          {
            id: null,
            name: "Adewale Akinnuoye-Agbaje",
          },
        ],
      },
      {
        id: "tt10954600",
        title: "Ant-Man and the Wasp: Quantumania",
        fullTitle: "Ant-Man and the Wasp: Quantumania (2023)",
        year: "2023",
        releaseState: "Feb 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDIzM2FlNTctNjAzZi00YzhkLThjYWQtMDY5Njc0NjdmMGVlXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Comedy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Paul Rudd, Evangeline Lilly, Jonathan Majors, Kathryn Newton",
        starList: [
          {
            id: null,
            name: "Paul Rudd",
          },
          {
            id: null,
            name: "Evangeline Lilly",
          },
          {
            id: null,
            name: "Jonathan Majors",
          },
          {
            id: null,
            name: "Kathryn Newton",
          },
        ],
      },
      {
        id: "tt11952084",
        title: "Who Are You People",
        fullTitle: "Who Are You People (2023)",
        year: "2023",
        releaseState: "Feb 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzBjNjU0OGQtZGJlMS00MDIwLWIyMDUtN2JiYmYzMDIyYWM5XkEyXkFqcGdeQXVyMTU5MzU3MDk@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Alyssa Milano, Devon Sawa, Ema Horvath, Yeardley Smith",
        starList: [
          {
            id: null,
            name: "Alyssa Milano",
          },
          {
            id: null,
            name: "Devon Sawa",
          },
          {
            id: null,
            name: "Ema Horvath",
          },
          {
            id: null,
            name: "Yeardley Smith",
          },
        ],
      },
      {
        id: "tt19386904",
        title: "Heart of a Champion",
        fullTitle: "Heart of a Champion (2023)",
        year: "2023",
        releaseState: "Feb 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZDAwOGUzMjQtNDdmZi00NGJiLThmMTItMzEyOTcyYTgwMDFhXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Family",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Casper Van Dien, YaYa Gosselin, Edward Furlong, Major Dodge Jr.",
        starList: [
          {
            id: null,
            name: "Casper Van Dien",
          },
          {
            id: null,
            name: "YaYa Gosselin",
          },
          {
            id: null,
            name: "Edward Furlong",
          },
          {
            id: null,
            name: "Major Dodge Jr.",
          },
        ],
      },
      {
        id: "tt26345845",
        title: "Devil's Peak",
        fullTitle: "Devil's Peak (2023)",
        year: "2023",
        releaseState: "Feb 17, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Crime, Thriller",
        genreList: [
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Jackie Earle Haley, Hopper Penn, Billy Bob Thornton, Robin Wright",
        starList: [
          {
            id: null,
            name: "Jackie Earle Haley",
          },
          {
            id: null,
            name: "Hopper Penn",
          },
          {
            id: null,
            name: "Billy Bob Thornton",
          },
          {
            id: null,
            name: "Robin Wright",
          },
        ],
      },
      {
        id: "tt19800020",
        title: "88",
        fullTitle: "88 (2022)",
        year: "2022",
        releaseState: "Feb 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzFjOWY4OGEtOGJkNS00NWQ3LTg2MjctODY4Y2Y0ZWVlZDkzXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Thriller",
        genreList: [
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Shellye Broughton, Gregory Butler, Jonathan Camp, Vinny Chhibber",
        starList: [
          {
            id: null,
            name: "Shellye Broughton",
          },
          {
            id: null,
            name: "Gregory Butler",
          },
          {
            id: null,
            name: "Jonathan Camp",
          },
          {
            id: null,
            name: "Vinny Chhibber",
          },
        ],
      },
      {
        id: "tt18228142",
        title: "The Weapon",
        fullTitle: "The Weapon (2023)",
        year: "2023",
        releaseState: "Feb 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjkwOWQ3NmYtN2YzNi00ZmVkLTkzOWEtYTMxNzkwNTRiOGQwXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Tony Schiena, Bruce Dern, Sean Patrick Flanery, Cuba Gooding Jr.",
        starList: [
          {
            id: null,
            name: "Tony Schiena",
          },
          {
            id: null,
            name: "Bruce Dern",
          },
          {
            id: null,
            name: "Sean Patrick Flanery",
          },
          {
            id: null,
            name: "Cuba Gooding Jr.",
          },
        ],
      },
      {
        id: "tt25391092",
        title: "Welcome to Valentine",
        fullTitle: "Welcome to Valentine (2023)",
        year: "2023",
        releaseState: "Feb 18, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Romance",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Romance",
            value: "Romance",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Kathryn Davis, Markian Tarasiuk, Sophie Bastelle, Baeyen Hoffman",
        starList: [
          {
            id: null,
            name: "Kathryn Davis",
          },
          {
            id: null,
            name: "Markian Tarasiuk",
          },
          {
            id: null,
            name: "Sophie Bastelle",
          },
          {
            id: null,
            name: "Baeyen Hoffman",
          },
        ],
      },
      {
        id: "tt14209916",
        title: "Cocaine Bear",
        fullTitle: "Cocaine Bear (2023)",
        year: "2023",
        releaseState: "Feb 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzlhY2NiNWItYTAyNS00YjhmLTgxNzgtZWNjMjQ4YmMyYmM4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Thriller",
        genreList: [
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Ray Liotta, Margo Martindale, Keri Russell, Alden Ehrenreich",
        starList: [
          {
            id: null,
            name: "Ray Liotta",
          },
          {
            id: null,
            name: "Margo Martindale",
          },
          {
            id: null,
            name: "Keri Russell",
          },
          {
            id: null,
            name: "Alden Ehrenreich",
          },
        ],
      },
      {
        id: "tt23177868",
        title: "Mummies",
        fullTitle: "Mummies (2023)",
        year: "2023",
        releaseState: "Feb 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWU0ZjJiOGItZDUwNy00MDE1LTk2ZjEtY2YwMzQxZGJjYjFjXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Comedy, Family",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Sean Bean, Joe Thomas, Eleanor Tomlinson, Santiago Winder",
        starList: [
          {
            id: null,
            name: "Sean Bean",
          },
          {
            id: null,
            name: "Joe Thomas",
          },
          {
            id: null,
            name: "Eleanor Tomlinson",
          },
          {
            id: null,
            name: "Santiago Winder",
          },
        ],
      },
      {
        id: "tt10098448",
        title: "Jesus Revolution",
        fullTitle: "Jesus Revolution (2023)",
        year: "2023",
        releaseState: "Feb 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDkzM2I5NmEtMTE4My00NWVlLWJmZjctYWM0YTE2MzhkNjc3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Jonathan Roumie, Kimberly Williams-Paisley, Kelsey Grammer, Nicholas Cirillo",
        starList: [
          {
            id: null,
            name: "Jonathan Roumie",
          },
          {
            id: null,
            name: "Kimberly Williams-Paisley",
          },
          {
            id: null,
            name: "Kelsey Grammer",
          },
          {
            id: null,
            name: "Nicholas Cirillo",
          },
        ],
      },
      {
        id: "tt24850716",
        title: "Quackers",
        fullTitle: "Quackers (2023)",
        year: "2023",
        releaseState: "Feb 24, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Adventure, Comedy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Stella Stevens, Kimiko Glenn, Ali Wong, Ted Raimi",
        starList: [
          {
            id: null,
            name: "Stella Stevens",
          },
          {
            id: null,
            name: "Kimiko Glenn",
          },
          {
            id: null,
            name: "Ali Wong",
          },
          {
            id: null,
            name: "Ted Raimi",
          },
        ],
      },
      {
        id: "tt3197780",
        title: "My Happy Ending",
        fullTitle: "My Happy Ending (2023)",
        year: "2023",
        releaseState: "Feb 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWE0OGY5ZTgtNDRhZC00ZWY4LTkxZDgtYjAxMDU2NzU5MWJlXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Andie MacDowell, Miriam Margolyes, Tom Cullen, Sally Phillips",
        starList: [
          {
            id: null,
            name: "Andie MacDowell",
          },
          {
            id: null,
            name: "Miriam Margolyes",
          },
          {
            id: null,
            name: "Tom Cullen",
          },
          {
            id: null,
            name: "Sally Phillips",
          },
        ],
      },
      {
        id: "tt21030012",
        title: "Primary Position",
        fullTitle: "Primary Position (2023)",
        year: "2023",
        releaseState: "Mar 01, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjMzZTc0MDAtMGNiNy00M2MxLTkyNjMtODVhMTYyMjZhYmFiXkEyXkFqcGdeQXVyMTUzNjE3OTYx._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Drama, War",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "War",
            value: "War",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Robert Amparan, Omar Gooding, Kris D. Lofton, Antwon Tanner",
        starList: [
          {
            id: null,
            name: "Robert Amparan",
          },
          {
            id: null,
            name: "Omar Gooding",
          },
          {
            id: null,
            name: "Kris D. Lofton",
          },
          {
            id: null,
            name: "Antwon Tanner",
          },
        ],
      },
      {
        id: "tt11145118",
        title: "Creed III",
        fullTitle: "Creed III (2023)",
        year: "2023",
        releaseState: "Mar 03, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTU1NzY2MzctNTI4MS00OGMwLTk5Y2ItMTEzYzg1Zjc5ODFmXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Sport",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Sport",
            value: "Sport",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Jonathan Majors, Michael B. Jordan, Tessa Thompson, Wood Harris",
        starList: [
          {
            id: null,
            name: "Jonathan Majors",
          },
          {
            id: null,
            name: "Michael B. Jordan",
          },
          {
            id: null,
            name: "Tessa Thompson",
          },
          {
            id: null,
            name: "Wood Harris",
          },
        ],
      },
      {
        id: "tt19363554",
        title: "Sound of Silence",
        fullTitle: "Sound of Silence (2023)",
        year: "2023",
        releaseState: "Mar 03, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWFjYzI0MzAtMzQwNS00M2E3LWI2YzUtNTg4ZDJmZTBmNDk3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Lucia Caporaso, Daniele De Martino, Penelope Sangiorgi, Rocco Marazzita",
        starList: [
          {
            id: null,
            name: "Lucia Caporaso",
          },
          {
            id: null,
            name: "Daniele De Martino",
          },
          {
            id: null,
            name: "Penelope Sangiorgi",
          },
          {
            id: null,
            name: "Rocco Marazzita",
          },
        ],
      },
      {
        id: "tt15213120",
        title: "No Family Without Blood",
        fullTitle: "No Family Without Blood (2023)",
        year: "2023",
        releaseState: "Mar 03, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjgzNjMzNDAtNjRkZC00OTZlLWJjNjctMGUzYWRjY2E4Y2Q4XkEyXkFqcGdeQXVyMTI0Njk2MTU5._V1_UY176_CR19,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Adventure, Mystery, Thriller",
        genreList: [
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Philip Michael Thomas, Chance the Rapper, Michael Emery, Aaron D. Spears",
        starList: [
          {
            id: null,
            name: "Philip Michael Thomas",
          },
          {
            id: null,
            name: "Chance the Rapper",
          },
          {
            id: null,
            name: "Michael Emery",
          },
          {
            id: null,
            name: "Aaron D. Spears",
          },
        ],
      },
      {
        id: "tt20848830",
        title: "Hunt Her, Kill Her",
        fullTitle: "Hunt Her, Kill Her (2022)",
        year: "2022",
        releaseState: "Mar 03, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTVmNWZkODMtOGZhNC00ZGI0LTkyNmMtYjgxNDhiOTBhNGY0XkEyXkFqcGdeQXVyODcyNDIxMDE@._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror, Thriller",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Natalie Terrazzino, JC Oakley III, Larry Bunton, Philip Zimny",
        starList: [
          {
            id: null,
            name: "Natalie Terrazzino",
          },
          {
            id: null,
            name: "JC Oakley III",
          },
          {
            id: null,
            name: "Larry Bunton",
          },
          {
            id: null,
            name: "Philip Zimny",
          },
        ],
      },
      {
        id: "tt10929438",
        title: "God Bless you Al Pacino",
        fullTitle: "God Bless you Al Pacino (2023)",
        year: "2023",
        releaseState: "Mar 03, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjg4MTI5YzgtZTM0ZS00ODQ4LWI0NWItOWQyNWM2OWU3NzdlXkEyXkFqcGdeQXVyMzU4ODc0MDA@._V1_UY176_CR22,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Roberto Benigni, Renée Taylor, Despina Mirou, Arianna Huffington",
        starList: [
          {
            id: null,
            name: "Roberto Benigni",
          },
          {
            id: null,
            name: "Renée Taylor",
          },
          {
            id: null,
            name: "Despina Mirou",
          },
          {
            id: null,
            name: "Arianna Huffington",
          },
        ],
      },
      {
        id: "tt15548424",
        title: "Helvellyn Edge",
        fullTitle: "Helvellyn Edge (2023)",
        year: "2023",
        releaseState: "Mar 06, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Fantasy",
        genreList: [
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Ever Anderson, Amita Suman, David Iacono, Ryder Allen",
        starList: [
          {
            id: null,
            name: "Ever Anderson",
          },
          {
            id: null,
            name: "Amita Suman",
          },
          {
            id: null,
            name: "David Iacono",
          },
          {
            id: null,
            name: "Ryder Allen",
          },
        ],
      },
      {
        id: "tt17663992",
        title: "Scream VI",
        fullTitle: "Scream VI (2023)",
        year: "2023",
        releaseState: "Mar 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTQ5OTkxNGEtZjZkMS00ZjBlLWE2OWYtM2ZkOTU3MjRlNzAxXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_UY176_CR7,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror, Mystery, Thriller",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Melissa Barrera, Courteney Cox, Jenna Ortega, Jasmin Savoy Brown",
        starList: [
          {
            id: null,
            name: "Melissa Barrera",
          },
          {
            id: null,
            name: "Courteney Cox",
          },
          {
            id: null,
            name: "Jenna Ortega",
          },
          {
            id: null,
            name: "Jasmin Savoy Brown",
          },
        ],
      },
      {
        id: "tt12261776",
        title: "65",
        fullTitle: "65 (2023)",
        year: "2023",
        releaseState: "Mar 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzFhM2M1MDUtNDhmNC00YzEzLThiMzctYWYxZTc0MGJhNWYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UY176_CR7,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Drama",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Adam Driver, Ariana Greenblatt, Chloe Coleman, Nika King",
        starList: [
          {
            id: null,
            name: "Adam Driver",
          },
          {
            id: null,
            name: "Ariana Greenblatt",
          },
          {
            id: null,
            name: "Chloe Coleman",
          },
          {
            id: null,
            name: "Nika King",
          },
        ],
      },
      {
        id: "tt15339570",
        title: "Champions",
        fullTitle: "Champions (2023)",
        year: "2023",
        releaseState: "Mar 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTYwMWJjZTgtMzJiNS00OGIzLWE1NDYtNjgwMDUwYjZiOTc5XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama, Sport",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Sport",
            value: "Sport",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Woody Harrelson, Ernie Hudson, Cheech Marin, Matt Cook",
        starList: [
          {
            id: null,
            name: "Woody Harrelson",
          },
          {
            id: null,
            name: "Ernie Hudson",
          },
          {
            id: null,
            name: "Cheech Marin",
          },
          {
            id: null,
            name: "Matt Cook",
          },
        ],
      },
      {
        id: "tt8010064",
        title: "Bunker",
        fullTitle: "Bunker (2022)",
        year: "2022",
        releaseState: "Mar 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOGI2NWMyMmYtNmFiNS00NmYwLTlmZWEtNTI5NWIxZTAyMjcxXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror, Thriller",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Roger Clark, Luke Baines, Kayla Radomski, Sean Cullen",
        starList: [
          {
            id: null,
            name: "Roger Clark",
          },
          {
            id: null,
            name: "Luke Baines",
          },
          {
            id: null,
            name: "Kayla Radomski",
          },
          {
            id: null,
            name: "Sean Cullen",
          },
        ],
      },
      {
        id: "tt8206398",
        title: "The Magic Flute",
        fullTitle: "The Magic Flute (2022)",
        year: "2022",
        releaseState: "Mar 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjg3MDY1N2ItMzZjZC00MTc0LThiYjYtYmFkNWNmODEyZDU0XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Adventure, Fantasy, Musical",
        genreList: [
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
          {
            key: "Musical",
            value: "Musical",
          },
        ],
        directors: null,
        directorList: [],
        stars: "F. Murray Abraham, Jeanne Goursaud, Iwan Rheon, Amir Wilson",
        starList: [
          {
            id: null,
            name: "F. Murray Abraham",
          },
          {
            id: null,
            name: "Jeanne Goursaud",
          },
          {
            id: null,
            name: "Iwan Rheon",
          },
          {
            id: null,
            name: "Amir Wilson",
          },
        ],
      },
      {
        id: "tt10151854",
        title: "Shazam! Fury of the Gods",
        fullTitle: "Shazam! Fury of the Gods (2023)",
        year: "2023",
        releaseState: "Mar 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTJkMTBjZWEtMzhhMy00MjlkLTkyNTYtNGZjNGM4Mjk5YTEyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY176_CR7,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Comedy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Zachary Levi, Grace Caroline Currey, Helen Mirren, Meagan Good",
        starList: [
          {
            id: null,
            name: "Zachary Levi",
          },
          {
            id: null,
            name: "Grace Caroline Currey",
          },
          {
            id: null,
            name: "Helen Mirren",
          },
          {
            id: null,
            name: "Meagan Good",
          },
        ],
      },
      {
        id: "tt14781036",
        title: "Inside",
        fullTitle: "Inside (2023)",
        year: "2023",
        releaseState: "Mar 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOWU0MjdiMmQtMTQ2OC00YzY4LWEzN2ItOTE4NjIwNmJjMWZmXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Willem Dafoe, Gene Bervoets, Eliza Stuyck, Josia Krug",
        starList: [
          {
            id: null,
            name: "Willem Dafoe",
          },
          {
            id: null,
            name: "Gene Bervoets",
          },
          {
            id: null,
            name: "Eliza Stuyck",
          },
          {
            id: null,
            name: "Josia Krug",
          },
        ],
      },
      {
        id: "tt6615224",
        title: "A Snowy Day in Oakland",
        fullTitle: "A Snowy Day in Oakland (2023)",
        year: "2023",
        releaseState: "Mar 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmQ1ZDU1MjAtZjU0My00YzZjLTkzODQtODgyZWZlMDRmOWJjXkEyXkFqcGdeQXVyMTE1MjE4Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Nicole Ari Parker, Evan Ross, Arden Myrin, Roger Cross",
        starList: [
          {
            id: null,
            name: "Nicole Ari Parker",
          },
          {
            id: null,
            name: "Evan Ross",
          },
          {
            id: null,
            name: "Arden Myrin",
          },
          {
            id: null,
            name: "Roger Cross",
          },
        ],
      },
      {
        id: "tt6722400",
        title: "Fast Charlie",
        fullTitle: "Fast Charlie (2023)",
        year: "2023",
        releaseState: "Mar 17, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Morena Baccarin, Pierce Brosnan, James Caan, Toby Huss",
        starList: [
          {
            id: null,
            name: "Morena Baccarin",
          },
          {
            id: null,
            name: "Pierce Brosnan",
          },
          {
            id: null,
            name: "James Caan",
          },
          {
            id: null,
            name: "Toby Huss",
          },
        ],
      },
      {
        id: "tt10366206",
        title: "John Wick: Chapter 4",
        fullTitle: "John Wick: Chapter 4 (2023)",
        year: "2023",
        releaseState: "Mar 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Crime, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Keanu Reeves, Donnie Yen, Bill Skarsgård, Laurence Fishburne",
        starList: [
          {
            id: null,
            name: "Keanu Reeves",
          },
          {
            id: null,
            name: "Donnie Yen",
          },
          {
            id: null,
            name: "Bill Skarsgård",
          },
          {
            id: null,
            name: "Laurence Fishburne",
          },
        ],
      },
      {
        id: "tt14153080",
        title: "A Good Person",
        fullTitle: "A Good Person (2023)",
        year: "2023",
        releaseState: "Mar 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjhhM2U4OGQtZTAxMi00OWJiLWIxZWQtYjQ1M2RiYmQxMjE1XkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Florence Pugh, Morgan Freeman, Celeste O'Connor, Molly Shannon",
        starList: [
          {
            id: null,
            name: "Florence Pugh",
          },
          {
            id: null,
            name: "Morgan Freeman",
          },
          {
            id: null,
            name: "Celeste O'Connor",
          },
          {
            id: null,
            name: "Molly Shannon",
          },
        ],
      },
      {
        id: "tt22017230",
        title: "Soft",
        fullTitle: "Soft (2022)",
        year: "2022",
        releaseState: "Mar 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmExYmFiOTktYjUxZi00MDhkLTlhYTctMWI3MWVjYjZjZTI4XkEyXkFqcGdeQXVyMTEwMTQ0Njk3._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Matteus Lunot, Harlow Joy, Zion Matheson, Miyoko Anderson",
        starList: [
          {
            id: null,
            name: "Matteus Lunot",
          },
          {
            id: null,
            name: "Harlow Joy",
          },
          {
            id: null,
            name: "Zion Matheson",
          },
          {
            id: null,
            name: "Miyoko Anderson",
          },
        ],
      },
      {
        id: "tt10294634",
        title: "Wildfire: The Legend of the Cherokee Ghost Horse",
        fullTitle: "Wildfire: The Legend of the Cherokee Ghost Horse (2023)",
        year: "2023",
        releaseState: "Mar 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmQxN2Q1MmEtMmJmZC00Y2JkLWE4YzQtNWUwNTI5ZjZhZGQ2XkEyXkFqcGdeQXVyMjgzODgyNQ@@._V1_UY176_CR24,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Family",
        genreList: [
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Anne Heche, Mo Brings Plenty, Adrian Paul, Robert Rusler",
        starList: [
          {
            id: null,
            name: "Anne Heche",
          },
          {
            id: null,
            name: "Mo Brings Plenty",
          },
          {
            id: null,
            name: "Adrian Paul",
          },
          {
            id: null,
            name: "Robert Rusler",
          },
        ],
      },
      {
        id: "tt24079736",
        title: "Nam June Paik: Moon Is the Oldest TV",
        fullTitle: "Nam June Paik: Moon Is the Oldest TV (2023)",
        year: "2023",
        releaseState: "Mar 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYWIyYmRjZmYtNDUwNS00NjkzLWE0N2EtZTQyYWNlODY4YTgzXkEyXkFqcGdeQXVyMTU0ODMwNjg2._V1_UY176_CR93,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Documentary",
        genreList: [
          {
            key: "Documentary",
            value: "Documentary",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Nam June Paik",
        starList: [
          {
            id: null,
            name: "Nam June Paik",
          },
        ],
      },
      {
        id: "tt21871988",
        title: "The Bogman",
        fullTitle: "The Bogman (2023)",
        year: "2023",
        releaseState: "Mar 25, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BY2MwMDUyMjgtN2FlMS00NDZlLTlmOGYtMzE2YTFjZTcwMmRkXkEyXkFqcGdeQXVyMTUzNDEyNzE2._V1_UY176_CR93,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Mike Myers, Frankie Thomas, Mitch Laing, Christian Gross",
        starList: [
          {
            id: null,
            name: "Mike Myers",
          },
          {
            id: null,
            name: "Frankie Thomas",
          },
          {
            id: null,
            name: "Mitch Laing",
          },
          {
            id: null,
            name: "Christian Gross",
          },
        ],
      },
      {
        id: "tt2906216",
        title: "Dungeons & Dragons: Honor Among Thieves",
        fullTitle: "Dungeons & Dragons: Honor Among Thieves (2023)",
        year: "2023",
        releaseState: "Mar 31, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjAyMGMwYTEtNDk4ZS00YmY0LThhZjUtOWI4ZjFmZmU4N2I3XkEyXkFqcGdeQXVyMTEyNzQ1MTk0._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Fantasy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith",
        starList: [
          {
            id: null,
            name: "Chris Pine",
          },
          {
            id: null,
            name: "Michelle Rodriguez",
          },
          {
            id: null,
            name: "Regé-Jean Page",
          },
          {
            id: null,
            name: "Justice Smith",
          },
        ],
      },
      {
        id: "tt14555174",
        title: "Assassin",
        fullTitle: "Assassin (2023)",
        year: "2023",
        releaseState: "Mar 31, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDNiMDJjZjUtMDg1Zi00MjU4LThiZWEtMmNmYTZkNmU1NjZiXkEyXkFqcGdeQXVyNzUwMDA5NDE@._V1_UY176_CR76,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Crime, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Bruce Willis, Andy Allo, Dominic Purcell, Mustafa Shakir",
        starList: [
          {
            id: null,
            name: "Bruce Willis",
          },
          {
            id: null,
            name: "Andy Allo",
          },
          {
            id: null,
            name: "Dominic Purcell",
          },
          {
            id: null,
            name: "Mustafa Shakir",
          },
        ],
      },
      {
        id: "tt19757912",
        title: "Acidman",
        fullTitle: "Acidman (2022)",
        year: "2022",
        releaseState: "Mar 31, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjVjNDM4N2QtYWE2Mi00MWY0LWIwMmQtNjk4YzQzZjhmNDFkXkEyXkFqcGdeQXVyODU4Mzk3Ng@@._V1_UY176_CR74,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Sci-Fi",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Sci-Fi",
            value: "Sci-Fi",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Dianna Agron, Thomas Haden Church, Sameerah Luqmaan-Harris",
        starList: [
          {
            id: null,
            name: "Dianna Agron",
          },
          {
            id: null,
            name: "Thomas Haden Church",
          },
          {
            id: null,
            name: "Sameerah Luqmaan-Harris",
          },
        ],
      },
      {
        id: "tt12311970",
        title: "A Walking Miracle",
        fullTitle: "A Walking Miracle (2023)",
        year: "2023",
        releaseState: "Apr 04, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BY2Y3MDFiZjEtZDIxMS00ZjU5LTkwYjItM2FkMmRlNjcwZWZhXkEyXkFqcGdeQXVyNjgyMTA4NzQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Johnny Valentine, William Baldwin, Denise Richards, Stephen Baldwin",
        starList: [
          {
            id: null,
            name: "Johnny Valentine",
          },
          {
            id: null,
            name: "William Baldwin",
          },
          {
            id: null,
            name: "Denise Richards",
          },
          {
            id: null,
            name: "Stephen Baldwin",
          },
        ],
      },
      {
        id: "tt16419074",
        title: "Air",
        fullTitle: "Air (2023)",
        year: "2023",
        releaseState: "Apr 05, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Matt Damon, Ben Affleck, Jason Bateman, Viola Davis",
        starList: [
          {
            id: null,
            name: "Matt Damon",
          },
          {
            id: null,
            name: "Ben Affleck",
          },
          {
            id: null,
            name: "Jason Bateman",
          },
          {
            id: null,
            name: "Viola Davis",
          },
        ],
      },
      {
        id: "tt6718170",
        title: "The Super Mario Bros. Movie",
        fullTitle: "The Super Mario Bros. Movie (2023)",
        year: "2023",
        releaseState: "Apr 07, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNGZhYWIyZWUtOTdjZS00ZTc1LWFlZDMtNzU5MTE0OTcyMjg1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Adventure, Comedy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black",
        starList: [
          {
            id: null,
            name: "Chris Pratt",
          },
          {
            id: null,
            name: "Anya Taylor-Joy",
          },
          {
            id: null,
            name: "Charlie Day",
          },
          {
            id: null,
            name: "Jack Black",
          },
        ],
      },
      {
        id: "tt12758486",
        title: "Chevalier",
        fullTitle: "Chevalier (2022)",
        year: "2022",
        releaseState: "Apr 07, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDU5OTBhNzEtYjllNS00Y2RkLWEzYTgtOTRmMGZhOTYyYmMwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography, Drama, History",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "History",
            value: "History",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Lucy Boynton, Samara Weaving, Minnie Driver, Marton Csokas",
        starList: [
          {
            id: null,
            name: "Lucy Boynton",
          },
          {
            id: null,
            name: "Samara Weaving",
          },
          {
            id: null,
            name: "Minnie Driver",
          },
          {
            id: null,
            name: "Marton Csokas",
          },
        ],
      },
      {
        id: "tt18550182",
        title: "R.M.N.",
        fullTitle: "R.M.N. (2022)",
        year: "2022",
        releaseState: "Apr 07, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2VkNjg0NjUtNTI5OC00NmQ2LThhMzgtYjA4MGMxYzQ2MGUzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_UY176_CR0,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Marin Grigore, Judith State, Macrina Barladeanu, Orsolya Moldován",
        starList: [
          {
            id: null,
            name: "Marin Grigore",
          },
          {
            id: null,
            name: "Judith State",
          },
          {
            id: null,
            name: "Macrina Barladeanu",
          },
          {
            id: null,
            name: "Orsolya Moldován",
          },
        ],
      },
      {
        id: "tt13375076",
        title: "The Pope's Exorcist",
        fullTitle: "The Pope's Exorcist (2023)",
        year: "2023",
        releaseState: "Apr 07, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror, Thriller",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Russell Crowe, Ralph Ineson, Franco Nero, Alex Essoe",
        starList: [
          {
            id: null,
            name: "Russell Crowe",
          },
          {
            id: null,
            name: "Ralph Ineson",
          },
          {
            id: null,
            name: "Franco Nero",
          },
          {
            id: null,
            name: "Alex Essoe",
          },
        ],
      },
      {
        id: "tt13929998",
        title: "On a Wing and a Prayer",
        fullTitle: "On a Wing and a Prayer (2023)",
        year: "2023",
        releaseState: "Apr 07, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZGM3ZmYwMDctMDM1Ni00ZjdjLTg1YjgtM2I0NWQ1ZDY4YzMzXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_UY176_CR0,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Dennis Quaid, Heather Graham, Jesse Metcalfe, Anna Enger Ritch",
        starList: [
          {
            id: null,
            name: "Dennis Quaid",
          },
          {
            id: null,
            name: "Heather Graham",
          },
          {
            id: null,
            name: "Jesse Metcalfe",
          },
          {
            id: null,
            name: "Anna Enger Ritch",
          },
        ],
      },
      {
        id: "tt14472156",
        title: "Paint",
        fullTitle: "Paint (2023)",
        year: "2023",
        releaseState: "Apr 07, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTdiMzk0ZDUtNmQ5Mi00ZGNlLWIwMzUtZjU3OWZiYmNkMzI2XkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_UY176_CR0,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Owen Wilson, Stephen Root, Wendi McLendon-Covey, Ciara Renée",
        starList: [
          {
            id: null,
            name: "Owen Wilson",
          },
          {
            id: null,
            name: "Stephen Root",
          },
          {
            id: null,
            name: "Wendi McLendon-Covey",
          },
          {
            id: null,
            name: "Ciara Renée",
          },
        ],
      },
      {
        id: "tt2316548",
        title: "Beautiful Disaster",
        fullTitle: "Beautiful Disaster (2023)",
        year: "2023",
        releaseState: "Apr 12, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjc2NjkzMGUtODUyMi00MTcyLWIwNzgtYzBiNjY1MTMwOGQ5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Romance",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Romance",
            value: "Romance",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Brian Austin Green, Autumn Reeser, Virginia Gardner, Dylan Sprouse",
        starList: [
          {
            id: null,
            name: "Brian Austin Green",
          },
          {
            id: null,
            name: "Autumn Reeser",
          },
          {
            id: null,
            name: "Virginia Gardner",
          },
          {
            id: null,
            name: "Dylan Sprouse",
          },
        ],
      },
      {
        id: "tt11358390",
        title: "Renfield",
        fullTitle: "Renfield (2023)",
        year: "2023",
        releaseState: "Apr 14, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDIwYjVjMDMtOGYxMy00ZTRiLWE0YzktMjIwYmNhOGE4NGQ4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Fantasy, Horror",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Nicolas Cage, Nicholas Hoult, Awkwafina, Ben Schwartz",
        starList: [
          {
            id: null,
            name: "Nicolas Cage",
          },
          {
            id: null,
            name: "Nicholas Hoult",
          },
          {
            id: null,
            name: "Awkwafina",
          },
          {
            id: null,
            name: "Ben Schwartz",
          },
        ],
      },
      {
        id: "tt16428256",
        title: "Suzume",
        fullTitle: "Suzume (2022)",
        year: "2022",
        releaseState: "Apr 14, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BODhhY2M5NjEtZTc0OC00MDE5LWJiMWQtYTZkMTMwMTA0NmZjXkEyXkFqcGdeQXVyMTEwMjgyMzIz._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Action, Adventure",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Nanoka Hara, Hokuto Matsumura, Eri Fukatsu, Kôshirô Matsumoto",
        starList: [
          {
            id: null,
            name: "Nanoka Hara",
          },
          {
            id: null,
            name: "Hokuto Matsumura",
          },
          {
            id: null,
            name: "Eri Fukatsu",
          },
          {
            id: null,
            name: "Kôshirô Matsumoto",
          },
        ],
      },
      {
        id: "tt2365971",
        title: "Sweetwater",
        fullTitle: "Sweetwater (2023)",
        year: "2023",
        releaseState: "Apr 14, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Sport",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Sport",
            value: "Sport",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Cary Elwes, Eric Roberts, Richard Dreyfuss, Kevin Pollak",
        starList: [
          {
            id: null,
            name: "Cary Elwes",
          },
          {
            id: null,
            name: "Eric Roberts",
          },
          {
            id: null,
            name: "Richard Dreyfuss",
          },
          {
            id: null,
            name: "Kevin Pollak",
          },
        ],
      },
      {
        id: "tt13345606",
        title: "Evil Dead Rise",
        fullTitle: "Evil Dead Rise (2023)",
        year: "2023",
        releaseState: "Apr 21, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Alyssa Sutherland, Lily Sullivan, Morgan Davies, Nell Fisher",
        starList: [
          {
            id: null,
            name: "Alyssa Sutherland",
          },
          {
            id: null,
            name: "Lily Sullivan",
          },
          {
            id: null,
            name: "Morgan Davies",
          },
          {
            id: null,
            name: "Nell Fisher",
          },
        ],
      },
      {
        id: "tt13521006",
        title: "Beau Is Afraid",
        fullTitle: "Beau Is Afraid (2023)",
        year: "2023",
        releaseState: "Apr 21, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTNhNWRmMDctYzE4OS00MzczLWJkODgtNzYxZTQxM2Y1YmM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama, Horror",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Joaquin Phoenix, Amy Ryan, Parker Posey, Nathan Lane",
        starList: [
          {
            id: null,
            name: "Joaquin Phoenix",
          },
          {
            id: null,
            name: "Amy Ryan",
          },
          {
            id: null,
            name: "Parker Posey",
          },
          {
            id: null,
            name: "Nathan Lane",
          },
        ],
      },
      {
        id: "tt4873118",
        title: "Guy Ritchie's The Covenant",
        fullTitle: "Guy Ritchie's The Covenant (2023)",
        year: "2023",
        releaseState: "Apr 21, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmQzOWZhOTMtZTcxNC00MTdkLWEwYmUtOWVmOTFhNTdkNjRkXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Crime, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jake Gyllenhaal, Alexander Ludwig, Antony Starr, Emily Beecham",
        starList: [
          {
            id: null,
            name: "Jake Gyllenhaal",
          },
          {
            id: null,
            name: "Alexander Ludwig",
          },
          {
            id: null,
            name: "Antony Starr",
          },
          {
            id: null,
            name: "Emily Beecham",
          },
        ],
      },
      {
        id: "tt6048442",
        title: "Back on the Strip",
        fullTitle: "Back on the Strip (2023)",
        year: "2023",
        releaseState: "Apr 21, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmVkNDFiYmMtNjE4Mi00MWI0LTlkZmQtOTgxMjUzYTJlOWNhXkEyXkFqcGdeQXVyMjU2MjcxOQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Colleen Camp, Kevin Hart, Wesley Snipes, Tiffany Haddish",
        starList: [
          {
            id: null,
            name: "Colleen Camp",
          },
          {
            id: null,
            name: "Kevin Hart",
          },
          {
            id: null,
            name: "Wesley Snipes",
          },
          {
            id: null,
            name: "Tiffany Haddish",
          },
        ],
      },
      {
        id: "tt18257464",
        title: "Polite Society",
        fullTitle: "Polite Society (2023)",
        year: "2023",
        releaseState: "Apr 28, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTViYzZjMGItNmRiNS00MzI4LTkwZDAtZjNmYzA1MTk2NjU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Comedy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Priya Kansara, Ritu Arya, Renu Brindle, Rekha John-Cheriyan",
        starList: [
          {
            id: null,
            name: "Priya Kansara",
          },
          {
            id: null,
            name: "Ritu Arya",
          },
          {
            id: null,
            name: "Renu Brindle",
          },
          {
            id: null,
            name: "Rekha John-Cheriyan",
          },
        ],
      },
      {
        id: "tt9185206",
        title: "Are You There God? It's Me, Margaret.",
        fullTitle: "Are You There God? It's Me, Margaret. (2023)",
        year: "2023",
        releaseState: "Apr 28, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMmNjYTk0MjItYjYyMi00Y2RlLThmOGUtMTkyMWI1NTU2M2Q4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY176_CR5,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Rachel McAdams, Kathy Bates, Abby Ryder Fortson, Benny Safdie",
        starList: [
          {
            id: null,
            name: "Rachel McAdams",
          },
          {
            id: null,
            name: "Kathy Bates",
          },
          {
            id: null,
            name: "Abby Ryder Fortson",
          },
          {
            id: null,
            name: "Benny Safdie",
          },
        ],
      },
      {
        id: "tt12226632",
        title:
          "Big George Foreman: The Miraculous Story of the Once and Future Heavyweight Champion of the World",
        fullTitle:
          "Big George Foreman: The Miraculous Story of the Once and Future Heavyweight Champion of the World (2023)",
        year: "2023",
        releaseState: "Apr 28, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNWNlZTUxOTUtMzhmMi00MDg4LThmMTYtNjZhNmM2NDcxYjk1XkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography, Drama, Sport",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Sport",
            value: "Sport",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Sonja Sohn, Forest Whitaker, John Magaro, Matthew Glave",
        starList: [
          {
            id: null,
            name: "Sonja Sohn",
          },
          {
            id: null,
            name: "Forest Whitaker",
          },
          {
            id: null,
            name: "John Magaro",
          },
          {
            id: null,
            name: "Matthew Glave",
          },
        ],
      },
      {
        id: "tt15665274",
        title: "The Channel",
        fullTitle: "The Channel (2023)",
        year: "2023",
        releaseState: "May 01, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTRjNDgzNjEtZWJkMi00ODUzLThjZjktNDU3MjA3NmJhMjE1XkEyXkFqcGdeQXVyOTEzMTE4MDM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Max Martini, Clayne Crawford, Paul Rae, Fabiola Andújar",
        starList: [
          {
            id: null,
            name: "Max Martini",
          },
          {
            id: null,
            name: "Clayne Crawford",
          },
          {
            id: null,
            name: "Paul Rae",
          },
          {
            id: null,
            name: "Fabiola Andújar",
          },
        ],
      },
      {
        id: "tt6791350",
        title: "Guardians of the Galaxy Vol. 3",
        fullTitle: "Guardians of the Galaxy Vol. 3 (2023)",
        year: "2023",
        releaseState: "May 05, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmFlMThmYTYtOWNhMi00N2Y5LTljZWItMWQxN2U5OTA5MmFjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Comedy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        starList: [
          {
            id: null,
            name: "Chris Pratt",
          },
          {
            id: null,
            name: "Zoe Saldana",
          },
          {
            id: null,
            name: "Dave Bautista",
          },
          {
            id: null,
            name: "Vin Diesel",
          },
        ],
      },
      {
        id: "tt9832636",
        title: "Zombie Traveler",
        fullTitle: "Zombie Traveler (2023)",
        year: "2023",
        releaseState: "May 05, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2ZmZmRmZGMtOTNmYi00ZGYwLWI0NTMtMzU4NDc5MmYwNTZkXkEyXkFqcGdeQXVyNjk1MTU4ODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Comedy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Lacey Franks, Addison Dawn Perry-Franks, Madison Franks, Jessie Everrett",
        starList: [
          {
            id: null,
            name: "Lacey Franks",
          },
          {
            id: null,
            name: "Addison Dawn Perry-Franks",
          },
          {
            id: null,
            name: "Madison Franks",
          },
          {
            id: null,
            name: "Jessie Everrett",
          },
        ],
      },
      {
        id: "tt10276482",
        title: "Love Again",
        fullTitle: "Love Again (2023)",
        year: "2023",
        releaseState: "May 12, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzYxYWY4NTEtMGU5Yy00YmUxLTk0ZmEtNDVlOGI1NjM1YjFkXkEyXkFqcGdeQXVyMTA3NjIzNzkx._V1_UY176_CR72,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama, Romance",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Romance",
            value: "Romance",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Sam Heughan, Priyanka Chopra Jonas, Russell Tovey, Lydia West",
        starList: [
          {
            id: null,
            name: "Sam Heughan",
          },
          {
            id: null,
            name: "Priyanka Chopra Jonas",
          },
          {
            id: null,
            name: "Russell Tovey",
          },
          {
            id: null,
            name: "Lydia West",
          },
        ],
      },
      {
        id: "tt20768712",
        title: "Book Club: The Next Chapter",
        fullTitle: "Book Club: The Next Chapter (2023)",
        year: "2023",
        releaseState: "May 12, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOThiZTIxZDctMzIwYy00ZWJlLWFjYTItMjkzYTQxOGJmNWRmXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jane Fonda, Diane Keaton, Mary Steenburgen, Don Johnson",
        starList: [
          {
            id: null,
            name: "Jane Fonda",
          },
          {
            id: null,
            name: "Diane Keaton",
          },
          {
            id: null,
            name: "Mary Steenburgen",
          },
          {
            id: null,
            name: "Don Johnson",
          },
        ],
      },
      {
        id: "tt5433140",
        title: "Fast X",
        fullTitle: "Fast X (2023)",
        year: "2023",
        releaseState: "May 19, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BODI2OGMyN2UtYjBiYS00OTExLWJkM2YtNTE2NmNmMGYzOTI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Crime, Mystery",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Michelle Rodriguez, Rita Moreno, Charlize Theron, Jason Momoa",
        starList: [
          {
            id: null,
            name: "Michelle Rodriguez",
          },
          {
            id: null,
            name: "Rita Moreno",
          },
          {
            id: null,
            name: "Charlize Theron",
          },
          {
            id: null,
            name: "Jason Momoa",
          },
        ],
      },
      {
        id: "tt5971474",
        title: "The Little Mermaid",
        fullTitle: "The Little Mermaid (2023)",
        year: "2023",
        releaseState: "May 26, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWUxOGRjNTgtMjhjZC00YjRhLTk4YzEtN2IwMGFiYjZhOTBiXkEyXkFqcGdeQXVyMTA4ODY5NzE0._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Adventure, Family, Fantasy",
        genreList: [
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Family",
            value: "Family",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Halle Bailey, Jonah Hauer-King, Melissa McCarthy, Javier Bardem",
        starList: [
          {
            id: null,
            name: "Halle Bailey",
          },
          {
            id: null,
            name: "Jonah Hauer-King",
          },
          {
            id: null,
            name: "Melissa McCarthy",
          },
          {
            id: null,
            name: "Javier Bardem",
          },
        ],
      },
      {
        id: "tt11040844",
        title: "The Machine",
        fullTitle: "The Machine (2023)",
        year: "2023",
        releaseState: "May 26, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYThiNDc4YWItODkzNS00NjBkLWI1MzUtYjY0NmEyN2ZjNjNkXkEyXkFqcGdeQXVyNjc1NDY3NzU@._V1_UY176_CR93,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Comedy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Mark Hamill, Jimmy Tatro, Stephanie Kurtzuba, Martyn Ford",
        starList: [
          {
            id: null,
            name: "Mark Hamill",
          },
          {
            id: null,
            name: "Jimmy Tatro",
          },
          {
            id: null,
            name: "Stephanie Kurtzuba",
          },
          {
            id: null,
            name: "Martyn Ford",
          },
        ],
      },
      {
        id: "tt8373206",
        title: "About My Father",
        fullTitle: "About My Father (2023)",
        year: "2023",
        releaseState: "May 26, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Robert De Niro, Leslie Bibb, Kim Cattrall, Anders Holm",
        starList: [
          {
            id: null,
            name: "Robert De Niro",
          },
          {
            id: null,
            name: "Leslie Bibb",
          },
          {
            id: null,
            name: "Kim Cattrall",
          },
          {
            id: null,
            name: "Anders Holm",
          },
        ],
      },
      {
        id: "tt21052212",
        title: "By Invitation Only",
        fullTitle: "By Invitation Only (2023)",
        year: "2023",
        releaseState: "May 26, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYWU2YTI5ZGItYzc2MC00Zjc0LWIyYTAtNDE2ZjM1OWFiNzQ3XkEyXkFqcGdeQXVyMzg2MjY4Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Mystery",
        genreList: [
          {
            key: "Mystery",
            value: "Mystery",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Angel Fabián Rivera, Roy Bercier, Juliana Edge, LaMarr Allen",
        starList: [
          {
            id: null,
            name: "Angel Fabián Rivera",
          },
          {
            id: null,
            name: "Roy Bercier",
          },
          {
            id: null,
            name: "Juliana Edge",
          },
          {
            id: null,
            name: "LaMarr Allen",
          },
        ],
      },
      {
        id: "tt9362722",
        title: "Spider-Man: Across the Spider-Verse",
        fullTitle: "Spider-Man: Across the Spider-Verse (2023)",
        year: "2023",
        releaseState: "Jun 02, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjk5YTU0OTAtMTM1NC00Zjc1LWEzZjAtOWJkYzcxOGRhNWNhXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Action, Adventure",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
        starList: [
          {
            id: null,
            name: "Shameik Moore",
          },
          {
            id: null,
            name: "Hailee Steinfeld",
          },
          {
            id: null,
            name: "Oscar Isaac",
          },
          {
            id: null,
            name: "Jake Johnson",
          },
        ],
      },
      {
        id: "tt3427252",
        title: "The Boogeyman",
        fullTitle: "The Boogeyman (2023)",
        year: "2023",
        releaseState: "Jun 02, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjQ4MWQ4YWEtZDI0NS00MGEzLTk2NmUtMmY0NThmNzgwNGFkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror, Mystery, Thriller",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Chris Messina, Sophie Thatcher, Marin Ireland, David Dastmalchian",
        starList: [
          {
            id: null,
            name: "Chris Messina",
          },
          {
            id: null,
            name: "Sophie Thatcher",
          },
          {
            id: null,
            name: "Marin Ireland",
          },
          {
            id: null,
            name: "David Dastmalchian",
          },
        ],
      },
      {
        id: "tt21907340",
        title: "Diary of a Unicorn",
        fullTitle: "Diary of a Unicorn (2023)",
        year: "2023",
        releaseState: "Jun 05, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Thriller",
        genreList: [
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Nelson J. Davis, Meelah Carter-Rutledge, Judy Lay, Dejia McCowan",
        starList: [
          {
            id: null,
            name: "Nelson J. Davis",
          },
          {
            id: null,
            name: "Meelah Carter-Rutledge",
          },
          {
            id: null,
            name: "Judy Lay",
          },
          {
            id: null,
            name: "Dejia McCowan",
          },
        ],
      },
      {
        id: "tt5090568",
        title: "Transformers: Rise of the Beasts",
        fullTitle: "Transformers: Rise of the Beasts (2023)",
        year: "2023",
        releaseState: "Jun 09, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2FkOWQ3YzItNmNhZi00ZWNlLThjYTMtZWIyZDc2YjQzMjk3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Sci-Fi",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Sci-Fi",
            value: "Sci-Fi",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Michelle Yeoh, Ron Perlman, Pete Davidson, Peter Dinklage",
        starList: [
          {
            id: null,
            name: "Michelle Yeoh",
          },
          {
            id: null,
            name: "Ron Perlman",
          },
          {
            id: null,
            name: "Pete Davidson",
          },
          {
            id: null,
            name: "Peter Dinklage",
          },
        ],
      },
      {
        id: "tt0439572",
        title: "The Flash",
        fullTitle: "The Flash (2023)",
        year: "2023",
        releaseState: "Jun 16, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOWNhMGU5MjEtMGVkYi00M2RiLWE5NjUtY2U5NDAxZTcwNDY0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Fantasy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Michael Shannon, Ben Affleck, Michael Keaton, Ezra Miller",
        starList: [
          {
            id: null,
            name: "Michael Shannon",
          },
          {
            id: null,
            name: "Ben Affleck",
          },
          {
            id: null,
            name: "Michael Keaton",
          },
          {
            id: null,
            name: "Ezra Miller",
          },
        ],
      },
      {
        id: "tt15789038",
        title: "Elemental",
        fullTitle: "Elemental (2023)",
        year: "2023",
        releaseState: "Jun 16, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjRiMzM1N2UtMWE1ZC00MGMxLThkM2UtMGIyNWFiZWY3OGE4XkEyXkFqcGdeQXVyMTUzMzY2NDQy._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Adventure, Comedy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Mamoudou Athie, Leah Lewis",
        starList: [
          {
            id: null,
            name: "Mamoudou Athie",
          },
          {
            id: null,
            name: "Leah Lewis",
          },
        ],
      },
      {
        id: "tt11703244",
        title: "The Blackening",
        fullTitle: "The Blackening (2022)",
        year: "2022",
        releaseState: "Jun 16, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Horror",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Antoinette Robertson, Dewayne Perkins, Sinqua Walls, Grace Byers",
        starList: [
          {
            id: null,
            name: "Antoinette Robertson",
          },
          {
            id: null,
            name: "Dewayne Perkins",
          },
          {
            id: null,
            name: "Sinqua Walls",
          },
          {
            id: null,
            name: "Grace Byers",
          },
        ],
      },
      {
        id: "tt4671296",
        title: "The Magnificent Raiders of Dimension War One",
        fullTitle: "The Magnificent Raiders of Dimension War One (2023)",
        year: "2023",
        releaseState: "Jun 21, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjRjZTliNDktMTBmNy00NmZkLTk2ZDYtOTgzN2JhNDBkYTM4XkEyXkFqcGdeQXVyMTk5NjA5MTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Sci-Fi",
        genreList: [
          {
            key: "Sci-Fi",
            value: "Sci-Fi",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Tom Sizemore, Bai Ling, Gigi Edgley, Robert LaSardo",
        starList: [
          {
            id: null,
            name: "Tom Sizemore",
          },
          {
            id: null,
            name: "Bai Ling",
          },
          {
            id: null,
            name: "Gigi Edgley",
          },
          {
            id: null,
            name: "Robert LaSardo",
          },
        ],
      },
      {
        id: "tt14230388",
        title: "Asteroid City",
        fullTitle: "Asteroid City (2023)",
        year: "2023",
        releaseState: "Jun 23, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Romance",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Romance",
            value: "Romance",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Margot Robbie, Hong Chau, Tom Hanks, Scarlett Johansson",
        starList: [
          {
            id: null,
            name: "Margot Robbie",
          },
          {
            id: null,
            name: "Hong Chau",
          },
          {
            id: null,
            name: "Tom Hanks",
          },
          {
            id: null,
            name: "Scarlett Johansson",
          },
        ],
      },
      {
        id: "tt15671028",
        title: "No Hard Feelings",
        fullTitle: "No Hard Feelings (2023)",
        year: "2023",
        releaseState: "Jun 23, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Jennifer Lawrence, Ebon Moss-Bachrach, Natalie Morales, Matthew Broderick",
        starList: [
          {
            id: null,
            name: "Jennifer Lawrence",
          },
          {
            id: null,
            name: "Ebon Moss-Bachrach",
          },
          {
            id: null,
            name: "Natalie Morales",
          },
          {
            id: null,
            name: "Matthew Broderick",
          },
        ],
      },
      {
        id: "tt15268244",
        title: "Untitled Adele Lim/Lionsgate Comedy Project",
        fullTitle: "Untitled Adele Lim/Lionsgate Comedy Project (2023)",
        year: "2023",
        releaseState: "Jun 23, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Stephanie Hsu, Ashley Park, David Denman, Sherry Cola",
        starList: [
          {
            id: null,
            name: "Stephanie Hsu",
          },
          {
            id: null,
            name: "Ashley Park",
          },
          {
            id: null,
            name: "David Denman",
          },
          {
            id: null,
            name: "Sherry Cola",
          },
        ],
      },
      {
        id: "tt12942328",
        title: "Maintaining Mac Messings",
        fullTitle: "Maintaining Mac Messings (2023)",
        year: "2023",
        releaseState: "Jun 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmMwNWI3NjMtYmEzYy00MzY3LTkyNzctZjFjYTM3MTkyMjU4XkEyXkFqcGdeQXVyNDM4NTUyNTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Horror",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Mehdi El Hebil, Bonnie Ryerson, Victoria Russell, Kendrick Mays",
        starList: [
          {
            id: null,
            name: "Mehdi El Hebil",
          },
          {
            id: null,
            name: "Bonnie Ryerson",
          },
          {
            id: null,
            name: "Victoria Russell",
          },
          {
            id: null,
            name: "Kendrick Mays",
          },
        ],
      },
      {
        id: "tt1462764",
        title: "Indiana Jones and the Dial of Destiny",
        fullTitle: "Indiana Jones and the Dial of Destiny (2023)",
        year: "2023",
        releaseState: "Jun 30, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTYyY2JkOWMtMDNjZC00ZTgzLWJhNDAtM2YzMWY3MjM2N2VjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Harrison Ford, Boyd Holbrook, Antonio Banderas, Mads Mikkelsen",
        starList: [
          {
            id: null,
            name: "Harrison Ford",
          },
          {
            id: null,
            name: "Boyd Holbrook",
          },
          {
            id: null,
            name: "Antonio Banderas",
          },
          {
            id: null,
            name: "Mads Mikkelsen",
          },
        ],
      },
      {
        id: "tt1609486",
        title: "Harold and the Purple Crayon",
        fullTitle: "Harold and the Purple Crayon (2023)",
        year: "2023",
        releaseState: "Jun 30, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Family, Fantasy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Family",
            value: "Family",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Zachary Levi, Zooey Deschanel, Lil Rel Howery, Camille Guaty",
        starList: [
          {
            id: null,
            name: "Zachary Levi",
          },
          {
            id: null,
            name: "Zooey Deschanel",
          },
          {
            id: null,
            name: "Lil Rel Howery",
          },
          {
            id: null,
            name: "Camille Guaty",
          },
        ],
      },
      {
        id: "tt13405778",
        title: "Insidious 5",
        fullTitle: "Insidious 5 (2023)",
        year: "2023",
        releaseState: "Jul 07, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzQ2M2U5NjUtYjFmOC00YzMyLWI5YTQtODI2NmUyYTI2MzRlXkEyXkFqcGdeQXVyMTU4OTEwOTE3._V1_UY176_CR3,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Horror, Mystery",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Ty Simpkins, Patrick Wilson, Rose Byrne, Andrew Astor",
        starList: [
          {
            id: null,
            name: "Ty Simpkins",
          },
          {
            id: null,
            name: "Patrick Wilson",
          },
          {
            id: null,
            name: "Rose Byrne",
          },
          {
            id: null,
            name: "Andrew Astor",
          },
        ],
      },
      {
        id: "tt7347248",
        title: "Summer Gold",
        fullTitle: "Summer Gold (2023)",
        year: "2023",
        releaseState: "Jul 07, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzA3Zjg0ZWYtNzYyZC00ZTE0LTk1ZmEtZTFkYWZjNTE3NjQwXkEyXkFqcGdeQXVyOTYyNDA1Nzg@._V1_UY176_CR0,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Adventure, Comedy, Family",
        genreList: [
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jerry O'Connell, Jenna Kanell, Jay Huguley, Nicholas Logan",
        starList: [
          {
            id: null,
            name: "Jerry O'Connell",
          },
          {
            id: null,
            name: "Jenna Kanell",
          },
          {
            id: null,
            name: "Jay Huguley",
          },
          {
            id: null,
            name: "Nicholas Logan",
          },
        ],
      },
      {
        id: "tt9603212",
        title: "Mission: Impossible - Dead Reckoning - Part One",
        fullTitle: "Mission: Impossible - Dead Reckoning - Part One (2023)",
        year: "2023",
        releaseState: "Jul 14, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmM1MmI1MjctOTkyMi00MjZhLWEwN2MtYjEwNGRjNmUxZmVjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Tom Cruise, Rebecca Ferguson, Vanessa Kirby, Hayley Atwell",
        starList: [
          {
            id: null,
            name: "Tom Cruise",
          },
          {
            id: null,
            name: "Rebecca Ferguson",
          },
          {
            id: null,
            name: "Vanessa Kirby",
          },
          {
            id: null,
            name: "Hayley Atwell",
          },
        ],
      },
      {
        id: "tt15398776",
        title: "Oppenheimer",
        fullTitle: "Oppenheimer (2023)",
        year: "2023",
        releaseState: "Jul 21, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmE0NzdlZmMtNjJmMy00NjM2LTgzZGYtN2JhZmNhNzBmN2YwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography, Drama, History",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "History",
            value: "History",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
        starList: [
          {
            id: null,
            name: "Cillian Murphy",
          },
          {
            id: null,
            name: "Emily Blunt",
          },
          {
            id: null,
            name: "Matt Damon",
          },
          {
            id: null,
            name: "Robert Downey Jr.",
          },
        ],
      },
      {
        id: "tt1517268",
        title: "Barbie",
        fullTitle: "Barbie (2023)",
        year: "2023",
        releaseState: "Jul 21, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzQ3NTRjZDUtNGVhYS00OWQ0LTljMjEtYzJkOGJhYWViNjIxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Adventure, Comedy, Fantasy",
        genreList: [
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Margot Robbie, Ryan Gosling, Helen Mirren, Marisa Abela",
        starList: [
          {
            id: null,
            name: "Margot Robbie",
          },
          {
            id: null,
            name: "Ryan Gosling",
          },
          {
            id: null,
            name: "Helen Mirren",
          },
          {
            id: null,
            name: "Marisa Abela",
          },
        ],
      },
      {
        id: "tt1756855",
        title: "Coyote v. Acme",
        fullTitle: "Coyote v. Acme (2023)",
        year: "2023",
        releaseState: "Jul 21, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Adventure, Comedy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "John Cena, Will Forte, Lana Condor, P.J. Byrne",
        starList: [
          {
            id: null,
            name: "John Cena",
          },
          {
            id: null,
            name: "Will Forte",
          },
          {
            id: null,
            name: "Lana Condor",
          },
          {
            id: null,
            name: "P.J. Byrne",
          },
        ],
      },
      {
        id: "tt10676048",
        title: "The Marvels",
        fullTitle: "The Marvels (2023)",
        year: "2023",
        releaseState: "Jul 28, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZDJjN2JjNmMtMDJlZS00MWQ4LTliZWMtZTkyYTliZDY1NGVjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Fantasy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Brie Larson, Samuel L. Jackson, Zawe Ashton, Iman Vellani",
        starList: [
          {
            id: null,
            name: "Brie Larson",
          },
          {
            id: null,
            name: "Samuel L. Jackson",
          },
          {
            id: null,
            name: "Zawe Ashton",
          },
          {
            id: null,
            name: "Iman Vellani",
          },
        ],
      },
      {
        id: "tt9224104",
        title: "The Meg 2: The Trench",
        fullTitle: "The Meg 2: The Trench (2023)",
        year: "2023",
        releaseState: "Aug 04, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmNjMzkyODYtZjgxNS00ZDJiLTlmYzQtZGEzNDdmOTZjZTIxXkEyXkFqcGdeQXVyMTU0ODY5OTAx._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Horror",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jason Statham, Cliff Curtis, Sienna Guillory, Skyler Samuels",
        starList: [
          {
            id: null,
            name: "Jason Statham",
          },
          {
            id: null,
            name: "Cliff Curtis",
          },
          {
            id: null,
            name: "Sienna Guillory",
          },
          {
            id: null,
            name: "Skyler Samuels",
          },
        ],
      },
      {
        id: "tt8589698",
        title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        fullTitle: "Teenage Mutant Ninja Turtles: Mutant Mayhem (2023)",
        year: "2023",
        releaseState: "Aug 04, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDhhZWYwYzItNjI1OC00MzNkLTgxZjctNTEzNzZmYjg4NjJkXkEyXkFqcGdeQXVyMTA0NTM2MjA2._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Action, Adventure",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Seth Rogen, Shamon Brown Jr.",
        starList: [
          {
            id: null,
            name: "Seth Rogen",
          },
          {
            id: null,
            name: "Shamon Brown Jr.",
          },
        ],
      },
      {
        id: "tt1695843",
        title: "Haunted Mansion",
        fullTitle: "Haunted Mansion (2023)",
        year: "2023",
        releaseState: "Aug 11, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTg0YzViNTktNWRkZi00YTgwLWI4NTUtYzJjNmU4ZjYyY2U3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama, Family",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jamie Lee Curtis, Jared Leto, Rosario Dawson, Winona Ryder",
        starList: [
          {
            id: null,
            name: "Jamie Lee Curtis",
          },
          {
            id: null,
            name: "Jared Leto",
          },
          {
            id: null,
            name: "Rosario Dawson",
          },
          {
            id: null,
            name: "Winona Ryder",
          },
        ],
      },
      {
        id: "tt4495098",
        title: "Gran Turismo",
        fullTitle: "Gran Turismo (2023)",
        year: "2023",
        releaseState: "Aug 11, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTg5OGFhOTYtZGVjNi00YTRmLTgxNDktMTdjNjM5ZmFhMTEyXkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_UY176_CR93,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Drama",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "David Harbour, Orlando Bloom, Djimon Hounsou, Darren Barnet",
        starList: [
          {
            id: null,
            name: "David Harbour",
          },
          {
            id: null,
            name: "Orlando Bloom",
          },
          {
            id: null,
            name: "Djimon Hounsou",
          },
          {
            id: null,
            name: "Darren Barnet",
          },
        ],
      },
      {
        id: "tt1001520",
        title: "Last Voyage of the Demeter",
        fullTitle: "Last Voyage of the Demeter (2023)",
        year: "2023",
        releaseState: "Aug 11, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BODMwZDczNzQtYWE0My00MWNkLTg0MzgtNDA5YzcxYTkzMzcyXkEyXkFqcGdeQXVyNzU0NzQxNTE@._V1_UY176_CR69,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "David Dastmalchian, Aisling Franciosi, Liam Cunningham, Corey Hawkins",
        starList: [
          {
            id: null,
            name: "David Dastmalchian",
          },
          {
            id: null,
            name: "Aisling Franciosi",
          },
          {
            id: null,
            name: "Liam Cunningham",
          },
          {
            id: null,
            name: "Corey Hawkins",
          },
        ],
      },
      {
        id: "tt16426418",
        title: "Challengers",
        fullTitle: "Challengers (2023)",
        year: "2023",
        releaseState: "Aug 11, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Romance, Sport",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Romance",
            value: "Romance",
          },
          {
            key: "Sport",
            value: "Sport",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Zendaya, Josh O'Connor, Mike Faist, Jake Jensen",
        starList: [
          {
            id: null,
            name: "Zendaya",
          },
          {
            id: null,
            name: "Josh O'Connor",
          },
          {
            id: null,
            name: "Mike Faist",
          },
          {
            id: null,
            name: "Jake Jensen",
          },
        ],
      },
      {
        id: "tt9362930",
        title: "Blue Beetle",
        fullTitle: "Blue Beetle (2023)",
        year: "2023",
        releaseState: "Aug 18, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjY4ODA0ZWMtNGY2OC00NjUxLThiOGQtNjAyZjdhNjMyZWY4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Sci-Fi",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Sci-Fi",
            value: "Sci-Fi",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Harvey Guillén, Susan Sarandon, Xolo Maridueña, Raoul Max Trujillo",
        starList: [
          {
            id: null,
            name: "Harvey Guillén",
          },
          {
            id: null,
            name: "Susan Sarandon",
          },
          {
            id: null,
            name: "Xolo Maridueña",
          },
          {
            id: null,
            name: "Raoul Max Trujillo",
          },
        ],
      },
      {
        id: "tt8051894",
        title: "The Hill",
        fullTitle: "The Hill (2023)",
        year: "2023",
        releaseState: "Aug 18, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNThmMGIxN2QtMjBiMC00ODBiLWIyZTEtNDczMGEyZWU0MTJmXkEyXkFqcGdeQXVyNzc3ODAyNjE@._V1_UY176_CR5,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography, Drama, Sport",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Sport",
            value: "Sport",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Scott Glenn, Dennis Quaid, Bonnie Bedelia, Joelle Carter",
        starList: [
          {
            id: null,
            name: "Scott Glenn",
          },
          {
            id: null,
            name: "Dennis Quaid",
          },
          {
            id: null,
            name: "Bonnie Bedelia",
          },
          {
            id: null,
            name: "Joelle Carter",
          },
        ],
      },
      {
        id: "tt21335356",
        title: "Untitled Please Don't Destroy Project",
        fullTitle: "Untitled Please Don't Destroy Project (2023)",
        year: "2023",
        releaseState: "Aug 18, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Nichole Sakura, Bowen Yang, Conan O'Brien, X Mayo",
        starList: [
          {
            id: null,
            name: "Nichole Sakura",
          },
          {
            id: null,
            name: "Bowen Yang",
          },
          {
            id: null,
            name: "Conan O'Brien",
          },
          {
            id: null,
            name: "X Mayo",
          },
        ],
      },
      {
        id: "tt11068094",
        title: "White Bird: A Wonder Story",
        fullTitle: "White Bird: A Wonder Story (2023)",
        year: "2023",
        releaseState: "Aug 25, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMGE4NDRjYmMtMjM5ZC00YjI3LWJlNWMtZGRjOWYyZTE5N2Y2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography, Drama, Family",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Gillian Anderson, Helen Mirren, Stuart McQuarrie, Olivia Ross",
        starList: [
          {
            id: null,
            name: "Gillian Anderson",
          },
          {
            id: null,
            name: "Helen Mirren",
          },
          {
            id: null,
            name: "Stuart McQuarrie",
          },
          {
            id: null,
            name: "Olivia Ross",
          },
        ],
      },
      {
        id: "tt14454876",
        title: "Golda",
        fullTitle: "Golda (2023)",
        year: "2023",
        releaseState: "Aug 25, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzhlZjE1NDItOTUwOS00NTFmLWJjOTYtZjg2NTNmYzg0MTIxXkEyXkFqcGdeQXVyNDQ5MjYzNzE@._V1_UY176_CR74,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography, Drama, History",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "History",
            value: "History",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Helen Mirren, Liev Schreiber, Camille Cottin, Ed Stoppard",
        starList: [
          {
            id: null,
            name: "Helen Mirren",
          },
          {
            id: null,
            name: "Liev Schreiber",
          },
          {
            id: null,
            name: "Camille Cottin",
          },
          {
            id: null,
            name: "Ed Stoppard",
          },
        ],
      },
      {
        id: "tt18310174",
        title: "Dark Dinosaur Gets Grounded the Movie",
        fullTitle: "Dark Dinosaur Gets Grounded the Movie (2023)",
        year: "2023",
        releaseState: "Aug 25, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTcyODY5MGItZTU1Mi00OTZjLWFjYjUtNzMzYjdiZWU4NjE2XkEyXkFqcGdeQXVyMTQxNzY5MzU2._V1_UY176_CR5,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Action, Comedy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Rod: 6th Pitch",
        starList: [
          {
            id: null,
            name: "Rod: 6th Pitch",
          },
        ],
      },
      {
        id: "tt17024450",
        title: "The Equalizer 3",
        fullTitle: "The Equalizer 3 (2023)",
        year: "2023",
        releaseState: "Sep 01, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Crime, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Denzel Washington, Dakota Fanning, David Denman, Eugenio Mastrandrea",
        starList: [
          {
            id: null,
            name: "Denzel Washington",
          },
          {
            id: null,
            name: "Dakota Fanning",
          },
          {
            id: null,
            name: "David Denman",
          },
          {
            id: null,
            name: "Eugenio Mastrandrea",
          },
        ],
      },
      {
        id: "tt10160976",
        title: "The Nun 2",
        fullTitle: "The Nun 2 (2023)",
        year: "2023",
        releaseState: "Sep 08, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BODA5ZjBiYWMtNjkwZC00NDU5LTk3MWQtOTIxMTgwYWFiYzdlXkEyXkFqcGdeQXVyMTU4OTE4NDg2._V1_UY176_CR12,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror, Mystery, Thriller",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Storm Reid, Anna Popplewell, Taissa Farmiga, Bonnie Aarons",
        starList: [
          {
            id: null,
            name: "Storm Reid",
          },
          {
            id: null,
            name: "Anna Popplewell",
          },
          {
            id: null,
            name: "Taissa Farmiga",
          },
          {
            id: null,
            name: "Bonnie Aarons",
          },
        ],
      },
      {
        id: "tt22687790",
        title: "A Haunting in Venice",
        fullTitle: "A Haunting in Venice (2023)",
        year: "2023",
        releaseState: "Sep 15, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTA2MDc4NmYtNTViYS00Njc1LTg0NmQtNzRiNTkxNDk3OGE4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Crime, Drama, Mystery",
        genreList: [
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Mystery",
            value: "Mystery",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Michelle Yeoh, Kelly Reilly, Emma Laird, Kenneth Branagh",
        starList: [
          {
            id: null,
            name: "Michelle Yeoh",
          },
          {
            id: null,
            name: "Kelly Reilly",
          },
          {
            id: null,
            name: "Emma Laird",
          },
          {
            id: null,
            name: "Kenneth Branagh",
          },
        ],
      },
      {
        id: "tt3291150",
        title: "The Expendables 4",
        fullTitle: "The Expendables 4 (2023)",
        year: "2023",
        releaseState: "Sep 22, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNGIzNjU5YTctMDllZi00MGU2LWI5MTYtYzc4ZGFjNzY5ZjYyXkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_UY176_CR157,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jason Statham, 50 Cent, Megan Fox, Dolph Lundgren",
        starList: [
          {
            id: null,
            name: "Jason Statham",
          },
          {
            id: null,
            name: "50 Cent",
          },
          {
            id: null,
            name: "Megan Fox",
          },
          {
            id: null,
            name: "Dolph Lundgren",
          },
        ],
      },
      {
        id: "tt10767052",
        title: "Next Goal Wins",
        fullTitle: "Next Goal Wins (2023)",
        year: "2023",
        releaseState: "Sep 22, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjUxNzQ2NWItN2MyYS00NjU1LTk2ODEtMDU0MGJmNTU1NGIzXkEyXkFqcGdeQXVyMTI2Mjg4MjMz._V1_UY176_CR69,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Drama, Sport",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Sport",
            value: "Sport",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Michael Fassbender, Elisabeth Moss, Will Arnett, Rhys Darby",
        starList: [
          {
            id: null,
            name: "Michael Fassbender",
          },
          {
            id: null,
            name: "Elisabeth Moss",
          },
          {
            id: null,
            name: "Will Arnett",
          },
          {
            id: null,
            name: "Rhys Darby",
          },
        ],
      },
      {
        id: "tt16374352",
        title: "The Blind",
        fullTitle: "The Blind (2023)",
        year: "2023",
        releaseState: "Sep 22, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Kerry Knuppe, Amelia Eve, Trish Cook, Brielle Robillard",
        starList: [
          {
            id: null,
            name: "Kerry Knuppe",
          },
          {
            id: null,
            name: "Amelia Eve",
          },
          {
            id: null,
            name: "Trish Cook",
          },
          {
            id: null,
            name: "Brielle Robillard",
          },
        ],
      },
      {
        id: "tt12349832",
        title: "Cuckoo",
        fullTitle: "Cuckoo (2023)",
        year: "2023",
        releaseState: "Sep 29, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzBkZGEzYTQtMTFiMS00NDg3LWIyNGItYjNkZDM0NjgwMmQ2XkEyXkFqcGdeQXVyNjYwMzM1MjM@._V1_UY176_CR112,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Hunter Schafer, Dan Stevens, Jessica Henwick, Marton Csokas",
        starList: [
          {
            id: null,
            name: "Hunter Schafer",
          },
          {
            id: null,
            name: "Dan Stevens",
          },
          {
            id: null,
            name: "Jessica Henwick",
          },
          {
            id: null,
            name: "Marton Csokas",
          },
        ],
      },
      {
        id: "tt12806322",
        title: "Skelly",
        fullTitle: "Skelly (2023)",
        year: "2023",
        releaseState: "Oct 01, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Family",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Brian Cox, Torrey DeVitto, Andy Comeau, Sarah Villegas",
        starList: [
          {
            id: null,
            name: "Brian Cox",
          },
          {
            id: null,
            name: "Torrey DeVitto",
          },
          {
            id: null,
            name: "Andy Comeau",
          },
          {
            id: null,
            name: "Sarah Villegas",
          },
        ],
      },
      {
        id: "tt8790086",
        title: "Kraven the Hunter",
        fullTitle: "Kraven the Hunter (2023)",
        year: "2023",
        releaseState: "Oct 06, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzRmOTBjY2ItY2I1My00YjRkLTk1Y2MtZmYzZTExMTk3NDI5XkEyXkFqcGdeQXVyNTc2MDc2ODQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Sci-Fi",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Sci-Fi",
            value: "Sci-Fi",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Aaron Taylor-Johnson, Russell Crowe, Fred Hechinger, Ariana DeBose",
        starList: [
          {
            id: null,
            name: "Aaron Taylor-Johnson",
          },
          {
            id: null,
            name: "Russell Crowe",
          },
          {
            id: null,
            name: "Fred Hechinger",
          },
          {
            id: null,
            name: "Ariana DeBose",
          },
        ],
      },
      {
        id: "tt11858890",
        title: "True Love",
        fullTitle: "True Love (2023)",
        year: "2023",
        releaseState: "Oct 06, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Crime, Drama",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Allison Janney, Amar Chadha-Patel, John David Washington, Gemma Chan",
        starList: [
          {
            id: null,
            name: "Allison Janney",
          },
          {
            id: null,
            name: "Amar Chadha-Patel",
          },
          {
            id: null,
            name: "John David Washington",
          },
          {
            id: null,
            name: "Gemma Chan",
          },
        ],
      },
      {
        id: "tt12921446",
        title: "The Exorcist",
        fullTitle: "The Exorcist (2023)",
        year: "2023",
        releaseState: "Oct 13, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMGM0N2FhODctZmNkMS00Y2ZlLWJlNjQtZWM2M2YyNTQ1MWEwXkEyXkFqcGdeQXVyMzg2NDQ3ODE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Leslie Odom Jr., Ellen Burstyn, Ann Dowd, E.J. Bonilla",
        starList: [
          {
            id: null,
            name: "Leslie Odom Jr.",
          },
          {
            id: null,
            name: "Ellen Burstyn",
          },
          {
            id: null,
            name: "Ann Dowd",
          },
          {
            id: null,
            name: "E.J. Bonilla",
          },
        ],
      },
      {
        id: "tt15837338",
        title: "PAW Patrol: The Mighty Movie",
        fullTitle: "PAW Patrol: The Mighty Movie (2023)",
        year: "2023",
        releaseState: "Oct 13, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZDRhNTBkNTktNmJhYi00MDc0LWJkYTQtMjA0MGMxMzQ1MjllXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UY176_CR93,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Action, Adventure",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Mckenna Grace, Kristen Bell, James Marsden, Dax Shepard",
        starList: [
          {
            id: null,
            name: "Mckenna Grace",
          },
          {
            id: null,
            name: "Kristen Bell",
          },
          {
            id: null,
            name: "James Marsden",
          },
          {
            id: null,
            name: "Dax Shepard",
          },
        ],
      },
      {
        id: "tt21807222",
        title: "Saw 10",
        fullTitle: "Saw 10 (2023)",
        year: "2023",
        releaseState: "Oct 27, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Crime, Drama, Horror",
        genreList: [
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Michael Beach, Tobin Bell, Synnøve Macody Lund, Steven Brand",
        starList: [
          {
            id: null,
            name: "Michael Beach",
          },
          {
            id: null,
            name: "Tobin Bell",
          },
          {
            id: null,
            name: "Synnøve Macody Lund",
          },
          {
            id: null,
            name: "Steven Brand",
          },
        ],
      },
      {
        id: "tt7365436",
        title: "Listen Carefully",
        fullTitle: "Listen Carefully (2023)",
        year: "2023",
        releaseState: "Oct 31, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzkxMjIyMDEtZjdhMC00NzJmLWEyZmYtZGE0OTFlYmQ3ODEzXkEyXkFqcGdeQXVyMTY2NzE3Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Ryan Barton-Grimley, Ari Schneider, Simone Barton-Grimley, David Rickabaugh",
        starList: [
          {
            id: null,
            name: "Ryan Barton-Grimley",
          },
          {
            id: null,
            name: "Ari Schneider",
          },
          {
            id: null,
            name: "Simone Barton-Grimley",
          },
          {
            id: null,
            name: "David Rickabaugh",
          },
        ],
      },
      {
        id: "tt4918142",
        title: "There Is No Sanctuary",
        fullTitle: "There Is No Sanctuary (2023)",
        year: "2023",
        releaseState: "Oct 31, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BODZhNzg4NWUtNTRmMi00ZTQwLWI4ZTQtZTA0ZjhmYmZjMzZhXkEyXkFqcGdeQXVyNDU3NzY0NTk@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jaime Reborn, Brittni Carraway",
        starList: [
          {
            id: null,
            name: "Jaime Reborn",
          },
          {
            id: null,
            name: "Brittni Carraway",
          },
        ],
      },
      {
        id: "tt15239678",
        title: "Dune: Part Two",
        fullTitle: "Dune: Part Two (2023)",
        year: "2023",
        releaseState: "Nov 03, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjFkM2RhZjUtN2U0MC00NTMxLTk1MjktZDkwNjg3MjI0NmYxXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Drama",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Timothée Chalamet, Rebecca Ferguson, Zendaya, Javier Bardem",
        starList: [
          {
            id: null,
            name: "Timothée Chalamet",
          },
          {
            id: null,
            name: "Rebecca Ferguson",
          },
          {
            id: null,
            name: "Zendaya",
          },
          {
            id: null,
            name: "Javier Bardem",
          },
        ],
      },
      {
        id: "tt10115998",
        title: "The Cincinnati Spin",
        fullTitle: "The Cincinnati Spin (2023)",
        year: "2023",
        releaseState: "Nov 10, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDg3ZTUwOTAtNGZhZC00YTFmLWEzNzQtYjIyMDNjZWIzZWJkXkEyXkFqcGdeQXVyNDc4NjUyODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Comedy, Crime, Drama",
        genreList: [
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Crime",
            value: "Crime",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Joseph D. Reitman, Vas Blackwood, Charlie McElveen, Harmony Jakie",
        starList: [
          {
            id: null,
            name: "Joseph D. Reitman",
          },
          {
            id: null,
            name: "Vas Blackwood",
          },
          {
            id: null,
            name: "Charlie McElveen",
          },
          {
            id: null,
            name: "Harmony Jakie",
          },
        ],
      },
      {
        id: "tt10414276",
        title: "American Cherry",
        fullTitle: "American Cherry (2023)",
        year: "2023",
        releaseState: "Nov 13, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWRjNmQ1NTctZTAwMi00MWJkLTliM2MtMGVmY2QyZDczZWQ0XkEyXkFqcGdeQXVyOTM2MzgyODc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Romance, Thriller",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Romance",
            value: "Romance",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Leonor Varela, Matty Cardarople, Larsen Thompson, Hart Denton",
        starList: [
          {
            id: null,
            name: "Leonor Varela",
          },
          {
            id: null,
            name: "Matty Cardarople",
          },
          {
            id: null,
            name: "Larsen Thompson",
          },
          {
            id: null,
            name: "Hart Denton",
          },
        ],
      },
      {
        id: "tt10545296",
        title: "The Hunger Games: The Ballad of Songbirds and Snakes",
        fullTitle:
          "The Hunger Games: The Ballad of Songbirds and Snakes (2023)",
        year: "2023",
        releaseState: "Nov 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWNiYWNkYWYtZWYwMi00NjNjLTk2ZTAtYmMwNzExNjYwY2U2XkEyXkFqcGdeQXVyMTMzMTc1NzU2._V1_UY176_CR0,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Drama",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Hunter Schafer, Viola Davis, Peter Dinklage, Rachel Zegler",
        starList: [
          {
            id: null,
            name: "Hunter Schafer",
          },
          {
            id: null,
            name: "Viola Davis",
          },
          {
            id: null,
            name: "Peter Dinklage",
          },
          {
            id: null,
            name: "Rachel Zegler",
          },
        ],
      },
      {
        id: "tt14362112",
        title: "Trolls 3",
        fullTitle: "Trolls 3 (2023)",
        year: "2023",
        releaseState: "Nov 17, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNWU0YmYyY2MtMDdhZC00NDE4LWE0MTAtMjEwZmE0OTc5NGFiXkEyXkFqcGdeQXVyMTU3NDkzNTcx._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Comedy, Family",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Anna Kendrick, Justin Timberlake, Rolando Davila-Beltran",
        starList: [
          {
            id: null,
            name: "Anna Kendrick",
          },
          {
            id: null,
            name: "Justin Timberlake",
          },
          {
            id: null,
            name: "Rolando Davila-Beltran",
          },
        ],
      },
      {
        id: "tt11304740",
        title: "Wish",
        fullTitle: "Wish (2023)",
        year: "2023",
        releaseState: "Nov 22, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzY0MTEzMWUtOWQ1Ny00MTAzLWE4MmYtYWJhODQyMzMzNjVkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Adventure, Comedy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Alan Tudyk, Ariana DeBose",
        starList: [
          {
            id: null,
            name: "Alan Tudyk",
          },
          {
            id: null,
            name: "Ariana DeBose",
          },
        ],
      },
      {
        id: "tt10994300",
        title: "A Figgly Christmas",
        fullTitle: "A Figgly Christmas (2023)",
        year: "2023",
        releaseState: "Nov 24, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTBkYjdmMjItNWRhZC00NjI1LThmMDUtZmUzYzMzYWZiODMwXkEyXkFqcGdeQXVyMzE2NDI5NzI@._V1_UY176_CR10,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Family, Fantasy",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Family",
            value: "Family",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: 'Tesha Clark, Matthew Clark "Ghost", Steven W Lowe',
        starList: [
          {
            id: null,
            name: "Tesha Clark",
          },
          {
            id: null,
            name: 'Matthew Clark "Ghost"',
          },
          {
            id: null,
            name: "Steven W Lowe",
          },
        ],
      },
      {
        id: "tt13499272",
        title: "From the Ashes",
        fullTitle: "From the Ashes (2023)",
        year: "2023",
        releaseState: "Dec 01, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDQxOWJiMGUtMzhjZi00NTNjLThhYmItNGU1YjM2MGM2ZmE4XkEyXkFqcGdeQXVyMTI2NDQyOTI0._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Jeanne Neilson, Paul du Toit, Syreeta Banks, Jeremy John Wells",
        starList: [
          {
            id: null,
            name: "Jeanne Neilson",
          },
          {
            id: null,
            name: "Paul du Toit",
          },
          {
            id: null,
            name: "Syreeta Banks",
          },
          {
            id: null,
            name: "Jeremy John Wells",
          },
        ],
      },
      {
        id: "tt19556180",
        title: "21st Century Cleo",
        fullTitle: "21st Century Cleo (2023)",
        year: "2023",
        releaseState: "Dec 01, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmI0MTZjNDEtNGRhNy00N2IxLThjY2MtYzU4YjMxNjRhZjU1XkEyXkFqcGdeQXVyMTMzMDA2NDA2._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Drama, Family",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Julian Seager, Miray Dogan, Gloria El-Achkar, Tamara Becker Cimmerian",
        starList: [
          {
            id: null,
            name: "Julian Seager",
          },
          {
            id: null,
            name: "Miray Dogan",
          },
          {
            id: null,
            name: "Gloria El-Achkar",
          },
          {
            id: null,
            name: "Tamara Becker Cimmerian",
          },
        ],
      },
      {
        id: "tt8134336",
        title: "A Night Without Tears",
        fullTitle: "A Night Without Tears (2023)",
        year: "2023",
        releaseState: "Dec 01, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYmQ5YWRiYmYtNzQyMi00NTkwLTkzMDctZjBhY2I2YWM4MDJjXkEyXkFqcGdeQXVyMjI4NTMzOQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Mystery",
        genreList: [
          {
            key: "Mystery",
            value: "Mystery",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Marta Levenfeld, Elia Fernández, Gonzalo Ramos, Victor Ramos",
        starList: [
          {
            id: null,
            name: "Marta Levenfeld",
          },
          {
            id: null,
            name: "Elia Fernández",
          },
          {
            id: null,
            name: "Gonzalo Ramos",
          },
          {
            id: null,
            name: "Victor Ramos",
          },
        ],
      },
      {
        id: "tt15212880",
        title:
          "Fuck Them All! The Story of Heaven and Hell. The Making of a Ballet",
        fullTitle:
          "Fuck Them All! The Story of Heaven and Hell. The Making of a Ballet (2023)",
        year: "2023",
        releaseState: "Dec 01, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWY5YjRhYzMtNDg3MS00MDFmLTgwNjItODc1OWI5OWU0OGFhXkEyXkFqcGdeQXVyMzQxOTczNg@@._V1_UY176_CR93,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Old-Nick, Sophie Fournier, Janet Priest, John Waterhouse",
        starList: [
          {
            id: null,
            name: "Old-Nick",
          },
          {
            id: null,
            name: "Sophie Fournier",
          },
          {
            id: null,
            name: "Janet Priest",
          },
          {
            id: null,
            name: "John Waterhouse",
          },
        ],
      },
      {
        id: "tt14960442",
        title: "A Small Town Christmas",
        fullTitle: "A Small Town Christmas (2023)",
        year: "2023",
        releaseState: "Dec 11, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOGM1MTJmYTYtYzc2MS00ZWIxLWEzYzUtZTI1OWI4ZTNiNzQ1XkEyXkFqcGdeQXVyMzkyNDMzOTA@._V1_UX128_CR0,1,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Gin Blanton",
        starList: [
          {
            id: null,
            name: "Gin Blanton",
          },
        ],
      },
      {
        id: "tt21154928",
        title: "Mia's Bridge",
        fullTitle: "Mia's Bridge (2023)",
        year: "2023",
        releaseState: "Dec 12, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BYmRlMWZmNWItOWNjMi00N2EzLTg5ZmMtMWQ2NWY4NDkwNDM0XkEyXkFqcGdeQXVyNjczNDA2ODM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "David J. Paul, William H. Burns, Lindsay Weisberg, Said Gonzalez",
        starList: [
          {
            id: null,
            name: "David J. Paul",
          },
          {
            id: null,
            name: "William H. Burns",
          },
          {
            id: null,
            name: "Lindsay Weisberg",
          },
          {
            id: null,
            name: "Said Gonzalez",
          },
        ],
      },
      {
        id: "tt6166392",
        title: "Wonka",
        fullTitle: "Wonka (2023)",
        year: "2023",
        releaseState: "Dec 15, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTY0NjQ1ZmItNDE0Ni00MDQ5LTkxZDItYmU3MTY0ZjhiNjNlXkEyXkFqcGdeQXVyMTQ4MTE5NTE1._V1_UY176_CR7,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Adventure, Comedy, Family",
        genreList: [
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Family",
            value: "Family",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Timothée Chalamet, Olivia Colman, Sally Hawkins, Rowan Atkinson",
        starList: [
          {
            id: null,
            name: "Timothée Chalamet",
          },
          {
            id: null,
            name: "Olivia Colman",
          },
          {
            id: null,
            name: "Sally Hawkins",
          },
          {
            id: null,
            name: "Rowan Atkinson",
          },
        ],
      },
      {
        id: "tt7418180",
        title: "Happy Suicide",
        fullTitle: "Happy Suicide (2023)",
        year: "2023",
        releaseState: "Dec 15, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BOGYzNWQwMjAtNjM3OS00ODg2LWE1ZWQtMGUxOTE3MjY4NDMwXkEyXkFqcGdeQXVyMjAzODM0MzE@._V1_UY176_CR50,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Thriller",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Johann Urb, Craig Stark, Tim Neff, Reila Aphrodite",
        starList: [
          {
            id: null,
            name: "Johann Urb",
          },
          {
            id: null,
            name: "Craig Stark",
          },
          {
            id: null,
            name: "Tim Neff",
          },
          {
            id: null,
            name: "Reila Aphrodite",
          },
        ],
      },
      {
        id: "tt21235248",
        title: "Untitled Ghostbusters Afterlife Sequel",
        fullTitle: "Untitled Ghostbusters Afterlife Sequel (2023)",
        year: "2023",
        releaseState: "Dec 20, 2023",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Adventure, Comedy, Fantasy",
        genreList: [
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Comedy",
            value: "Comedy",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Carrie Coon, Mckenna Grace, Paul Rudd, Finn Wolfhard",
        starList: [
          {
            id: null,
            name: "Carrie Coon",
          },
          {
            id: null,
            name: "Mckenna Grace",
          },
          {
            id: null,
            name: "Paul Rudd",
          },
          {
            id: null,
            name: "Finn Wolfhard",
          },
        ],
      },
      {
        id: "tt1200263",
        title: "The Color Purple",
        fullTitle: "The Color Purple (2023)",
        year: "2023",
        releaseState: "Dec 20, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWJkYTlmN2QtYTM0Ny00OTAzLWI3M2YtZjE1NmZlNzZmYjA0XkEyXkFqcGdeQXVyNTk5NTQzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Musical",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Musical",
            value: "Musical",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Taraji P. Henson, Halle Bailey, Elizabeth Marvel, Danielle Brooks",
        starList: [
          {
            id: null,
            name: "Taraji P. Henson",
          },
          {
            id: null,
            name: "Halle Bailey",
          },
          {
            id: null,
            name: "Elizabeth Marvel",
          },
          {
            id: null,
            name: "Danielle Brooks",
          },
        ],
      },
      {
        id: "tt9663764",
        title: "Aquaman and the Lost Kingdom",
        fullTitle: "Aquaman and the Lost Kingdom (2023)",
        year: "2023",
        releaseState: "Dec 25, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2QyYTRkMjMtMDk5NC00OTc0LWIyYTYtNGNhMzRjMTNhNGNkXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_UY176_CR93,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Fantasy",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "Jason Momoa, Ben Affleck, Patrick Wilson, Yahya Abdul-Mateen II",
        starList: [
          {
            id: null,
            name: "Jason Momoa",
          },
          {
            id: null,
            name: "Ben Affleck",
          },
          {
            id: null,
            name: "Patrick Wilson",
          },
          {
            id: null,
            name: "Yahya Abdul-Mateen II",
          },
        ],
      },
      {
        id: "tt8035464",
        title: "Target Number One",
        fullTitle: "Target Number One (2023)",
        year: "2023",
        releaseState: "Dec 25, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTI3ODRhMTAtNGEyNy00MmU0LTliZTUtMjI0MTQ1MDNiOGJiXkEyXkFqcGdeQXVyODk2MDA4MA@@._V1_UY176_CR5,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Thriller",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Arben Bajraktaraj, Michael Segál, Andy Deliana, Will Parker",
        starList: [
          {
            id: null,
            name: "Arben Bajraktaraj",
          },
          {
            id: null,
            name: "Michael Segál",
          },
          {
            id: null,
            name: "Andy Deliana",
          },
          {
            id: null,
            name: "Will Parker",
          },
        ],
      },
      {
        id: "tt12053936",
        title: "Eternal Oath",
        fullTitle: "Eternal Oath (2023)",
        year: "2023",
        releaseState: "Dec 25, 2023",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2Y3NDYyMmQtZDJhZC00ZDEwLWFmMTEtMzE4YTA2NjZlZDMzXkEyXkFqcGdeQXVyMzg0NDUyNw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Drama, Fantasy, Romance",
        genreList: [
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Fantasy",
            value: "Fantasy",
          },
          {
            key: "Romance",
            value: "Romance",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Margarita Reyes, Robyn Von Arx, Mustafa Haidari, Mike Breyer",
        starList: [
          {
            id: null,
            name: "Margarita Reyes",
          },
          {
            id: null,
            name: "Robyn Von Arx",
          },
          {
            id: null,
            name: "Mustafa Haidari",
          },
          {
            id: null,
            name: "Mike Breyer",
          },
        ],
      },
      {
        id: "tt8521778",
        title: "Untitled Bob Marley Biopic",
        fullTitle: "Untitled Bob Marley Biopic (2024)",
        year: "2024",
        releaseState: "Jan 12, 2024",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Biography, Drama, Music",
        genreList: [
          {
            key: "Biography",
            value: "Biography",
          },
          {
            key: "Drama",
            value: "Drama",
          },
          {
            key: "Music",
            value: "Music",
          },
        ],
        directors: null,
        directorList: [],
        stars:
          "James Norton, Lashana Lynch, Michael Gandolfini, Kingsley Ben-Adir",
        starList: [
          {
            id: null,
            name: "James Norton",
          },
          {
            id: null,
            name: "Lashana Lynch",
          },
          {
            id: null,
            name: "Michael Gandolfini",
          },
          {
            id: null,
            name: "Kingsley Ben-Adir",
          },
        ],
      },
      {
        id: "tt19845348",
        title: "El Muerto",
        fullTitle: "El Muerto (2024)",
        year: "2024",
        releaseState: "Jan 12, 2024",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Action, Adventure, Sci-Fi",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Sci-Fi",
            value: "Sci-Fi",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Bad Bunny",
        starList: [
          {
            id: null,
            name: "Bad Bunny",
          },
        ],
      },
      {
        id: "tt5834410",
        title: "The Tiger's Apprentice",
        fullTitle: "The Tiger's Apprentice (2024)",
        year: "2024",
        releaseState: "Jan 19, 2024",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTE3NzAyZDAtYzI0My00M2Y3LWI0NTgtYTllMmY4NWI5MWU3XkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_UY176_CR129,0,128,176_AL_.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Animation, Action, Adventure",
        genreList: [
          {
            key: "Animation",
            value: "Animation",
          },
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Michelle Yeoh, Henry Golding, Sandra Oh, Patrick Gallagher",
        starList: [
          {
            id: null,
            name: "Michelle Yeoh",
          },
          {
            id: null,
            name: "Henry Golding",
          },
          {
            id: null,
            name: "Sandra Oh",
          },
          {
            id: null,
            name: "Patrick Gallagher",
          },
        ],
      },
      {
        id: "tt9682428",
        title: "Night Swim",
        fullTitle: "Night Swim (2024)",
        year: "2024",
        releaseState: "Jan 19, 2024",
        image: "https://imdb-api.com/images/128x176/nopicture.jpg",
        runtimeMins: null,
        runtimeStr: null,
        plot: null,
        contentRating: null,
        imDbRating: null,
        imDbRatingCount: null,
        metacriticRating: null,
        genres: "Horror",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
        ],
        directors: null,
        directorList: [],
        stars: "Kerry Condon, Wyatt Russell",
        starList: [
          {
            id: null,
            name: "Kerry Condon",
          },
          {
            id: null,
            name: "Wyatt Russell",
          },
        ],
      },
    ],
    errorMessage: "",
  };

  return (
    <section className="w-full bg-transparent py-6 overflow-hidden border-t border-slate-700">
      <div className="flex items-end mx-5 md:mx-16 flex-row text-md my-3 sm:text-2xl font-bold gap-3 hover:text-orange-500 cursor-pointer">
        <h2 className="mr-auto sm:mr-0">Coming Soon</h2>
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
            {comingSoon.items.map((item) => (
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

export default ComingSoon;
