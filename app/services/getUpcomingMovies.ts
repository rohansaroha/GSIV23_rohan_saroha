import paths from './paths.json';
import { api } from './apiUtil';

const getUpcomingPopularMovies = (page:number = 1)=>{

   const response = api.get(`${paths.upcomingMovies}${page}`)
      .then((res) => {
         return res;
      })
      .catch((error) => {
         console.error('Error:', error);
      });
   return response;
};

export default getUpcomingPopularMovies;