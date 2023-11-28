/**
 * @fileoverview TMDB types
 * types returned from TMDB api
 */

/*
{
  adult: false,
  backdrop_path: "/hC9QftCUwQxgOoYrO6TwQ3Qr3HH.jpg",
  genre_ids: [
    35,
    10749,
  ],
  id: 10591,
  original_language: "en",
  original_title: "The Girl Next Door",
  overview: "Exceptionally ambitious high schooler Matthew has aspirations for a career in politics when he falls in love with his gorgeous 19-year-old neighbor, Danielle. But Matthew's bright future is jeopardized when he finds Danielle was once a porn star. As Danielle's past catches up with her, Matthew's love for her forces him to re-evaluate his goals.",
  popularity: 56.873,
  poster_path: "/el8RGlODqenqIs6Mcbyaog6DnXe.jpg",
  release_date: "2004-04-09",
  title: "The Girl Next Door",
  video: false,
  vote_average: 6.713,
  vote_count: 3227,
  character: "Matthew Kidman",
  credit_id: "52fe438e9251416c750150b7",
  order: 0,
}
*/

/**
 * @type MovieTMDB
 * TMDB movie type response from api when searching by movie title query
 */
export type MovieTMDB = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};


/**
 * @type MovieActorTMDB
 * TMDB movie type response from api when searching by person id, ?movie_credits
 */
export type MovieActorTMDB = MovieTMDB & {
    character: string;
    credit_id: string;
    order: number;
};

/**
 * @type ActorTMDB
 * TMDB actor type response from api when searching by movie id, ?credits
 */
export type ActorTMDB = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    cast_id: number;
    character?: string;
    credit_id: string;
    order: number;
};
