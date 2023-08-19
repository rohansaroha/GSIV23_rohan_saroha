import type { V2_MetaFunction } from '@remix-run/node';
import { Home } from '~/Containers/Home';
import { useQuery } from '@tanstack/react-query';

export const meta: V2_MetaFunction = () => {
   return [{ title: 'Movies' }, { name: 'Hello', content: 'Welcome to IMDB!' }];
};

export default function Index() {
   const { isLoading, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
         fetch('https://api.github.com/repos/TanStack/query').then((res) =>
            res.json()
         )
   });
   console.log('data', data);

   if (isLoading) return 'Loading...';

   if (error) return 'An error has occurred: ' + error.message;
   return <Home />;
}
