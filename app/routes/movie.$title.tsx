import { json } from '@remix-run/node';
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { IUpcomingMoviesRes } from '../types/IHomeTypes';
import getMovieList from '~/services/getMovieList';
import DetailsCard from '../Components/DetailsCard';
import BackNavigation from '~/Components/BackNavigation/BackNavigation';

export const meta: V2_MetaFunction = () => {
   return [{ title: 'Movies' }, { name: 'Hello', content: 'Welcome to IMDB!' }];
};

export async function loader({ params }: LoaderArgs) {
   const { title } = params;
   const data = await getMovieList(title ?? '');
   return json(data);
}

export default function Index() {
   const data: IUpcomingMoviesRes = useLoaderData();
   return (
      <>
         <BackNavigation title={data.data.results[0].title || ''} />
         <div className="bg-slate-800 min-h-screen h-full justify-center flex">
            <DetailsCard movie={data.data.results[0]} />
         </div>
      </>
   );
}
