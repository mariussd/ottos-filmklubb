import type { Movie } from "~/types";
import { baseURL } from "~/utils";
import { getConfig } from "./tmdb.server";

export const getMovieURL = (movieId: string) =>
  baseURL + `movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`;

export const getMovieById = async (movieId: string): Promise<Movie> => {
  const tmdbMovie = await fetch(getMovieURL(movieId), { method: "GET" }).then(
    (res) => res.json()
  );

  const config = await getConfig();

  return {
    id: tmdbMovie.id,
    title: tmdbMovie.title,
    img:
      (config?.images?.secure_base_url ?? "") +
      config?.images?.logo_sizes[3] +
      tmdbMovie.poster_path,
    imgSize: config?.images?.logo_sizes[3]?.replace("w", "") ?? "",
    releaseYear: tmdbMovie.release_date?.slice(0, 4),
  };
};
