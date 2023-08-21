import MockAdapter from 'axios-mock-adapter';
import getUpcomingPopularMovies from '../getUpcomingMovies';
import { api } from '../apiUtil';
import paths from '../paths.json';

describe('getUpcomingMovies tests', () => {
   it('should make the api call to upcomingMovies', async () => {
      const mock = new MockAdapter(api.axiosInstance);
      const data = [
         {
            totalCount: 1,
            items: [{ song:'sample' }]
         }
      ];
      mock.onGet(paths.upcomingMovies).reply(200, data);
      const res = await getUpcomingPopularMovies();
      expect(res.data).toEqual(data);
   });
});
