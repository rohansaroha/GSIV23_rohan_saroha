import { create } from 'apisauce';
import paths from './paths.json';

export const api = create({
   baseURL: paths.baseUrl,
   headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmY5Yjc3ZjMyNmU1OTMwYjA0NTBmMmZhZmEyODBmOSIsInN1YiI6IjY0ZGYxMDA2MzcxMDk3MDBmZmI5ODc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lp830pv2ezCjFLytn3RB4RYoNKc0VmBxWLBHQkLqvWw'
   },
});