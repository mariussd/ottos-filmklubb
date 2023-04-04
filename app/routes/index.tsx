import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { getMovieById } from "~/services/movie.server";
import type { Movie } from "~/types";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request);
  const nextMovie: Movie = await getMovieById("680");

  return json({ user, nextMovie });
};

export default function Index() {
  const { user, nextMovie } = useLoaderData<typeof loader>();

  return (
    <main className="relative flex min-h-screen flex-col items-center pt-12 sm:flex sm:items-center sm:justify-center">
      <h1 className="mb-4 self-center bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
        OTTOS FILMKLUBB
      </h1>
      <div className="flex h-40 w-11/12 overflow-hidden rounded-lg border border-blue-100 shadow-md shadow-blue-100">
        <img src={nextMovie.img} className="h-full" alt="next movie" />
        <div className="px-3 py-4">
          <h2 className="font-semibold tracking-tight text-slate-300">
            UP NEXT
          </h2>
          <h3 className="text-2xl font-bold tracking-tight">
            {nextMovie?.title?.toUpperCase() ?? "Oops!"}
          </h3>
        </div>
      </div>
      <nav className="flex flex-col border p-4">
        <Link className="underline" to={"/vote"}>
          Stem
        </Link>
        <Link className="underline" to={"/search"}>
          Søk
        </Link>
        <Link className="underline" to={"/rate"}>
          Rate
        </Link>
      </nav>
      {user ? (
        <div className="mt-4 flex items-center rounded-lg border border-slate-50 p-4 pr-10 shadow-md">
          <img
            src={user.photo}
            alt="profile"
            className="mr-8 w-20 rounded-full"
          />
          <h3 className="text-xl">{`Hei, ${user.username}`}</h3>
        </div>
      ) : (
        <Form action="/auth/google" method="post">
          <button className="mt-4 rounded-lg bg-blue-600 px-5 py-4 text-white">
            Login with Google
          </button>
        </Form>
      )}
    </main>
  );
}
