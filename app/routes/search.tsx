import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import type { Movie, TMDBMovie } from "~/types";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const queryString = url.searchParams.get("query");
  const baseURL = `https://api.themoviedb.org/3/`;
  const tmdbURL =
    baseURL +
    `search/movie?api_key=${process.env.TMDB_API_KEY}&query=${
      queryString ?? ""
    }&page=1&include_adult=false`;
  const configFetch = await fetch(
    baseURL + `configuration?api_key=${process.env.TMDB_API_KEY}`,
    { method: "GET" }
  );
  const res = await fetch(tmdbURL, { method: "GET" });

  const data: {
    page: number;
    results: TMDBMovie[];
    total_pages: number;
    total_results: number;
  } = await res.json();

  const config = await configFetch.json();

  const prunedData: Movie[] = data.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      img: movie.poster_path,
      releaseYear: movie.release_date.slice(0, 4),
    };
  });

  return json({
    movies: prunedData,
    imageBaseUrl: config.images.secure_base_url,
    imageSize: config.images.logo_sizes[3],
  });
}

const Search = () => {
  const {
    movies,
    imageBaseUrl,
    imageSize,
  }: { movies: Movie[]; imageBaseUrl?: string; imageSize?: string } =
    useLoaderData<typeof loader>();
  console.log("res", movies);
  console.log("res", imageBaseUrl);
  console.log("res", imageSize);
  return (
    <div className="flex w-full flex-col items-center">
      <header className="w-full bg-slate-200 p-2 underline underline-offset-2">
        <Link to="/">← tilbake</Link>
      </header>
      <span className="h-72 w-full bg-slate-200"></span>
      <div className="border-1 -mt-14 flex w-10/12 flex-col rounded-md border border-slate-100 bg-white p-6 shadow-lg md:w-1/2">
        <Form method="get" action="/search" className="flex flex-col">
          <label className="mb-3 text-lg text-slate-600">
            Hvilken film vil du se?
          </label>
          <input
            type="search"
            name="query"
            className="h-12 rounded-lg border border-slate-200 px-4"
          />
          <button
            type="submit"
            className="my-4 h-10 w-20 rounded-md border border-gray-300 bg-slate-400 text-white shadow-sm"
          >
            Søk
          </button>
        </Form>
      </div>
      <div className="mt-8 flex w-full flex-row flex-wrap">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className="flex basis-1/2 justify-center sm:basis-1/3 lg:basis-1/4 xl:basis-1/6 2xl:basis-52"
          >
            <div className="mb-10 flex flex-col overflow-hidden rounded-md border border-slate-100 shadow-md">
              <img
                src={`${imageBaseUrl}${imageSize}/${movie.img}`}
                alt={movie.title}
                width={imageSize?.replace("w", "")}
                className="aspect-[2/3]"
              />
              <div className="flex grow flex-col justify-between">
                <h3 key={movie.id} className="mx-3 mt-5 mb-2">
                  {movie.title}
                </h3>
                <h4 className="mx-3 mb-4 text-sm font-semibold text-slate-400">
                  {movie.releaseYear}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
