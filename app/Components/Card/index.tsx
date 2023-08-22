import React /* unused */ from 'react';
import { Link } from '@remix-run/react';
import type { IMovie } from '~/types/IHomeTypes';

interface ICardProps {
   movie: IMovie;
}
const Card = ({ movie }: ICardProps) => {
   return (
      <>
         <div className="flex flex-col overflow-hidden rounded-lg  border bg-white">
            <Link
               prefetch="intent"
               className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
               to={`movie/${movie?.title}`}
            >
               <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt="poster path"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-2ßß group-hover:scale-110"
               />
            </Link>
            <div className="flex flex-1 flex-col p-4 sm:p-6">
               <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <Link
                     to={`movie/${movie?.title}`}
                     prefetch="intent"
                     className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                     {movie?.title}
                  </Link>
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

                     <p className="text-gray-700">
                        {movie?.vote_average}/10 ({movie?.vote_count})
                     </p>
                  </div>
               </h2>
               <p className="text-gray-500 line-clamp-3">{movie?.overview}</p>
            </div>
         </div>
      </>
   );
};

export default Card;
