import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white sm:flex sm:items-center sm:justify-center">
      <h1 className="mb-4">Ottos Filmklubb (WIP)</h1>
      <nav className="flex flex-col border p-4">
        <Link className="underline" to={"/vote"}>
          Stem
        </Link>
        <Link className="underline" to={"/search"}>
          Søk
        </Link>
      </nav>
    </main>
  );
}
