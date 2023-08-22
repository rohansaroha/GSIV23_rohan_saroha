## Getting Started

-  Install dependencies using `yarn install`

-  Start the dev server using `yarn dev`

-  Build the deployment server using `yarn build`

-  Go through the other scripts in `package.json`

## Network requests using apisauce

-  API calls using [Api Sauce](https://github.com/infinitered/apisauce/)

   Take a look at the following files

   -  [base util](app/services/apiUtil.ts)
   -  [movielist](app/services/getMovieList.ts)

## state management using tantackquery

-  Benefits of using TanStack Query for data fetching

   -  Automatic caching and cache management. ...
      Background data updates. ...
      Query invalidation and refetching. ...
      Error and loading state handling. ...
      Flexibility and extensibility. ...
      In-memory caching. ...
      Deduplication. ...
      Cache invalidation and garbage collection.

# List elements from the challenge that you think you have done well, and that exemplify your proficiency. Please describe why you chose those elements, and how they demonstrate your proficiency.

-  Added debouncing in search bar
   -  Less CPU Usage
      Reduced Network Traffic
      Improved Performance
-  Added api-sauce for network requests

   -  adds standardized errors and request/response transforms to the API response. It also allows you to add monitors that you can use to record values, measure performance of API calls, perform logging, etc.

-  Added tantack query

# List what you would do to improve your solution if you had 4 more hours available for this task. Describe why you would do those things.

-  Added more tests and Improved tests coverage
-  add pipeline for ci and cd
-  add more eslint rules
