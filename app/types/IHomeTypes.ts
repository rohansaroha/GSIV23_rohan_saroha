export interface IUpcomingMoviesRes {
    data: IUpcomingMoviesData;
    ok: boolean;
    status: boolean;
 }
export interface IMovie{
    adult: boolean | null,
    backdrop_path: string | null,
    id: number | null,
    original_language: string | null,
    original_title: string | null,
    overview: string | null,
    popularity: number | null,
    poster_path: string | null,
    release_date: string | null,
    title: string | null,
    video: boolean | null,
    vote_count: number | null,
    vote_average:number | null
}
export interface IUpcomingMoviesData{
    page: number | null,
    results: IMovie[],
    totalPages: number | null,
    status: number | null,
    ok:boolean | null
}