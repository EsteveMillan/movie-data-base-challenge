import axios from 'axios';

const apiKey = '4aabd1304d25378174212f4a5bcd88e1';

const API_CALLS = {
  nowPlaying: `https:api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  getPopular: `https:api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  getRated: `https:api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  getUpcome: `https:api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  //getOneMovie: `https:api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=' + filmName`,
};

export default class ApiCall {
    static nowPlaying = ()=> ApiCall.getMovies(API_CALLS.nowPlaying)
    static getPopular = ()=> ApiCall.getMovies(API_CALLS.getPopular)
    static getRated = ()=> ApiCall.getMovies(API_CALLS.getRated)
    static getUpcome = ()=> ApiCall.getMovies(API_CALLS.getUpcome)
    static getOneMovie = ()=> ApiCall.getMovies(API_CALLS.getOneMovie)

    static getMovies = async (url) =>{
      try{
        let response = await axios.get(url);
      
        if(response.status === 200) {
          console.log(response.status);
        }}
      catch(error){ console.log(error);}
    };

}



