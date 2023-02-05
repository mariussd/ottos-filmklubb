import { Link } from "@remix-run/react";

const Vote = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <header className="w-full p-2 underline underline-offset-2">
        <Link to="/">← tilbake</Link>
      </header>
      <div className="border-1 mt-14 w-1/2 rounded-md border border-slate-100 p-6 shadow-lg">
        <form>
          <fieldset>
            <legend className="text-2xl">Hvilken film vil du se?</legend>
            <h2 className="mb-8 text-sm text-slate-400">16. mars</h2>
            <div className="mb-10 flex flex-col">
              <div className="flex flex-row">
                <input
                  type="radio"
                  name="vote"
                  value="Inglorious Basterds"
                  className="mr-3 mb-6 h-6 w-6"
                  required
                />
                <label>Inglorious Basterds</label>
              </div>
              <div className="flex flex-row">
                <input
                  type="radio"
                  name="vote"
                  value="Shrek 2"
                  className="mr-3 mb-6 h-6 w-6"
                  required
                />
                <label>Shrek 2</label>
              </div>
              <div className="flex flex-row">
                <input
                  type="radio"
                  name="vote"
                  value="Chef"
                  className="mr-3 mb-6 h-6 w-6"
                  required
                />
                <label>Chef</label>
              </div>
              <div className="align-center flex flex-row">
                <input
                  type="radio"
                  name="vote"
                  value="Avengers: Infinity War"
                  className="mr-3 h-6 w-6"
                  required
                />
                <label>Avengers: Infinity War</label>
              </div>
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
      </div>
    </div>
  );
};

export default Vote;
