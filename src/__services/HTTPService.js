import axios from "axios";

class HTTPService{
    constructor(){}
    GetTopMostPopularMovies=()=>new Promise((resolve,reject)=>{
        axios.get(`${process.env.REACT_APP_URL}/API/MostPopularMovies/${process.env.REACT_APP_KEY}`)
            .then(response=>resolve(response.data))
            .catch(error=>reject(error));
    });
}

export default HTTPService;