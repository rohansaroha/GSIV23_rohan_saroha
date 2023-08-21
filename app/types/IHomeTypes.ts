export interface IUpcomingMoviesRes {
    data: IUpcomingMoviesData;
    ok: boolean;
    status: boolean;
 }
export interface IUpcomingMoviesData{
    page: number,
    results: IMovie[],
    totalPages: number,
    status: number,
    ok:boolean
}

export interface IMovie{
    adult: boolean,
    backdrop_path: string,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_count: number,
    vote_average:number
}