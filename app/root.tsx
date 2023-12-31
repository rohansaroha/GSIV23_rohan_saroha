import type { LinksFunction } from '@remix-run/node';
import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration
} from '@remix-run/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import stylesheet from '~/tailwind.css';

const queryClient = new QueryClient();

export const links: LinksFunction = () => [
   { rel: 'stylesheet', href: stylesheet }
];

export default function App() {
   return (
      <html lang="en" className="dark">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width,initial-scale=1"
            />
            <Meta />
            <Links />
         </head>
         <body suppressHydrationWarning={true}>
            <QueryClientProvider client={queryClient}>
               <ReactQueryDevtools initialIsOpen={false} />
               <Outlet />
               <ScrollRestoration />
               <Scripts />
               <LiveReload />
            </QueryClientProvider>
         </body>
      </html>
   );
}
