import paths from './paths.json';
import { api } from './apiUtil';

const getMovieList = (movieName:string )=>{

   const response = api.get(`${paths.searchMovie}${movieName}`)
      .then((res) => {
         return res;
      })
      .catch((error) => {
         console.error('Error:', error);
      });
   return response;
};

export default getMovieList;