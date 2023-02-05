import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const tmdbURL = `https://api.themoviedb.org/3/search/movie?api_key=${
    process.env.TMDB_API_KEY
  }&query=${query ?? ""}&page=1&include_adult=false`;
  console.log(tmdbURL);
  const res = await fetch(tmdbURL, { method: "GET" });

  return json(await res.json());
}

const Search = () => {
  const { results } = useLoaderData<typeof loader>();
  console.log("res", results);
  return (
    <div className="flex w-full flex-col items-center">
      <header className="w-full bg-slate-200 p-2 underline underline-offset-2">
        <Link to="/">← tilbake</Link>
      </header>
      <span className="h-72 w-full bg-slate-200"></span>
      <div className="border-1 -mt-14 flex w-1/2 flex-col rounded-md border border-slate-100 bg-white p-6 shadow-lg">
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
        {results?.map((result) => (
          <p>{result.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Search;
