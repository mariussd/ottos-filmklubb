export type TMDBMovie = {
  adult: boolean;
  backdrop_path: string;
  genreIds: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Movie = {
  id: number;
  title: string;
  img: string;
  imgSize: string;
  releaseYear: string;
};
