import { json } from '@remix-run/node';
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import Home from '../Containers/Home/index';
import getUpcomingPopularMovies from '~/services/getUpcomingMovies';
import { useLoaderData } from '@remix-run/react';
import type { IUpcomingMoviesRes } from '../types/IHomeTypes';

export const meta: V2_MetaFunction = () => {
   return [{ title: 'Movies' }, { name: 'Hello', content: 'Welcome to IMDB!' }];
};

export async function loader({}: LoaderArgs) {
   const data = await getUpcomingPopularMovies();
   return json(data);
}

export default function Index() {
   const data: IUpcomingMoviesRes = useLoaderData();
   console.log(data);
   return (
      <>
         <Home moviesData={data?.data} />
      </>
   );
}
