import { create } from 'apisauce';
import paths from './paths.json';

const getUpcomingPopularMovies = ()=>{
   const api = create({
      baseURL: paths.baseUrl,
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmY5Yjc3ZjMyNmU1OTMwYjA0NTBmMmZhZmEyODBmOSIsInN1YiI6IjY0ZGYxMDA2MzcxMDk3MDBmZmI5ODc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lp830pv2ezCjFLytn3RB4RYoNKc0VmBxWLBHQkLqvWw'
      },
   });
     
   const response = api.get(paths.upcomingMovies)
      .then((res) => {
         return res;
      })
      .catch((error) => {
         console.error('Error:', error);
      });
   return response;
};

export default getUpcomingPopularMovies;