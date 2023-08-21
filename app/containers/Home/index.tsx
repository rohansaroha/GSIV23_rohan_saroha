import React /* unused */ from 'react';
import Search from '../../Components/Search';
import Card from '../../Components/Card';
import type { IUpcomingMoviesData, IMovie } from '../../types/IHomeTypes';

interface IHome {
   moviesData: IUpcomingMoviesData;
}
const Home = ({ moviesData }: IHome) => {
   console.log('Home Res', moviesData);
   return (
      <div>
         <Search />
         <div className="py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
               <div className="mb-10 md:mb-16">
                  <h2 className="mb-4 text-center text-2xl fotn-bold text-gray-50 md:mb-6 lg:text-3xl">
                     Top Upcoming Movies
                  </h2>
               </div>

               <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                  {moviesData.results.map((movie: IMovie) => (
                     <Card movie={movie} key={movie.id} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
