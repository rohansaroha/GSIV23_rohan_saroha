import { json } from '@remix-run/node';
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import Home from '../containers/Home';
import getUpcomingPopularMovies from '~/services/getUpcomingMovies';
import getMovieList from '~/services/getMovieList';
import { useLoaderData } from '@remix-run/react';
import type { IUpcomingMoviesRes } from '../types/IHomeTypes';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

export const meta: V2_MetaFunction = () => {
   return [{ title: 'Movies' }, { name: 'Hello', content: 'Welcome to IMDB!' }];
};

export async function loader({}: LoaderArgs) {
   const data = await getUpcomingPopularMovies();
   return json(data);
}

export default function Index() {
   const data: IUpcomingMoviesRes = useLoaderData();
   const maxPage: number | null = data?.data?.total_pages;
   const [movieData, setMovieData] = useState(data.data.results);
   const [searchValue, setSearchValue] = useState('');
   const [page, setPage] = useState(1);

   const { isLoading: upcomingLoader, mutate: upcomingMutate } = useMutation({
      mutationFn: () => getUpcomingPopularMovies(page),
      onSuccess: (res) => {
         let rawData;
         if (isEmpty(searchValue)) {
            rawData = res.data.results;
         } else {
            rawData = [...movieData, ...res.data.results];
         }
         setMovieData(rawData);
      }
   });

   const { isLoading: searchLoader, mutate: searchMutate } = useMutation({
      mutationFn: (movieName: string) => getMovieList(movieName),
      onSuccess: (res) => {
         setMovieData(res.data.results);
      }
   });

   useEffect(() => {
      if (page != 1 && isEmpty(searchValue) && maxPage && maxPage > page) {
         upcomingMutate();
      }
   }, [page]);

   const handelInfiniteScroll = async () => {
      try {
         if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
         ) {
            if (maxPage && maxPage > page) {
               setPage((prev) => prev + 1);
            }
         }
      } catch (error) {
         console.log(error);
      }
   };

   const handleOnChange = (movieName: string) => {
      setSearchValue(movieName);
      setPage(1);

      if (!isEmpty(movieName)) {
         searchMutate(movieName);
      } else {
         upcomingMutate();
      }
   };

   const debouncedHandleOnChange = debounce(handleOnChange, 200);

   useEffect(() => {
      window.addEventListener('scroll', handelInfiniteScroll);
      return () => window.removeEventListener('scroll', handelInfiniteScroll);
   }, []);

   return (
      <div className="bg-slate-800 h-auto">
         <Home
            moviesData={movieData}
            searchMutate={debouncedHandleOnChange}
            isLoading={upcomingLoader && searchLoader}
            searchValue={searchValue}
         />
      </div>
   );
}
