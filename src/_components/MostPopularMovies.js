import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function MostPopularMovies() {
  // https://imdb-api.com/en/API/BoxOffice/k_4gnm15cg

  // {
  //   "id": "tt3581920",
  //   "rank": "1",
  //   "rankUpDown": "0",
  //   "title": "The Last of Us",
  //   "fullTitle": "The Last of Us (2023)",
  //   "year": "2023",
  //   "image": "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
  //   "crew": "Pedro Pascal, Bella Ramsey",
  //   "imDbRating": "9.2",
  //   "imDbRatingCount": "157887"
  // },

  const mostPopularMovies = {
    "items": [
      {
        "id": "tt3581920",
        "rank": "1",
        "rankUpDown": "0",
        "title": "The Last of Us",
        "fullTitle": "The Last of Us (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Pedro Pascal, Bella Ramsey",
        "imDbRating": "9.2",
        "imDbRatingCount": "157887"
      },
      {
        "id": "tt15591076",
        "rank": "2",
        "rankUpDown": "+1",
        "title": "That '90s Show",
        "fullTitle": "That '90s Show (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BN2MyODVjN2QtZjU3Mi00ZjQwLTg1N2EtNjUyNGJmNjkwNzVjXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Kurtwood Smith, Debra Jo Rupp",
        "imDbRating": "6.5",
        "imDbRatingCount": "17843"
      },
      {
        "id": "tt13406094",
        "rank": "3",
        "rankUpDown": "+1",
        "title": "The White Lotus",
        "fullTitle": "The White Lotus (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BYjdjNzBmYjEtM2Y5My00YjI0LWJjY2YtOGQ4MjNkNmE2MDVjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jennifer Coolidge, Jon Gries",
        "imDbRating": "7.9",
        "imDbRatingCount": "140037"
      },
      {
        "id": "tt14153790",
        "rank": "4",
        "rankUpDown": "-2",
        "title": "Velma",
        "fullTitle": "Velma (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BNzM0MDEzNDctOWI5YS00OTc4LWIyZDAtMGVkZDAzNzBiYjFkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Mindy Kaling, Glenn Howerton",
        "imDbRating": "1.4",
        "imDbRatingCount": "62366"
      },
      {
        "id": "tt4236770",
        "rank": "5",
        "rankUpDown": "0",
        "title": "Yellowstone",
        "fullTitle": "Yellowstone (2018)",
        "year": "2018",
        "image": "https://m.media-amazon.com/images/M/MV5BOGFiZjU5NGEtNTAwNS00ZjI2LTg0YTktNjg0ODFlM2E0NGVhXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Kevin Costner, Luke Grimes",
        "imDbRating": "8.7",
        "imDbRatingCount": "158516"
      },
      {
        "id": "tt13443470",
        "rank": "6",
        "rankUpDown": "0",
        "title": "Wednesday",
        "fullTitle": "Wednesday (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jenna Ortega, Hunter Doohan",
        "imDbRating": "8.2",
        "imDbRatingCount": "260573"
      },
      {
        "id": "tt10813940",
        "rank": "7",
        "rankUpDown": "0",
        "title": "Ginny & Georgia",
        "fullTitle": "Ginny & Georgia (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BMTQ2ZWFlNmEtNWYyYy00Yjk1LWIxMTEtMWVkM2NlMTEzOGI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Brianne Howey, Antonia Gentry",
        "imDbRating": "7.5",
        "imDbRatingCount": "62331"
      },
      {
        "id": "tt14269590",
        "rank": "8",
        "rankUpDown": "+175",
        "title": "Poker Face",
        "fullTitle": "Poker Face (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BNDMyNjAxYTQtMjAyNi00NGQ5LWE0YzUtMTEzNWQ5NjYyNmFjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Natasha Lyonne, Benjamin Bratt",
        "imDbRating": "8.2",
        "imDbRatingCount": "5516"
      },
      {
        "id": "tt1520211",
        "rank": "9",
        "rankUpDown": "+4",
        "title": "The Walking Dead",
        "fullTitle": "The Walking Dead (2010)",
        "year": "2010",
        "image": "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Andrew Lincoln, Norman Reedus",
        "imDbRating": "8.1",
        "imDbRatingCount": "1005024"
      },
      {
        "id": "tt0165598",
        "rank": "10",
        "rankUpDown": "+20",
        "title": "That '70s Show",
        "fullTitle": "That '70s Show (1998)",
        "year": "1998",
        "image": "https://m.media-amazon.com/images/M/MV5BN2RkZGE0MjAtZGVkOS00MzVhLTg0OWItZTc4OGRjOTQ1ZTM4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Topher Grace, Laura Prepon",
        "imDbRating": "8.1",
        "imDbRatingCount": "178108"
      },
      {
        "id": "tt15677150",
        "rank": "11",
        "rankUpDown": "+91",
        "title": "Shrinking",
        "fullTitle": "Shrinking (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BYzhjMDIwOTgtYmMwNC00ZDIyLWJiMzUtMDM0YTY3M2VmOWNiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jason Segel, Jessica Williams",
        "imDbRating": "7.7",
        "imDbRatingCount": "3359"
      },
      {
        "id": "tt0944947",
        "rank": "12",
        "rankUpDown": "+2",
        "title": "Game of Thrones",
        "fullTitle": "Game of Thrones (2011)",
        "year": "2011",
        "image": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY176_CR0,0,128,176_AL_.jpg",
        "crew": "Emilia Clarke, Peter Dinklage",
        "imDbRating": "9.2",
        "imDbRatingCount": "2119663"
      },
      {
        "id": "tt7949212",
        "rank": "13",
        "rankUpDown": "+142",
        "title": "Accused",
        "fullTitle": "Accused (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BMDM3MGJlMjAtMWRkOS00OTdmLWE0MDYtNTc4ZmMzZmJkNGEzXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Neil Whitely, Stephanie Nogueras",
        "imDbRating": "7.3",
        "imDbRatingCount": "1039"
      },
      {
        "id": "tt7456722",
        "rank": "14",
        "rankUpDown": "-4",
        "title": "Hunters",
        "fullTitle": "Hunters (2020)",
        "year": "2020",
        "image": "https://m.media-amazon.com/images/M/MV5BMGRhY2EyMTYtNDNkMi00MzYxLWIwNDgtYjlkNDI2YWQyZTQ2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Al Pacino, Logan Lerman",
        "imDbRating": "7.2",
        "imDbRatingCount": "45752"
      },
      {
        "id": "tt16358384",
        "rank": "15",
        "rankUpDown": "-6",
        "title": "Tulsa King",
        "fullTitle": "Tulsa King (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BYmI3N2EzOWQtZjFiMi00MjgwLTgzN2UtZGI0ZGY1ZDQyOTRiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Sylvester Stallone, Andrea Savage",
        "imDbRating": "8.2",
        "imDbRatingCount": "34802"
      },
      {
        "id": "tt18335752",
        "rank": "16",
        "rankUpDown": "-5",
        "title": "1923",
        "fullTitle": "1923 (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BZWZhNGJjMGUtYmVhZi00NDFiLWE2NWMtYjE1OGZmNGMxNDk4XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Harrison Ford, Helen Mirren",
        "imDbRating": "8.6",
        "imDbRatingCount": "12765"
      },
      {
        "id": "tt4565380",
        "rank": "17",
        "rankUpDown": "+139",
        "title": "Fauda",
        "fullTitle": "Fauda (2015)",
        "year": "2015",
        "image": "https://m.media-amazon.com/images/M/MV5BZTk5OTU5Y2EtY2M1NC00N2E5LWJlMTMtODgzMDc2NDk1MTczXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Lior Raz, Itzik Cohen",
        "imDbRating": "8.3",
        "imDbRatingCount": "30043"
      },
      {
        "id": "tt0903747",
        "rank": "18",
        "rankUpDown": "+2",
        "title": "Breaking Bad",
        "fullTitle": "Breaking Bad (2008)",
        "year": "2008",
        "image": "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Bryan Cranston, Aaron Paul",
        "imDbRating": "9.5",
        "imDbRatingCount": "1914252"
      },
      {
        "id": "tt11311302",
        "rank": "19",
        "rankUpDown": "-11",
        "title": "Vikings: Valhalla",
        "fullTitle": "Vikings: Valhalla (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BMmZlYTQ3NjQtZmIxNC00MzA4LTg1NDgtMmEzODk0MzA4NjQxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Sam Corlett, Leo Suter",
        "imDbRating": "7.2",
        "imDbRatingCount": "46973"
      },
      {
        "id": "tt3428912",
        "rank": "20",
        "rankUpDown": "+4",
        "title": "Happy Valley",
        "fullTitle": "Happy Valley (2014)",
        "year": "2014",
        "image": "https://m.media-amazon.com/images/M/MV5BNTBmYTQ5ZDYtM2NjMC00M2Q2LTg4NDAtODUxZTk0ZmFjMGVjXkEyXkFqcGdeQXVyNzQ5MzY0NjM@._V1_UY176_CR0,0,128,176_AL_.jpg",
        "crew": "Sarah Lancashire, Siobhan Finneran",
        "imDbRating": "8.5",
        "imDbRatingCount": "45557"
      },
      {
        "id": "tt0452046",
        "rank": "21",
        "rankUpDown": "+4",
        "title": "Criminal Minds",
        "fullTitle": "Criminal Minds (2005)",
        "year": "2005",
        "image": "https://m.media-amazon.com/images/M/MV5BZWVjZWUyMzUtMGRiMS00MzhkLWI5NTQtYjBmZWVlZThjZjFkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Kirsten Vangsness, Matthew Gray Gubler",
        "imDbRating": "8.1",
        "imDbRatingCount": "202459"
      },
      {
        "id": "tt15438246",
        "rank": "22",
        "rankUpDown": "-10",
        "title": "Kaleidoscope",
        "fullTitle": "Kaleidoscope (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BZGYzMTg2MzktOTc3Yi00ZThlLTkxN2MtY2YxNGE1MWNiYmMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Giancarlo Esposito, Rufus Sewell",
        "imDbRating": "6.7",
        "imDbRatingCount": "30823"
      },
      {
        "id": "tt11712058",
        "rank": "23",
        "rankUpDown": "-7",
        "title": "Mayor of Kingstown",
        "fullTitle": "Mayor of Kingstown (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BZGI2MDUxMGEtMWU4OS00ZjY2LTk5ZWUtNGVmMjRkNGI3NzBjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jeremy Renner, Dianne Wiest",
        "imDbRating": "8.2",
        "imDbRatingCount": "29411"
      },
      {
        "id": "tt7440726",
        "rank": "24",
        "rankUpDown": "-5",
        "title": "Your Honor",
        "fullTitle": "Your Honor (2020)",
        "year": "2020",
        "image": "https://m.media-amazon.com/images/M/MV5BNTIxMmJlNzAtZTQ3NC00MjIyLTk4YTUtNmNlNzNjMzYzZWFiXkEyXkFqcGdeQXVyMTUyMTU1MDg1._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Bryan Cranston, Hope Davis",
        "imDbRating": "7.6",
        "imDbRatingCount": "50669"
      },
      {
        "id": "tt11247158",
        "rank": "25",
        "rankUpDown": "+33",
        "title": "The Legend of Vox Machina",
        "fullTitle": "The Legend of Vox Machina (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BYzJjZDkxMDgtZDBkNC00ZGJlLTk0NzgtZDhjZGIxZDAzZDY2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Laura Bailey, Taliesin Jaffe",
        "imDbRating": "8.4",
        "imDbRatingCount": "28521"
      },
      {
        "id": "tt14579330",
        "rank": "26",
        "rankUpDown": "+184",
        "title": "Women at War",
        "fullTitle": "Women at War (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BYzU3YmRhZTMtNDYyYS00YzQxLTgyZjAtN2E0NmI0Njc5NGIzXkEyXkFqcGdeQXVyMTM5NDQ2NjMw._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Audrey Fleurot, Julie De Bona",
        "imDbRating": "7.5",
        "imDbRatingCount": "1864"
      },
      {
        "id": "tt13991232",
        "rank": "27",
        "rankUpDown": "0",
        "title": "1883",
        "fullTitle": "1883 (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BNDZkZDdkMjYtMGI3Yi00MmVkLTkzZjQtMGI0NGViNzIzNjhjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Sam Elliott, Tim McGraw",
        "imDbRating": "8.8",
        "imDbRatingCount": "80317"
      },
      {
        "id": "tt7221388",
        "rank": "28",
        "rankUpDown": "+34",
        "title": "Cobra Kai",
        "fullTitle": "Cobra Kai (2018)",
        "year": "2018",
        "image": "https://m.media-amazon.com/images/M/MV5BYWU4ZmI0NTItZjcyNy00MzQ5LThiNDQtZDZkNjg1NWUwN2RhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Ralph Macchio, William Zabka",
        "imDbRating": "8.5",
        "imDbRatingCount": "189382"
      },
      {
        "id": "tt5057054",
        "rank": "29",
        "rankUpDown": "-7",
        "title": "Tom Clancy's Jack Ryan",
        "fullTitle": "Tom Clancy's Jack Ryan (2018)",
        "year": "2018",
        "image": "https://m.media-amazon.com/images/M/MV5BNDNmNGI2NzAtZjZhYi00YTc1LWJjOTctMTRlMDI0MzEzNjA2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "John Krasinski, Wendell Pierce",
        "imDbRating": "8.0",
        "imDbRatingCount": "142415"
      },
      {
        "id": "tt3032476",
        "rank": "30",
        "rankUpDown": "+1",
        "title": "Better Call Saul",
        "fullTitle": "Better Call Saul (2015)",
        "year": "2015",
        "image": "https://m.media-amazon.com/images/M/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Bob Odenkirk, Rhea Seehorn",
        "imDbRating": "8.9",
        "imDbRatingCount": "544624"
      },
      {
        "id": "tt2861424",
        "rank": "31",
        "rankUpDown": "+47",
        "title": "Rick and Morty",
        "fullTitle": "Rick and Morty (2013)",
        "year": "2013",
        "image": "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Justin Roiland, Chris Parnell",
        "imDbRating": "9.1",
        "imDbRatingCount": "535162"
      },
      {
        "id": "tt15487922",
        "rank": "32",
        "rankUpDown": "+179",
        "title": "Wolf Pack",
        "fullTitle": "Wolf Pack (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BNGMxMzFhZjctZjcxOC00ZmY3LTg0MmYtODg4YWU3ZDhmMmUxXkEyXkFqcGdeQXVyMTUwNjg3NTUw._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Sarah Michelle Gellar, Rodrigo Santoro",
        "imDbRating": "5.9",
        "imDbRatingCount": "1813"
      },
      {
        "id": "tt8111088",
        "rank": "33",
        "rankUpDown": "-18",
        "title": "The Mandalorian",
        "fullTitle": "The Mandalorian (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BZjRlZDIyNDMtZjIwYi00YmJiLTg4NjMtODA2Mjc0YTBlNzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Pedro Pascal, Carl Weathers",
        "imDbRating": "8.7",
        "imDbRatingCount": "493962"
      },
      {
        "id": "tt11198330",
        "rank": "34",
        "rankUpDown": "-2",
        "title": "House of the Dragon",
        "fullTitle": "House of the Dragon (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Rhys Ifans, Matt Smith",
        "imDbRating": "8.5",
        "imDbRatingCount": "304388"
      },
      {
        "id": "tt1190634",
        "rank": "35",
        "rankUpDown": "-1",
        "title": "The Boys",
        "fullTitle": "The Boys (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Karl Urban, Jack Quaid",
        "imDbRating": "8.7",
        "imDbRatingCount": "522014"
      },
      {
        "id": "tt15428778",
        "rank": "36",
        "rankUpDown": "-8",
        "title": "Mayfair Witches",
        "fullTitle": "Mayfair Witches (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BNzIyZjYzYjgtYzQwNC00MGY4LWJhMTAtMDIzMTZiMGE0YjkxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Alexandra Daddario, Tongayi Chirisa",
        "imDbRating": "6.5",
        "imDbRatingCount": "3874"
      },
      {
        "id": "tt0386676",
        "rank": "37",
        "rankUpDown": "+2",
        "title": "The Office",
        "fullTitle": "The Office (2005)",
        "year": "2005",
        "image": "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Steve Carell, Jenna Fischer",
        "imDbRating": "9.0",
        "imDbRatingCount": "614228"
      },
      {
        "id": "tt4574334",
        "rank": "38",
        "rankUpDown": "-1",
        "title": "Stranger Things",
        "fullTitle": "Stranger Things (2016)",
        "year": "2016",
        "image": "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Millie Bobby Brown, Finn Wolfhard",
        "imDbRating": "8.7",
        "imDbRatingCount": "1208377"
      },
      {
        "id": "tt16913068",
        "rank": "39",
        "rankUpDown": "+280",
        "title": "Shahmaran",
        "fullTitle": "Shahmaran (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BMGY2MTM3MDMtNTQzYi00OGFjLTg2ZmItZjRhNzEyMDRkYzNiXkEyXkFqcGdeQXVyODc5Mjc4Nzg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Serenay Sarikaya, Burak Deniz",
        "imDbRating": "5.1",
        "imDbRatingCount": "3812"
      },
      {
        "id": "tt0086770",
        "rank": "40",
        "rankUpDown": "-23",
        "title": "Night Court",
        "fullTitle": "Night Court (1984)",
        "year": "1984",
        "image": "https://m.media-amazon.com/images/M/MV5BY2U3ZjJlMjgtZGYzNy00YzFlLTg4ODAtYWQxMTU1ZTc4YmYxXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Harry Anderson, John Larroquette",
        "imDbRating": "7.7",
        "imDbRatingCount": "15745"
      },
      {
        "id": "tt8749198",
        "rank": "41",
        "rankUpDown": "+340",
        "title": "Daisy Jones & The Six",
        "fullTitle": "Daisy Jones & The Six (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BNzJhNmViYTMtOTBiMS00NTY1LTlkMWMtMWQ4MzVhZTViMzVhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Riley Keough, Sebastian Chacon",
        "imDbRating": "",
        "imDbRatingCount": "0"
      },
      {
        "id": "tt7660850",
        "rank": "42",
        "rankUpDown": "+17",
        "title": "Succession",
        "fullTitle": "Succession (2018)",
        "year": "2018",
        "image": "https://m.media-amazon.com/images/M/MV5BZDE0ODVlYjktNjJiMC00ODk4LWIwNTktMWRhZmZiOGFhYmUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Nicholas Braun, Brian Cox",
        "imDbRating": "8.8",
        "imDbRatingCount": "155961"
      },
      {
        "id": "tt9253284",
        "rank": "43",
        "rankUpDown": "-7",
        "title": "Andor",
        "fullTitle": "Andor (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BNDgxNTIyZTMtMzYxNi00NmRjLWFiMTEtM2U4MTFmODkzNzM1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Diego Luna, Kyle Soller",
        "imDbRating": "8.4",
        "imDbRatingCount": "117180"
      },
      {
        "id": "tt0141842",
        "rank": "44",
        "rankUpDown": "+1",
        "title": "The Sopranos",
        "fullTitle": "The Sopranos (1999)",
        "year": "1999",
        "image": "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "James Gandolfini, Lorraine Bracco",
        "imDbRating": "9.2",
        "imDbRatingCount": "407922"
      },
      {
        "id": "tt11280740",
        "rank": "45",
        "rankUpDown": "-5",
        "title": "Severance",
        "fullTitle": "Severance (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Adam Scott, Zach Cherry",
        "imDbRating": "8.7",
        "imDbRatingCount": "133996"
      },
      {
        "id": "tt0413573",
        "rank": "46",
        "rankUpDown": "0",
        "title": "Grey's Anatomy",
        "fullTitle": "Grey's Anatomy (2005)",
        "year": "2005",
        "image": "https://m.media-amazon.com/images/M/MV5BODA2Mjk0N2MtNGY0Mi00ZWFjLTkxODEtZDFjNDg4ZDliMGVmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Chandra Wilson, James Pickens Jr.",
        "imDbRating": "7.6",
        "imDbRatingCount": "313787"
      },
      {
        "id": "tt7817340",
        "rank": "47",
        "rankUpDown": "-14",
        "title": "New Amsterdam",
        "fullTitle": "New Amsterdam (2018)",
        "year": "2018",
        "image": "https://m.media-amazon.com/images/M/MV5BNDEyZGJkZmUtYjk1My00MzNjLThmNDQtZThlYmIyZmFmMDIyXkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Ryan Eggold, Janet Montgomery",
        "imDbRating": "8.0",
        "imDbRatingCount": "41193"
      },
      {
        "id": "tt10278918",
        "rank": "48",
        "rankUpDown": "-22",
        "title": "Willow",
        "fullTitle": "Willow (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BNDRmNDliZTktZjA0Ny00ZjgxLTlmZTgtMWUxMzBiMDk1OTU2XkEyXkFqcGdeQXVyMTU5OTc2NTk@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Ruby Cruz, Ellie Bamber",
        "imDbRating": "5.6",
        "imDbRatingCount": "27168"
      },
      {
        "id": "tt2306299",
        "rank": "49",
        "rankUpDown": "-6",
        "title": "Vikings",
        "fullTitle": "Vikings (2013)",
        "year": "2013",
        "image": "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Katheryn Winnick, Gustaf Skarsgård",
        "imDbRating": "8.5",
        "imDbRatingCount": "540107"
      },
      {
        "id": "tt13798316",
        "rank": "50",
        "rankUpDown": "-32",
        "title": "Night Court",
        "fullTitle": "Night Court (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BNjAzODI1MDAtMjQ2Ny00ZWJkLWIzMmItMTg3Mzg5Y2M4OTBkXkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Melissa Rauch, India de Beaufort",
        "imDbRating": "5.8",
        "imDbRatingCount": "1899"
      },
      {
        "id": "tt12580982",
        "rank": "51",
        "rankUpDown": "-4",
        "title": "National Treasure: Edge of History",
        "fullTitle": "National Treasure: Edge of History (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BOWZlZDVmMWItZDcxNi00MGJmLTk0MzktOGZkNTNkMzU3OWQzXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Lisette Olivera, Zuri Reed",
        "imDbRating": "5.3",
        "imDbRatingCount": "7503"
      },
      {
        "id": "tt14531842",
        "rank": "52",
        "rankUpDown": "1,044",
        "title": "Extraordinary",
        "fullTitle": "Extraordinary (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BMmEwYmZkOTMtNTYwNi00MmM2LWIxNmYtZjI4NjM5MGQzNDMxXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Máiréad Tyers, Sofia Oxenham",
        "imDbRating": "8.0",
        "imDbRatingCount": "3168"
      },
      {
        "id": "tt0460681",
        "rank": "53",
        "rankUpDown": "+1",
        "title": "Supernatural",
        "fullTitle": "Supernatural (2005)",
        "year": "2005",
        "image": "https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jared Padalecki, Jensen Ackles",
        "imDbRating": "8.4",
        "imDbRatingCount": "450553"
      },
      {
        "id": "tt0364845",
        "rank": "54",
        "rankUpDown": "-6",
        "title": "NCIS",
        "fullTitle": "NCIS (2003)",
        "year": "2003",
        "image": "https://m.media-amazon.com/images/M/MV5BYjVlMjZhYzYtOGQxNC00OTQxLTk2NzEtMWFmMmNhODA4YjYzXkEyXkFqcGdeQXVyNjQ3MDgwNjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "David McCallum, Mark Harmon",
        "imDbRating": "7.8",
        "imDbRatingCount": "150311"
      },
      {
        "id": "tt0203259",
        "rank": "55",
        "rankUpDown": "-3",
        "title": "Law & Order: Special Victims Unit",
        "fullTitle": "Law & Order: Special Victims Unit (1999)",
        "year": "1999",
        "image": "https://m.media-amazon.com/images/M/MV5BYmNkN2RlMzktMDgzNi00OWRmLWI3N2ItYzU5ZGUyMzc3MjJhXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Mariska Hargitay, Christopher Meloni",
        "imDbRating": "8.1",
        "imDbRatingCount": "109988"
      },
      {
        "id": "tt4786824",
        "rank": "56",
        "rankUpDown": "-14",
        "title": "The Crown",
        "fullTitle": "The Crown (2016)",
        "year": "2016",
        "image": "https://m.media-amazon.com/images/M/MV5BZTEyNjBjYmYtYWYxYi00MmQyLThlYmItY2I4NzM1Mjg1MWYxXkEyXkFqcGdeQXVyMTU3ODI3MTk2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Claire Foy, Olivia Colman",
        "imDbRating": "8.6",
        "imDbRatingCount": "225063"
      },
      {
        "id": "tt7587890",
        "rank": "57",
        "rankUpDown": "-13",
        "title": "The Rookie",
        "fullTitle": "The Rookie (2018)",
        "year": "2018",
        "image": "https://m.media-amazon.com/images/M/MV5BOTY5OWFmMzAtZTIxYi00NGM4LTk3YWMtY2MyYzMwOWVhZWM0XkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Nathan Fillion, Alyssa Diaz",
        "imDbRating": "8.0",
        "imDbRatingCount": "42823"
      },
      {
        "id": "tt2442560",
        "rank": "58",
        "rankUpDown": "-2",
        "title": "Peaky Blinders",
        "fullTitle": "Peaky Blinders (2013)",
        "year": "2013",
        "image": "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Cillian Murphy, Paul Anderson",
        "imDbRating": "8.8",
        "imDbRatingCount": "561229"
      },
      {
        "id": "tt10986410",
        "rank": "59",
        "rankUpDown": "-8",
        "title": "Ted Lasso",
        "fullTitle": "Ted Lasso (2020)",
        "year": "2020",
        "image": "https://m.media-amazon.com/images/M/MV5BMDVmODUzNmEtMGMxZC00NWUzLTkxMTAtMDM5OTQzMWE0ZDM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jason Sudeikis, Brett Goldstein",
        "imDbRating": "8.8",
        "imDbRatingCount": "226286"
      },
      {
        "id": "tt14273790",
        "rank": "60",
        "rankUpDown": "-37",
        "title": "The Rig",
        "fullTitle": "The Rig (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BOGY2ZmI0NTgtMWRiNy00NzI5LTk2NGYtN2Y4MDI2YmM0NzgyXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Emily Hampshire, Iain Glen",
        "imDbRating": "5.8",
        "imDbRatingCount": "9139"
      },
      {
        "id": "tt8068860",
        "rank": "61",
        "rankUpDown": "-32",
        "title": "Servant",
        "fullTitle": "Servant (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BNDNiOWE4Y2YtMDZiOS00OGFlLWIyN2QtYjA0MmFlOWY0NDRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Lauren Ambrose, Toby Kebbell",
        "imDbRating": "7.5",
        "imDbRatingCount": "38011"
      },
      {
        "id": "tt10795658",
        "rank": "62",
        "rankUpDown": "-24",
        "title": "Alice in Borderland",
        "fullTitle": "Alice in Borderland (2020)",
        "year": "2020",
        "image": "https://m.media-amazon.com/images/M/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Kento Yamazaki, Tao Tsuchiya",
        "imDbRating": "7.7",
        "imDbRatingCount": "75257"
      },
      {
        "id": "tt17543592",
        "rank": "63",
        "rankUpDown": "-28",
        "title": "Will Trent",
        "fullTitle": "Will Trent (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BNTI3YzhhYmItZTViNC00NmE5LTgzOGQtNmZkOThkZmYwZDY0XkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Ramón Rodríguez, Erika Christensen",
        "imDbRating": "7.6",
        "imDbRatingCount": "3756"
      },
      {
        "id": "tt0108778",
        "rank": "64",
        "rankUpDown": "-3",
        "title": "Friends",
        "fullTitle": "Friends (1994)",
        "year": "1994",
        "image": "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jennifer Aniston, Courteney Cox",
        "imDbRating": "8.9",
        "imDbRatingCount": "1006951"
      },
      {
        "id": "tt0898266",
        "rank": "65",
        "rankUpDown": "-5",
        "title": "The Big Bang Theory",
        "fullTitle": "The Big Bang Theory (2007)",
        "year": "2007",
        "image": "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Johnny Galecki, Jim Parsons",
        "imDbRating": "8.2",
        "imDbRatingCount": "816409"
      },
      {
        "id": "tt14500082",
        "rank": "66",
        "rankUpDown": "+267",
        "title": "How I Met Your Father",
        "fullTitle": "How I Met Your Father (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BYTg2Yzk2NGItM2NhZS00YjBhLThiYWUtYmY1ZTUzMTY2YTVjXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Hilary Duff, Christopher Lowell",
        "imDbRating": "5.5",
        "imDbRatingCount": "18810"
      },
      {
        "id": "tt13802576",
        "rank": "67",
        "rankUpDown": "+713",
        "title": "Lockwood & Co",
        "fullTitle": "Lockwood & Co (2023)",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BY2RiOGNmMmYtNmFlOC00MDg2LTk2YTItZWRmMmZjZjc1OGMxXkEyXkFqcGdeQXVyMTYxMDYwMzI2._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Ruby Stokes, Cameron Chapman",
        "imDbRating": "7.6",
        "imDbRatingCount": "6384"
      },
      {
        "id": "tt14452776",
        "rank": "68",
        "rankUpDown": "-27",
        "title": "The Bear",
        "fullTitle": "The Bear (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BMmZmMjgyOTUtZjljMS00NjhlLTkzMmItM2EyMzY5NzU0NzFiXkEyXkFqcGdeQXVyNjIzMTEyNDk@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Jeremy Allen White, Ebon Moss-Bachrach",
        "imDbRating": "8.4",
        "imDbRatingCount": "78725"
      },
      {
        "id": "tt5607976",
        "rank": "69",
        "rankUpDown": "-19",
        "title": "His Dark Materials",
        "fullTitle": "His Dark Materials (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BM2FlYzgyZDYtYzI0ZS00YThiLTg4N2EtNmViMDdmMTcyNWU0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Dafne Keen, Kit Connor",
        "imDbRating": "7.8",
        "imDbRatingCount": "75960"
      },
      {
        "id": "tt5875444",
        "rank": "70",
        "rankUpDown": "-17",
        "title": "Slow Horses",
        "fullTitle": "Slow Horses (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BNDgwODEwOTYtODYwMS00MzE5LTg3ODktOTU2YjExYWEzMmQ2XkEyXkFqcGdeQXVyNjYxNjc0OTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Gary Oldman, Jack Lowden",
        "imDbRating": "7.9",
        "imDbRatingCount": "36082"
      },
      {
        "id": "tt0472954",
        "rank": "71",
        "rankUpDown": "+2",
        "title": "It's Always Sunny in Philadelphia",
        "fullTitle": "It's Always Sunny in Philadelphia (2005)",
        "year": "2005",
        "image": "https://m.media-amazon.com/images/M/MV5BMzg3ODVjZTYtZTAyNC00MzVjLTk3NmUtMGI4ZjZmNGQ1NmY4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Charlie Day, Rob McElhenney",
        "imDbRating": "8.8",
        "imDbRatingCount": "229335"
      },
      {
        "id": "tt2356777",
        "rank": "72",
        "rankUpDown": "-6",
        "title": "True Detective",
        "fullTitle": "True Detective (2014)",
        "year": "2014",
        "image": "https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Vince Vaughn, Colin Farrell",
        "imDbRating": "8.9",
        "imDbRatingCount": "578889"
      },
      {
        "id": "tt1567432",
        "rank": "73",
        "rankUpDown": "+125",
        "title": "Teen Wolf",
        "fullTitle": "Teen Wolf (2011)",
        "year": "2011",
        "image": "https://m.media-amazon.com/images/M/MV5BMThlNTk3YzMtOTZjMi00M2NiLTg1NTgtYThiYzE2MDFmMDUwXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Tyler Posey, Holland Roden",
        "imDbRating": "7.7",
        "imDbRatingCount": "151830"
      },
      {
        "id": "tt1442437",
        "rank": "74",
        "rankUpDown": "0",
        "title": "Modern Family",
        "fullTitle": "Modern Family (2009)",
        "year": "2009",
        "image": "https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Ed O'Neill, Sofía Vergara",
        "imDbRating": "8.5",
        "imDbRatingCount": "437550"
      },
      {
        "id": "tt16030542",
        "rank": "75",
        "rankUpDown": "-26",
        "title": "The Recruit",
        "fullTitle": "The Recruit (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BOGFlN2Y1OTQtMjBhMy00ODE0LTk0OTctMWFkMjkyZjJkYWE4XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Noah Centineo, Laura Haddock",
        "imDbRating": "7.5",
        "imDbRatingCount": "28380"
      },
      {
        "id": "tt14218830",
        "rank": "76",
        "rankUpDown": "-21",
        "title": "Abbott Elementary",
        "fullTitle": "Abbott Elementary (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BMTY1MWUwYjItY2JmYi00ZDgyLTgzMjUtNzNkMzg0NjNjYTdkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Quinta Brunson, Tyler James Williams",
        "imDbRating": "8.2",
        "imDbRatingCount": "20364"
      },
      {
        "id": "tt7335184",
        "rank": "77",
        "rankUpDown": "-8",
        "title": "You",
        "fullTitle": "You (2018)",
        "year": "2018",
        "image": "https://m.media-amazon.com/images/M/MV5BZmUxYTllMzEtNmNmMi00OWNkLTg0ZmItZDdkYTJkOTAxZmJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Penn Badgley, Victoria Pedretti",
        "imDbRating": "7.7",
        "imDbRatingCount": "249752"
      },
      {
        "id": "tt2741602",
        "rank": "78",
        "rankUpDown": "+7",
        "title": "The Blacklist",
        "fullTitle": "The Blacklist (2013)",
        "year": "2013",
        "image": "https://m.media-amazon.com/images/M/MV5BNDFkZDI5ZGUtYTdkOC00YTFiLWJjNjMtNTQ3ZjIxMTY2ZjMyXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "James Spader, Megan Boone",
        "imDbRating": "8.0",
        "imDbRatingCount": "253145"
      },
      {
        "id": "tt12708542",
        "rank": "79",
        "rankUpDown": "-22",
        "title": "Star Wars: The Bad Batch",
        "fullTitle": "Star Wars: The Bad Batch (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BNGIwM2E2NzEtMjQzZC00M2FmLThhMDktZTRlMGYzZWZlZGYzXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Ming-Na Wen, Dee Bradley Baker",
        "imDbRating": "7.8",
        "imDbRatingCount": "37871"
      },
      {
        "id": "tt0436992",
        "rank": "80",
        "rankUpDown": "-4",
        "title": "Doctor Who",
        "fullTitle": "Doctor Who (2005)",
        "year": "2005",
        "image": "https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Jodie Whittaker, Peter Capaldi",
        "imDbRating": "8.6",
        "imDbRatingCount": "228261"
      },
      {
        "id": "tt1844624",
        "rank": "81",
        "rankUpDown": "-11",
        "title": "American Horror Story",
        "fullTitle": "American Horror Story (2011)",
        "year": "2011",
        "image": "https://m.media-amazon.com/images/M/MV5BOWFlOWE1OGEtOTVlMi00M2JmLWJlMGEtOWVjOGFhOTNlYTZiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Lady Gaga, Kathy Bates",
        "imDbRating": "8.0",
        "imDbRatingCount": "323080"
      },
      {
        "id": "tt2560140",
        "rank": "82",
        "rankUpDown": "-3",
        "title": "Attack on Titan",
        "fullTitle": "Attack on Titan (2013)",
        "year": "2013",
        "image": "https://m.media-amazon.com/images/M/MV5BMGY3Mzg3M2UtNzYxNi00ZDYzLTlhMTQtMjkzZTA2MWQ4NjA0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Josh Grelle, Bryce Papenbrook",
        "imDbRating": "9.0",
        "imDbRatingCount": "380525"
      },
      {
        "id": "tt1632701",
        "rank": "83",
        "rankUpDown": "-2",
        "title": "Suits",
        "fullTitle": "Suits (2011)",
        "year": "2011",
        "image": "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Gabriel Macht, Patrick J. Adams",
        "imDbRating": "8.5",
        "imDbRatingCount": "416278"
      },
      {
        "id": "tt6226232",
        "rank": "84",
        "rankUpDown": "-12",
        "title": "Young Sheldon",
        "fullTitle": "Young Sheldon (2017)",
        "year": "2017",
        "image": "https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Iain Armitage, Zoe Perry",
        "imDbRating": "7.6",
        "imDbRatingCount": "65705"
      },
      {
        "id": "tt11212276",
        "rank": "85",
        "rankUpDown": "+24",
        "title": "The Sex Lives of College Girls",
        "fullTitle": "The Sex Lives of College Girls (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BYjNmOWIyYTUtODcyOC00YzA5LWJhYzQtOGNhNmE4NjVlYjg0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Pauline Chalamet, Amrit Kaur",
        "imDbRating": "7.8",
        "imDbRatingCount": "22879"
      },
      {
        "id": "tt7366338",
        "rank": "86",
        "rankUpDown": "+7",
        "title": "Chernobyl",
        "fullTitle": "Chernobyl (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jessie Buckley, Jared Harris",
        "imDbRating": "9.4",
        "imDbRatingCount": "767579"
      },
      {
        "id": "tt12851524",
        "rank": "87",
        "rankUpDown": "-19",
        "title": "Only Murders in the Building",
        "fullTitle": "Only Murders in the Building (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BZTFmZWUwZmEtYzc4Ni00N2FmLTk1MmMtZmMyODYwZTNkY2EwXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Steve Martin, Martin Short",
        "imDbRating": "8.1",
        "imDbRatingCount": "107270"
      },
      {
        "id": "tt8772296",
        "rank": "88",
        "rankUpDown": "-13",
        "title": "Euphoria",
        "fullTitle": "Euphoria (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Zendaya, Hunter Schafer",
        "imDbRating": "8.4",
        "imDbRatingCount": "192672"
      },
      {
        "id": "tt1888075",
        "rank": "89",
        "rankUpDown": "-6",
        "title": "Death in Paradise",
        "fullTitle": "Death in Paradise (2011)",
        "year": "2011",
        "image": "https://m.media-amazon.com/images/M/MV5BMTc5OTc3MjAwN15BMl5BanBnXkFtZTgwODAxMDQyMTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Elizabeth Bourgine, Don Warrington",
        "imDbRating": "7.8",
        "imDbRatingCount": "22486"
      },
      {
        "id": "tt4179452",
        "rank": "90",
        "rankUpDown": "-1",
        "title": "The Last Kingdom",
        "fullTitle": "The Last Kingdom (2015)",
        "year": "2015",
        "image": "https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Alexander Dreymon, Eliza Butterworth",
        "imDbRating": "8.5",
        "imDbRatingCount": "143857"
      },
      {
        "id": "tt0460627",
        "rank": "91",
        "rankUpDown": "-5",
        "title": "Bones",
        "fullTitle": "Bones (2005)",
        "year": "2005",
        "image": "https://m.media-amazon.com/images/M/MV5BMjA3ODMxMzM5NF5BMl5BanBnXkFtZTgwMDM1NjU0OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Emily Deschanel, David Boreanaz",
        "imDbRating": "7.8",
        "imDbRatingCount": "162700"
      },
      {
        "id": "tt11794642",
        "rank": "92",
        "rankUpDown": "-27",
        "title": "Big Sky",
        "fullTitle": "Big Sky (2020)",
        "year": "2020",
        "image": "https://m.media-amazon.com/images/M/MV5BYTM2Y2NjZmMtZWZiZi00ZDAxLTgxODctMmFiOTI2ZjY3YWE5XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Katheryn Winnick, Kylie Bunbury",
        "imDbRating": "6.8",
        "imDbRatingCount": "22288"
      },
      {
        "id": "tt7631058",
        "rank": "93",
        "rankUpDown": "-13",
        "title": "The Lord of the Rings: The Rings of Power",
        "fullTitle": "The Lord of the Rings: The Rings of Power (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Morfydd Clark, Ismael Cruz Cordova",
        "imDbRating": "6.9",
        "imDbRatingCount": "317765"
      },
      {
        "id": "tt7821582",
        "rank": "94",
        "rankUpDown": "+95",
        "title": "Truth Be Told",
        "fullTitle": "Truth Be Told (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BOTM2ZTYxZjUtYmY3Yi00NjhhLTgwNWMtYmYyODVkZTU0ZGJhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Octavia Spencer, Mekhi Phifer",
        "imDbRating": "7.1",
        "imDbRatingCount": "14012"
      },
      {
        "id": "tt0118401",
        "rank": "95",
        "rankUpDown": "-11",
        "title": "Midsomer Murders",
        "fullTitle": "Midsomer Murders (1997)",
        "year": "1997",
        "image": "https://m.media-amazon.com/images/M/MV5BMjA5MmM5NjEtYjY2Yy00MzVmLThkMTYtYzcxMGE5MGFjMDQ2XkEyXkFqcGdeQXVyNDQ3NDM5OQ@@._V1_UY176_CR8,0,128,176_AL_.jpg",
        "crew": "John Nettles, Jane Wymark",
        "imDbRating": "7.9",
        "imDbRatingCount": "34599"
      },
      {
        "id": "tt1586680",
        "rank": "96",
        "rankUpDown": "-5",
        "title": "Shameless",
        "fullTitle": "Shameless (2011)",
        "year": "2011",
        "image": "https://m.media-amazon.com/images/M/MV5BZDgxNjQ2MjMtMjk2Yi00M2Q2LWI0ZDktOGM1NWI5YWUzMjk4XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Emmy Rossum, William H. Macy",
        "imDbRating": "8.6",
        "imDbRatingCount": "247138"
      },
      {
        "id": "tt0306414",
        "rank": "97",
        "rankUpDown": "-3",
        "title": "The Wire",
        "fullTitle": "The Wire (2002)",
        "year": "2002",
        "image": "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Dominic West, Lance Reddick",
        "imDbRating": "9.3",
        "imDbRatingCount": "344218"
      },
      {
        "id": "tt0098904",
        "rank": "98",
        "rankUpDown": "0",
        "title": "Seinfeld",
        "fullTitle": "Seinfeld (1989)",
        "year": "1989",
        "image": "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Jerry Seinfeld, Julia Louis-Dreyfus",
        "imDbRating": "8.9",
        "imDbRatingCount": "323968"
      },
      {
        "id": "tt5180504",
        "rank": "99",
        "rankUpDown": "-22",
        "title": "The Witcher",
        "fullTitle": "The Witcher (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Henry Cavill, Freya Allan",
        "imDbRating": "8.1",
        "imDbRatingCount": "505686"
      },
      {
        "id": "tt8291284",
        "rank": "100",
        "rankUpDown": "-29",
        "title": "The Peripheral",
        "fullTitle": "The Peripheral (2022)",
        "year": "2022",
        "image": "https://m.media-amazon.com/images/M/MV5BNTlhMWQyYTAtZjFjMS00M2UzLThiNzMtNTVhN2FkZjAwZWY2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Chloë Grace Moretz, Gary Carr",
        "imDbRating": "7.7",
        "imDbRatingCount": "61370"
      }
    ],
    "errorMessage": ""
  };

  return (
    <section className="w-full bg-transparent py-6 overflow-hidden border-t border-slate-700">
      <div className="flex items-end mx-5 md:mx-16 flex-row text-md my-3 sm:text-2xl font-bold gap-3 hover:text-orange-500 cursor-pointer">
        <h2 className="mr-auto sm:mr-0">Most Popular Movie</h2>
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
            {mostPopularMovies.items.map((item) => (
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
                      <p className="text-xs">{item.year}</p>
                      <span className="text-xs">{item.imDbRating}</span>
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

export default MostPopularMovies;
