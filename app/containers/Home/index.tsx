import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
  
export const Home = ()=>{
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then(
        (res) => res.json(),
      ),
  });
      
  if (isLoading) return 'Loading...';
      
  if (error) return 'An error has occurred: ' + error.message;
  return(
    <>
      <div>HOME</div>
    </>
  );
};