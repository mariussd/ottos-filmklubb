import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { getMovieById } from "~/services/movie.server";

export const loader = async ({ params }: LoaderArgs) => {
  const movie = await getMovieById(params.movieId ?? "");

  return json(movie);
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
