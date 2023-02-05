import { Link } from "@remix-run/react";

const Search = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <header className="w-full bg-slate-200 p-2 underline underline-offset-2">
        <Link to="/">← tilbake</Link>
      </header>
      <span className="h-72 w-full bg-slate-200"></span>
      <div className="border-1 -mt-14 flex w-1/2 flex-col rounded-md border border-slate-100 bg-white p-6 shadow-lg">
        <label className="mb-3 text-lg text-slate-600">
          Hvilken film vil du se?
        </label>
        <input
          type="search"
          className="h-12 rounded-lg border border-slate-200 px-4"
          placeholder="Søk"
        />
      </div>
    </div>
  );
};

export default Search;
