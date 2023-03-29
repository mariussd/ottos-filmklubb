import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request);

  return json({ user });
};

export default function Index() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <main className="relative flex min-h-screen flex-col bg-white sm:flex sm:items-center sm:justify-center">
      <h1 className="mb-4">Ottos Filmklubb! (WIP)</h1>
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
