import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from '@remix-run/react';
import {
   QueryClient,
   QueryClientProvider,
   Hydrate
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useDehydratedState } from 'use-dehydrated-state';

const queryClient = new QueryClient();

export const links: LinksFunction = () => [
   ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App () {
   const dehydratedState = useDehydratedState();

   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <Links />
         </head>
         <body>
            <QueryClientProvider client={queryClient}>
               <ReactQueryDevtools initialIsOpen={false} />
               <Hydrate state={dehydratedState}>
                  <Outlet />
               </Hydrate>
               <ScrollRestoration />
               <Scripts />
               <LiveReload />
            </QueryClientProvider>
         </body>
      </html>
   );
}
