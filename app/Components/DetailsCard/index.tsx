import type { IMovie } from '~/types/IHomeTypes';

interface IDetailsCard {
   movie: IMovie;
}
const DetailsCard = ({ movie }: IDetailsCard) => {
   console.log('aa', movie);
   return (
      <div className="bg-white rounded-lg shadow-md p-4 w-96 ">
         <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt="Movie Poster"
            className="w-auto h-auto rounded-md"
         />
         <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
         <div className="flex items-center space-x-1">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-yellow-500"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path
                  fillRule="evenodd"
                  d="M9.595 2.945a1 1 0 011.809 0l1.774 3.585 3.972.576a1 1 0 01.556 1.705l-2.87 2.806.678 3.963a1 1 0 01-1.45 1.055L10 14.59l-3.55 1.874a1 1 0 01-1.45-1.055l.678-3.963-2.87-2.806a1 1 0 01.556-1.705l3.972-.576 1.773-3.586z"
                  clipRule="evenodd"
               />
            </svg>

            <p className="text-gray-700">{movie?.vote_average}/10</p>
         </div>
         <p className="text-gray-600 text-sm">
            Release Date: {movie.release_date}
         </p>
         <p className="text-gray-600 text-sm mt-2">{movie.overview}</p>
      </div>
   );
};
export default DetailsCard;
