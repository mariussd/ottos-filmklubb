import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import type { LoaderArgs } from "@remix-run/server-runtime";

export const loader = async ({ params }: LoaderArgs) => {
  const baseURL = `https://api.themoviedb.org/3/`;
  const tmdbURL =
    baseURL + `movie/${params.movieId}?api_key=${process.env.TMDB_API_KEY}`;

  const res = await fetch(tmdbURL, { method: "GET" }).then((res) => res.json());
  console.log(res);
  return json(res);
};

const Rate = () => {
  const movie = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col items-center">
      <header className="w-full p-2 underline underline-offset-2">
        <Link to="/">← tilbake</Link>
      </header>
      <div className="border-1 mt-14 w-1/2 rounded-md border border-slate-100 p-6 shadow-lg">
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
};

export default Rate;
