import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { getPolls } from "~/models/vote.server";

export const loader = async () => {
  return json({ polls: await getPolls() });
};

const Vote = () => {
  const { polls } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col items-center">
      <header className="w-full p-2 underline underline-offset-2">
        <Link to="/">← tilbake</Link>
      </header>
      <div className="border-1 mt-14 w-1/2 rounded-md border border-slate-100 p-6 shadow-lg">
        {polls.map((poll) => (
          <form key={poll.id}>
            <fieldset>
              <legend className="text-2xl">Hvilken film vil du se?</legend>
              <h2 className="mb-8 text-sm text-slate-400">16. mars</h2>
              <div className="mb-5 flex flex-col">
                {poll.movies.map((movie) => (
                  <label
                    key={`${poll.id}-${movie.id}`}
                    className="mb-6 flex cursor-pointer flex-row"
                  >
                    <input
                      type="radio"
                      name="vote"
                      value={movie.title}
                      className="mr-3 h-6 w-6 cursor-pointer"
                      required
                    />
                    {movie.title}
                  </label>
                ))}
              </div>
              <div className="flex w-full flex-col items-center">
                <h1 className="mb-8 text-lg text-blue-400">Big heading!</h1>
                <p className="text-sm font-thin text-blue-800">Some nice text 🚀</p>
              </div>
              <button
                type="submit"
                name="vote"
                className="h-10 w-20 rounded-md border border-gray-300 bg-slate-400 text-white shadow-sm"
              >
                Stem
              </button>
            </fieldset>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Vote;
